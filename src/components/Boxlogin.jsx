import React from 'react'
import { Link } from 'react-router-dom';

function Boxlogin() {
   
  return (
    <div className=' absolute w-32 bg-white shadow-2xl z-20 flex flex-col items-center justify-center '>
    <div>
        <Link to='/login' className='text-sm text-slate-500 font-semibold hover:text-slate-950'>Sign in / Register</Link>
    </div>
    <div>
        <Link className='text-sm text-slate-500 font-semibold hover:text-slate-950'>My Orders</Link>
    </div>
    <div>
        <Link className='text-sm text-slate-500 font-semibold hover:text-slate-950'>Coupons</Link>
    </div>
    <div>
        <Link className='text-sm text-slate-500 font-semibold hover:text-slate-950'>Become a seller</Link>
    </div>
    </div>
  )
}

export default Boxlogin