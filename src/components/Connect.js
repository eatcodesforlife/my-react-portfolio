import React from 'react'
import SocialLinks from './SocialLinks'

const Connect = () => {

    
    return (
        <section className='section contactme'>
            <h2 className='section-title'>Contact me</h2>
            <span className='watermark'>
                <h1>contact</h1>
            </span>
            <div className="contactme-center">
                <SocialLinks />
                <form 
                    className='form' 
                    name='contact' 
                    method="post"
                    data-netlify='true'
                    netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value='contact'/>
                    <div hidden>
                        <input name='bot-field'/>
                    </div>
                    <div className="input-container">
                        <div className="form-control">
                        <input placeholder='YOUR NAME' type="text" name='name' required/>
                        </div>
                        <div className="form-control">
                            <input placeholder='YOUR EMAIL' type="email" name='email' required/>
                        </div>                
                        <div className="form-control">
                            <textarea placeholder='YOUR MESSAGE' type="text" name='message' required/>
                        </div>
                    </div>
                    <button type='submit' >Send</button>
                </form>
            </div>
        </section>
    )
}

export default Connect
