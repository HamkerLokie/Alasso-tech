import React, { Component, useState } from 'react'
import BtnSlider from './homecomponents/BtnSlider'
import dataSlider from './homecomponents/dataSlider'
import './css/home.css'
import './homecomponents/Slider.css'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import Progi from '../Popups/Progi'

export default function Home () {
  const [slideIndex, setSlideIndex] = useState(1)

  const [popupShown, setPopupShown] = useState(false)
 

  function handlePopupClose () {
    setPopupShown(true)
  }


  let user
  if (localStorage.length > 0) {
    const tokenUser = localStorage.getItem('user')
    user = JSON.parse(tokenUser)
  }

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }

  useEffect(() => {
    toast(`Alasso Welcomes You ${user ? user.username : ''}`, {
      icon: '🙏',
      style: {
        background: 'linear-gradient(90deg, #254380 -3.1%, #54A7C8 112.18%)',
        color: 'white'
      },
      duration: 700
    })
  }, [])

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <>
      <div  className='qa-navbar'>
        <div className='links'>
          <a
            href='/CSE/semester/4/subject/Computer%20Networks'
            className='qa-link'
          >
            Computer Networks
          </a>
          <a
            href='/CSE/semester/4/subject/Software%20Engineering'
            className='qa-link'
          >
            Software Engineering
          </a>
          <a href='/CSE/semester/4/subject/Python%20Lab' className='qa-link'>
            Python Lab
          </a>
          <a
            href='/CSE/semester/2/subject/Digital%20Electronics'
            className='qa-link'
          >
            Digital Electronics
          </a>
          <a href='/CSE/semester/2/subject/BEEE' className='qa-link'>
            BEEE
          </a>
          <a href='/CSE/semester/2/subject/Physics' className='qa-link'>
            Physics
          </a>
          <a href='/creditcourse/Linkedin' className='qa-link'>
            LinkedIn
          </a>
        </div>
        <div className='hidden-nav'>
          <div className='hidden-links'>
            <a href='/CSE/semester/2/subject/Autocad' className='qa-link'>
              AutoCad
            </a>
            <a
              href='/CSE/semester/4/subject/Computer%20Architecture'
              className='qa-link'
            >
              COA
            </a>
            <a href='/nptel/Probability%20And%20Statistics' className='qa-link'>
              Prob & Stats
            </a>
            <a href='/nptel/Data%20Mining' className='qa-link'>
              Data Mining
            </a>
            <a href='/developers' className='qa-link'>
              Developers
            </a>
          </div>
        </div>
      </div>

      <div className='container-slider'>
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <p className='wlcmtxt'>
                <img src={`/images/img${index + 1}.png`} alt='images1' />

                <p className='highlights1'>Makes Your</p>
                <p className='highlights2'>College Journey</p>
                <p className={`highlights3`}>Easier</p>
              </p>
            </div>
          )
        })}
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />

        <div className='container-dots'>
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>

        {!popupShown && <Progi onClose={handlePopupClose} />}
        {popupShown && <button className="popup-btn"> 
        <a target={'_blank'} href="https://www.ketto.org/fundraiser/cu-student-happy-accident-treatment-support">Donate For Happy's Treatment </a> 
        <svg className='svg-donate' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M148 76.6C148 34.3 182.3 0 224.6 0c20.3 0 39.8 8.1 54.1 22.4l9.3 9.3 9.3-9.3C311.6 8.1 331.1 0 351.4 0C393.7 0 428 34.3 428 76.6c0 20.3-8.1 39.8-22.4 54.1L302.1 234.1c-7.8 7.8-20.5 7.8-28.3 0L170.4 130.7C156.1 116.4 148 96.9 148 76.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
          </button>
        }

        <a className='hum-btn' href='#cards-down'>
          START &darr;
        </a>
      </div>

      <section id='cards-down'>
        <div id='slide-home'>
          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/studymaterial_homepage.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                {' '}
                <a href='/studymaterial'>Study Material</a>{' '}
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/NPTEL.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <a href='/nptel'>NPTEL</a>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/Credit_graphic.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <a href='/creditcourse'>Credit Courses</a>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/roadmap_graphic.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                {' '}
                <a href='/roadmap'>Roadmaps</a>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/contest.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <a href='/contests'>Contests</a>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/developers_homepage.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <a href='/developers'>Developers</a>
              </h2>
            </div>
          </div>
          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/help_homepage.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                {' '}
                <a href='/help'>Help</a>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/discord.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <a href=''>Discord</a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
