import React from 'react'
import { toolIcons } from '../utils/links'

const About = () => {
    return (
        <section className='section about'>
            <h2 className='section-title'>about me</h2>
            <span className='watermark'>
                <h1>about</h1>
            </span>
            <div className="about-center">
                <article className='about-info'>
                    <div className="about-text">
                        <p>Thanks for dropping by! My friends call me Cris. I am a proudly self-taught Software Developer. I love building responsive web apps from scratch using bleeding edge technologies like React, Gatsby and Nextjs.</p>

                        <p>Other than the vast opportunities and possibilities that Software Development has to offer, birthing ideas to life through code, seeing it improve the lives and productivity of the users, and just learning new things are what excites me the most about being a developer.</p>
                    </div>
                    <div className="about-tools">
                        <h3>Skills and Tools</h3>
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