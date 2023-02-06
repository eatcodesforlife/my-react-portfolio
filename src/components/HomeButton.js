import React from "react"
import { Link } from "react-router-dom"
import { HiArrowUturnLeft } from 'react-icons/hi2'


const HomeButton = () => {
  return (
    <>

      <Link to='/'>
        <span
          className='home-link' 
        ><HiArrowUturnLeft />  back to home page</span>
      </Link>

    </>
  )
}

export default HomeButton