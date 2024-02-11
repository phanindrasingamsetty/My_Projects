import React, { useState } from 'react'

const Login = () => {
    const [signin,setsignin]=useState(1);
    const [signup,setsignup]=useState(0);
    const handlesignin=()=>{
        if(signup==0){
            setsignup(1)
        }
        else{
            setsignup(0)
        }
    }
  return (
    <div>
        <div>
            <img className="opacity-50 absolute" src="https://miro.medium.com/v2/resize:fit:6720/1*v5fvVabIVpP65OEYs7IxTA.png"/>
        </div>
        {signin&&<div className='p-12 bg-black absolute mt-36 mx-auto my-auto right-0 left-0 w-3/12 rounded-lg bg-opacity-80 flex flex-col justify-center items-center'>
            {signup==1&&<input className='p-2 mb-2 w-full' type='text' placeholder='name'/>}
            <input className='p-2 mb-2 w-full' type='text' placeholder='email'/>
            <input className='p-2 mb-2 w-full' type='password'/>
            <button className='p-4 mb-2 bg-blue-700 text-white font-bold w-2/4 rounded-md'>{signup==0?"SignIn":"SignUp"}</button>
            <p className='text-white cursor-pointer' onClick={()=>handlesignin()}>{signup==0?"No Account? Register Here!!":"Already have an account? SignIn"}</p>
        </div>}
    </div>
  )
}

export default Login