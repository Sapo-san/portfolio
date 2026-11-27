import './home.scss'

import Nav from '../Nav/Nav'

const Home = () => {
  return (
    <div className='home-container flex column'>
      <div className='home'>
        <Nav></Nav>
        <div className='home-text'>
          <h1 className='home-centered'>Hello again!</h1>
          <p>I don&apos;t want to have this website just as my portfolio
            so I&apos;ll be adding things to it from time to time.</p>

          <p>Meanwhile, here&apos;s a list of interesting stuff to check out 👀</p>

          <h2>🖥️ Tech Related:</h2>
          <ul>
            <li>
              <a href='https://devdocs.io/' target="_blank" rel="noreferrer">
                DevDocs.io 
              </a> (<a href='https://github.com/freeCodeCamp/devdocs' target="_blank" rel="noreferrer">
                  Repo
                </a>) : Extremely useful all-in-one developer (programming languages, libraries, frameworks) documentation.
            </li>
            <li>
              <a href='https://roadmap.sh/' target="_blank" rel="noreferrer">
                roadmap.sh
              </a> (<a href='https://github.com/kamranahmedse/developer-roadmap' target="_blank" rel="noreferrer">
                  Repo
                </a>): Community driven roadmaps, articles and resources for developers
            </li>
            <li>
              <a href='https://publish.obsidian.md/addielamarr/01+Cybersecurity+Mastery' target="_blank" rel="noreferrer">
                Cybersecurity Mastery | addielamarr
              </a>: Cybersecurity notes to check out form an expert and content creator. She cool.
            </li>
            <li>
              <a href='https://github.com/cloudcommunity/Free-Certifications' target="_blank" rel="noreferrer">
                Free Certifications | Github Repo
              </a>
            </li>
            <li>
              <a href='https://app.daily.dev/' target="_blank" rel="noreferrer">
                daily.dev 
              </a>: A newsfeed for developers. Can customized and it&apos;s free (it also has paid features). Beware of AI slop though.
            </li>
            <li>
              ...
            </li>
          </ul>

          <h2>📎 Random Tools I use for work/stuff:</h2>
          <ul>
            <li>
              <a href='https://excalidraw.com/' target="_blank" rel="noreferrer">
                Excalidraw
              </a> (<a href='https://github.com/excalidraw/excalidraw' target="_blank" rel="noreferrer">
                  Repo
                </a>): Free & open source collaborative whiteboard, the best of all of the ones I&apos;ve tried.
            </li>
            <li>
              <a href='https://obsidian.md/' target="_blank" rel="noreferrer">Obsidian.md</a>: Best note taking app.
            </li>
            <li>
              <a href='https://github.com/ArcadeRenegade/SidebarDiagnostics' target="_blank" rel="noreferrer">
                SidebarDiagnostics
              </a>: Sidebar tool for windows to monitor your computer stats (Like CPU Temp, Speed, GPU Temp...). 
              Check repository issues before installing.
            </li>
            <li>
              <a href='https://zen-browser.app/' target="_blank" rel="noreferrer">
                Zen
              </a> (<a href='https://github.com/zen-browser/desktop' target="_blank" rel="noreferrer">
                  Repo
                </a>): My current web browser 🌎
            </li>
            <li>
              <a href='https://github.com/santoru/shcheck' target="_blank" rel="noreferrer">
                shcheck
              </a>: Check security headers on a target website. Useful for QA.
            </li>
            <li>
              ...
            </li>
          </ul>
          <h2>Things I personally find <i>interesting</i> for some reason 👀</h2>
          <ul>
            <li>
              <a href='https://github.com/shinyquagsire23/OpenJKDF2' target="_blank" rel="noreferrer">
                OpenJKDF2
              </a>: OpenJKDF2 is a function-by-function reimplementation
              of DF2 in C. A really cool reverse-engineered remake of the engine
              of one of my favorite games from my childhood. Really fascinating.
            </li>
            <li>
              <a href='https://jk2mv.org' target="_blank" rel="noreferrer">
                JK2MV
              </a> (<a href='https://github.com/mvdevs/jk2mv' target="_blank" rel="noreferrer">
                  Repo
                </a>): Jedi Outcast Multiplayer Client. Hehe.
            </li>
            <li>
              <a href='https://pumpkinmc.org/' target="_blank" rel="noreferrer">
                Pumpkin
              </a> (<a href='https://github.com/Pumpkin-MC/Pumpkin' target="_blank" rel="noreferrer">
                  Repo
                </a>): Minecraft Server written in Rust. Still lacking some features last time I checked.
            </li>
            <li>
              <a href='https://github.com/ruffle-rs/ruffle' target="_blank" rel="noreferrer">
                Ruffle
              </a>: Adobe Flash Player emulator written in the Rust. Very Nostalgic.
            </li>
            <li>...</li>
          </ul>
          <h1 className='home-centered'>Stay tuned for more 🫡</h1>
        </div>
      </div>
    </div>
  )
}
export default Home;
