import React from 'react';
import Project from "./Project";

function Portfolio() {
    return (
        <main className="container">
            <div className="row p-4">
                <div className="col-sm-12 col-md-4">
                    <h3 className="pagetitle"><strong>Portfolio</strong></h3>
                </div>
                <div className="col-sm-12 col-md-4"></div>
                <div className="col-sm-12 col-md-4">
                </div>
                <hr />
            </div>

            <Project />

        </main>
    )
}

export default Portfolio;