import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Banner from './components/Banner'
import ProductPage from './pages/ProductPage'
import { Toaster } from 'react-hot-toast'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ProductView from './pages/ProductView'
import PaymentPage from './pages/PaymentPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Toaster position="top-center" reverseOrder={false} />
      <div className='px-6 md:px-16 lg:px-20 xl:px-32'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path='/products/:id' element={<ProductView/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
