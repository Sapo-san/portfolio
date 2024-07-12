import React, {useState} from 'react'
import './utility.scss'

import Cheatsheet from './Cheatsheet/cheatsheet'

/*
  Constantes
*/
const avaibleCheatsheets = [
  "ArchLinux",
  "Docker",
  "Postgres",
  "PythonVenv",
  "FrontendTips",
  "GoogleCloudSDK"
]


/*
  Componente
*/
const Utility = () => {

  /*
    Funciones del componente
  */
  function filterCheatsheetByTextInput(text, cheatsheets) {
    let filtered = cheatsheets.filter((cs) => {
      if (cs.toLowerCase().includes(text.toLowerCase())) {
        return true
      }
      return false
    })

    if (!text) {
      return cheatsheets
    }
    
    return filtered
  }

  function returnCheatSheetButtons(listOfCheatsheets) {
    return listOfCheatsheets.map((ac => {
      return <div
      key={ac}
      className="avaible-cheatsheet-button"
      onClick={(e) => {
        setCurrentCheatsheet(e.target.innerText)
      }}>
        {ac}
      </div>
    }))}

  const [searchInput, setSearchInput] = useState("")
  const [currentCheatsheet, setCurrentCheatsheet] = useState("none")

  return (
    <div className='navslide flex centered column'>
      <div className='utility flex column'>
        <div className='cheatsheet-selector'>
          {/* Cheatsheet finder */}
          <input
            className="cheatsheets-search"
            type="text" placeholder='🔎 Search for a cheatsheet'
            onChange={(e) => setSearchInput(e.target.value)}
            >
          </input>
          
          {/* Cheatsheet buttons */}
          <div className='avaible-cheatsheets-container'>
            <div className='avaible-cheatsheets'>
              {returnCheatSheetButtons(filterCheatsheetByTextInput(searchInput, avaibleCheatsheets))}
            </div>
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