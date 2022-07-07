import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'

// https://www.youtube.com/watch?v=KBpoBc98BwM&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR

const App = () => {
  return (
    <Box width='400px' sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App