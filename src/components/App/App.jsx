import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import { Controller, Scene } from 'react-scrollmagic';
import { useInView } from "react-intersection-observer";

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Masthead from '../Masthead/Masthead';
import About from '../About/About';
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const [mastheadRef, mastheadInView] = useInView({ threshold: 0.25 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.25 });
    const [projectsRef, projectsInView] = useInView({ threshold: 0.25 });
    const [skillsRef, skillsInView] = useInView({ threshold: 0.25 });
    const [educationRef, educationInView] = useInView({ threshold: 0.25 });
    const [contactRef, contactInView] = useInView({ threshold: 0.25 });

    const inViews = {
        "masthead": mastheadInView, 
        "about": aboutInView, 
        "projects": projectsInView, 
        "skills": skillsInView, 
        "education": educationInView, 
        "contact": contactInView
    }

    return (
        <div className='App'>
            <Logo />
            <Particles options={particlesOptions} init={particlesInit}/>
            <Navbar inViews={inViews} />
            <Masthead ref={mastheadRef} />
            <Controller>
                
                <About ref={aboutRef} />
            
                <div className="background-pin-container">
                    
                    <Scene triggerHook="onLeave" pin>
                        <div className="background-pin"></div>
                    </Scene>
                    <div className="background-pin-inner">
                        <Projects ref={projectsRef} /> 
                        <Skills ref={skillsRef} />
                        <Education ref={educationRef} />
                        <Contact ref={contactRef}/>
                        <Footer />
                    </div>
                    
                </div>
            </Controller>
        </div>
    );
}

export default App;
