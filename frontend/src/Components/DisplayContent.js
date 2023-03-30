import React from 'react'
import { useParams } from 'react-router-dom'
import './css/Display.css'
import axios from '../axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Unit from '../Popups/Unit'
import Modal  from 'react-modal'
import { toast } from 'react-hot-toast'


const DisplayContent = () => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      width: '80%',
      height:' 70%',
      display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',

    },
  };

  const { course, sem, sub } = useParams();

  const [filesList, setFilesList] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [category, setCategory] = useState('')
  const [catName, setCatName] = useState('')

  useEffect(() => {

    const getFilesList = async () => {
      try {
        const { data } = await axios.get('/getAllFiles')
        setFilesList(data)
        let temp  = [];
        for (const i of data) {
        if (
          i.semester.toString() === sem &&
          i.subject.toUpperCase() === sub.toUpperCase()
        ) {
          temp.push(i)
        }
      }
      setFilteredData(temp)

      } catch (error) {
        error.response && setErrorMsg(error.response.data)
      }
    }

    toast.success(`${sub} Selected`)

    getFilesList()

  }, [])

  const [showModal, setShowModal] = useState(false)
  const [semPop, setSemPop] = useState(false)

  const openPopup = (category) => 
  {
    const filteredDataByCategory = filteredData.filter(
      file => file.file_category.toLowerCase() === category
    )

    setCategory(filteredDataByCategory)
    setCatName(category)
    setSemPop(true)
    setShowModal(!showModal)

  }
  return (
    <div className='display-wrapper'>
      <div className='sub-cont'>
        <div className='display-tool'>Study Material {'->'} {course.toUpperCase()} {'->'} {sem} {'->'} {sub.toUpperCase()} </div>
        <div className=' xx display-text'>{sub.toUpperCase()}</div>
        <img src='/images/courses_banner.png' alt='' />
      </div>

      <div className='contents'>
      <button className='display-btn' onClick={() => openPopup('syllabus')}>
          <div> Syllabus</div>
          <div>
            {' '}
            <i class='fa fa-plus-square-o' aria-hidden='true'></i>
          </div>
        </button>
        <button className='display-btn' onClick={() => openPopup('worksheet')}>
          <div> Worksheets</div>
          <div>
            {' '}
            <i class='fa fa-plus-square-o' aria-hidden='true'></i>
          </div>
        </button>
        <button className='display-btn' onClick={() => openPopup('assignment')}>
          <div> Assignments</div>
          <div>
            {' '}
            <i class='fa fa-plus-square-o' aria-hidden='true'></i>
          </div>
        </button>
        <button className='display-btn' onClick={() => openPopup('pre-post')}>
          <div> Pre/Post Lab Questions </div>
          <div>
            {' '}
            <i class='fa fa-plus-square-o' aria-hidden='true'></i>
          </div>
        </button>
        <button className='display-btn' onClick={() => openPopup('notes')}>
          <div> Notes </div>
          <div>
            {' '}
            <i class='fa fa-plus-square-o' aria-hidden='true'></i>
          </div>
        </button>
        <button className='display-btn' onClick={() => openPopup('em')}>
          <div> Exam Material</div>
          <div>
            {' '}
            <i class='fa fa-plus-square-o' aria-hidden='true'></i>
          </div>
        </button>
      </div>

      {semPop && (
        <Modal
          ariaHideApp={false}
          style={customStyles}
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <Unit category={category} catName={catName} />
        </Modal>
      )}
    </div>
  )
}

export default DisplayContent
