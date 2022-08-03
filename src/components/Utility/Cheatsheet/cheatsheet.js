import React from 'react'
import './cheatsheet.scss'
import { marked } from 'marked'

import { Postgres } from './cheatsheets/postgres'
import { Docker } from './cheatsheets/docker'
import { ArchLinux } from './cheatsheets/archlinux'

const Cheatsheet = ({ cheatsheetId }) => {

  const DefaultCheatsheet = <div>

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

export default Cheatsheet