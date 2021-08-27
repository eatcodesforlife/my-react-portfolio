import React from 'react'
import Hero from './Hero'
import About from './About'
import Connect from './Connect'
import Projects from './Projects'


const Home = () => {
    return (
        <div>
            <Hero />     
            <Projects />
            <About />
            <Connect />
        </div>
    )
}

export default Home
