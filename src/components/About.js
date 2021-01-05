import React from 'react'
import me from '../imgs/me.svg'
import { DiHtml5, DiCss3, DiJsBadge, DiHeroku, DiSass, DiNodejs, DiMongodb, DiReact} from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'

const About = () => {
    return (
        <section className='section about'>
            <h2 className='section-title'>about me</h2>
            <div className="underline"></div>
            <div className="about-center">
                <article className="about-img">
                    <img src={me} alt="cris"/>
                </article>
                <article className='about-info'>
                    <p>Hey, beautiful person who took the time to drop by my page! My name is Cris. I design and build websites from scratch.</p>
                    <p>Other than coffee and tea, birthing ideas to life through code and seeing it improve lives and productivity of users is what excites me the most about being a Software Developer.</p>
                    <p>I am currently looking for my first job as a Software Developer.</p>
                    <div className="about-tools">
                        <h3>my tools</h3>
                        <ul className='about-info-tools'>
                            <li className='tools-icon'><DiJsBadge /></li>
                            <li className='tools-icon'><DiHtml5 /></li>
                            <li className='tools-icon'><DiCss3 /></li>
                            <li className='tools-icon'><DiHeroku /></li>                            
                            <li className='tools-icon'><DiSass /></li>
                            <li className='tools-icon'><BsFillBootstrapFill /></li>
                            <li className='tools-icon'><DiMongodb /></li>
                            <li>Express.js</li>
                            <li className='tools-icon'><DiReact /></li>
                            <li className='tools-icon'><DiNodejs /></li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About
