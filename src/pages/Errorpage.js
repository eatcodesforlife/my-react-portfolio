import React from 'react'
import HomeButton from '../components/HomeButton'
import Test from '../components/test/Test'

const Errorpage = () => {
    return (
        <section className='section error'>
            <div className="watermark-container">
                <span className="watermark">
                    <h1>404</h1>
                </span>
            </div>
           <div className="section-center">
            <span>
             <h1> Ooops!</h1>
            </span>
            <h2>Page not found</h2>
            <HomeButton />
           </div>
           <Test/>
        </section>
    )
}

export default Errorpage
