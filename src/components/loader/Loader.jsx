import React from 'react'
import './loader.css'
function Loader() {
  return (
    <div className='flex items-center justify-center gap-4 '>
     <div className='bg-white w-3 h-3 rounded-full dot'></div>
     <div className='bg-white w-3 h-3 rounded-full dot'></div>
     <div className='bg-white w-3 h-3 rounded-full dot'></div>
    </div>
  )
}

export default Loader