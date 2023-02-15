import React from 'react'
import './css/Semester.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import StarRatings from 'react-star-ratings'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const Semester = ({ selectedCourse, sem, selectedSubjects }) => {
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

  let index = 1
  let res = [...selectedSubjects]

  toast.success(`${selectedCourse} Semester ${sem} Selected`)

  const handleInput = subname => {
    navigate(`/${selectedCourse}/semester/${sem}/subject/${subname}`)
  }

  function getRandom () {
    return Math.floor(Math.random() * 8) + 1
  }
 

  return (
    <div className='carous'>
      <div className='course-cred'>{selectedCourse}</div>
      <div className='course-cred'>Sem: {sem}</div>
      <Carousel className='cor-sem' responsive={responsive}>
        {res.map(i => {
          return (
              <div className='course-item' onClick={() => handleInput(i.sub_name)} key={i.sub_code}>
                <div className='name-code-sem'>
                  <img src={`/subject_images/img${getRandom()}.jpg`} alt='icons' />
                  <div className='sub-names'>
                    <div className='sun_name'>{i.sub_name.toUpperCase()}</div>
                    <div className='sun_name'>{i.sub_code.toUpperCase()}</div>
                  </div>
                  <div className='sub_cre'>
                    <StarRatings
                      rating={i.sub_credit}
                      starRatedColor='#254380'
                      numberOfStars={5}
                      starDimension='15px'
                      name='rating'
                    />
                  </div>
                  <button onClick={() => handleInput(i.sub_name)}>
                    See Content{' '}
                  </button>
                </div>
              </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Semester
