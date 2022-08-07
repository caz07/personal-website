import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Scene } from 'react-scrollmagic';

import './Contact.css';
import { handleAnchorClick } from '../../utils/Utils';


const Contact = React.forwardRef((props, ref) => {
    return (
        <section id="contact" className="main-section" ref={ref}>
            <div className="section-container contact-container">
                <h1 className="section-title">Contact</h1>
                <div className="section-border"></div>
                <p className="lead">Let's get in touch!</p>
                <ul className="contact-content">
                    <li key="contact-method1" className="contact-method">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                        <a className="contact-link" href="mailto:charles.zhu04@gmail.com">Email</a>
                    </li>
                    <li key="contact-method2" className="contact-method">
                        <FontAwesomeIcon icon={faLinkedinIn} className="contact-icon"/>
                        <a className="contact-link" href="https://linkedin.com/in/zhu-charles/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li key="contact-method3" className="contact-method">
                        <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                        <a className="contact-link" href="https://github.com/caz07" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                </ul>
            </div>
            <Scene classToggle="visible" triggerElement=".scroll-top" triggerHook="onEnter" offset={100}>
                <div className="scroll-top" onClick={(e) => handleAnchorClick(e, 0)}>
                    <FontAwesomeIcon icon={faCircleChevronUp}/>
                </div>
            </Scene>
        </section>
    )
})

export default Contact;