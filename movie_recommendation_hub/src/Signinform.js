import React from 'react'
import { Link } from 'react-router-dom'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { changesigninstat } from './utils/userslice'
const Signinform = () => {
    const dispatch=useDispatch()
    const handlesigninstat=()=>{
        dispatch(changesigninstat())
    }
    const userdata=useSelector((store=>store.user.username))
  return (
    <div className='flex flex-col mt-9 mr-10'>
        <div className='mx-auto'>{userdata&&<p className='text-blue-800 font-bold text-3xl italic mb-2'>{'Hello!'+userdata}</p>}</div>
    <div className='flex items-center'>
            <Link to="/contact"><button className='bg-blue-600 p-2 rounded-md mr-2 border border-black font-bold '> Contact Us</button></Link>
            <button onClick={()=>handlesigninstat()}className='bg-blue-600 p-2 rounded-md  border border-black font-bold '>{!userdata?'SignIn':'SignOut'}</button>
        </div></div>
  )
}

export default Signinform