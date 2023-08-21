import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { disableBodyScroll,enableBodyScroll } from 'body-scroll-lock';
import axios from 'axios';
import Loader from '../loader/Loader';
import SuccessVerifcation from './SuccessVerifcation';
function Register() {
    const { userEmail,setEmailCheckRegister, registerUser,verifyUser,messageFailed } = UserAuth();
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [verificationCode, setVerificationCode] = useState(false);
    const [valueOne, setValueOne] = useState('');
    const [valueTwo, setValueTwo] = useState('');
    const [ValueThree, setValueThree] = useState('')
    const [valueFour, setValueFour] = useState('')
    const [valueFive, setValueFive] = useState('')
    const [valueSix, setValueSix] = useState('')
    const [loader, setLoader] = useState(false);
    const [successCode, setSuccessVerificationCode] = useState(false);


    const check = true;

    check ? disableBodyScroll(document) : enableBodyScroll(document);
     
    const disableRegister = () => {
        setEmailCheckRegister(false)
    }
    const inputHandlers = (setValue) => (e) => {
      setValue(e.target.value);
     }
 
    const handleValueOne = inputHandlers(setValueOne);
     const handleValueTwo = inputHandlers(setValueTwo);
     const handleValueThree = inputHandlers(setValueThree);
     const handleValueFour =inputHandlers(setValueFour);
     const handleValueFive = inputHandlers(setValueFive);
     const handleValueSix = inputHandlers(setValueSix);


     const registerSubmit = async() => {
      setLoader(true);
      try {
      const email = userEmail;
      await registerUser(email, username, password);
      setVerificationCode(true);
     } catch(error) {
      console.log(error)
     }
      setLoader(false)
     }
     const verifyAccount = async() => {
      setLoader(true)
       try {
        const verificationCode = valueOne + valueTwo + ValueThree + valueFour + valueFive + valueSix;
        const email = userEmail;
        verifyUser(email, verificationCode)
        setSuccessVerificationCode(true)
       } catch (error) {
        console.log(error);
       }
       setLoader(false)
     }
  return (
    <div className='flex items-center justify-center absolute w-full z-20 h-screen  bg-gray-transparent '>
    <div className='relative lg:w-2/6 md:3/12 sm:2/12 h-98 flex flex-col  bg-white px-12 py-6 shadow-lg '>
    <div className='absolute top-2 left-7 '>
        <button onClick={disableRegister} className='flex items-center justify-center text-sm font-semibold'> <span className="material-symbols-outlined">
arrow_back
</span> Go Back</button>
    </div>
     {!verificationCode ? (
      <> 
       <div className='flex flex-col text-center mb-6'>
        <h1 className='text-xl font-bold'>Register Account</h1>
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='email' className='text-xs font-semibold text-slate-500'>Email Address:</label>
        <input type='email' id='email' defaultValue={userEmail}  className='outline-none border py-2 px-2' disabled />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='username' className='text-xs font-semibold text-slate-500'>Username:</label>
        <input type='text' id='username' placeholder='username'  className='outline-none border py-2 px-2' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='password' className='text-xs font-semibold text-slate-500'>Password:</label>
        <input type='password' id='password' className='outline-none border py-2 px-2' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className='lg:mb-8'>
      <p className='text-xs font-semibold mt-1'>Style preference</p>
      <div className='grid grid-cols-2 '>
       <div className='flex gap-2'>
        <input type='checkbox' />
        <p>Men</p>
        </div>
       <div className='flex gap-2'>
        <input type='checkbox' />
        <p>Women</p>
        </div>
       <div className='flex gap-2'>
        <input type='checkbox' />
        <p>Kids</p>
        </div>
      </div>
      </div>
      <div className='mb-2'>
        <button className='bg-black w-full h-10 text-white font-bold text-lg' onClick={registerSubmit}>{loader ? <Loader /> : 'REGISTER'}</button>
      </div>
      <div className='text-center'>
        <p className='text-xs text-gray-400'>By registering in to your account, you agree to our <Link className='text-blue-400 hover:underline'>Privacy & Cookie Policy</Link> and <Link className='text-blue-400 hover:underline'>Terms & Conditions</Link>.</p>
      </div>
      </>
     ):
     <div>
      {!successCode ? (
          <>
          <div  className='mt-10 gap-5 grid grid-cols-6'>
     <div className='h-10'> 
     <input type='text' value={valueOne} maxLength='1'  onChange={handleValueOne}  className='w-full h-full border outline-none text-center text-xl font-semibold' />
     </div>
     <div className='h-10'>
         <input type='text' value={valueTwo} maxLength='1'onChange={handleValueTwo}  className='w-full h-full  border outline-none text-center text-xl font-semibold' />
         </div>
     <div className='h-10'>
         <input type='text' value={ValueThree} maxLength='1' onChange={handleValueThree} className='w-full h-full  border outline-none text-center text-xl font-semibold' />
         </div>
     <div className='h-10'> 
     <input type='text' value={valueFour}  maxLength='1' onChange={handleValueFour} className='w-full h-full  border outline-none text-center text-xl font-semibold' /></div>
     <div className='h-10'>
         <input type='text' value={valueFive} maxLength='1' onChange={handleValueFive} className='w-full h-full  border outline-none text-center text-xl font-semibold' />
         </div>
     <div className='h-10'>
         <input type='text' value={valueSix} maxLength='1' onChange={handleValueSix} className='w-full h-full  border outline-none text-center text-xl font-semibold' />
         </div>
        </div>
        <div className='text-center mt-2'>
          <p className='text-xs text-red-500'>{messageFailed && messageFailed + '!'}</p>
          </div>
         <div className='mt-5'>
         <button className='bg-blue-400 text-xl font-semibold text-white w-full hover:bg-blue-500 transition-all active:scale-95' onClick={verifyAccount}>{loader ? <Loader /> : 'Verify'}</button>
        </div>
        </>
      ):(
        <SuccessVerifcation />
      )}
     </div>
     }
    </div>
</div>
  )
}

export default Register