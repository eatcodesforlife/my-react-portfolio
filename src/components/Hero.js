import React from 'react'
import hero from '../imgs/hero.svg'

const Hero = () => {
    return (
        <section className='hero section'>
          <div className="hero-center">
            <article className="hero-info">
              <h1>Cris</h1>
              <h1>Acosta</h1>
              <h3>Frontend Developer</h3>
            </article>
            <article className='hero-img'>
              <img src={hero} alt="hero"/>
            </article>
          </div>
        </section>
    )
}

export default Hero
