import SocialLinks from '../components/SocialLinks'
import { redirect } from "react-router-dom";


const Connect = () => {

    const submitHandler = (e) =>{
        // e.preventDefault();
        let myForm = document.getElementById("contact-form");
        let formData = new FormData(myForm);
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
        })
        .then(() =>  redirect('/messagesent'))
        .catch((error) => alert(error));
    }
    
    return (
        <section className='section contactme'>
            <h2 className='section-title'>Contact me</h2>
            <span className='watermark'>
                <h1>contact</h1>
            </span>
            <div className="contactme-center">
                <SocialLinks />
                <form 
                    id='contact-form'
                    className='form' 
                    name='contact' 
                    method="post"
                    data-netlify='true'
                    netlify-honeypot="bot-field"
                    action='/messagesent'
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
                    <button type='submit' onClick={submitHandler}>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Connect
