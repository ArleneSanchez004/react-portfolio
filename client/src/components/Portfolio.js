import React from 'react';
import { Link } from "react-router-dom";
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
                    <div className="row justify-content-right"><Link href="https://arlenesanchez004.github.io/" target="_blank">arlenesanchez004.github.io</Link></div>
                    <div className="row justify-content-right"><Link href="https://www.linkedin.com/in/arlenesanchez004/" target="_blank">www.linkedin.com/in/arlenesanchez004</Link></div>
                </div>
                <hr />
            </div>

            <Project />

        </main>
    )
}

export default Portfolio;