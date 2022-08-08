import React from 'react';
import { Scene } from 'react-scrollmagic';

import './Skills.css';

/* Skills list */
const skills = [
    {
        "name": "HTML/CSS",
        "skillLevel": 90
    },
    {
        "name": "Javascript",
        "skillLevel": 90
    },
    {
        "name": "Python",
        "skillLevel": 90
    },
    {
        "name": "Bootstrap",
        "skillLevel": 90
    },
    {
        "name": "React.js",
        "skillLevel": 70
    },
    {
        "name": "Flask",
        "skillLevel": 70
    },
    {
        "name": "SQL",
        "skillLevel": 70
    },
    {
        "name": "Java",
        "skillLevel": 70
    },
    {
        "name": "Machine Learning",
        "skillLevel": 60
    },
    {
        "name": "PyTorch",
        "skillLevel": 60
    }
];

function generateSkills() {
    const numSkills = skills.length;
    
    // Earlier skills have higher animation offset, max offset 150
    return skills.map((skill, index) => (
        <Scene classToggle={ "w-" + skill.skillLevel } triggerElement="#skills" triggerHook="onLeave" offset={ (numSkills - index) * (-150 / numSkills) } >
            <li key={ "skill" + (index + 1) } id={ "skill" + (index + 1) } className="skill">
                <h4 className="skill-name">{skill.name}</h4>
                <Scene classToggle="visible" triggerElement="#skills" triggerHook="onLeave" offset={ (numSkills - index) * (-150 / numSkills) }>
                    <h5 className="skill-percentage">{skill.skillLevel}%</h5>
                </Scene>
                <div className="skill-bar"></div>
            </li>
        </Scene>
    ))
}

const Skills = React.forwardRef((props, ref) => {
    return (
        <section id="skills" className="main-section" ref={ref}>
            <Scene classToggle="visible" triggerElement=".skills-container" triggerHook="onLeave" offset={-150}>
            <div className="section-container skills-container">

                <h1 className="section-title">Skills</h1>
                <div className="section-border"></div>
                <p className="lead">Languages and frameworks I'm good at.</p>

                <ul className="skills">
                    { generateSkills() }
                </ul>
                
            </div>  
            </Scene>
        </section>
    );
})

export default Skills;