import React from 'react'
import './test.css'
const Test = () => {
  return (
    <div>
       
       <form action="" className='form'>
            <div className="form-control test-form-input-container">
                <input placeholder='NAME' type="text" name='name' required 
                />
                <label htmlFor="name" className='test-label'>Name</label>
            </div>
        </form>
    </div>
  )
}

export default Test