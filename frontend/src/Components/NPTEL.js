import React, { useEffect, useState } from 'react'
import './css/NPTEL.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'

const NPTEL = () => {
  const [courses, setcourse] = useState([])
  const navigate = useNavigate()
  

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  useEffect(() => {
    const fetchCourse = async () => {
      const fetchedData = await axios.get('/nptel-courses')
      const data = fetchedData.data
      console.log('nptel',data);

      setcourse(data)
    }
    fetchCourse()
  }, [])

  const handleCourse = courseName => {
    navigate(`/nptel/${courseName}`)
  }

  let index = 1
  return (
    <>
      <div className='sub-cont'>
        <div className='banner'>
          <img src='/images/nptel_top.png' alt='' />
        </div>

        <div className='subs -nptel'>Courses</div>

        <div className='carousel'>
          <Carousel className='c-c' responsive={responsive}>
            {courses.length > 0 ? (
              courses.map(i => {
                return (
                  <div className='c-item' onClick={() => handleCourse(i.courseName)} key={i._id}>
                    <div className='name-code'>
                      <img src={`/course_images/nptel${index++}.png`} alt='icons' />
                      <button
                        className='-nptel'
                        onClick={() => handleCourse(i.courseName)}
                      >
                        
                        {i.courseName}
                      </button>
                    </div>
                  </div>
                )
              })
            ) : (
              <div style={{alignItems:'center', textAlign:'center', width:'100vw'}}>
              <InfinitySpin  width='200' color='#FDD562' />
              </div>
            )}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default NPTEL
