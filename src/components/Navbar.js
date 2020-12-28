import React, { useState, useEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { navlinks, social } from '../utils/links'
import logo from '../logosm.svg'

const Navbar = () => {

    const [ isShowMenu, setIsShowMenu ] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)



    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        console.log(linksHeight)
        if(isShowMenu){
            linksContainerRef.current.style.height = `${linksHeight}px`
        }else {
            linksContainerRef.current.style.height = '0px'
        }

    }, [isShowMenu])


    return (
        <nav className='nav-center'>
            <div className="nav-header">
                <img src={logo} alt="logo" className='logo'/>
                <button className={`nav-toggle ${isShowMenu && "rotate"}`} onClick={() => setIsShowMenu(!isShowMenu)}>
                    <FaBars />
                </button>
            </div>
            <div className="links-container" ref={linksContainerRef}>
                <ul className="links" ref={linksRef}>
                    {
                        navlinks.map(({id, url, text}) => (
                            <li key={id}>
                                <a href={url} className='links-url'>{text}</a>
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
