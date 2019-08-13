import React from 'react'

export default function Footer() {
    return (
        <footer className="container-fluid y-footer  p-3 p-md-5">
            <div className="row ">
                <div className="col-sm y-vision">
                    <h3> Vision</h3>
                    <p>
                        The vision of HQwords is to inspire healthy living through
                        creativity and entertainment.
                    </p>
                </div>
                <div className="col-sm y-vision">
                    <h3> Mission</h3>
                    <p>
                        Our mission is to promote positive expressions through creativity and
                        entertainment, encouraging open-mindedness and inquiry in areas of
                        life and human relations, and respect for individual beliefs.
                    </p>
                </div>
            </div>
            <div className="y-copyright">
                <p>&copy; 2019 HQ Words</p>
            </div>
        </footer>
    )
}
