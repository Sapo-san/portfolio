import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    const location = useLocation()

    if (location.pathname === '/') {
        return null;
    }

    return (
        <nav className='navbar flex row centered'>
            <div className='navlinks flex row centered'>
                <NavLink className="navLink" to="/">Welcome</NavLink>
                
                <NavLink className="navLink" to="/home">Home</NavLink>
            </div>
        </nav>
  )
}

export default Nav