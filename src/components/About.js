import React from 'react'
import me from '../imgs/me.svg'


const About = () => {
    return (
        <section className='section about'>
            <h2 className='section-title'>about me</h2>
            <div className="about-center">
                <article className="about-img">
                    <img src={me} alt="cris"/>
                </article>
                <article className='about-info'>
                    <p>Hey, beautiful person who took the time to drop by my page! My name is Cris. I design and build websites from scratch.</p>
                    <p>Other than coffee and tea, birthing ideas to life birthing ideas to life through code and seeing it improve lives and productivity of users is what excites me the most about being a Software Developer.</p>
                    <p>I am currently looking for my first job as a Software Developer.</p>
                    <h3>Tools that I currently use</h3>
                    <ul className='about-info-tools'>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Sass</li>
                        <li>Bootstrap</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default About
