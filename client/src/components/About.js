import React from 'react';

function About(){
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-12 p-4">
                <h3><strong>About Me</strong></h3>
                <hr />

                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <img className="img-thumbnail" width="200" height="200" id="profilePic" src="public\assets\images\profile picture.jpg" alt="Profile" />
                    </div>
                    <div className="col-sm-12 col-md-8 p-0 m-0 content">
                        <p>I graduated from the University of Central Florida in 2016 with a Bachelors in Digital Media Game Design. I'm currently a student at TES Coding Bootcamp for Web Design. I want to show you what I can do! Check out my portfolio while you're here. 
                        </p>
                        <p>I'm interested in all aspects of web design and I plan to become a full stack developer so I can help my clients achieve their dream website. A website is a window to the soul. Or almost as much anyway. I can work in groups or solo, and I love the collaborative process. I'm currently working with a team on designing a board game.
                        </p>
                        <p>I love travel, the coolest place I've been to is Japan. In my spare time I play video games, I make art, and I like exploring the nooks and crannies of Orlando!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;