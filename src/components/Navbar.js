import React, { useState, useEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { navlinks, social } from '../utils/links'
import logo from '../imgs/mylogo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [ isShowMenu, setIsShowMenu ] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)



    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(isShowMenu){
            linksContainerRef.current.style.height = `${linksHeight}px`
        }else {
            linksContainerRef.current.style.height = '0px'
        }

    }, [isShowMenu])


    return (
        <nav className='nav-center'>
            <div className="nav-header">
                <Link to={navlinks[0].url}>
                    <img src={logo} alt="logo" className='logo'/>
                </Link>
                <button className={`nav-toggle ${isShowMenu && "rotate"}`} onClick={() => setIsShowMenu(!isShowMenu)}>
                    <FaBars />
                </button>
            </div>
            <div className="links-container" ref={linksContainerRef}>
                <ul className="links" ref={linksRef}>
                    {
                        navlinks.map(({id, url, text}) => (
                            <li key={id}>
                                <Link to={url} className='links-url'>{text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ul className="social-icons">
                {
                    social.map(({id, url, icon}) => (
                        <li key={id}>
                            <a href={url} target='_blank' rel='noreferrer'>{icon}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar
