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
                        <p>Hey there. Thanks for dropping by! My friends call me Cris and I am a proudly self-taught Software Developer. I love building responsive websites from scratch using bleeding edge technologies like React, Gatsby and Nextjs.</p>
                        <p>My non-tech roles have allowed me to gain exceptional soft skills and communication skills.  My passion for Software Development coupled with my inate curiosity and the help of caffeine has allowed me to gain my developer skills inspite of my non-tech 9-5 job.</p>
                        <p>Other than the vast opportunities and possibilities that tech has to offer, birthing ideas to life through code and seeing it improve lives and productivity of the users is what excites me the most about being a developer.</p>
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
