// ProfileLayouts.jsx
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/adminComponents/adminSidebar'

export default function AdminLayouts() {
    return (
        <div className='flex min-h-screen p-6'>
            <AdminSidebar />
            <div className='w-10/12'>
                <Outlet />
            </div>
        </div>
    )
}