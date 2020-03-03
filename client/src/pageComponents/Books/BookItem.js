import React from 'react';

export default function BookItem({ book }) {
    let { _id, title, description, artwork, authorName, price } = book;

    return (
        <div className="card mb-3" style={{ "maxWidth": "540px", "minWidth":"350px" }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={artwork} className="card-img" alt={title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body y-cardbody">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{authorName}</p>
                        <p className="card-text"><small className="text-muted">&#8358;{price}</small></p>

                        <button className="btn btn-primary" > Buy Now </button>

                    </div>
                </div>
            </div>
        </div>
    )

}
