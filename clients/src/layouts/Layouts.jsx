import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

export default function Layouts() {
    return (
        <>
            <Navbar />
            <Banner />
            <div className="px-6 md:px-16 lg:px-20 xl:px-32">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
