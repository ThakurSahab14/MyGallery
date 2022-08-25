import React from 'react'
import './About.css'
import DP from './OwnDP.png'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'


const About = () => {
    return (
        <div className="aboutMain">
            <div className="child">
                <div className="childleft">
                    <img src={DP} width="180px" alt="Profile" />
                </div>
                <div className="childright">
                    <div className="content">
                        <h1>Gaurav Singh</h1>
                        <p>I am currently pursuing my Bachelors in Information Technology Engineering from Institute of Engineering and Technology.I am a passionate coder and Web developer who desires to learn and explore problem solving skills and has interests in solving various algorithmic problems, with knowledge of technology like HTML, CSS, JavaScript, React.js, Node.js, firebase, MongoDB, Express.js etc.</p>
                        <h3>Fullstack Developer</h3>
                        <div className="socialAbout">
                            
                            <a href='https://github.com/ThakurSahab14' target="_blank" rel="noreferrer"><FaGithubSquare/> Github</a >
                            <a href='https://www.linkedin.com/in/gaurav142001/' target="_blank" rel="noreferrer"><BsLinkedin/>  LinkedIn</a >
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About