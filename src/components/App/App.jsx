import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { useInView } from "react-intersection-observer";

import Logo from '../Logo/Logo';
import ParticlesEffect from '../ParticlesEffect/ParticlesEffect';
import Navbar from '../Navbar/Navbar';
import Masthead from '../Masthead/Masthead';
import About from '../About/About';
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
    const [mastheadRef, mastheadInView] = useInView({ threshold: 0.25 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.25 });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.15 });
    const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });
    const [educationRef, educationInView] = useInView({ threshold: 0.25 });
    const [contactRef, contactInView] = useInView({ threshold: 0.25 });

    const inViews = {
        "masthead": mastheadInView, 
        "about": aboutInView, 
        "experience": experienceInView, 
        "skills": skillsInView, 
        "education": educationInView, 
        "contact": contactInView
    }

    return (
        <div className='App'>
            <Logo />
            <ParticlesEffect />
            <Navbar inViews={inViews} />
            <Masthead ref={mastheadRef} />
            <Controller>
                
                <About ref={aboutRef} />
            
                <div className="background-pin-container">
                    
                    <Scene triggerHook="onLeave" pin>
                        <div className="background-pin"></div>
                    </Scene>
                    <div className="background-pin-inner">
                        <Experience ref={experienceRef} /> 
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
