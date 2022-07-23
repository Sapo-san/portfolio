import React from 'react'
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {

    const location = useLocation()

    if (location.pathname === '/') {
        return null;
    }

    return (
        <nav className='Navbar flex row centered'>
            <NavLink className="NavLink" to="/">Landing Page</NavLink>
            <NavLink className="NavLink" to="/home">Home</NavLink>
        </nav>
  )
}

export default Nav