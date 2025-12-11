//import React from 'react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";

import './welcome.scss'

import profilepic from '../../img/profilepic.webp'
import { Link } from 'react-router-dom'
import englishCv from '../../files/cv_en.pdf';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

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

  function openInNewTab(url) {
    window.open(url, '_blank').focus();
  }

  return (
    <div className='welcome flex column'>
      {/* Pantalla de bienvenida */}
      <div className='slide flex column centered'>
        <h1 className='welcome-title'>Welcome to my Website</h1>
        <h2 className='welcome-subtitle'>I&apos;m Cristóbal, Fullstack Web Developer 🚀</h2>
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

              {/* Network Icons */}

              <div className="profile-socials">
                <FaLinkedin className='icon' onClick={() => openInNewTab('https://www.linkedin.com/in/cristobalherreros/')}/> 
                <FaGithub className='icon' onClick={() => openInNewTab('https://github.com/Sapo-san')}/>
                <IoMailOutline className='icon' onClick={() => window.open('mailto:cristobal.herreros@gmail.com')} />
              </div>

              {/* Me talking about myself */}
              <p className='aboutme-p1'>
                Hello there! I&apos;m {getAge("07/04/1997")} years old and from Chile 🇨🇱. I&apos;m a dedicated worker,
                I like challenges and learning new things.
              </p>

              <p className='aboutme-p1'>
                <b>
                  I&apos;m currently working at
                  <a href="https://www.linkedin.com/company/entel/"> Entel </a>
                </b>
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
                <b>Previous working experiences?</b> Before my current job I worked for 
                <a href="https://evoluciona.cl/"> Evoluciona Chile </a> for a year
                and a half as Software Engineer and before that I did a bit of freelancing here and
                there. You can download my CV by pressing the button below.
              </p>

              <div className='button-container'>
                <button onClick={() => {
                  // Descargar PDF
                  const link = document.createElement('a');
                  link.href = englishCv;
                  link.setAttribute('download', `CV Cristóbal Herreros.pdf`);
                  link.click()
                }}> Download Resume </button>
              </div>
              

              <p className='aboutme-p1'>
                <b>About me?</b> Unsurprisingly, I <i>really</i> like 🖥️ computers
                and everything related to them, kind of the reason why I got into this line
                of work hehe. I also really like frogs 🐸.
              </p>

              <p className='aboutme-p1'>
                Some of my hobbies are reading fantasy/fiction books 📚 and playing 🎮 videogames (recently a lot 
                of <a href='https://www.youtube.com/watch?v=qiD5VStVH9k'>Helldivers 2</a>). I&apos;m 
                also into fencing, mainly ⚔️ HEMA with Longswords but I'll dabble with other kind of swords
                or Olympic/lightsaber fencing too. 
              </p>

              <p className='aboutme-p1'>
                I'm also a big advocate for mental health awareness and having proper work-life balance.
                I've been learning a lot about these topics thanks to <a href='https://www.youtube.com/@HealthyGamerGG'>
                  Dr. K's YouTube channel
                </a> and the <a href='https://www.healthygamer.gg/'>
                  HealthyGamer foundation
                </a> so if you are interested on these topics I highly recommend to check out their resources.
              </p>
            </div>
          </div>
          
          {/* <p className='aboutme-p2'>
            <h2>My Tech Stack is:</h2>
              <ul>
                <li>Javascript, Python, Php, Java, SQL (BigQuery, Postgres and MySQL)</li>
                <li>Vue, React, Node.js, Express.js, Sequelize, Java Springboot</li>
                <li>Google Cloud: Compute Engine, Cloud Functions, Big Query, Cloud Storage, Looker Studio, Google DNS, Cloud Scheduler...</li>
                <li>Amazon Web Services: EC2, S3, Route 53, Amazon Cloudfront...</li>
                <li>Scrum, Kanban using Jira</li>
                <li>Dev tools: Git, Cloud Console, etc...</li>
                <li>AI tools: Whoever hallucinates less at the moment (ChatGPT, Gemini, etc...)</li>
              </ul>
          </p> */}

          <h1 className='portfolio-title'>Contact info:</h1>
          <p className='aboutme-p1'>
            You can send me a message on <a href="https://www.linkedin.com/in/cristobalherreros/">LinkedIn</a> or write me an email to: <a href="mailto:cristobal.herreros@gmail.com">cristobal.herreros@gmail.com</a>
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

