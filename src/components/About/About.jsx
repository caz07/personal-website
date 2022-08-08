import React from 'react';
import portrait from '../../assets/portrait.jpg';
import resume from '../../assets/charles-zhu-resume.pdf';
import { Scene } from 'react-scrollmagic';

import './About.css';

const About = React.forwardRef((props, ref) => {
    return (
        <section id="about" ref={ref}>
            <Scene pin=".about-pin-container" triggerElement="#about" triggerHook="onLeave">
                <div className="about-pin-container main-section">
                    <div className="section-container about-container">
                        <div className="about-content">
                                <Scene classToggle="visible" triggerHook="onEnter" offset={200}>
                                    <div className="about-text">
                                            <div className="about-header">
                                                <h1 className="section-title">About</h1>
                                                <div className="section-border"></div>
                                                <p className="lead">A bit of my background, hobbies, and interests.</p>
                                            </div>
                                            <p className="about-description">I'm a computer science freshman at UCLA with experience in web development, artificial intelligence 
                                                research, and data science. I love seeing the impact that my work has on others and am fueled by the prospect of one day contributing 
                                                to the "next big thing." 
                                                <br /><br />
                                                Outside of work, I enjoy piano, photography, hiking, travel, and an unhealthy amount of gaming.
                                                I'm currently looking for any software development internships or startup opportunities. If you think I'm a good fit, 
                                                please reach out to <a className="about-link" href="mailto:charles.zhu04@gmail.com">charles.zhu04@gmail.com</a> to connect!
                                            </p>
                                        
                                    </div>
                                </Scene>
                                <Scene classToggle="visible" triggerHook="onEnter" offset={200}>
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