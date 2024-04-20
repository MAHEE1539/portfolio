import React from 'react';
import footer_logo from '../../assets/logo1.png';
import user_icon from '../../assets/user_icon.svg';
import './Footer.css';
const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your Email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>@ 2024 Maheedhar Kosana. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>term of Services</p>
                    <p>Privacy policy</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;