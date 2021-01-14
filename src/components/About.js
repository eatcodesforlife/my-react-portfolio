import React from 'react'
import me from '../imgs/me.svg'
import { toolIcons } from '../utils/links'

const About = () => {
    return (
        <section className='section about'>
            <h2 className='section-title'>about me</h2>
            <div className="underline"></div>
            <div className="about-center">
                <article className='about-info'>
                    <article className="about-img">
                        <img src={me} alt="cris"/>
                    </article>
                    <div className="about-text">
                        <p>Hey, beautiful person who took the time to drop by my page! My name is Cris. I am a self-taught Software Developer and I build responsive websites from scratch.</p>
                        <p>Other than coffee and tea, birthing ideas to life through code and seeing it improve lives and productivity of users is what excites me the most about being a Software Developer.</p>
                        {/* <p>I am currently looking for my first job as a Software Developer.</p> */}
                    </div>
                    <div className="about-tools">
                        <h3>my tools</h3>
                        <ul className='about-info-tools'>
                            {
                                toolIcons.map(({ id, icon, text }) => (
                                    <li key={id} className='tools-icon'>
                                        {icon}
                                        <span>{text}</span>
                                    </li>
                                ))
                            }
                            <li>Express.js</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About
