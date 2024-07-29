import React from 'react';
import { handleAnchorClick } from '../../utils/Utils';

import './Navbar.css';

const sections = [
    {
        "id": "masthead",
        "name": "masthead",
        "displayName": "Introduction"
    },
    {
        "id": "about",
        "name": "about",
        "displayName": "About"
    },
    {
        "id": "projects",
        "name": "projects",
        "displayName": "Projects"
    },
    {
        "id": "skills",
        "name": "skills",
        "displayName": "Skills"
    },
    {
        "id": "education",
        "name": "education",
        "displayName": "Education"
    },
    {
        "id": "contact",
        "name": "contact",
        "displayName": "Contact"
    }
]

let prevInViews = {};

function generateNavItems(inViews, entries) {

    // Mark every inView false except the one that most recently entered the screen so only one nav-link is active at a time
    Object.keys(prevInViews).forEach(key => {
        if (!prevInViews[key] && inViews[key]) {
            Object.keys(inViews).forEach(key2 => {
                if (key !== key2) {
                    inViews[key2] = false;
                }
            })
        }
    })

    prevInViews = inViews;

    return sections.map((section, index) => (
            <li key={ "section" + (index + 1) }>
                <a href={ "#" + section.id } className={ `nav-link${inViews[section.name] ? " active" : ""}` } onClick={ (e) => handleAnchorClick(e, "#" + section.id) }>
                    <div className="nav-label">{section.displayName}</div>
                </a>
            </li>
        ))
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {generateNavItems(props.inViews, props.entries)}
            </ul>
        </nav>
    )
}

export default Navbar;