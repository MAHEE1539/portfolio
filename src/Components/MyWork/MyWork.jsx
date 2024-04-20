import React from 'react';
import arrow_icon from '../../assets/arrow_icon.svg';
import mywork_data from '../../assets/mywork_data';
import theme_pattern from '../../assets/theme_pattern.svg';
import './MyWork.css';

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>Highlights</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{work.w_no}</h3>
                        <h2>{work.w_name}</h2>
                        <a href={work.w_add} target='blank'>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                        </a>
                    </div>
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
};

export default MyWork;