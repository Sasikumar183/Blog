import React from 'react'
import Load from '../images/load.webp'

const Find = () => {
  return (
    <div className='bg-gray-300'>
        <div className='flex flex-col md:flex-row justify-between items-center p-20 h-[50vh] bg-gray-200'>
            <div className='mb-4'>
                <h3 className='text-3xl'>Find a domain name for your web</h3>
            </div>
            <div>
                <div className='flex'>
                <input type="search" name="" id="" placeholder='Search for domain' className='h-22 w-96 p-5' />
                <button className='bg-black p-5  text-white'>Search</button>
                </div>
                <div className='mt-5'>
                    <a href="" className='underline'>Learn more about domains</a>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-evenly items-center mt-10'>
            <div className='w-[70%] md:w-[40%]'>
                <img src={Load} alt="" />
            </div>
            <div className='w-[50%] font-light'>
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
        </div>
        

    </div>
  )
}

export default Find