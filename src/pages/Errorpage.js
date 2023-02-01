import React from 'react'
import HomeButton from '../components/HomeButton'

const Errorpage = () => {
    return (
        <section className='section error'>
           <div className="section-center">
            <span>
             <h1> Ooops!</h1>
            </span>
            <h2>Page not found</h2>
            <HomeButton />
           </div>
        </section>
    )
}

export default Errorpage
