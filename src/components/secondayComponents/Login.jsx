import React, { useState } from 'react'
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
function Login() {
  const { userEmail, setEmailCheckLogin } = UserAuth();

  const [check] = useState(true);
    check ? disableBodyScroll(document) : enableBodyScroll(document);
    const disableLogin = () => {
      setEmailCheckLogin(false);

    }
  return (
    <div className='flex items-center justify-center absolute w-full z-20 h-screen  bg-gray-transparent '>
        <div className='relative lg:w-2/6 md:3/12 sm:2/12 h-96 flex flex-col  bg-white px-12 py-8 shadow-lg '>
        <div className='absolute top-2 left-7 '>
            <button onClick={disableLogin} className='flex items-center justify-center text-sm font-semibold'> <span onClick={disableLogin} className="material-symbols-outlined">
arrow_back
</span> Go Back</button>
        </div>
          <div className='flex flex-col text-center mb-6'>
            <h1 className='text-xl font-bold'>Sign in with your account</h1>
          </div>
          <div className='flex flex-col mb-5'>
            <label htmlFor='email' className='text-xs font-semibold text-slate-500'>Email Address:</label>
            <input type='email' id='email' defaultValue={userEmail} className='outline-none border py-2 px-2' disabled />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='text-xs font-semibold text-slate-500'>Password:</label>
            <input type='password' id='password' className='outline-none border py-2 px-2' />
          </div>
          <div className='lg:mb-8'>
            <Link className='text-sm text-slate-400 font-semibold hover:underline '>Forgot password?</Link>
          </div>
          <div className='mb-2'>
            <button className='bg-black w-full h-10 text-white font-bold text-lg'>SIGN IN</button>
          </div>
          <div className='text-center'>
            <p className='text-xs text-gray-400'>By signing in to your account, you agree to our <Link className='text-blue-400 hover:underline'>Privacy & Cookie Policy</Link> and <Link className='text-blue-400 hover:underline'>Terms & Conditions</Link>.</p>
          </div>
        </div>
    </div>
  )
}

export default Login