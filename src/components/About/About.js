import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className='navslide flex centered column'>
      <div className='about flex centered column'>
        <div className='about-text'>
          <h1 className='about-title'>About me</h1>
          <h2 className='about-title'>Previous Working Experiences</h2>
          <p>
            In this section I talk about my previous working experiences and other stuff that might be relevant.
          </p>
          <h2>Freelancing:</h2>
          <ul className='about-pwe-list'>
            <li> <b><a href="https://www.vlabogadas.cl">vlabogadas.cl</a> [August 2022 - Current Day]</b>: Made their website with React.js and using S3 + Cloudfront for their deploy. Also helped them set up Google Workspace.</li>
            <li> <b><a href="https://www.constructoravenus.cl/">constructoravenus.cl</a> [November 2021 - December 2021]</b>: Made their website with React.js and used S3 + Cloudfront for their deploy. Also helped them set up Google Workspace.</li>
            <li> <b><a href="https://www.irricoach.cl/">irricoach.cl</a> [March 2021 - Current Day]</b>: I do monthly maintenance to their site. </li>
            <li> <b><a href="https://lascardas.cl/">lascardas.cl</a> [January 2021 - February 2021]</b>: Helped them move from their old site to their current one (which is on Shoppify) and migrated their mail accounts to Google Workspace.</li>
          </ul>
          <h2>Other Experiences:</h2>
          <p>
            I also was part of the Teaching assistant team for Computer&apos;s Architecture course back in university.
            I worked as Lab and Classes asisstant for five semesters (2019 - 2021), mainly grading student&apos;s tests,
            doing Lab lectures and helping them both in person and remotely. We worked with Vivado Software, the Basys3 Artix-7 FPGA and VHDL.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About