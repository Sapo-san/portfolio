import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <div className='navslide flex centered column'>
      <div className='home flex centered column'>
        <div className='home-text'>
          <h1 className='home-centered'>Hello again!</h1>
          <p>I don&apos;t want to have this website just as my portfolio
            so I&apos;ll be adding things to it from time to time.</p>

          <p>Meanwhile, here's a list of interesting stuff to check out 👀</p>

          <h2>🖥️ Tech Related:</h2>
          <ul>
            <li>
              <a href='https://roadmap.sh/'>
                roadmap.sh | Developer roadmaps
              </a>
            </li>
            <li>
              <a href='https://github.com/cloudcommunity/Free-Certifications'>
                Free Certifications | Github Repo
              </a>
            </li>
            <li>
              ...
            </li>
          </ul>

          <h2>📎 Tools for work/stuff:</h2>
          <ul>
            <li>
              <a href='https://excalidraw.com/'>
                Excalidraw
              </a> (<a href='https://github.com/excalidraw/excalidraw'>
                  Repo
                </a>): Free & open source collaborative whiteboard, the best of all of the ones I've tried.
            </li>
            <li>
              <a href='https://obsidian.md/'>Obsidian.md</a>: Best note taking app. 
            </li>
            <li>
              <a href='https://github.com/ArcadeRenegade/SidebarDiagnostics'>
                SidebarDiagnostics
              </a>: Sidebar tool to monitor your computer stats (Like CPU Temp, Speed, GPU Temp...). 
              Check repository issues before installing.
            </li>
            <li>
              ...
            </li>
          </ul>
          <h2>Things I personally find <i>interesting</i> for some reason 👀</h2>
          <ul>
            <li>...</li>
          </ul>


      

          

          <h1 className='home-centered'>Stay tuned for more 🫡</h1>
        </div>
      </div>
    </div>
  )
}
export default Home;