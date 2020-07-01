import projectData from "../projectData.json";
import React from 'react';
import { Link } from "react-router-dom";
{/* <div className="row">
                <div className="col-sm-12 col-md-4 justify-content-center">
                    <div className="img-thumbnail img220px">
                        <Link href="https://github.com/EDowning2000/TravelBuddy" target="_blank">
                        <img className="img200px" src="assets/images/FunFinder.PNG" alt="portfolio-thumbnail"/>
                        <span className="d-block p-1 m-2 text-white">Fun Finder</span>
                        </Link>
                    </div>
                </div>
                
                <div className="col-sm-12 col-md-4 justify-content-center">
                    <div className="img-thumbnail img220px">
                        <Link href="https://github.com/ArleneSanchez004/password-generator" target="_blank">
                        <img className="img200px" src="assets/images/PasswordGenerator.PNG" alt="portfolio-thumbnail"/>
                        <span className="d-block p-1 m-2 text-white">Password Generator</span>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 justify-content-center">
                    <div className="img-thumbnail img220px">
                        <Link href="https://github.com/ArleneSanchez004/daily-task-organizer" target="_blank">
                        <img className="img200px" src="assets/images/WorkDayScheduler.PNG" alt="portfolio-thumbnail"/>
                        <span className="d-block p-1 m-2 text-white">Work Day Scheduler</span>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 justify-content-center">
                    <div className="img-thumbnail img220px">
                        <Link href="https://github.com/JesikaRenea/Project2_Group1" target="_blank">
                        <img className="img200px" src="assets/images/MovieALister.PNG" alt="portfolio-thumbnail"/>
                        <span className="d-block p-1 m-2 text-white">Movie-A-Lister</span>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 justify-content-center">
                    <div className="img-thumbnail img220px">
                        <Link href="https://github.com/ArleneSanchez004/employee-management-system" target="_blank">
                        <img className="img200px" src="assets/images/EmployeeManagementSystem.PNG" alt="portfolio-thumbnail"/>
                        <span className="d-block p-1 m-2 text-white">Employee Management</span>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 justify-content-center">
                    <div className="img-thumbnail img220px">
                        <Link href="https://github.com/ArleneSanchez004/team-template" target="_blank">
                        <img className="img200px" src="assets/images/TeamTemplate.PNG" alt="portfolio-thumbnail"/>
                        <span className="d-block p-1 m-2 text-white">Team Template</span>
                        </Link>
                    </div>
                </div>
            </div> */}
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