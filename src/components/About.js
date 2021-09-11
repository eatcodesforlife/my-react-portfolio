import React from 'react'
import { toolIcons } from '../utils/links'

const About = () => {
    return (
        <section className='section about'>
            <h2 className='section-title'>about me</h2>
            <div className="underline"></div>
            <div className="about-center">
                <article className='about-info'>
                    <div className="about-text">
                        <p>Thanks for dropping by! My friends call me Cris. I am a proudly self-taught Developer. I love building responsive websites from scratch using bleeding edge technologies like React, Gatsby and Nextjs.</p>
                        
                        <p>Other than the vast opportunities and possibilities that Software Development has to offer, birthing ideas to life through code, seeing it improve the lives and productivity of the users, and just learning new things are what excites me the most about being a developer.</p>
                    </div>
                    <div className="about-tools">
                        <h3>Tools that I use to build stuff</h3>
                        <div className="underline"></div>
                        <ul className='about-info-tools'>
                            {
                                toolIcons.map(({ id, icon, text }) => (
                                    <li key={id} className='tools-icon'>
                                        {icon}
                                        <span>{text}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About
