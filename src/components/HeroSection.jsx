import React from "react";
import heroImage from "../img/Group 77.png";

function HeroSection () {
    return (
        <div className="hero-section">
            <img src={heroImage} alt="heroImage" className="hero--Img" />
            <h2 className="hero--header">Online Experiences</h2>
            <p className="hero--paragraph">Unique activities we can do together, led by a world of hosts.</p>

        </div>
    );
}

export default HeroSection;