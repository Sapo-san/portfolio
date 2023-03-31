import { React, useState } from 'react'
import PropTypes from 'prop-types'
import './cheatsheet.scss'
import { marked } from 'marked'

import Postgres from './cheatsheets/postgres.md'
import Docker from './cheatsheets/docker.md'
import ArchLinux from './cheatsheets/archlinux.md'

/*
  Funciones
*/
function returnMarkdownHtml(md) {
  var innerHtml = marked.parse(md)
  return <div dangerouslySetInnerHTML={ {__html : innerHtml} }></div>
}

/*
  Constantes
*/
const DefaultCheatsheet = <div className='welcome-cheatsheet'>
    <h1>Cheatsheets</h1>
    <p>Click/Tap the buttons above to load a cheatsheet.</p>
    <p>For programming language cheatsheets, I suggest you check the <a href="https://learnxinyminutes.com/">Learn X in Y minutes</a> website.</p>
  </div>

const Loading = <div className='welcome-cheatsheet'>
    <h2>Loading...</h2>
  </div>

/*
  Componente
*/
const Cheatsheet = ({ cheatsheetId }) => {

  const cheatsheets = {
    ArchLinux: ArchLinux,
    Docker: Docker,
    Postgres: Postgres
  }

  const [isLoading, setIsLoading] = useState(false);
  const [currentCheatsheet, setCurrentCheatsheet] = useState("none")
  const [currentCheatsheetContent, setCurrentCheatsheetContent] = useState("")

  // Estado inicial
  if (cheatsheetId === "none") {
    return (<div className='cheatsheet'>{ DefaultCheatsheet }</div>)
  }

  // Si se escoge alguna cheatsheet...
  if (!isLoading && cheatsheetId != currentCheatsheet) {
    fetch(cheatsheets[cheatsheetId]).then(res => res.text().then(text => {
      setCurrentCheatsheetContent(returnMarkdownHtml(text))
      setCurrentCheatsheet(cheatsheetId)
      setIsLoading(false)
    }))
    setIsLoading(true)
    return (Loading)
  }

  return (<div className='cheatsheet'>{currentCheatsheetContent}</div>)
}


Cheatsheet.propTypes = {
  cheatsheetId: PropTypes.string
}

export default Cheatsheet