import React from 'react'
import { ReactPropTypes } from 'react'
import './cheatsheet.scss'
import { marked } from 'marked'

import { Postgres } from './cheatsheets/postgres'
import { Docker } from './cheatsheets/docker'
import { ArchLinux } from './cheatsheets/archlinux'

const Cheatsheet = ({ cheatsheetId }) => {

  this.React

  const DefaultCheatsheet = <div className='welcome-cheatsheet'>
    <h1>Cheatsheets</h1>
    <p>Click/Tap the buttons above to load a cheatsheet.</p>
    <p>For programming language cheatsheets, I suggest you check the <a href="https://learnxinyminutes.com/">Learn X in Y minutes</a> website.</p>

  </div>

  function returnCheatsheet(cheatsheetId) {
    switch (cheatsheetId) {
      case "Postgres":
        return returnMarkdownHtml(Postgres)

      case "Docker":
        return returnMarkdownHtml(Docker)
      
      case "ArchLinux":
        return returnMarkdownHtml(ArchLinux)
    
      default:
        return DefaultCheatsheet;
    }

  }

  function returnMarkdownHtml(md) {
    var innerHtml = marked.parse(md)
    return <div dangerouslySetInnerHTML={ {__html : innerHtml} }></div>
  }

  return (<div className='cheatsheet'>{returnCheatsheet(cheatsheetId)}</div>)
}

Cheatsheet.propTypes = {
  cheatsheetId: ReactPropTypes.string
}

export default Cheatsheet