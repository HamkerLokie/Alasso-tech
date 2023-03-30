import React, { useEffect, useState } from 'react'
import './css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../axios'

const Navbar = () => {
  const [adminOnly, setadminonly] = useState(false)
  const navigate = useNavigate()
  let user = localStorage.getItem('jwttoken')

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await (await axios.get('/getcourse')).data
      console.log('navbar', data)

      setcourses(data)
    }
    let admin = localStorage.getItem('user')

    if (admin) {
      const ad = JSON.parse(admin)
      if (ad && ad.role === 'admin') {
        setadminonly(true)
      }
    }
    const fetchNptel = async () => {
      const data = await (await axios.get('/nptel-courses')).data
      setnptel(data)
    }
    fetchCourses()
    fetchNptel()
  }, [adminOnly])

  const [courses, setcourses] = useState([])
  const [nptel, setnptel] = useState([])

  const handleLogout = () => {
    localStorage.clear()
    navigate('/signup')
  }

  const courseMaps = courses.map(course => {
    const sem = course.semester
    return (
      <li className='cse-sub-menu-link'>
        <span key={course._id} className='sub-menu-link'>
          {course.courseName}
        </span>
        <img
          className='sub-dropdown-icon'
          src='icons/dropdown_right_arrow.png'
          alt='icon'
        ></img>
        <div className='sub-menu deep-sub-menu cse-sub-menu'>
          <ul>
            <h5 className='sub-menu-heading'>Semester</h5>
            <hr />

            {sem.map(semester => {
              let course_name = course.courseName
              let sem_num = semester.sem_num
              return (
                <li>
                  {' '}
                  <Link
                    key={semester._id}
                    className='sub-menu-link'
                    to={{
                      pathname: `/${course_name}/semester/${sem_num}`
                    }}
                  >
                    {semester.sem_num}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </li>
    )
  })

  const nptelMaps = nptel.map(course => {
    return (
      <li className='.li-li'>
        <Link to={course.link} key={course._id} className='sub-menu-link'>
          {course.courseName}
        </Link>
      </li>
    )
  })

  return (
    <div className='navbar-container '>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid navcunt '>
          <Link className='navbar-brand active' to='/'>
            <img className='logo' src='/icons/logo.png' alt='ALASSO'></img>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className=' nav-center-custom navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item studymaterial-sub-menu-hover mx-3'>
                <Link className='nav-link' to='/studymaterial'>
                  Study Material
                </Link>
                <div className='sub-menu studymaterial-dropdown'>
                  <ul>
                    <h5 className='sub-menu-heading'>Courses</h5>
                    <hr />

                    {courseMaps}

                    <li>
                      <Link className='sub-menu-link' to='/studymaterial'>
                        See all subjects
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <hr />
              <li className='nav-item nptel-sub-menu-hover mx-3'>
                <Link className='nav-link' to='/nptel'>
                  NPTEL
                </Link>
                <div className='sub-menu nptel-dropdown'>
                  <ul>
                    <h5 className='sub-menu-heading'>Courses</h5>
                    <hr />

                    {nptelMaps}
                  </ul>
                </div>
              </li>
              <hr />

              <li className='nav-item nptel-sub-menu-hover mx-3'>
                <Link className='nav-link' to='/creditcourse'>
                  Credit Courses
                </Link>
                <div className='sub-menu nptel-dropdown'>
                  <ul>
                    <h5 className='sub-menu-heading'>Platforms</h5>
                    <hr />
                    <li className='.li-li'>
                      <Link
                        to={'/creditcourse/Linkedin'}
                        className='sub-menu-link'
                      >
                        LinkedIn
                      </Link>
                    </li>
                    <li className='.li-li'>
                      <Link
                        to={'/creditcourse/Coursera'}
                        className='sub-menu-link'
                      >
                        Coursera
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <hr />
              <li className='nav-item mx-3'>
                <Link className='nav-link' to='/contests'>
                  Contests
                </Link>
              </li>
              <hr />
              <li className='nav-item mx-3'>
                <Link className='nav-link' to='/roadmap'>
                  Roadmaps
                </Link>
              </li>
              <hr />
             
            </ul>
            <li className='nav-item mx-3'>
                {user ? (
                  <button
                    onClick={handleLogout}
                    className='nav-btn'
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    className='btn btn-outline-success bg-dark text-light'
                    to='/signup'
                  >
                    Sign Up
                  </Link>
                )}
              </li>
              <li className=' plus-icon-sub-menu-hover nav-item mx-3'>
                <Link className='btn rounded-circle bg-primary text-light'>
                  <i class='fa fa-plus' aria-hidden='true'></i>
                </Link>
                <div className='sub-menu plus-dropdown'>
                  <ul>
                    <Link className='nav-link-tip' to={'/help'}>
                      <i className='fa fa-2x fa-map-signs' aria-hidden='true'>
                        <span className='tool-tip'>Help</span>
                      </i>
                    </Link>
                    <Link className='nav-link-tip' to={'/developers'}>
                      <i className='  fa fa-2x fa-code ' aria-hidden='true'>
                        <span className='tool-tip'>Developers</span>
                      </i>
                    </Link>

                    {adminOnly ? (
                      <>
                        <Link to={'/portal/for-use/admin'}>
                          <i
                            className=' admin-circle fa fa-2x fa-circle'
                            aria-hidden='true'
                          ></i>
                        </Link>{' '}
                      </>
                    ) : (
                      <div></div>
                    )}
                  </ul>
                </div>
              </li>
          </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
