import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-parallax';
import educationBg from '../../assets/education-bg.jpg'

import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = React.forwardRef((props, ref) =>{
    return (
        <section id="education" ref={ref}>
            <Parallax blur={{ min: -1, max: 3}} bgImage={educationBg} bgImageAlt="Dark 3d render" strength={500}>
                <div className="main-section">
                    <div className="section-container education-container">

                        <h1 className="section-title">Education</h1>
                        <div className="section-border"></div>
                        <p className="lead">The places I've studied at.</p>

                        <VerticalTimeline                >
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="September 2022 - June 2026"
                                icon={<FontAwesomeIcon icon={faSchool} />}
                            >
                                <h3 className="vertical-timeline-element-title">University of California, Los Angeles</h3>
                                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA &#183; GPA: 3.81</h4>
                                <div className="vertical-timeline-element-border"></div>
                                <p>Majoring in computer science. <br /><br />
                                ACM Dev Team Officer, Projected Director, Foundations Choreography Events Chair, UCLA SwabSeq Lab Researcher; member of UPE Honor Society and Association of Chinese Americans.</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="August 2018 - June 2022"
                                icon={<FontAwesomeIcon icon={faSchool} />}
                            >
                                <h3 className="vertical-timeline-element-title">Monta Vista High School</h3>
                                <h4 className="vertical-timeline-element-subtitle">Cupertino, CA &#183; GPA: 4.0</h4>
                                <div className="vertical-timeline-element-border"></div>
                                <p>Created tutoring website as web development officer for Interact club (details in <a className="education-interact-link" href="#projects">projects</a>). 
                                    Planned fundraising events for drug addiction treatment and recovery with Interact's Community Project Committee.
                                    Member of Monta Vista Robotics Team (MVRT).</p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </Parallax>
        </section>
    );
})

export default Education;