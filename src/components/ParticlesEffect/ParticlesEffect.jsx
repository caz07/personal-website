import React, { useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import './ParticlesEffect.css'


const ParticlesEffect = React.memo(() => {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadFull(engine);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return <Particles particlesLoaded={particlesLoaded} options={particlesOptions} />;
});

export default ParticlesEffect;