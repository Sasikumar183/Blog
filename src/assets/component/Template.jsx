import React from 'react'
import Weath from '../images/weather.webp'
export const Template = () => {
  return (
    <div>
    <div className='bg-white  mt-20 flex flex-col md:flex-row justify-around p-20'>
        <div>
            <p className='text-5xl ml-4'>Website templates for every purpose</p>
        </div>
        <div>
            <div className='p-4' >Start with a flexible designer template or build your own, then customize to fit your style and professional needs using our drag-and-drop website builder.</div>
            <div>
                <button className='border  border-gray-400 p-4 mt-5 mx-auto hover: text-white bg-black'>Explore All Templates</button>
            </div>
        </div>
    </div>
    <img src={Weath} alt="" srcset="" className='mx-auto my-5 ' />
    </div>
    )
}