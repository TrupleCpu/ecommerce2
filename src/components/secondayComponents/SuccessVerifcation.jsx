import React from 'react'
import CheckIcon from '../../assets/checked.png'
import { UserAuth } from '../../context/AuthContext'
function SuccessVerifcation() {
    const {setEmailCheckRegister} = UserAuth();

    const finishRegister = () => {
        setEmailCheckRegister(false)
    }
  return (
    <div className=' flex items-center justify-center flex-col gap-3'>
       <img className='w-1/2 pointer-events-none' src={CheckIcon} />
       <h1 className='text-2xl font-bold'>Your Account has been verified!</h1>
       <p className='text-l text-slate-400'>Please login to continue</p>
       <button className='bg-blue-500 px-4 py-1 font-semibold text-white rounded-sm active:scale-90 transition-all' onClick={finishRegister}>Login</button>
    </div>
  )
}

export default SuccessVerifcation;