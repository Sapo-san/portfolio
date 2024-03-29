import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <div className='navslide flex centered column'>
      <div className='home flex centered column'>
        <div className='home-text'>
          <h1 className='home-centered'>Hello again!</h1>
          <p>I don&apos;t want to have this website just as my portfolio
            so I&apos;ll be adding new features to it from time to time.</p>

          <p>I recently added some simple cheatsheets and guides I previously made to make my work easier for me (or other Jr devs).</p>

          <p>These were originally for personal use but I am now sharing them here (See &quot;Utility&quot; in Navbar). Hope they are useful to you if you check them out.</p>

          <h1 className='home-centered'>Stay tuned for more 👀</h1>
        </div>
      </div>
    </div>
  )
}
export default Home;