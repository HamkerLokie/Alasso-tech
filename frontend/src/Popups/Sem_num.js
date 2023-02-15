import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/sem.css'
import Modal from 'react-modal'
import Semester from '../Components/Semester'
import { toast } from 'react-hot-toast'


const Sem_num = ({ selectedCourse, selectedSemester, item }) => {
  const [semPop, setSemPop] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [selectedSubjects, setselectedSubjects] = useState([])
  const [sem, setsem] = useState('')

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      width: '90%',
      height:' 70%',
      display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'

    },
  };


  
  const handleClick = (subjects,sem) => {
    console.log(sem);
    setselectedSubjects(subjects)
    setSemPop(true)
    setShowModal(!showModal)
    setOverlay(false)
    setsem(sem)
  }

  return (
    <div className='pop1'>
      <div className={`overlay ${overlay ? "visible" : ""}`} />
      <div className='pop'>
        {selectedSemester.map(i => {
          return (
            <div key={i.sem_num}>
              <div className='po-li'>
                <button
                  className='link'
                  onClick={() => handleClick(i.subjects, i.sem_num)}
                >
                  Semester {i.sem_num}
                </button>
              </div>
            </div>
          )
        })}
      </div>
      {setSemPop && (
          <Modal  ariaHideApp={false} style={customStyles} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
            <Semester sem={sem} selectedCourse={selectedCourse} selectedSubjects={selectedSubjects} />
          </Modal>
        )}
    </div>
  )
}

export default Sem_num
