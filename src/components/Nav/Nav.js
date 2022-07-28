import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {

    const [showNavInMobile, setShowNavInMobile] = useState(false);
    const [navLinkContainerClass, setNavLinkContainerClass] = useState('burger-container hide')
    const [navbarClass, setNavbarClass] = useState('navbar flex row centered')

    const location = useLocation()

    useEffect(() => {
        
        if (showNavInMobile) {
            setNavLinkContainerClass('navlink-container')
            setNavbarClass('navbar flex row centered fullOpacity')

        } else {
            setNavLinkContainerClass('navlink-container hide')
            setNavbarClass('navbar flex row centered')

        }

    }, [showNavInMobile])
    


    if (location.pathname === '/') {
        return null;
    }

    return (
        <nav className={navbarClass}>
            <div className="burger-container" >
                <div className='burger-limit' onClick={() => {
                setShowNavInMobile(!showNavInMobile)
                 }}>
                    <div className='burger-line'></div>
                    <div className='burger-line'></div>
                    <div className='burger-line'></div>
                </div>
            </div>

            <div className={navLinkContainerClass}>
                <NavLink className="navLink" to="/" onClick={() => {
                    setShowNavInMobile(false)
                }}>Welcome</NavLink>
                <NavLink className="navLink" to="/home" onClick={() => {
                    setShowNavInMobile(false)
                }}>Home</NavLink>
                <NavLink className="navLink" to="/about" onClick={() => {
                    setShowNavInMobile(false)
                }}>About</NavLink>
                <NavLink className="navLink" to="/utility" onClick={() => {
                    setShowNavInMobile(false)
                }}>Utility</NavLink>
            </div>

            
        </nav>
  )
}

export default Nav