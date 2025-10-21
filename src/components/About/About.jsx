import React from 'react';
import portrait from '../../assets/portrait.jpg';
import resume from '../../assets/charles-zhu-resume.pdf';
import { Scene } from 'react-scrollmagic';

import './About.css';

const About = React.forwardRef((props, ref) => {
    return (
        <section id="about" ref={ref}>
            <Scene pin triggerElement="#about" triggerHook="onLeave">
                <div className="about-pin-container main-section">
                    <div className="section-container about-container">
                        <div className="about-content">
                                <Scene classToggle="visible" triggerHook="onEnter" offset={150}>
                                    <div className="about-text">
                                            <div className="about-header">
                                                <h1 className="section-title">About</h1>
                                                <div className="section-border"></div>
                                                <p className="lead">A bit of my background, hobbies, and interests!</p>
                                            </div>
                                            <p className="about-description">I'm a senior at UCLA studying computer science with experience primarily in full-stack web development, bioinformatics
                                                research, and data science. I love exploring new challenges and am excited to contribute to any ambitious and impactful projects. 
                                                <br /><br />
                                                Outside of work, I enjoy dancing (street dance), gymnastics, piano, art, hiking, travel, and puzzle/strategy games.
                                                I'm currently looking for new grad or startup opportunities. If you'd like to contact me, 
                                                please reach out to <a className="about-link" href="mailto:charles.zhu04@gmail.com">charles.zhu04@gmail.com</a> to connect!
                                            </p>
                                        
                                    </div>
                                </Scene>
                                <Scene classToggle="visible" triggerHook="onEnter" offset={150}>
                                    <div className="about-image-container">
                                        <div className="image-stack"></div>
                                        <div className="image-stack"></div>
                                        <div className="image-stack"></div>
                                        <img className="about-image" src={portrait} alt="Portrait" />
                                    </div>
                                </Scene>
                        </div>
                        <a className="cv-button" href={resume} target="_blank" rel="noopener noreferrer">Download CV</a>
                    </div>
                </div>
            </Scene>
        </section>
    );
})

export default About;