import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { changesigninstat, changeusername } from './utils/userslice'
import { signOut } from "firebase/auth";
import auth from './firebase';
import { chgsuggestionbox } from './utils/dataslice';
const Signinform = () => {
    const userdata=useSelector((store=>store.user.username))
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handlesigninstat=()=>{
        dispatch(changesigninstat())
        if(userdata){
            signOut(auth).then(() => {
                dispatch(changeusername(null))
                navigate("/")
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              });
        }
        
    }
   
    const handlesuggestion=()=>{
        if(!userdata){
            dispatch(changesigninstat())
            //
        }
        navigate("/browse")
        //window.open("/browse","_blank")
        dispatch(chgsuggestionbox(true))
        
    }
  return (
    <div className='flex flex-col mt-9 mr-10'>
        <div className='mx-auto'>{userdata&&<p className='text-blue-600 font-bold text-3xl italic mb-2'>{'Hello!'+userdata}</p>}</div>
    <div className='flex items-center'>
            <button  onClick={()=>handlesuggestion()} className='bg-white mr-2 text-blue-600 font-bold rounded-md border border-black p-2'>Want a movie Suggesion?</button>
            {userdata&&<Link to="/wishlist"><button className='bg-blue-500 p-2 rounded-md mr-2 border border-black font-bold '>☑️MyWishList</button></Link>}
            <Link to="/contact"><button className='bg-blue-500 p-2 rounded-md mr-2 border border-black font-bold '>📞Contact Us</button></Link>
            <button onClick={()=>handlesigninstat()}className='bg-blue-500 p-2 rounded-md  border border-black font-bold '>{!userdata?'SignIn':'SignOut'}</button>
            
        </div></div>
  )
}

export default Signinform