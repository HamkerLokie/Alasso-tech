import './App.css'
import Home from './Components/Home'
import Signup from './Components/Signup'
import StudyMaterial from './Components/StudyMaterial'
import NPTEL from './Components/NPTEL'
import Help from './Components/Help'
import Developers from './Components/Developers'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import DisplayContent from './Components/DisplayContent'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contest from './Contest/Contest'

import Semester_Nav from './Components/Semester_Nav'
import { Toaster } from 'react-hot-toast'
import NptelCourse from './Components/NptelCourse'
import LoginPage from './Components/LoginPage'
import LoginAlert from './Popups/LoginAlert'
import AdminPortal from './Admin/AdminPortal'
import AdminAlert from './Popups/AdminAlert'
import Roadmap from './Roadmap/Roadmap'
import CreditCourse from './Components/CreditCourse'
import PageNotFound from './Components/PageNotFound'
import NptelNotes from './Components/NptelNotes'
import CreditInside from './Components/CreditInside'

function App () {
  const user = localStorage.getItem('jwttoken')
  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88'
            },
            style: {
              background:
                'linear-gradient(90deg, #254380 -3.1%, #54A7C8 112.18%)',
              color: 'white'
            }
          }
        }}
      ></Toaster>

      <Router>
        
        <Navbar />

        <main>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path=':pagenotfound'  element={<PageNotFound/>} />
            <Route path='login-alert-404' element={<LoginAlert />} />
            <Route path='admin-alert-404' element={<AdminAlert />} />
            <Route path='creditcourse' element={<CreditCourse />} />
            <Route path='creditcourse/:platform' element={<CreditInside />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='studymaterial' element={<StudyMaterial />} />
            <Route path='nptel' element={<NPTEL />} />
            <Route path='nptel/:courseName' element={<NptelCourse />} />
            <Route path='nptel/:courseName/:notes' element={<NptelNotes />} />
            <Route path='help' element={<Help />} />
            <Route path='developers' element={<Developers />} />

            <Route path='' element={<NptelCourse />} />
            <Route
              path=':selectcourse/semester/:selectsem'
              element={<Semester_Nav />}
            />
            <Route
              path=':course/semester/:sem/subject/:sub'
              element={<DisplayContent />}
            />
            {/* User protected Routes */}
            <Route path='contests' element={<Contest />} />
            <Route path='roadmap' element={<Roadmap />} />

            {/* Admin Protected Routes */}
            <Route path='portal/for-use/admin' element={<AdminPortal />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
