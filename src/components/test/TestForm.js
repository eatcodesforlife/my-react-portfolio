import React,{ useEffect, useReducer} from 'react'
import { useNavigate } from 'react-router-dom'

const formInitialState = {
  inputData: {
    contactName:'', 
    email:'', 
    message:''
  },
  formErrors: {
    contactName:'', 
    email:'', 
    message:''
  },
  isFormValid: false,
  isShowModal: false
}


const formReducer = (state, action) => {
  const {type, payload} = action
  
  switch(type){
    case 'SET_INPUT_DATA':
      return {
        ...state,
        inputData: {...state.inputData,
        [payload.name]: payload.value}
      }

    case 'SET_FORM_ERRORS':
      return {
        ...state, 
        formErrors: payload.errors,
        isFormValid: Object.values(payload.errors).every(error => error === "")
      }
    case 'VALID_FORM_DATA':
        return {
            ...state,
            isFormValid: !state.isFormValid
        }
    case 'SHOW_MODAL':
        return{
            ...state,
            isShowModal: true
        }
    default: return state
  }
  
}




const TestForm = () => {

    const [ state, dispatch ] = useReducer( formReducer, formInitialState)
    const { inputData, formErrors, isFormValid, isShowModal } = state
    const navigate = useNavigate()
        
   

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(isFormValid, inputData, formErrors)
        if(!isFormValid && Object.values(inputData).every(error => error === "")){
            dispatch({
                type: 'SHOW_MODAL'
            })
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

    
    const validateForm =()=> {
        const newErrors = {}
        if(inputData.contactName === '') {
            newErrors.contactName = 'Name is invalid! Please use alpha numeric characters only.' 
        }
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(inputData.email)){
            newErrors.email = 'Email is invalid!'
        }
        if(inputData.message === ''){
            newErrors.message = 'Message is empty!'
        }

        return newErrors
    }


    useEffect(() => {
       const newErrors = validateForm()
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
                    name='contact-form-test' 
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
                            {isShowModal && <p>{formErrors.contactName}</p> }
                        </div>
                        <div className="form-control">
                            <input 
                              pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g'
                              placeholder='YOUR EMAIL' type="email" name='email' value={inputData.email}
                              onChange={handleChange}
                            />
                            <label htmlFor="name">Email</label>

                            {isShowModal && <p>{formErrors.email}</p> }
                        </div>                
                        <div className="form-control">
                            <textarea placeholder='YOUR MESSAGE' type="text" name='message' value={inputData.message}
                              onChange={handleChange}
                            />
                            <label htmlFor="name">Message</label>

                            {isShowModal && <p>{formErrors.message}</p> }
                        </div>
                    </div>
                    <button type='submit' 
                     onClick={submitHandler}>Send</button>
                </form>
            </div>
        </section>
    )
}

export default TestForm