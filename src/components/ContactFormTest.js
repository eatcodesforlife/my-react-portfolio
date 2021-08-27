import React, { useState } from 'react'
import SocialLinks from './SocialLinks'



const ContactFormTest = () => {

  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    message: ""
  })
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

  }

  return (
    <section className='section contactme'>
            <h2 className='section-title'>Connect with me</h2>
            <div className="underline"></div>
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
                          <input placeholder='YOUR NAME' type="text" name='name' 
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-control">
                          <input placeholder='YOUR EMAIL' type="email" name='email' 
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>                
                        <div className="form-control">
                          <textarea placeholder='YOUR MESSAGE' type="text" name='message' 
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                    </div>
                    <button type='submit' onClick={()=>handleSubmit}>Send</button>
                </form>
            </div>
        </section>
  )
}

export default ContactFormTest
