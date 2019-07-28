import React from 'react'

export default function Offerings() {
    return (
        <section className="y-offerings">
            <h1 className="text-center"> What We Are Offering </h1>
            <div className="row ">
                <div className="col-sm y-offering-item">   
                    <p><i className="yfont icofont-learn"></i></p>
                    <div className="y-offering-item-content">
                        <h3> Inspiring Poems</h3>
                        <p>A collection of poems about life, love and God</p>
                    </div>            
                </div>
                <div className="col-sm y-offering-item">   
                    <p><i class="yfont icofont-fountain-pen"></i></p>
                    <div className="y-offering-item-content">
                        <h3> Creative Writing</h3>
                        <p>Thought provoking articles. We also offer trainings in creative writing</p>
                    </div>            
                </div>
                <div className="col-sm y-offering-item">   
                    <p><i className="yfont icofont-read-book"></i></p>
                    <div className="y-offering-item-content">
                        <h3> Book Art and Posters</h3>
                        <p>Let's create cool book arts and posters for your books and creative writings</p>
                    </div>            
                </div>
            </div>
        </section>
    )
}
