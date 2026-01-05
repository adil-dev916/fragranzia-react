import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const PaymentPage = () => {

    const { products, cartItems, updateCartItem, getCartCount } = useContext(AppContext)
    const [cartArray, setCartArray] = useState([])

    useEffect(() => {
        const temp = []
        for (const id in cartItems) {
            const product = products.find(p => p.id === id)
            if (product) temp.push({ ...product, quantity: cartItems[id] })
        }
        setCartArray(temp)
    }, [products, cartItems])

    const totalPrice = cartArray.reduce((a, i) => a + i.price * i.quantity, 0)
    const totalOffer = cartArray.reduce((a, i) => a + i.offerPrice * i.quantity, 0)
    const discount = totalPrice - totalOffer

    return (
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2 space-y-4">
                    {cartArray.map(item => {
                        const off = Math.round(((item.price - item.offerPrice) / item.price) * 100)
                        return (
                            <div key={item.id} className="flex flex-col sm:flex-row gap-4 shadow-[0_0_3px_#24242453] rounded-lg p-4">
                                <img src={item.image[0]} alt={item.title} className="w-24 h-24 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
                                <div className="flex-1">
                                    <h3 className="font-medium text-sm md:text-base">{item.title}</h3>
                                    <div className='flex items-center'>
                                        <p>{item.rating}</p>
                                        <img src={assets.ratingIcon} alt="" className='w-4 h-4 ml-2' />
                                    </div>
                                    <div className="flex items-center gap-3 mt-2">
                                        <button onClick={() => updateCartItem(item.id, item.quantity - 1)} className="cursor-pointer border px-3">−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateCartItem(item.id, item.quantity + 1)} className="cursor-pointer border px-3">+</button>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2 text-sm">
                                        <p className="font-bold">₹{item.offerPrice}</p>
                                        <del className="text-gray-400">₹{item.price}</del>
                                        {item.price !== item.offerPrice && <span className="text-green-600">{off}% off</span>}
                                    </div>
                                    <div className="flex flex-col mt-1 text-[14px]">
                                        <p>Delivered by August 29, Free delivery</p>
                                        <p className="text-green-600">7 day return policy</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="shadow-[0_0_3px_#24242453] rounded-lg p-5 h-fit">
                    <h3 className="font-semibold text-lg mb-4">Price Details</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Price ({getCartCount()} items)</span>
                            <span>₹{totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className="text-green-600">− ₹{discount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery Charge</span>
                            <span className="text-green-600">Free Delivery</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold">
                            <span>Total Amount</span>
                            <span>₹{totalOffer}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
