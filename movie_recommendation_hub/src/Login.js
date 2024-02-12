import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword,updateProfile,createUserWithEmailAndPassword } from "firebase/auth";
import auth from './firebase';
import { changeusername } from './utils/userslice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [signup,setsignup]=useState(0);
    const [errormessage,seterrormessage]=useState(null)
    const signinstate=useSelector((store)=>store.user.signinstat)
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handlelogin=({email,password,name})=>{
        if(!signup){
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user)
              dispatch(changeusername(user.displayName))
              navigate("/browse")
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrormessage(errorCode+" "+errorMessage)
            });
          
        }
        else{
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name.current.value
                  }).then(() => {
                    dispatch(changeusername(user.displayName))
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrormessage(errorCode)
            });
        }
    }
    const handlesignin=()=>{
        seterrormessage(null)
        if(signup==0){
            setsignup(1)
        }
        else{
            setsignup(0)
        }
    }
  return (
    <div>
        <div className={` absolute ${signinstate&&'opacity-50'}`}>
            <img src="https://miro.medium.com/v2/resize:fit:6720/1*v5fvVabIVpP65OEYs7IxTA.png"/>
        </div>
        {signinstate&&<div className='p-12 bg-black absolute mt-48 mx-auto my-auto right-0 left-0 w-3/12 rounded-lg bg-opacity-80 flex flex-col justify-center items-center'>
            {signup==1&&<input ref={name} className='p-2 mb-2 w-full' type='text' placeholder='name'/>}
            <input ref={email} className='p-2 mb-2 w-full' type='text' placeholder='email'/>
            <input ref={password} className='p-2 mb-2 w-full' type='password'/>
            <button onClick={()=>{handlelogin({email,password,name})}} className='p-4 mb-2 bg-blue-700 text-white font-bold w-2/4 rounded-md'>{signup==0?"SignIn":"SignUp"}</button>
            <p className='text-red-700'>{errormessage}</p>
            <p className='text-white cursor-pointer' onClick={()=>handlesignin()}>{signup==0?"No Account? Register Here!!":"Already have an account? SignIn"}</p>
        </div>}
    </div>
  )
}

export default Login