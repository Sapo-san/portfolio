import React, {useState} from 'react'
import './utility.scss'

import Cheatsheet from './Cheatsheet/cheatsheet'

const Utility = () => {

  const avaibleCheatsheets = [
    "ArchLinux",
    "Docker",
    "Postgres",
  ]

  const [currentCheatsheet, setCurrentCheatsheet] = useState("none")

  return (
    <div className='slide flex centered column'>
      <div className='utility flex column'>
        <div className='cheatsheet-selector'>
          {/* Cheatsheet selector */}
          <input className="cheatsheets-search" type="text" placeholder='🔎 Search Not functional yet'></input>
          <div className='avaible-cheatsheets'>
            {avaibleCheatsheets.map((ac => {
              return <div
              key={ac}
              className="avaible-cheatsheet-button"
              onClick={(e) => {
                setCurrentCheatsheet(e.target.innerText)
              }}>
                {ac}
              </div>
            }))}
          </div>
        </div>
        <div className='cheatsheet-container'>
          {/* Displayed Cheatsheet */}
          <Cheatsheet cheatsheetId={currentCheatsheet}/>
        </div>

      </div>
    </div>
  )
}

export default Utility