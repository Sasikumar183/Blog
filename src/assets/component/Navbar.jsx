import React from 'react'
import Bg from '../images/background.webp'
import Logo from '../images/logo.jfif'
import { Maini } from './Maini'
export const Navbar = () => {
  return (
    <div style={{backgroundImage:`url(${Bg})`}} className='bg-right md:bg-cover h-[100vh] p-5 text-white'>
        <nav className='hidden md:flex justify-between'>
        <div className='flex space-x-5'>
            <img src={Logo} className='h-10' alt="" />
            <p className='text-xl font-semibold tracking-wide'>SQUARE SPACE</p>
        </div>
        <div className='flex space-y-4'>
            <ul className='flex space-x-4 font-semibold '>
                <li><a href=''>PRODUCTS</a></li>
                <li><a href=''>TEMPLATES</a></li>
                <li><a href=''>RESOURCES</a></li>
            </ul>
        </div>
        <div className='space-x-4 font-semibold'>
            <button>LOG IN</button>
            <button className='bg-white p-3 text-black'>GET STARTED</button>
        </div>
        </nav>
        <Maini/>
    </div>
  )
}
