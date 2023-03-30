import React, { useEffect } from 'react'
import { useState } from 'react'
import './css/Creditcourse.css'
import toast from 'react-hot-toast'
import CreditInside from './CreditInside'
import { useNavigate } from 'react-router-dom'

const CreditCourse = () => {
  const [inp, setinput] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    
    var cards = document.querySelectorAll('.cp')

    window.addEventListener('load', function(){
      cards.forEach(e => {
        e.classList.add('animated')
      })
    })




    const section = document.querySelector('.course-platform');
    var cards = document.querySelectorAll('.cp')
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        if (entry.isIntersecting) {
         
          cards.forEach(element => {
            element.classList.add('animated')
          })

         
        }
      })
    })

    // Start observing the section element
    observer.observe(section)
   
  }, [])

 


  const handleCredit = creditCourse => {
    if (creditCourse === 'Linkedin' || creditCourse === 'Coursera') {
      navigate(`${creditCourse}`)
    } else {
      toast.success(`${creditCourse} answers coming soon....keep a check`, {
        style: {
          padding: '16px',
          color: 'white'
        }
      })
    }
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
          <div className='plat-title'>PLATFORMS</div>
        </div>

        <hr />
        <section className='course-platform'>
          <div onClick={() => handleCredit('Linkedin')} className='cp cp1'>
            <img className='img-cp' src='course_images/linkedin.png' alt='hii' />
            <span className='span'>Linkedin</span>
          </div>
          <div onClick={() => handleCredit('Coursera')} className='cp cp2'>
            <img className='img-cp' src='course_images/coursera.png' alt='hii' />
            <span className='span'>Coursera</span>
          </div>
          <div onClick={() => handleCredit('Saylor')} className='cp cp3'>
            <img className='img-cp' src='course_images/saylor.png' alt='hii' />
            <span className='span'>Saylor</span>
          </div>
          <div onClick={() => handleCredit('CodeChef')} className='cp cp3'>
            <img className='img-cp' src='course_images/codechef.png' alt='hii' />
            <span className='span'>CodeChef</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CreditCourse
