import React from 'react';
import { Scene } from 'react-scrollmagic';
import skills from './SkillList'

import './Skills.css';

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
                <p className="lead">Languages and frameworks I'm proficient in.</p>

                <ul className="skills">
                    { generateSkills() }
                </ul>
                
            </div>  
            </Scene>
        </section>
    );
})

export default Skills;