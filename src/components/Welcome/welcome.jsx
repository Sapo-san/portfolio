//import React from 'react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";

import './welcome.scss'

import profilepic from '../../img/profilepic.jpg'
import { Link } from 'react-router-dom'
import englishCv from '../../files/cv_en.pdf';

const Welcome = () => {

  const PortfolioRef = useRef(null)

  const navigate = useNavigate();

  function getAge (dateString) {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getUTCFullYear() - birthDate.getUTCFullYear()
    var month = today.getUTCMonth() - birthDate.getUTCMonth()
    if (month < 0 || (month === 0 && today.getUTCDate() < birthDate.getUTCDate())) {
      age--
    }
    return age
  }

  return (
    <div className='welcome flex column'>
      {/* Pantalla de bienvenida */}
      <div className='slide flex column centered'>
        <h1 className='welcome-title'>Welcome to my Website</h1>
        <h2 className='welcome-subtitle'>I am Cristóbal, Fullstack Web Developer 🚀</h2>
        <h2 className='welcome-subtitle'>How can I help you?</h2>

        <div className='welcome-buttons'>
          <button onClick={() => PortfolioRef.current.scrollIntoView()}> About me </button>
          <button onClick={() => {
            // Descargar PDF
            const link = document.createElement('a');
            link.href = englishCv;
            link.setAttribute('download', `CV Cristóbal Herreros.pdf`);
            link.click()
          }}> Download Resume </button>
          <button onClick={() => navigate("/home")}> Other Stuff </button>
        </div>
      </div>

      {/* Portfolio */}
      <div ref={PortfolioRef} className='portfolio slide flex'>
        {/* Proyectos */}

        {/* Sobre Mi */}
        
        <div className='portfolio-section container flex column'>
          {/* <h1 className='portfolio-title'>About me:</h1> */}

          <div className='flex row centered profile'>               
            {/* Profile Image */}
            <img className='profilepic' src={profilepic} alt="profilepic"></img>
            {/* Profile Text */}
            <div className='profile-text'>
              
              {/* My name and job title */}
              <p className='profile-name'>
                Cristóbal Herreros Viviani
              </p>     
              <p className="profile-subtitle">
                Fullstack Web Developer
              </p>
              <p className="profile-subsubtitle">
                (basically jack of all trades, master of none)
              </p>

              {/* Me talking about myself */}
              <p className='aboutme-p1'>
                Hello there! In this section I&apos;ll talk a bit about myself.
                For starters, I&apos;m {getAge("07/04/1997")} years old and I come
                from Chile 🇨🇱
              </p>
              <p className='aboutme-p1'>
                I&apos;m currently working at
                <a href="https://www.linkedin.com/company/entel/"> Entel </a>
                (since April 22nd, 2024) as an internal collaborator and Developer.
              </p>

              <p className='aboutme-p1'>
                My role is to implement infrastructure and automate processes in
                the cloud to support our B2B Business Analytics team.
              </p>

              <p className='aboutme-p1'>
                It is also my job to give support to legacy applications and maintain
                their operational continuity while we migrate to a newer tech stack.
              </p>

              <p className='aboutme-p1'>
                Some personal stuff about me is that I really like frogs 🐸, reading
                books 📚 and playing 🎮 videogames. 
              </p>

              <p className='aboutme-p1'>
                I&apos;m also into fencing (⚔️ HEMA, Olympic and with lightsabers) and I really like 🖥️ computers
                and everything related to them.
              </p>
              
              <p className='aboutme-p1'>
                Previous working experiences? Before my current job I worked for 
                <a href="https://evoluciona.cl/"> Evoluciona Chile </a> for a year
                and a half as Software Engineer and before that I did a bit of freelancing here and
                there (click on &quot;Read more&quot; below to see a not-that-long-but-complete list of things).
              </p>

              <p className='aboutme-p1'>
                Also, I was part of the teaching assistant team for the Computer&apos;s Architecture
                course back in university. 
              </p>
            </div>
          </div>
          
          <p className='aboutme-p2'>
            <h2>My Tech Stack is:</h2>
              <ul>
                <li>Javascript, Python, Php, Java, SQL (Postgres and MySQL)</li>
                <li>Vue 3, Vue 2, Java Springboot, React, Redux, Node.js, Express.js, Sequelize</li>
                <li>Google Cloud: Compute Engine, Cloud Functions, Big Query, Cloud Storage, Looker Studio, Google DNS, Cloud Scheduler...</li>
                <li>Amazon Web Services: EC2, S3, Route 53, Amazon Cloudfront.</li>
                <li>Scrum, Kanban using Jira</li>
                <li>Other tools: Git, Cloud Console, etc...</li>
              </ul>
          </p>

          <Link className="welcome-link readMoreButton" to="/about">Read More</Link>

          <h1 className='portfolio-title'>Want to contact me?</h1>
          <p>
            ➜ You can send me a message on <a href="https://www.linkedin.com/in/cristobalherreros/">LinkedIn</a>
            <br/>
            ➜ You can send me an email: <a href="mailto:cristobal.herreros@gmail.com">cristobal.herreros@gmail.com</a>
          </p>
        </div>
        <div className='bottom'>
          .
        </div>
      </div>
      
    </div>
  )
}

export default Welcome

