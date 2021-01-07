import React from 'react'
import { social } from '../utils/links'

const Connect = () => {
    return (
        <section className='section contactme'>
            <h2 className='section-title'>Connect with me</h2>
            <div className="underline"></div>
            <div className="contactme-center">
                <ul className="contactme-social">
                    {
                        social.map( ({id, url, icon}) => (
                            <li key={id} className="contactme-link">
                                <a href={url} target='_blank' rel='noreferrer'>
                                    {icon}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <form className='form' name='contact' action="post">
                    <input type="hidden" name="form-name" value='contact'/>
                    <div className="input-container">
                        <div className="form-control">
                        <input placeholder='YOUR NAME' type="text" name='name' required/>
                        </div>
                        <div className="form-control">
                            <input placeholder='YOUR EMAIL' type="email" name='email' required/>
                        </div>                
                        <div className="form-control">
                            <textarea placeholder='YOUR MESSAGE' type="text" name='name' required/>
                        </div>
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Connect
