import React from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { handleAnchorClick } from '../../utils/Utils';

import './Masthead.css';


const Masthead = React.forwardRef((props, ref) => {
    const categories = [
        'A web developer',
        'An AI researcher',
        'A UCLA CS freshman',
        'A volunteer tutor',
        'An ardent pianist',
        'An avid photographer',
    ];

    return (
        <header className="masthead" ref={ref}>
            <div className="intro-text">
                <h1 className="intro-1">Hey, I'm</h1>
                <h1 className="intro-name">Charles Zhu!</h1>
                <div className="border"></div>
                <h1 className="intro-2">
                    <Typewriter
                        options={{
                            strings: categories,
                            autoStart: true,
                            loop: true,
                            pauseFor: 3500
                        }}
                    />
                </h1>
                <ul className="socials">
                    <li>
                        <a href="mailto:charles.zhu04@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className="social-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/zhu-charles/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/caz07" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="social-icon"/>
                        </a>
                    </li>
                    
                    
                </ul>
            </div>
            <a href="#about" className="down-icon-link" onClick={(e) => handleAnchorClick(e, "#about")}>
                <div className="down-icon-link-inner">
                    <FontAwesomeIcon icon={faCircleChevronDown}/>
                </div>
            </a>
        </header>
    );
})

export default Masthead;