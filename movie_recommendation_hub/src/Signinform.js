import React from 'react'
import { Link } from 'react-router-dom'
import { UseDispatch, useDispatch } from 'react-redux'
import { changesigninstat } from './utils/userslice'
const Signinform = () => {
    const dispatch=useDispatch()
    const handlesigninstat=()=>{
        dispatch(changesigninstat())
    }
  return (
    <div className='flex items-center'>
            <Link to="/contact"><button className='bg-blue-600 p-2 rounded-md mr-2 border border-black font-bold mt-9'> Contact Us</button></Link>
            <button onClick={()=>handlesigninstat()}className='bg-blue-600 p-2 rounded-md mr-10 border border-black font-bold mt-9'>SignIn</button>
        </div>
  )
}

export default Signinform