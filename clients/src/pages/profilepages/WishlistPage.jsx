import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const WishlistPage = () => {
    const { products, addToCart, addToWish, wishItems } = useContext(AppContext)
    const [wishArray, setWishArray] = useState([])

    useEffect(() => {
        const temp = []
        for (const id in wishItems) {
            const product = products.find(p => p.id === id)
            if (product) temp.push({ ...product })
        }
        setWishArray(temp)
    }, [products, wishItems])

    return (
        <div className="p-4 md:p-6">
            <h1 className="text-primary text-2xl font-bold mb-6">My Wishlist ({wishArray.length})</h1>

            {wishArray.length === 0 ? (
                <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                        <img src={assets.wishFalseIcon} alt="" className="w-12 h-12 opacity-50" />
                    </div>
                    <h3 className="text-primary text-lg font-medium mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-500">Add items you love to your wishlist</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wishArray.map(item => (
                        <div key={item.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
                            <div className="flex gap-4">
                                <div className="w-20 h-20 flex-shrink-0">
                                    <img src={item.image[0]} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-sm line-clamp-2 mb-1">{item.title}</h3>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold">₹{item.offerPrice}</span>
                                        {item.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src={assets.ratingIcon} alt="rating" className="w-4 h-4" />
                                        <span className="text-sm">{item.rating}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <button onClick={() => addToWish(item.id)} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50">
                                        <img src={wishItems[item.id] ? assets.wishTrueIcon : assets.wishFalseIcon} alt="wishlist" className="w-4 h-4" />
                                    </button>
                                    <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50">
                                        <img src={assets.shareIcon} alt="share" className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <button className="w-full mt-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dull transition-colors text-sm">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default WishlistPage