import React from 'react'
import MainBanner from '../components/MainBanner.jsx'
import BrandBanner from '../components/BrandBanner.jsx'
import FastService from '../components/FastService.jsx'

const Homepage = () => {
  return (
    <div className='m-5 py-5'>

      <MainBanner />
      <BrandBanner />
      <FastService />

    </div>
  )
}

export default Homepage
