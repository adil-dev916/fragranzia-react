import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { useParams } from 'react-router-dom'

const PaymentPage = () => {
    const { products, cartItems, updateCartItem, getCartCount } = useContext(AppContext)
    const { id } = useParams()
    const product = products.find(i => i.id === id)
    const qty = cartItems[id] || 1
    const off = Math.round(((product.price - product.offerPrice) / product.price) * 100)
    const totalPrice = product.price * qty
    const totalOffer = product.offerPrice * qty
    const discount = totalPrice - totalOffer

    return product && (
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2 shadow-[0_0_3px_#24242453] rounded-lg p-4 flex gap-4">
                    <img src={product.image[0]} className="w-24 h-24 object-contain" />
                    <div className="flex-1">
                        <h3 className="font-medium">{product.title}</h3>
                        <div className="flex items-center gap-2 text-sm">
                            <p>{product.rating}</p>
                            <img src={assets.ratingIcon} className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <button onClick={() => updateCartItem(id, qty - 1)} className="border px-3">−</button>
                            <span>{qty}</span>
                            <button onClick={() => updateCartItem(id, qty + 1)} className="border px-3">+</button>
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-sm">
                            <p className="font-bold">₹{product.offerPrice}</p>
                            <del className='text-[#595959]'>₹{product.price}</del>
                            <span className="text-green-600">{off}% off</span>
                        </div>
                        <div className='flex flex-col text-[13px]'>
                            <p>Delivered by August 29, Free delivery</p>
                            <p className="text-green-600">7 day return policy</p>
                        </div>
                    </div>
                </div>

                <div className="shadow-[0_0_3px_#24242453] rounded-lg p-4 h-fit">
                    <h3 className="font-semibold mb-3">Price Details</h3>
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
                            <span>Delivery</span>
                            <span className="text-green-600">Free</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>₹{totalOffer}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
