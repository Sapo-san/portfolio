//import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className='navslide flex centered column'>
      <div className='about flex centered column'>
        <div className='about-text'>
          <h1 className='about-title'>About me</h1>
          <h2 className='about-title'>Previous Working Experiences</h2>
          <p>
            Here&apos;s a list of things I&apos;ve worked at as a freelancer. Most of them are landing pages with a contact form for small businesses.
          </p>
          <p>
            The list is not that long since I actually found a fulltime job and I don&apos;t have much time to freelance on the side
          </p>
          <h2>Behold! My previous freelancing experience:</h2>
          <ul className='about-pwe-list'>
            <li>
              <b><a href="https://www.cirugiadelaobesidad.cl">cirugiadelaobesidad.cl</a> [November 2023 - April 2024]</b>: Vue + Express combo. Deployed on AWS with S3 & Cloudfront.
            </li>
            <li>
              <b><a href="https://www.vlabogadas.cl">vlabogadas.cl</a> [August 2022 - Current Day]</b>: React + Express combo. Deployed on AWS. A complete redesign of the site is pending 👀
            </li>
            <li>
              <b><s>constructoravenus.cl</s> [November 2021 - December 2021]</b>: <s>React + Express combo. Deployed on AWS with S3 & Cloudfront.</s> Their site is no longer available 🤷
            </li>
            <li>
              <b><a href="https://www.irricoach.cl/">irricoach.cl</a> [March 2021 - Current Day]</b>: Wordpress. I only do monthly maintenance to their site. This wasn&apos;t made by me
            </li>
            <li>
              <b><a href="https://lascardas.cl/">lascardas.cl</a> [January 2021 - February 2021]</b>: Helped them migrate from their old site to their current one (which is on Shoppify) and migrated their mail accounts to Google Workspace.
            </li>
          </ul>
          <h2>Other Experiences:</h2>
          <p>
            I was part of the Teaching assistant team for Computer&apos;s Architecture course back in uni.
            I worked as Lab and Classes asisstant for five semesters (2019 - 2021), mainly grading student&apos;s tests,
            doing Lab lectures and helping them both in person and remotely. We worked with Vivado Software, the Basys3 Artix-7 FPGA and VHDL.
          </p>
          <p>
            Last but not least and also while in uni, I volunteered for a while as betatester
            for <a href="https://www.moddb.com/mods/swgl"> Star Wars Galactic legacy </a>,
            a fanmade expansion for a Star Wars PC Videogame. 
            I had to find bugs in the mod and report them to the modding team so they could be
            fixed ASAP. It was a short but VERY rewarding experience since I love the game
            and the community is very welcoming and dedicated to the mod.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About