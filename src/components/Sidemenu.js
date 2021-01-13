import React from 'react'
import { navlinks } from '../utils/links'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const Sidemenu = ({ isShowMenu, setIsShowMenu }) => {
    return (
        <aside className={`menu-container ${isShowMenu && "show"}`}>
            <div className={`menu-social ${isShowMenu && "show"}`} >
                <SocialLinks />
            </div>
            <div className={`menu-links ${isShowMenu && "show"}`}>
                <ul>
                    {
                        navlinks.map( ({ id, url, text }) => (
                            <li key={id}>
                                <Link to={url} className='url-text'>
                                    <h3 onClick={() => setIsShowMenu(!isShowMenu)}>{text}</h3>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </aside>
    )
}

export default Sidemenu
