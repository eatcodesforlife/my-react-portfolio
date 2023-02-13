
import React,{ useEffect, useReducer} from 'react';
import SocialLinks from '../components/SocialLinks'
import { useNavigate } from "react-router-dom";
import { formInitialState, formReducer, validateForm } from '../store';


const Connect = () => {

    const [ state, dispatch ] = useReducer( formReducer, formInitialState)
    const { inputData, formErrors, isFormValid, isShowModal } = state

    const navigate = useNavigate()

    // const submitHandler = (e) =>{
    //     e.preventDefault();
    //     let myForm = document.getElementById("contact-form");
    //     let formData = new FormData(myForm);
    //     fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: new URLSearchParams(formData).toString(),
    //     })
    //     .then(() =>  navigate('/messagesent'))
    //     .catch((error) => alert(error));
    // }
    

    const submitHandler = (e) =>{
        e.preventDefault();
        if(!isFormValid){
            dispatch(
                {
                    type: 'SHOW_MODAL'
                }
            )
        }
        if(isFormValid){
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(inputData).toString(),
                })
                .then(() =>  navigate('/messagesent'))
                .catch((error) => alert(error));
        }
    }

    const handleChange = (e) => {
        const inputName = e.target.name
        const inputValue =  e.target.value
        dispatch( {
          type: 'SET_INPUT_DATA',
          payload: {
            name: inputName,
            value: inputValue
          }
        })
      }

    useEffect(() => {
        const newErrors = validateForm(inputData)
         if(Object.values(newErrors).every(error => error === "")){
             dispatch(
                 {
                     type: 'VALID_FORM_DATA',
                     
                 }
             )
         }
         dispatch(
             {
                 type: 'SET_FORM_ERRORS',
                 payload: {
                     errors: newErrors
                 }
 
             }
         )
     }, [inputData])


    return (
        <section className='section contactme'>
            <h2 className='section-title'>Contact me</h2>
            <div className="watermark-container">
                <span className='watermark'>
                    <h1>contact</h1>
                </span>
            </div>
            <div className="contactme-center">
                
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
                            <input placeholder='NAME' type="text" name='contactName' value={inputData.contactName} 
                              onChange={handleChange}
                            />
                            <label htmlFor="name">Name</label>
                            {isShowModal && <p className='form-error'>{formErrors.contactName}</p> }
                        </div>
                        <div className="form-control">
                            <input 
                              pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g'
                              placeholder='YOUR EMAIL' type="email" name='email' value={inputData.email}
                              onChange={handleChange}
                            />
                            <label htmlFor="name">Email</label>

                            {isShowModal &&<p className='form-error'>{  formErrors.email}</p> }
                        </div>                
                        <div className="form-control">
                            <textarea placeholder='YOUR MESSAGE' type="text" name='message' value={inputData.message}
                              onChange={handleChange}
                            />
                            <label htmlFor="name">Message</label>

                            {isShowModal &&  <p className='form-error'>{formErrors.message}</p> }
                        </div>
                    </div>
                    <button type='submit' onClick={submitHandler}>Send</button>
                </form>
                <SocialLinks />
            </div>
        </section>
    )
}

export default Connect
