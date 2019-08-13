import React from 'react';
import { Link } from 'react-router-dom'
import { SIGN_UP } from '../../constants/routes'

export default function About() {
    return (
        <section className="container-fluid y-about px-3 px-md-5 py-5">
            <h1 className="y-section-heading"> HQWords  </h1>
            <p className="y-subheading">( Power of Expression & Creativity )</p>
            <div className="row ">
                <div className="col-sm y-about-summary">
                    <h5>Read</h5>
                    <p> We bring you beautiful words from amazing authors. </p>
                    <p>Every author is vetted. And we only accept their best works</p>
                    <p><button className="btn btn-primary" >View Books</button></p>
                </div>
                <div className="col-sm y-about-summary">
                    <h5>Write</h5>
                    <p> Join our amazing authors now and get more publicity for you creativity.</p>
                    <p> Our readers can't wait read your masterpiece. Don't keep them waiting</p>
                    <p>
                        <Link to={SIGN_UP}>
                            <button className="btn btn-primary" >Sign up Now</button>
                        </Link>
                    </p>
                </div>

                {/* <div className="col-sm y-about-image">
                </div> */}
            </div>
        </section>
    )
}
