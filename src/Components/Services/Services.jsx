import React from 'react';
import arrow_icon from '../../assets/arrow_icon.svg';
import Services_Data from '../../assets/services_data';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Services.css';
const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />    
            </div> 
            <div className="services-container">
                {Services_Data.map((service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <a href={service.s_add} target='blank'>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                        </a>
                    </div>
                })}
            </div>           
        </div>
    );
};

export default Services;