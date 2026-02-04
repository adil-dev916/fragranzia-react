// ProfilePage.jsx - Remove ProfileLayouts import and usage
import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const ProfilePage = () => {
  const [name, setName] = useState('Adil');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className='rounded-2xl w-full p-10 shadow-[0_0_0_1px_#2424243c]'>
      <div className='flex gap-7 w-full'>
        <div className='shadow-[0_0_0_1px_#2424243c] rounded-full w-20 h-20 flex justify-center items-center'>
          <input type="file" />
        </div>

        <div className='flex items-center gap-3 rounded-full w-full h-10'>
          <div className='flex items-center justify-center shadow-[0_0_0_1px_#2424243c] rounded-full w-10 h-full'>
            <h1>A</h1>
          </div>
          <div className='flex justify-start items-center p-3 shadow-[0_0_0_1px_#2424243c] rounded-2xl w-full h-full'>
            {isEditing ? (
              <input type="text" value={name} onChange={handleNameChange} className="w-full outline-none bg-transparent" autoFocus onBlur={() => setIsEditing(false)} />
            ) : (
              <h2>{name}</h2>
            )}
          </div>
          <div className='flex justify-start items-center'>
            <img src={assets.editIcon} alt="" className='w-7 h-7 cursor-pointer' onClick={handleEditClick} />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start mt-7 p-3 shadow-[0_0_0_1px_#2424243c] rounded-2xl w-full h-fit'>
        <p>Kerala, Malappuram, Areekode</p>
        <p>+91 99887 76655</p>
        <p>673639</p>
      </div>
    </div>
  )
}

export default ProfilePage