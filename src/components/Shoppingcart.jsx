import React from 'react'
import { Link } from 'react-router-dom'

const Shoppingcart = () => {
  return (
    <div className='absolute flex flex-col justify-center items-center shadow-2xl z-20  h-28 bg-slate-100' style={{width: 200, marginLeft: -100}}>
    <div><span class="material-symbols-outlined">
shopping_cart
</span></div>
<div>
    <p className='text-sm font-semibold text-slate-500'>Shopping cart is empty</p>
</div>
<div>
   <p className='text-sm font-semibold text-slate-500'>Did you forgot to <Link to='/login' className='text-blue-500 rounded-lg hover:underline'>Sign In?</Link></p>
</div>
  </div>
  )
}

export default Shoppingcart