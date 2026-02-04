import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { assets } from '../../assets/assets'

const ProfileSideBar = () => {
    const location = useLocation()
    const navItems = [
        { path: '/profile', label: 'Profile', icon: assets.profileIcon },
        { path: '/address', label: 'Address', icon: assets.addressIcon },
        { path: '/wishlist', label: 'Wishlist', icon: assets.wishFalseIcon },
        { path: '/orders-history', label: 'Orders History', icon: assets.orderHistoryIcon },
        { path: '/', label: 'Home', icon: assets.homeIcon }
    ]

    const handleLogout = () => {
        console.log('Logging out...')
    }

    const isProfileActive = (path) => {
        return location.pathname === path || (path === '/profile' && location.pathname.startsWith('/profile'))
    }

    return (
        <div className='bg-white rounded-2xl shadow-sm p-4 w-64'>
            <div className='flex flex-col gap-2'>
                {navItems.map((item) => (
                    <Link key={item.path} to={item.path} className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isProfileActive(item.path) ? 'bg-blue-50 text-primary font-medium border-l-4 border-primary' : 'hover:bg-gray-50 text-gray-700'}`} >
                        {item.icon && <img src={item.icon} alt={item.label} className="w-5 h-5" />}
                        <span>{item.label}</span>
                    </Link>
                ))}

                <div className='border-t mt-2 pt-2'>
                    <button onClick={handleLogout} className='w-full p-3 text-left rounded-lg text-red-600 hover:bg-red-50 transition-colors'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileSideBar