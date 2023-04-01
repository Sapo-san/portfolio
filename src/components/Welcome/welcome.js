import React from 'react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";

import './welcome.scss'
import timberli from '../../img/timberli.png'
import videogamepi from '../../img/videogameapp.png'
import profilepic from '../../img/profilepic.webp'
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
          <button onClick={() => PortfolioRef.current.scrollIntoView()}> Check Portfolio </button>
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
        {/* Projectos */}
        <div className='container flex column portfolio-section'>
          <h1 className='portfolio-title'>Projects:</h1>
          <p>
            These are my finished projects:
          </p>
            {/* Project #1 */}
            <div className='project flex row centered'>
              <img className="project-img" src={timberli} alt="timberli-img"></img>
              <div className="project-txt">
                <p><b>Timberli - Henry Bootcamp Group Project:</b> Timberli is an app where Jr developers
                can upload their projects to build their portfolio, be more visible to recruiters and
                also receive feedback on their projects. Our team worked on Timberli for a
                month. <a href="https://proyecto-final-orcin-seven.vercel.app/">Check it out, since its already deployed.</a></p>
              </div>
            </div>

            {/* Project #2 */}
            <div className="project flex row centered">
              <div className="project-txt">
                <p><b>Videogame App - Henry Bootcamp Individual Project:</b> I made this app to practice
                all of what I learned in Henry Bootcamp in one single project. It&apos;s a simple app that consumes
                RAWG API, it can sort, filter and create Videogame Titles and displays them in a simple UI. Here&apos;s
                the <a href="https://github.com/Sapo-san/PI-Videojuegos">Link to the repo</a>.</p>
              </div>
              <img className="project-img" src={videogamepi} alt="timberli-img"></img>  
            </div>
          <p>
          If you want to see other projects I&apos;m currently working on, you can check out my <a href="https://github.com/Sapo-san">Github account</a>.
          </p>
        </div>

        {/* Sobre Mi */}
        
        <div className='portfolio-section container flex column'>
          <h1 className='portfolio-title'>About me:</h1>

          <div className='flex row centered profile'>
            <img className='profilepic' src={profilepic} alt="profilepic"></img>
            <div className='profile-text'>
              <p>
                Cristóbal Herreros Viviani
              </p>
              <p>
                {getAge("07/04/1997")} years old, Chilean 🇨🇱, Fullstack Web Developer.
              </p>
              <p>
                Currently employed at <a href="https://evoluciona.cl/">Evoluciona Chile</a> (since September 5th, 2022) working as external employee for <a href="https://www.linkedin.com/company/entel/">Entel</a> 
              </p>
            </div>
          </div>
          <p className='aboutme-p1'>
            I like 🐸 frogs. And 🌌 space. Also I like playing 🎮 videogames,
            ⚔️ HEMA longsword fencing and I really like  🖥️ computers
            and everything related to them. 
            <br/>
            <br/>
            Previous experiences? Before my current job I did a bit of freelancing here and there (click on &quot;Read more&quot; below to see a complete list), 
            also I was teaching assistant for the Computer&apos;s Architecture course back in university.
          </p>
          <p className='aboutme-p2'>
          My current Tech Stack is:
          </p>

          <ul>
            <li>Programming Languages: Java (Using it at my current job for backend), Javascript, Python, SQL (Postgres and MySQL)</li>
            <li>Libraries / Frameworks: Vue2 (Using it at my current job for frontend), Vue3, React.js, Redux, Node.js, Express.js, Sequelize</li>
            <li>Agile Methodologies: Scrum, Kanban</li>
          </ul>

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

