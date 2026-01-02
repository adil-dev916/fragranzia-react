import React from 'react'
import MainBanner from '../components/MainBanner.jsx'
import BrandBanner from '../components/BrandBanner.jsx'
import FastService from '../components/FastService.jsx'
import { assets } from '../assets/assets.js'
import FeaturedCard from '../components/FeaturedCard.jsx'

const Homepage = () => {
  return (
    <>
      <div className='m-5 py-5'>

        <MainBanner />
        <BrandBanner />
        <FastService />

        <div className='mt-23 flex justify-between items-center'>
          <h1 className='sm:text-[20px] md:text-[25px] lg:text-[35px] font-semibold'>Featured<span> Collections</span></h1>

          <div className='flex gap-2'>
            <button className='flex justify-center items-center rounded-full shadow-[0_0_3px_#24242453] w-[30px] h-[30px] hover:bg-gray-100'>
              <img src={assets.leftArrowIcon} alt="" className='w-5 h-5' />
            </button>
            <button className='flex justify-center items-center rounded-full shadow-[0_0_3px_#24242453] w-[30px] h-[30px] hover:bg-gray-100'>
              <img src={assets.rightArrowIcon} alt="" className='w-5 h-5' />
            </button>
          </div>


        </div>
        {/* <FeaturedCard /> */}

      </div>
    </>
  )
}

export default Homepage
