import React from 'react'
import { toolIcons } from '../utils/links'

const About = () => {
    return (
        <section className='section about'>
            <h2 className='section-title'>about me</h2>
            <div className="watermark-container">
                <span className='watermark'>
                    <h1>about</h1>
                </span>
            </div>
            <div className="about-center">
                <article className='about-info'>
                    <div className="about-text">
                        <p>Hi there! My name is Cris. I'm a front-end developer with a passion for creating visually appealing and user-friendly web experiences. Although I'm still in the early stages of my career, I have a strong foundation in the latest technologies, including React, TypeScript, Next.js, SASS, and Tailwind.</p>

                        <p>
                        I love the challenge of finding creative solutions to bring my ideas to life. I'm constantly learning and expanding my skill set to stay up-to-date with the latest trends in front-end development.
                        </p>
                        <p>
                        I believe that the front-end is the face of a website or application, and it's important to make a lasting impression on users. Whether I'm working on a simple landing page or a complex e-commerce platform, I strive to deliver the best possible experience to users.
                        </p>
                        <p>
                        I'm eager to dive into new projects and work with a team of developers to bring great ideas to life. If you're looking for a driven and enthusiastic front-end developer, I'd love to hear from you!
                        </p>
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
