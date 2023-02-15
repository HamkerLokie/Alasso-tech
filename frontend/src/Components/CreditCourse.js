import React from 'react'
import { useState } from 'react'
import './css/Creditcourse.css'
import toast from 'react-hot-toast'

const CreditCourse = () => {
  const [inp, setinput] = useState('')

  const handleCredit = creditCourse => {
    toast.success(`${creditCourse} answers coming soon....keep a check`, {
      style: {
        padding: '16px',
        color: 'white'
      }
    })
  }

  return (
    <div className='display-wrapper'>
      <div className='sub-cont'>
        <div className='display-text plat-text'>
          Find all of your Credit Courses..
        </div>

        <img src='/images/creditcourse_top.png' alt='' />
      </div>

      <div className='platforms'>
        <div className='plat-top'>
          <div className='plat-title'>Platforms</div>
        </div>

        <hr />
        <div className='course-platform'>
          <div onClick={() => handleCredit('Linkedin')} className='cp cp1'>
            <img src='course_images/linkedin.png' alt='hii' />
            <span className='span'>Linkedin</span>
          </div>
          <div onClick={() => handleCredit('Coursera')} className='cp cp2'>
            <img src='course_images/coursera.png' alt='hii' />
            <span className='span'>Coursera</span>
          </div>
          <div onClick={() => handleCredit('Saylor')} className='cp cp3'>
            <img src='course_images/saylor.png' alt='hii' />
            <span className='span'>Saylor</span>
          </div>
          <div onClick={() => handleCredit('CodeChef')} className='cp cp3'>
            <img src='course_images/saylor.png' alt='hii' />
            <span className='span'>CodeChef</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCourse
