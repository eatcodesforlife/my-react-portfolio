import React from 'react'
import Hero from './Hero'
import About from './About'
// import Connect from './Connect'
import Projects from './Projects'
import ContactFormTest from './ContactFormTest'



const Home = () => {
    return (
        <div>
            <Hero />     
            <Projects />
            <About />
            {/* <Connect /> */}
            <ContactFormTest />
        </div>
    )
}

export default Home
