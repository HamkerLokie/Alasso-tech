import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Sem_num from '../Popups/Sem_num'
import './css/StudyMaterial.css'
import Modal from 'react-modal'
import axios from '../axios'
import { toast } from 'react-hot-toast'
import { InfinitySpin } from 'react-loader-spinner'


const StudyMaterial = () => {
  const [semListClass, setSemListClass] = useState('')
  const [semPop, setSemPop] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      width: '80%',
      height: ' 50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position:'fixed',
    }
  }

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

  const [item, setItem] = useState([])

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await (await axios.get('/getcourse')).data
      console.log('studyMaterial', data)
      setItem(data)
    }
    fetchCourse()
    toast.success('All Courses Updated')
  }, [])

  const [selectedSemester, setSelectedSemester] = useState([])
  const [selectedCourse, setSelectedCourse] = useState('')

  const handleClick = (sem, course) => {
    setSelectedSemester(sem)
    setSelectedCourse(course)
    setSemPop(true)
    setDisplay()
    setShowModal(!showModal)
  }

  const setDisplay = () => {
    setSemListClass(semListClass === '' ? 'hidden' : '')
  }
  let res = [...item]

  let index = 1

  return (
    <>
      <div className='sub-cont'>
        <div className='banner'>
          <img src='/images/courses_top.png' alt='' />
        </div>

        <div className='subs'>Courses</div>

        <div className='carousel'>
          <Carousel className='c-c' responsive={responsive}>
            {res.length > 0 ? res.map(i => {
              return (
                <div className='c-item' key={i._id}>
                  <div className='name-code' onClick={() => {handleClick(i.semester, i.courseName)}}>
                    <img src={`/course_images/img${index++}.png`} alt='icons' />
                    {/* <div className='sun_name'>{i.courseName}</div> */}
                    <button
                      onClick={() => {
                        handleClick(i.semester, i.courseName)
                      }}
                    >
                      {i.courseName}
                      
                    </button>
                  </div>
                </div>
              )
            }):<div style={{alignItems:'center', textAlign:'center', width:'100vw'}}>
            <InfinitySpin  width='200' color='blue' />
            </div>}
          </Carousel>
        </div>
        {semPop && (
          <Modal
            ariaHideApp={false}
            style={customStyles}
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
          >
            <Sem_num
              item={item}
              selectedCourse={selectedCourse}
              selectedSemester={selectedSemester}
            />
          </Modal>
        )}
      </div>
    </>
  )
}

export default StudyMaterial
