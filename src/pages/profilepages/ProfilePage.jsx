import React from 'react'
import { assets } from '../../assets/assets'

const ProfilePage = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='border-2 rounded-2xl w-10/12 p-10'>
          <div className='flex justify-between w-full gap-7'>
            <div className='border-2 rounded-full w-20 h-20'>

            </div>
            <div className='border-2 rounded-full w-10 h-10 flex items-center justify-between'>
              <h1>A</h1>
              <div className='border-2 rounded-2xl p-2'>
                <h2>Adil</h2>
              </div>
              <img src={assets.editIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
