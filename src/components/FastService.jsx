import React from 'react'
import { assets } from '../assets/assets'

const FastService = () => {
    return (
        <>
            <div className='mt-23 flex shadow-[0_0_3px_#24242453] rounded-2xl'>

                <div className='flex p-5 gap-5'>
                    <img src={assets.deliveryIcon} alt="" className='w-17 h-17' />
                    <div className='flex flex-col'>
                        <p className='font-semibold'>Fast & Reliable Delivery</p>
                        <p>Get your orders delivered on time, every time.</p>
                    </div>
                </div>
                <div className='flex p-5 gap-5'>
                    <img src={assets.secureIcon} alt="" className='w-17 h-17' />
                    <div className='flex flex-col'>
                        <p className='font-semibold'>Secure Payments</p>
                        <p>Shop with confidence using our encrypted payment gateways.</p>
                    </div>
                </div>
                <div className='flex p-5 gap-5'>
                    <img src={assets.customerServiceIcon} alt="" className='w-17 h-17' />
                    <div className='flex flex-col'>
                        <p className='font-semibold'>24/7 Customer Support</p>
                        <p>We’re here to assist you anytime, anywhere.</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default FastService
