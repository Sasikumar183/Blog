import React from 'react'
import GR from '../images/sch.webp'
export const Grow = () => {
  return (
    <div className=' bg-gray-700 text-white'>
        <h1 className='text-6xl md:text-9xl w-[60%] p-10'>Grow your business online</h1>
        <h1 className='text-3xl md:text-5xl p-10 w-[50%]'>Websites designed to sell anything</h1>
        <img src={GR} alt="" className='p-10' />
    </div>
  )
}
