import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Boxlogin from './Boxlogin'
import Shoppingcart from './Shoppingcart';
import '../index.css'
function Header() {
    const [hoverUser, setHoverUser] = useState(false);
    const [hoverCart, setHoverCart] = useState(false);

    const handleHoveruser = () => {
        setHoverUser(true);
    }
    const handleUserHoverOut = () => {
        setHoverUser(false);
       }
    const handleHoverCart = () => {
        setHoverCart(true);
    }
    const handleCartHoverOut = () => {
        setHoverCart(false);
    }
  return (
    <div className='mb-40 flex items-center justify-center w-full bg-slate-300 h-16 overflow-hidden '>
     <div className='pl-10  h-full flex items-center  gap-10 w-1/2 header-nav'>
     <Link className='text-xl font-semibold'>Men</Link>   
     <Link className='text-xl font-semibold'>Kids</Link>   
     <Link className='text-xl font-semibold'>Women</Link>  
     </div>
     <div className='flex items-center  justify-center w-100'>
        <Link to='/'><img className='h-auto mt-5 w-auto' src={logo} /></Link>
     </div>
     <div className='flex w-1/2 h-full items-center justify-end pr-20 gap-5'>
     <div onMouseLeave={ handleUserHoverOut} >
     <p className={hoverUser ? 'hover:cursor-pointer bg-slate-200 ' : '  hover:cursor-pointer'} ><span onMouseOver={handleHoveruser}  className="material-symbols-outlined " >person</span></p>
     {hoverUser && <Boxlogin />}
     </div>
        <div onMouseLeave={handleCartHoverOut}>
        <p className={hoverCart ? 'hover:cursor-pointer bg-slate-200 ' : '  hover:cursor-pointer'}><span onMouseOver={handleHoverCart} className="material-symbols-outlined">shopping_cart</span></p>
      {hoverCart  &&  <Shoppingcart />}
        </div>
        <div>
            <input  className='pl-2 pr-2 relative  outline-none h-10' 
            style={{width: 220}}
            placeholder='Search an item'
            />
            <button className='h-10 absolute w-11 text-white bg-black'><span className="material-symbols-outlined">
            search</span></button>
        </div>
     </div>
    </div>
  )
}

export default Header