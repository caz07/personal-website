import microsoft from '../../assets/microsoft.png'
import swabseq from '../../assets/swabseq.png'
import nei from '../../assets/nei.png'
import acm from '../../assets/acm.png'
import wetlab from '../../assets/wetlab.jpeg';
import ucla from '../../assets/ucla.png';
import interactTutors from '../../assets/interact-tutors.png';
import logo from '../../assets/logo-bg.jpg';
import chess from '../../assets/chess.jpg'
import stocks from '../../assets/stocks.jpg';
import terrain from '../../assets/terrain.jpg'

/* Work experience list */
const workExperience = [
    {
        "href": "https://www.microsoft.com/",
        "src": microsoft,
        "alt": "Microsoft logo",
        "imageContain": false,
        "name": "Microsoft (via Centific)",
        "description": "Working on Microsoft eDiscovery and taught students in Centific Summer Discovery Program.",
        "skills": ["JavaScript", "HTML/CSS"],
        "startDate": "June 2024",
        "endDate": "Present"
    },
    {
        "href": "https://swabseq.compmed.ucla.edu/",
        "src": swabseq,
        "alt": "UCLA SwabSeq logo",
        "imageContain": true,
        "name": "UCLA SwabSeq Lab",
        "description": "Conducting bioinformatics research for SwabSeq 2.0, an improved version of the COVID tests distributed throughout UCLA.",
        "skills": ["Python", "Rust"],
        "startDate": "February 2024",
        "endDate": "Present"
    },
    {
        "href": "https://ne.institute/",
        "src": nei,
        "alt": "NEI logo",
        "imageContain": true,
        "name": "Native English Institute",
        "description": "Developed a scheduling algorithm to match hundreds of appointments with teachers every day; restructured internal teacher ranking system and logic.",
        "skills": ["TypeScript", "React", "MySQL", "Docker", "Kubernetes"],
        "startDate": "June 2023",
        "endDate": "August 2023"
    },
    {
        "href": "https://www.uclaacm.com/dev",
        "src": acm,
        "alt": "ACM logo",
        "imageContain": true,
        "name": "ACM Dev Team",
        "description": "Working on multiple projects such as ACM Membership Portal, Dev Pathways (AI-generated CS learning modules), and template for ACM committee websites.",
        "skills": ["TypeScript", "React", "Next.js", "Node.js", "MongoDB"],
        "startDate": "November 2022",
        "endDate": "Present"
    }
]

/* Projects list */
const projects = [
    {
        "href": "https://github.com/caz07/histone-overlap-predictor",
        "src": wetlab,
        "alt": "Genomic Histone Overlap Predictor image",
        "imageContain": false,
        "name": "Genomic Histone Overlap Predictor",
        "description": "An algorithm using a Hidden Markov Model to predict overlaps of DNA intervals with histone marks.",
        "skills": ["Python"]
    },
    {
        "href": "https://github.com/BruinPlan/website",
        "src": ucla,
        "alt": "UCLA image",
        "imageContain": false,
        "name": "Four-Year Course Planner",
        "description": "A full-stack interface to allow UCLA students to better plan their four-year course schedule.",
        "skills": ["TypeScript", "React", "Express", "Node.js", "MySQL", "Firebase"]
    },
    {
        "href": "https://interacttutors.com",
        "src": interactTutors,
        "alt": "Interact Tutors logo",
        "imageContain": true,
        "name": "Interact Tutors",
        "description": "A website to connect local high school tutors with elementary and middle-school students.",
        "skills": ["JavaScript", "Bootstrap", "Python", "Flask", "MySQL", "HTML/CSS"]
    },
    {
        "href": "#",
        "src": logo,
        "alt": "Personal Site logo",
        "imageContain": false,
        "name": "Personal Site",
        "description": "This website! Created to share my background as well as showcase my projects and skills.",
        "skills": ["React", "HTML/CSS"]
    },
    {
        "href": "https://github.com/caz07/chess-opening-analysis",
        "src": chess,
        "alt": "Chess image",
        "imageContain": false,
        "name": "Chess Opening Analysis",
        "description": "An algorithm to find the most successful chess openings for different ratings using Stockfish and the Lichess database.",
        "skills": ["Python", "Machine Learning"]
    },
    {
        "href": "https://github.com/caz07/asdrp-sentiment-analysis",
        "src": stocks,
        "alt": "Stocks image",
        "imageContain": false,
        "name": "Sentiment Analysis for Stock Price Prediction",
        "description": "A time series analysis to evaluate the effectiveness of Twitter sentiment analysis on predicting stock prices.",
        "skills": ["Python", "Machine Learning"]
    },
    {
        "href": "https://github.com/caz07/terrain-classification",
        "src": terrain,
        "alt": "Terrain image",
        "imageContain": false,
        "name": "Terrain ML Classification Model",
        "description": "A neural network capable of classifying images by their terrain and suitability for driving, compared against popular pretrained models.",
        "skills": ["Python", "Machine Learning", "PyTorch"]
    }
]

export { workExperience, projects };