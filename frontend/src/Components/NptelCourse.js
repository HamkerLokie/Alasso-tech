import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import axios from '../axios'
import './css/NPTELcourse.css'
import { useNavigate } from 'react-router-dom'

const NptelCourse = () => {
  const navigate = useNavigate()
  const { courseName } = useParams()
  const [fullData, setFullData] = useState([])
  const [assignment, setassignment] = useState([])
  const [content, setcontent] = useState([])
  const [week, setweek] = useState(1)
  const [activeweek, setactiveweek] = useState('')
  const [loading, setloading] = useState(true)
  const [btnn, setbtnn] = useState(0)
  const [pagestate, setpagestate] = useState('assignment')

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await (await axios.get('/nptel-courses')).data
      console.log('nptel-course', data)
      data.map(i => {
        if (i.courseName.toUpperCase() === courseName.toUpperCase()) {
          setassignment(i.assignments)
        }
      })
      setFullData(data)
    }

    const filterContent = () => {
      for (const j of assignment) {
        if (j.week_num === week) {
          console.log('weef', week)
          setcontent(j.content)
        }
      }
      setloading(true)
    }

    fetchCourse()
    filterContent()
  }, [week])

  const handleClick = currWeek => {
    toast.success(`Week ${currWeek}`)
    setweek(currWeek)
    setactiveweek('active-week')
    setbtnn(currWeek)
  }

  const handleAssignmet = () => {
    setpagestate('assignment')
  }
  const handleNotes = () => {
    setpagestate('notes')
  }

  let index = 1

  if (!loading) {
    return <div>Loading........</div>
  }
  return (
    <div className='nptel-wrap'>
      <div className='nav-tool-top'>{`NPTEL > ${courseName} > ${week}`}</div>
      <div className='head-nptel'>{courseName}</div>
      <div className='navigation'>
        <button className='btn-nptel assignments' onClick={handleAssignmet}>
          Assignments
        </button>
        <button className='btn-nptel notesnptel' onClick={handleNotes}>
          {' '}
          Notes
        </button>
      </div>
      <div className='week-nptel'>
        <div className='weekNum'>Week {week}</div>
        <div className='weekbtn'>
          {assignment.map(i => {
            return (
              <button
                onClick={() => handleClick(i.week_num)}
                className={`week-btn ${i.week_num === btnn ? activeweek : ''}`}
              >
                {i.week_num}
              </button>
            )
          })}
        </div>
      </div>

      {pagestate === 'assignment' && (
        <div className='content-nptel'>
          {content.length > 0 ? (
            content.map(content => {
              return (
                <div className='ass-box'>
                  <div className='question'>
                    <span>Question {index++} :</span>
                    <div>{content.question}</div>
                  </div>
                  <hr />
                  <div className='ans'>
                    <span className='option'>
                      <b>Correct option . </b>
                    </span>
                    <div> {content.answer} </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div
              style={{
                textAlign: 'center',
                fontSize: '5em',
                fontWeight: '800'
              }}
            >
              Select Week
            </div>
          )}
        </div>
      )}

      {pagestate === 'notes' && 
      <div style={{textAlign:'center'}} className='content-nptel'> Notes</div>}
    </div>
  )
}

export default NptelCourse
