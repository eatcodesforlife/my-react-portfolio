import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../imgs/mylogo.svg'

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className='nav'>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="nav-button">
                    <FaBars />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
