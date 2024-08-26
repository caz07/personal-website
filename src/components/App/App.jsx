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
    const [experienceRef, experienceInView] = useInView({ threshold: 0.25 });
    const [skillsRef, skillsInView] = useInView({ threshold: 0.25 });
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
    // if (init) {
    //     return (
    //       <Particles
    //         id="tsparticles"
    //         particlesLoaded={particlesLoaded}
    //         options={particlesOptions}
    //       />
    //     );
    //   }
    
    //   return <></>;
}

// const App = () => {
//     const [init, setInit] = useState(false);
  
//     // this should be run only once per application lifetime
//     useEffect(() => {
//       initParticlesEngine(async (engine) => {
//         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//         // starting from v2 you can add only the features you need reducing the bundle size
//         //await loadAll(engine);
//         await loadFull(engine);
//         // await loadSlim(engine);
//         //await loadBasic(engine);
//       }).then(() => {
//         setInit(true);
//       });
//     }, []);
  
//     const particlesLoaded = (container) => {
//       console.log(container);
//     };
  
//     const options = useMemo(
//       () => ({
//         background: {
//           color: {
//             value: "#0d47a1",
//           },
//         },
//         fpsLimit: 120,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//           },
//           modes: {
//             push: {
//               quantity: 4,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#ffffff",
//           },
//           links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outModes: {
//               default: "bounce",
//             },
//             random: false,
//             speed: 6,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//             },
//             value: 80,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//         },
//         detectRetina: true,
//       }),
//       [],
//     );
  
//     if (init) {
//       return (
//         <Particles
//           id="tsparticles"
//           particlesLoaded={particlesLoaded}
//           options={options}
//         />
//       );
//     }
  
//     return <></>;
//   };
  

export default App;
