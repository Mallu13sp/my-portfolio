import React from 'react';
import "./About.css"
import pht from './photo.jpg';
function About(){
    return(
        <div className="about">
        <div className='photo'>
            <img src={pht} alt="image is loading" width={300} height={300}/>
        </div>
        
    <p className="intro">My name is Mallikarjun, and while I don't have any industry experience, I have several skills related to the IT field. I am proficient in three programming languages: JAVA, C++, and Python. Additionally, I possess web development skills in HTML, CSS, and JavaScript for frontend development. I am currently in the process of learning the backend part of web development.</p>
    <p class="heading"> My Hobbies are playing chess, reading kannada novels, playing video games, Interests in geopolitical analysis and current affairs. </p>
    
    </div>);
}
export default About;