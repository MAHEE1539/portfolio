import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/profile_img.jpg';
import './Hero.css';
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm MAHEEDHAR,</span> frontend developer</h1>
            <p>Creative and results-driven Front End Developer with a passion for crafting visually stunning and user-friendly web interfaces. </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                
                <a href='https://drive.google.com/file/d/1LAwrtzMXqSOAWqC6I52gXzRUnK5sVKeG/view?usp=sharing' target='blank'><div className="hero-resume">My Resume</div></a>
            </div>
        </div>
    );
};

export default Hero;