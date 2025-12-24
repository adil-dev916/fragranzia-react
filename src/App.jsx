import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Banner from './components/Banner'
import ProductPage from './pages/ProductPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
