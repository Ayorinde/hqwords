import React from 'react'

export default function Offerings() {
    return (
        <section className="container y-offerings p-3 p-md-5">
            <h1 className="text-center"> What We Are Offering </h1>
            <div className="row ">
                <div className="col-sm y-offering-item">
                    <p><i className="yfont icofont-learn"></i></p>
                    <div className="y-offering-item-content">
                        <h2> Inspiring Poems</h2>
                        <p>A collection of poems about life, love and God</p>
                    </div>
                </div>
                <div className="col-sm y-offering-item">
                    <p><i class="yfont icofont-fountain-pen"></i></p>
                    <div className="y-offering-item-content">
                        <h2> Creative Writing</h2>
                        <p>Thought provoking articles. And training in creative writing</p>
                    </div>
                </div>
                <div className="col-sm y-offering-item">
                    <p><i className="yfont icofont-read-book"></i></p>
                    <div className="y-offering-item-content">
                        <h2> Book Art and Posters</h2>
                        <p>Let's create cool book arts and posters for your books and creative writings</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
