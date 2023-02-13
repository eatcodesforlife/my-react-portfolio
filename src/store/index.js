

export const formInitialState = {
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

  

  export const formReducer = (state, action) => {
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


export const validateForm =(inputData)=> {
      const newErrors = {}
      if(inputData.contactName.toString().length < 2) {
          newErrors.contactName = 'Name is invalid!' 
      }
      // eslint-disable-next-line
      if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(inputData.email)){
          newErrors.email = 'Email is invalid!'
      }
      if(inputData.message.toString().length < 20){
          newErrors.message = 'Message is too short!'
      }
      if(inputData.message.toString().length > 4000){
          newErrors.message = 'Message is too long!'
      }

      return newErrors
  }

