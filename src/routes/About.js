import React from 'react';
import './About.css'

function About(props) {
    console.log(props);

    return (
        <div className="about__container">
            <span>
            "This movie app is made by the great 'Lizard' (I) myself."
            </span>
            <span>-Lizard-</span>
        </div>
    );
}

export default About;