import React from 'react';


// import arrowImg from '../imgs/arrow.svg'

const Hero = () => {
    return (
        <section className='hero'>
          <div className="hero-overlay">            
          </div>
          <div className="watermark-container">
            <span className='watermark'>
              <h1>software developer</h1>
            </span>
          </div>
          <div className="hero-center">
            <article className="hero-info">
              <div className='hero-ad'>
                <div className='hero-ad-glass hero-glass-nuemorphism'></div>
                <div>
                  <h3>Let's</h3>
                  <h3><span>build</span></h3>
                  <h3>awesome<span> things</span></h3>
                  <h3>on the</h3>
                  <h3><span>web</span>.</h3>
                </div>
              </div>
              {/* <span className='hero-call-to-action'> 
                <div className='hero-call-to-acion-glass hero-glass-nuemorphism'></div>
                <a href="#projects-section"><p>explore</p></a>
                <a href="#projects-section">
                  <img src={arrowImg} alt="arrow" />
                </a>
              </span> */}
            </article>
          </div>
        </section>
    )
}

export default Hero
