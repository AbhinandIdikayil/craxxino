import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <main className='w-screen h-full'>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default Layout