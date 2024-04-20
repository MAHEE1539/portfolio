import React from 'react';
import profile_img from '../../assets/profile_img.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';
import './About.css';
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Innovative and detail-oriented Front End Developer with a focus on creating immersive digital experiences. Proficient in HTML, CSS, and JavaScript, with hands-on experience in building dynamic and interactive user interfaces with React JS.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"45%"}}/></div>
                        <div className="about-skill"><p>DSA and CSF</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YOE in Web Dev</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Projects completed(m+M)</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>500+</h1>
                    <p>Que in Leetcode</p>
                </div>

            </div>
        </div>
    );
};

export default About;