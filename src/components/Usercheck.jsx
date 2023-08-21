import React, { useEffect, useState } from 'react'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import '../index.css'
import { UserAuth } from '../context/AuthContext'
import Login from './secondayComponents/Login'
import Loader from './loader/Loader'
function Usercheck() {
  const [empty, setEmpty] = useState(false);
   const [email, setEmail] = useState('');  
   const [loader, setLoader] = useState(false);
  const {checkEmail} = UserAuth();
  
  const emailVerify = async() => {
    if(email === '' || null){
      setEmpty(true)
      return;
    }
    setLoader(true)
    try {
      await checkEmail(email)
    } catch (error){
      console.log(error);
    }
    setLoader(false)
  }
  const timeOut = () => {
    setTimeout(() => {
      setEmpty(false)
    }, 5000)
   }

   useEffect(() => {
     if(empty){
      timeOut();
     }
   })
     

  
  return (
    
    <div className='w-100 h-screen flex justify-center relative '>
        <div className='w-1/2 h-96'>
            <div className='flex flex-col justify-center items-center gap-4 '>
               <h1 className='text-2xl font-semibold'>Sign In/Register</h1>
             <div className='mb-14 flex flex-col custom-before custom-after relative'>
             <label className='text-sm text-slate-600' htmlFor=''>Mobile number or email address:</label>
             {empty && <p className='text-xs text-red-700'>Please put an email address</p>}
             <input className='mb-5 text-sm lg:w-96 md:w-96 h-9  outline-none  border border-slate-400 rounded-sm p-2' value={email} onChange={(e) => setEmail(e.target.value)} />
             <button className='lg:w-96 md:w-96 h-9 bg-black text-white font-bold hover:bg-slate-700 transition-all active:scale-90' onClick={emailVerify}>{loader ? <Loader /> : 'CONTINUE'}</button>
             </div>
             <div className='flex flex-col gap-5'>
           <button className=' flex items-center justify-center relative text-sm  border border-slate-300 h-9 lg:w-96 md:w-96 hover:bg-slate-100 transition-colors  '>
            <img className='mr-52 w-6 h-6  absolute' src={google} />
            Continue With Google
            </button>
           <button className='relative flex items-center justify-center border text-sm border-slate-300 h-9 lg:w-96 md:w-96 hover:bg-slate-100 transition-colors'>
           <img className='mr-52 w-6 h-6 l absolute' src={facebook} />
            Continue With Facebook
            </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Usercheck;