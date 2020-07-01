import projectData from "../projectData.json";
import React from 'react';
import { Link } from "react-router-dom";

function Project(){
    return (
        <div>
            {projectData.projects.map(project => {
                return (
                    <div className="img-thumbnail img220px">
                        <Link to={ project.githubUrl } target="_blank">
                        <img className="img200px" src={ project.imgSrc } alt="portfolio-thumbnail"/>
                <span className="d-block p-1 m-2 ">{ project.title }</span>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Project;