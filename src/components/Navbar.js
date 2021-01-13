import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../imgs/mylogo.svg'
import Sidemenu from './Sidemenu'

const Navbar = () => {

    const [ isShowMenu, setIsShowMenu ] = useState(false)

    
    return (
        <div className="nav-container">
            <nav className='nav'>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <button className={`nav-button ${isShowMenu && "rotate"}`} onClick={() => setIsShowMenu(!isShowMenu)}>
                        <FaBars />
                    </button>
                </div>
            </nav>
            <Sidemenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu}/>
        </div>
    )
}

export default Navbar
