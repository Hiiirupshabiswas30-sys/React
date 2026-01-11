import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navebar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Coursas from './pages/Coursas'
import Cohort1 from './pages/Cohot1'
import Anycourses from './pages/Anycourses'
import CourseDetail from './pages/CourseDetail'
import RandomAbout from './pages/RandomAbout'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
   <Navebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/courses' element={<Coursas />} />

        {/* Nested ROUTES */}
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />
        <Route path='/courses/cohort1' element={<Cohort1 />} />

        {/* DYNAMIC ROUTES */}
        <Route path='/about/:id' element={<RandomAbout />} />
        

        {/* Nested Dynamic Routes */}
        <Route path='/courses/:courseid' element={<Anycourses />} />
        <Route path='/courses/:courseid/detail' element={<CourseDetail />} />

        {/* Not found page */}
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App