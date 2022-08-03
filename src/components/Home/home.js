import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <div className='slide flex centered column'>
      <div className='home flex centered column'>
        <h1>Hello again!</h1>
        <p>I don&apos;t want to have this website just as my portfolio
          so I&apos;ll be adding new features to it from time to time.</p>

        <p>I recently added some simple cheatsheets / guides I previously made to make working easier for me (or other Jr devs).</p>

        <p>These were originally for personal use but I am now sharing them here (See &quot;Utility&quot; in Navbar). Hope they are useful if you check them out.</p>

        <h1>Stay tuned for more 👀</h1>
      </div>
    </div>
  )
}
export default Home;