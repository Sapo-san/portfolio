import React from 'react'
import swords from '../../img/swords-header.webp'
import './Hema.scss'

import Nav from '../Nav/Nav'

const Hema = () => {
  return (
    <div className='home-container flex column'>
      <div className='home'>
        <Nav></Nav>
        <div className='home-text'>
          <img className='sword-img' src={swords} alt="swords-header"></img>
          <h1 className='hema-title'>HEMA?</h1>

          <p>Picked your curiosity? Good! I can help you with that:</p> 

          <p>⚔️ <b>Historical European Martial Arts</b>, HEMA for short, are martial arts (and/or combat
          systems for self defense) practiced by people from the Middle Ages and the beginning 
          of the Renaissance with historical weapons that people of today reenact and practice,
          using the original manuscripts that haven't been lost time as a guide...</p>
          
          <p>And since that is a <b>VERY</b> broad topic, I'll narrow it to my experience with it both as 
          sport and a hobby: I started Longsword (<a href='https://en.wikipedia.org/wiki/Feder_(fencing)'>Feder</a>) training
          out of curiosity in Santiago with the <a href='https://www.instagram.com/aehch_chile/' target="_blank">AEHCH</a> community
          back in 2018 to 2022 and it was one the best thing that have happened to me.
          </p> 
          
          <p>Here's some videos about it so you can check it out:</p>

          <ul>
            <li>
              <b>Best Looking Longsword Exchanges | HEMA </b>:
              This is what I used to train for! The gear is really expensive so whenever I got to participate in exchanges my 
              fellow fencers would lend me some (I was in uni back then so not much budget for it lol). I find it funny that
              video's title explicitly says "Best Looking" because usually most exchanges get really messy and hard to film.
            </li>
          </ul>
          <div className='centered-video'>
            <iframe className='iframe-video' src="https://www.youtube.com/embed/m3MIwa5AH9U?si=FxXj-rxga4ZzqH3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <ul>
            <li>
              <b>Expert Saber Sparring: Lee Smith vs Richard Marsden</b>:
              There's more weapons in HEMA than just Longsword. I've been learing a bit of Saber by myself too but I'm
              still a newbie with it.
            </li>
          </ul>
          <div className='centered-video'>
            <iframe className='iframe-video' src="https://www.youtube.com/embed/n5w2Mh6CyXo?si=8eVwlEp0h5aTEwUL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <ul>
            <li>
              <b>Longsword: Josh vs David</b>:
              I really like <a href='https://www.youtube.com/@SellswordAcademy'>Sellswords Academy</a> videos since it has lots of
              tutorials for many weapons. I also recommend <a href='https://www.youtube.com/@SellswordArts'>Sellswords Arts</a> for
              more humorous/lighthearted content related to HEMA and its related communities/fandoms.

              Shoutout to David, Clark and Megan for running such awesome channels!
            </li>
          </ul>
          <div className='centered-video'>
            <iframe className='iframe-video' src="https://www.youtube.com/embed/VwHVw8kNB-U?si=YU0SJZ-Kz9GNFBhJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <ul>
            <li>
              <b>Iron Triangle Explained (HEMA) - Foundations of Sword Fighting</b>:
              I also like and recommend <a href='https://www.youtube.com/@FalseEdgeHEMA'>False Edge's Channel</a> since it has lots of
              proper (awesome) fencing footage to learn from. AFAIK He mainly focuses in Saber though.
            </li>
          </ul>
          <div className='centered-video'>
            <iframe className='iframe-video' src="https://www.youtube.com/embed/xAI-yd8epAQ?si=5O9G5HQxqzrpfkjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <p>Other links:</p>

          <ul>
            <li>
              <b>
                <a href='https://www.instagram.com/aehch_chile/' target="_blank">(Instagram) Academia de Esgrima Histórica de Chile</a>
              </b>: community I used to train with, they are <b>awesome</b>.
            </li>
            <li>
              <b>
                <a href='https://www.instagram.com/hema_chile_/' target="_blank">(Instagram) HEMA Chile</a>: 
              </b> Association of HEMA clubs in Chile.
            </li>
            <li>
              <b>
                <a href='https://blackfencer.com/en/' target="_blank">Black Fencer Store</a>: 
              </b> One of the many stores AEHCH used to buy swords and gear from. I Only got to buy from this one and I recommend it.
            </li>
          </ul>

          <img className='sword-img-reversed' src={swords} alt="swords-header"></img>          
        </div>
      </div>
    </div>
  )
}
export default Hema;