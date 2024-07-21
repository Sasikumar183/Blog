import React from 'react'
import BG from '../images/mark.webp'
export const Market = () => {
  return (
    <div className='bg-gray-300'>
      <h3 className='text-6xl md:text-9xl py-5 px-10 w-[70%]'>Market your business</h3>
      <div className='flex flex-col md:flex-row p-10'>
        <div>
                <div className='pt-10 w-[75%]'>
                    <p><h2 className='text-2xl font-semibold mb-2 mt-2'>Create a website</h2>
                Choose from any of our industry-leading website templates, designer fonts, and color palettes.</p>
                </div>
                <div className='pt-10 w-[75%]'>
                    <p><h2 className='text-2xl font-semibold mt-2 mb-2'>Sell your products and services</h2>
                    Set up an ecommerce store, book appointments, or sell your skills—all on a single platform built just for you.</p>
                </div>
                <div className='mb-10 w-[75%]'>
                    <p><h2 className='text-2xl font-semibold mb-2 mt-2 pt-10'>Market your business</h2>
                    On-brand email campaigns and social tools make it easy to retain customers and grow your base.</p>
                </div>
        </div>
        <div>
            <img src={BG} alt="" className='h-[90%]' />
        </div>
      </div>
    </div>
  )
}
