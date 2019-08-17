import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import CREATEBOOK from '../../apollo/mutation/createBook';

import axios from 'axios';

import { useInput } from '../../hooks/useInput';

export default function UploadForm(props) {
    const email = useInput();
    const password = useInput();
    const title = useInput();
    const description = useInput();
    const artwork = useInput();
    const [formValues, setFormValues] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)

    const [createBook, { data, loading, error }] = useMutation(CREATEBOOK);

    const onSubmit = async (e) => {

        const formData = new FormData()
        formData.append('file', selectedFile);
        formData.append('upload_preset', 'vybxxhez')
        let res
        try {
            res = await axios.post('https://api.cloudinary.com/v1_1/ls8e0q6mx/image/upload', formData)
            console.log('res: ', res);
        } catch (error) {
            console.log('error uploading: ', error);
        }
        if (res.data.public_id) {
            console.log('res.formData.public_id: ', res.data.public_id);

            let formValues = {
                title: title.value, description: description.value,
                artwork: res.data.secure_url,
            }
            console.log('all: ', formValues)

            setFormValues(formValues)

            createBook({ variables: formValues });
        }
        else {
            console.log('no res.data.public_id ... image not uploaded ')
        }
    }

    const onFileChange = (e) => {
        console.log('e.target.files[0]: ', e.target.files[0]);
        setSelectedFile(e.target.files[0]);

    }

    if (data) {
        console.log('success: ', data);
    }
    if (error) {
        console.log('error: ', error);
    }

    return (
        <div className="container py-5 y-signupform">
            <form>
                <fieldset>
                    <legend>
                        Upload your book, readers are waiting
                    </legend>

                    <div className="form-group">
                        <label htmlFor="title">Book Title</label>
                        <input type="text" className="form-control" id="title"
                            {...title}
                            placeholder="The book title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description"
                            {...description}
                            placeholder="Description" />
                    </div>

                    <div className="form-group files">
                        <label>Upload Book image </label>
                        <input type="file" name="file"
                            onChange={onFileChange}
                            className="form-control" multiple="" />
                    </div>
                    {loading ? (<p>... uploading book ...</p>) : (error ? error.message : '')}

                    <button type="button"
                        onClick={onSubmit}
                        className="btn btn-primary">Submit
                    </button>

                </fieldset>
            </form>
        </div>
    )
}