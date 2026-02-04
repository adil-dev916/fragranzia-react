// ProfileLayouts.jsx
import { Outlet } from 'react-router-dom'
import ProfileSideBar from '../components/profileComponents/ProfileSideBar'

export default function ProfileLayouts() {
    return (
        <div className='flex min-h-screen p-6'>
            <ProfileSideBar />
            <div className='w-10/12'>
                <Outlet />
            </div>
        </div>
    )
}