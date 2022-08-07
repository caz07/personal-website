import React from 'react';
import interactTutors from '../../assets/interact_tutors.png';
import logo from '../../assets/logo-bg.png';
import chess from '../../assets/chess.jpg'
import stocks from '../../assets/stocks.jpg';
import terrain from '../../assets/terrain.jpg'
import { Scene } from 'react-scrollmagic';

import './Projects.css';

const projects = [
    {
        "href": "https://interacttutors.com",
        "src": interactTutors,
        "alt": "Interact Tutors",
        "imageContain": true,
        "name": "Interact Tutors",
        "description": "A website to connect local high school tutors with elementary and middle-school students.",
        "skills": ["HTML/CSS", "JavaScript", "Bootstrap", "Python", "Flask", "SQL"]
    },
    {
        "href": "#",
        "src": logo,
        "alt": "Logo",
        "imageContain": false,
        "name": "Personal Site",
        "description": "This website! Created to share my background as well as showcase my projects and skills.",
        "skills": ["HTML/CSS", "React.js"]
    },
    {
        "href": "https://github.com/caz07/chess-opening-analysis",
        "src": chess,
        "alt": "Chess",
        "imageContain": false,
        "name": "Chess Opening Analysis",
        "description": "An algorithm to find the most successful chess openings for different ratings using Stockfish and the Lichess database.",
        "skills": ["Python", "Machine Learning"]
    },
    {
        "href": "https://github.com/caz07/asdrp-sentiment-analysis",
        "src": stocks,
        "alt": "Stocks",
        "imageContain": false,
        "name": "Sentiment Analysis for Stock Price Prediction",
        "description": "A time series analysis to evaluate the effectiveness of Twitter sentiment analysis on predicting stock prices.",
        "skills": ["Python", "Machine Learning"]
    },
    {
        "href": "https://github.com/caz07/terrain-classification",
        "src": terrain,
        "alt": "Terrain",
        "imageContain": false,
        "name": "Terrain ML Classification Model",
        "description": "A neural network capable of classifying images by their terrain and suitability for driving, compared against popular pretrained models.",
        "skills": ["Python", "Machine Learning", "PyTorch"]
    }
]

function generateProjects() {
    return projects.map((project, index) => {
        const projectID = "project" + (index + 1);
        const projectIDSelector = "#" + projectID;
        const interpunct = new DOMParser().parseFromString(`&#183;`, 'text/html').body.textContent

        return (
            <li key={ projectID }>
                <Scene classToggle={ [projectIDSelector, "visible"] } triggerElement={ projectIDSelector } triggerHook="onEnter">
                    <Scene classToggle={ [projectIDSelector, "fadeOutLeft"] } triggerElement={ projectIDSelector } triggerHook="onLeave" offset={-30}>

                        <a id={ projectID } className="project" href={ project.href } target="_blank" rel="noopener noreferrer">
                            <img src={ project.src } alt={ project.alt } className={ "project-image" + (project.imageContain ? " image-contain" : "") } />
                            <div className="project-text">
                                <h3 className="project-name">{ project.name }</h3>
                                <p className="project-description">{ project.description }</p>
                                <p className="project-skills">{ project.skills.join(" " + interpunct + " ") }</p>
                            </div>
                        </a>
                        
                    </Scene>
                </Scene>
            </li>
        );
    })
}

const Projects = React.forwardRef((props, ref) => {
    return (
        <section id="projects" className="main-section" ref={ref}>
            <div className="section-container projects-container">

                <Scene classToggle="visible" triggerHook="onEnter">
                    <div className="projects-header">
                        <h1 className="section-title">Projects</h1>
                        <div className="section-border"></div>
                        <p className="lead">Check out some of my work!</p>
                    </div>
                </Scene>

                <ul className="projects">
                    { generateProjects() }
                </ul>
                
            </div>
        </section>
    );
})

export default Projects;