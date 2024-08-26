import React from 'react';
import { workExperience, projects} from './Experiences';
import { Scene } from 'react-scrollmagic';

import './Experience.css';


function generateExperiences(experienceType = "workExperience") {
    const experienceList = experienceType === "workExperience" ? workExperience : projects;

    return experienceList.map((experience, index) => {
        const experienceID = experienceType + (index + 1);
        const experienceIDSelector = "#" + experienceID;
        const interpunct = new DOMParser().parseFromString(`&#183;`, 'text/html').body.textContent

        return (
            <li key={ experienceID }>
                <Scene classToggle={ [experienceIDSelector, "visible"] } triggerElement={ experienceIDSelector } triggerHook="onEnter">
                    <Scene classToggle={ [experienceIDSelector, "fadeOutLeft"] } triggerElement={ experienceIDSelector } triggerHook="onLeave" offset={-30}>

                        <a id={ experienceID } className="experience" href={ experience.href } target="_blank" rel="noopener noreferrer">
                            <img src={ experience.src } alt={ experience.alt } className={ "experience-image" + (experience.imageContain ? " image-contain" : "") } />
                            <div className="experience-text">
                                <div className="experience-heading">
                                    <h3 className="experience-name">{ experience.name }</h3>
                                    { experienceType === "workExperience" && 
                                        <p className="experience-date">{experience.startDate} - {experience.endDate}</p>
                                    }
                                </div>
                                <p className="experience-description">{ experience.description }</p>
                                <p className="experience-skills">{ experience.skills.join(" " + interpunct + " ") }</p>
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
        <section id="experiences" className="main-section" ref={ref}>
            <div className="section-container experiences-container">

                <div className="experiences-inner work-experience">
                    <Scene classToggle="visible" triggerHook="onEnter">
                        <div className="experiences-header">
                            <h1 className="section-title">Work Experience</h1>
                            <div className="section-border"></div>
                            <p className="lead">Check out some of my work...</p>
                        </div>
                    </Scene>

                    <ul className="experiences">
                        { generateExperiences("workExperience") }
                    </ul>
                </div>

                <div className="experiences-inner">
                    <Scene classToggle="visible" triggerHook="onEnter">
                        <div className="experiences-header">
                            <h1 className="section-title">Projects</h1>
                            <div className="section-border"></div>
                            <p className="lead">...and some of my projects!</p>
                        </div>
                    </Scene>
                    
                    <ul className="experiences">
                        { generateExperiences("project") }
                    </ul>
                </div>

            </div>
        </section>
    );
})

export default Projects;