import React, { useState } from 'react'
import SocialLinks from './SocialLinks'



const ContactFormTest = () => {


  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  
  const [ contactFormData, setContactFormData ] = useState( {
    name: '',
    email: '',
    message: ''
  })

  const handeleChange = (e) => {
    setContactFormData({[e.target.name]:e.target.value})
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("/thankyou", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({"form-name": "contact", ...contactFormData })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

  }

  console.log( contactFormData )
  return (
    <section className='section contactme'>
            <h2 className='section-title'>Connect with me</h2>
            <div className="underline"></div>
            <div className="contactme-center">
                <SocialLinks />
                <form 
                    className='form' 
                    name='contact' 
                    action='/thankyou' 
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
                        <input placeholder='YOUR NAME' type="text" name='name' value={contactFormData.name} 
                        onChange={handeleChange}
                        required/>
                        </div>
                        <div className="form-control">
                            <input placeholder='YOUR EMAIL' type="email"  
                            name='email' 
                            value={contactFormData.email}
                            onChange={handeleChange}
                            required/>
                        </div>                
                        <div className="form-control">
                            <textarea placeholder='YOUR MESSAGE' type="text" name='message' value={contactFormData.message} 
                            onChange={handeleChange}
                            required/>
                        </div>
                    </div>
                    <button type='submit' onClick={()=>handleSubmit} >Send</button>
                </form>
            </div>
        </section>
  )
}

export default ContactFormTest
