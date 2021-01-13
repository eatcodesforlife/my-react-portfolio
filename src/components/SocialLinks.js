import React from 'react'
import { social } from '../utils/links'

const SocialLinks = () => {
    return (
        <>
            <ul className="social-links">
                {
                    social.map( ({id, url, icon}) => (
                        <li key={id} >
                            <a href={url} target='_blank' rel='noreferrer'>
                                {icon}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default SocialLinks
