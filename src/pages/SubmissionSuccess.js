import React from 'react';

import Confetti from 'react-confetti'
import HomeButton from '../components/HomeButton'

const SubmissionSuccess = () => {
  return (
    <section className='section' style={{overflow: 'hidden'}}>
      <div className="section-center">

       <span><h1>Hurray! </h1></span>
      <h1 style={{
        textTransform: 'lowercase'
      }}>Your message has been sent!!!</h1>

        <h3 style={{
        textTransform: 'lowercase'
      }}>I am looking forward to chatting with you.</h3>
        <HomeButton/>
      </div>
      <Confetti width={window.innerWidth} height={window.innerHeight}/>

    </section>
  )
}

export default SubmissionSuccess