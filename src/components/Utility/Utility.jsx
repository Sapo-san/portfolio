import {useState} from 'react'
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
  "GoogleCloudSDK",
  "ApacheTomcatSSL"
].sort()


/*
  Componente
*/
const Utility = () => {

  /*
    Funciones del componente
  */
  function filterCheatsheetByTextInput(textArray, cheatsheets) {
    
    // Si está vacio, retornar todo (no se ha escrito nada)
    if (!textArray[0]) {
      return cheatsheets
    }
    
    let filtered = cheatsheets.filter((cs) => {
      let anyMatches = false;

      textArray.forEach((text) => {
        // Filtramos y buscamos
        if (cs.toLowerCase().includes(text.toLowerCase())) {
          anyMatches = true
          return
        }
        return false
      })

      return anyMatches
    })

    return filtered
  }

  function returnCheatSheetButtons(listOfCheatsheets) {
    let cheatsheets = listOfCheatsheets.map((ac => {
      return <div
      key={ac}
      className="avaible-cheatsheet-button"
      onClick={(e) => {
        setCurrentCheatsheet(e.target.innerText)
      }}>
        {ac}
      </div>
    }))

    // Si no se encontraron resultados...
    if (cheatsheets.length === 0) {
      
      let style = {
        'width': '100%',
        'text-align': 'center', 
        'margin-top': '0.5em'
      }

      return <label style={style}>No cheatsheets found</label>
    }
    
    // Si hay resultados, mostrar
    return cheatsheets
  }

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
              {returnCheatSheetButtons(filterCheatsheetByTextInput(searchInput.split(' '), avaibleCheatsheets))}
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