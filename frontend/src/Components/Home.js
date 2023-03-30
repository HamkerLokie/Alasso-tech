import React, { Component, useState } from 'react'
import BtnSlider from './homecomponents/BtnSlider'
import dataSlider from './homecomponents/dataSlider'
import './css/home.css'
import './homecomponents/Slider.css'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import DevbyLokie from '../Promotions/DevbyLokie'

export default function Home () {
  const [slideIndex, setSlideIndex] = useState(1)
  const [popuup, setpopup] = useState(true)

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
  const [transparent, setTransparent] = useState(false)
  const [colors, setColor] = useState('white')

  useEffect(() => {
    toast(`Alasso Welcomes You ${user ? user.username : ''}`, {
      icon: '🙏',
      style: {
        background: 'linear-gradient(90deg, #254380 -3.1%, #54A7C8 112.18%)',
        color: 'white'
      },
      duration: 700
    })

    const section = document.querySelector('#slide-home')
    var cardDown = document.querySelectorAll('.card-down')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cardDown.forEach(element => {
            element.classList.add('animated')
          })
        }
      })
    })

    // Start observing the section element
    observer.observe(section)

    function handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > 90) {
        setTransparent(true)
        setColor('black')
      } else {
        setTransparent(false)
        setColor('white')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const seen = localStorage.getItem('popup')
    if (!seen) {
      const section = document.querySelector('.overlay-m')
      var pop = document.querySelector('.popup')
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            pop.classList.add('pop-ani')
          }
        })
      })
      observer.observe(section)
    } else {
      const section = document.querySelector('.overlay-m')
      section.classList.add('seen')
      setpopup(false)

    }
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

  const divStyle = {
    background: transparent
      ? 'transparent'
      : 'linear-gradient(270deg, #31628D 0.87%, #3A70A0 10.35%, #3A6FA0 20.55%, #468BB4 29.72%, #4A92B9 39.92%, #54A1CA 50.11%, #4E9ABF 54.19%, #4A93BA 60.82%, #478DB5 66.94%, #3A6FA0 76.62%, #3A70A0 82.74%, #32658F 97.02%)',
    transition: 'background 6s ease',
    boxShadow: 'none',
    color: 'black'
  }

  const close = () => {
    setpopup(false)
    localStorage.setItem('popup', 'seen')
  }

  return (
    <>
      <div className={`qa-navbar`} style={divStyle}>
        <div className='links'>
          <a
            style={{ color: colors }}
            href='/CSE/semester/4/subject/Computer%20Networks'
            className='qa-link'
          >
            Computer Networks
          </a>
          <a
            style={{ color: colors }}
            href='/CSE/semester/4/subject/Software%20Engineering'
            className='qa-link'
          >
            Software Engineering
          </a>
          <a
            style={{ color: colors }}
            href='/CSE/semester/4/subject/Python%20Lab'
            className='qa-link'
          >
            Python Lab
          </a>
          <a
            style={{ color: colors }}
            href='/CSE/semester/2/subject/Digital%20Electronics'
            className='qa-link'
          >
            Digital Electronics
          </a>
          <a
            style={{ color: colors }}
            href='/CSE/semester/2/subject/BEEE'
            className='qa-link'
          >
            BEEE
          </a>
          <a
            style={{ color: colors }}
            href='/CSE/semester/2/subject/Physics'
            className='qa-link'
          >
            Physics
          </a>
          <a
            style={{ color: colors }}
            href='/creditcourse/Linkedin'
            className='qa-link'
          >
            LinkedIn
          </a>
        </div>
        <div className='hidden-nav' style={divStyle}>
          <div className='hidden-links'>
            <a
              style={{ color: colors }}
              href='/CSE/semester/2/subject/Autocad'
              className='qa-link'
            >
              AutoCad
            </a>
            <a
              style={{ color: colors }}
              href='/CSE/semester/4/subject/Computer%20Architecture'
              className='qa-link'
            >
              COA
            </a>
            <a
              style={{ color: colors }}
              href='/nptel/Probability%20And%20Statistics'
              className='qa-link'
            >
              Prob & Stats
            </a>
            <a
              style={{ color: colors }}
              href='/nptel/Data%20Mining'
              className='qa-link'
            >
              Data Mining
            </a>
            <a style={{ color: colors }} href='/developers' className='qa-link'>
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

        {popuup && (
          <>
            <div className='overlay-m'></div>
            <div className='popup'>
              <DevbyLokie />
              <button onClick={close} className='btn-cl '>
                X
              </button>
            </div>
          </>
        )}

        {!popuup && (

          <div className="pro">
           <a href="https://devbylokie.netlify.app/" target={'_blank'} className='promo-btn cl'> Get Your Semester Project Done</a>

          </div>
        )}

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
