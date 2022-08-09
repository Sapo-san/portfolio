import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className='slide flex centered column'>
      <div className='about flex centered column'>
        <div className='about-text'>
          <h1>Previous Working Experiences:</h1>
          <h2>Freelancing:</h2>
          <ul className='about-pwe-list'>
            <li> <b><a href="https://www.vlabogadas.cl">vlabogadas.cl</a> [August 2022 - Current Day]</b>: Making their website with React.js and using S3 + Cloudfront for their deploy. Also helping them set up Google Workspace.</li>
            <li> <b><a href="https://www.constructoravenus.cl/">constructoravenus.cl</a> [November 2021 - December 2021]</b>: Made their website with React.js and used S3 + Cloudfront for their deploy. Also helped them set up Google Workspace.</li>
            <li> <b><a href="https://www.irricoach.cl/">irricoach.cl</a> [March 2021 - Current Day]</b>: I do monthly maintenance to their site. </li>
            <li> <b><a href="https://lascardas.cl/">lascardas.cl</a> [January 2021 - February 2021]</b>: Helped them move from their old site to their current one (which is on Shoppify) and migrated their mail accounts to Google Workspace.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About