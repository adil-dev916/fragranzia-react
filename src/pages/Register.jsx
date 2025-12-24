import React from 'react'
import { assets } from '../assets/assets'

const Register = () => {



  return (
    <div>
      <div>
        <img src={assets.imageOne} alt="" />
      </div>

      <div>
        <button>{assets.googleIcon} Google</button>
        <button>{assets.facebookIcon} Facebook</button>
        <p>Or sign up with email</p>

        <div>
            <input type="text" placeholder='Enter your username'/>
            <input type="text" placeholder='Enter your E - Mail'/>
            <input type="text" placeholder='Enter your password'/>
            <input type="text" placeholder='Confirm your password'/>
        </div>
      </div>
    </div>
  )
}

export default Register
