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
                        <p>Hey, beautiful person who took the time to drop by my page! My friends call me Cris. I am a self-taught Frontend Developer and I build responsive websites from scratch.</p>
                        <p>My non-tech roles have allowed me to gain exceptional soft skills and communication skills. I have gained my developer skills through sheer will and determination, passion, and love for software. Currently, I am looking for my first full-time development role with mentorship and room to grow.</p>
                        <p>Other than coffee and tea, birthing ideas to life through code and seeing it improve lives and productivity of users is what excites me the most about being a developer.</p>
                    </div>
                    <div className="about-tools">
                        <h3>my tools</h3>
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
