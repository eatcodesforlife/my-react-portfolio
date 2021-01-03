import React from 'react'

const Connect = () => {
    return (
        <section className='section contact-me'>
            <h2>Connect with me...</h2>
            <form name='contact' action="post">
                <input type="hidden" name="form-name" value='contact'/>
                <div className="form-control">
                    <input type="text" name='name' required/>
                </div>
                <div className="form-control">
                    <input type="email" name='email' required/>
                </div>                
                <div className="form-control">
                    <textarea type="text" name='name' required/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </section>
    )
}

export default Connect
