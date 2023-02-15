import React, { Component, useState } from 'react'
import BtnSlider from './homecomponents/BtnSlider'
import dataSlider from './homecomponents/dataSlider'
import './css/home.css'
import './homecomponents/Slider.css'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
export default function Home () {
  const [slideIndex, setSlideIndex] = useState(1)
  let user;
  if (localStorage.length > 0) {
    const tokenUser = localStorage.getItem('user');
    user = JSON.parse(tokenUser);
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
      }
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
      <div className='container-slider'>
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              {/* <img className="sliderlogo" src={process.env.PUBLIC_URL + `/Imgs/Alasso_logo.png`} alt="logo" /> */}
              {/* <h1 className='sliderhd'>ALASSO</h1> */}
              <p className='wlcmtxt'>
                <img src={`/images/img${index + 1}.png`} alt='images1' />

                <p className='highlights1'>Makes Your</p>
                <p className='highlights2'>College Journey</p>
                <p className={`highlights3`}>Easier</p>
                {/* <p className='highlights1'>{obj.title}</p> */}
              </p>
              {/* <div className='btnstart-home'>
                <a className='btn-start' href='#cards-down'>
                  START &darr;
                </a>
              </div> */}
                
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
      </div>

      <a className='hum-btn' href='#cards-down'>
                  START &darr;
                </a>

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
