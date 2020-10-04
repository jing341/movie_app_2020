import React from 'react';
import './About.css'

function About(props) {
    console.log(props);

    return (
        <div className="about__container">
            <span>
            "This movie app is made by the great 'Lizard' (I) myself."
            </span>
            <a href="https://scratch.mit.edu/users/Lizard_coding"><span>-Lizard-</span></a>
        </div>
    );
}

export default About;