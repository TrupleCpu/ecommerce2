import React from 'react'
import Arrow from '../assets/right-arrow.png'
import '../index.css'
const Banner = () => {
  return (
    <div  className='hover:cursor-pointer gap-3 w-full h-12 bg-blue-400 flex justify-center items-center'>
    <h1 className='  md:text-l lg:text-4xl text-white font-bold sm:text-l'>FREE SHIPPING ON WEEKDAYS!</h1>
    <button className='custom-button relative bg-black lg:h-8 md:h-8   font-bold text-white px-3 pr-10 rounded-2xl'>Check Out now!
    <img className=' absolute w-5 h-5 right-2 bottom-1.5 ' src={Arrow} />
    </button>
    </div>
  )
}

export default Banner