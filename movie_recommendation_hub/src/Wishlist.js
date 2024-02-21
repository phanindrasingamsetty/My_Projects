import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefromwishlist } from './utils/dataslice'
const Wishlist = () => {
    const dispatch=useDispatch()
    const wishlist=useSelector((store)=>store.data.wishlist)
    const handleremovefromwishlist=(index)=>{
        dispatch(removefromwishlist(index))
    }
    //console.log(wishlist)
  return (
    <div className='mt-44 '>
        <div className='bg-black absolute mx-auto left-0 right-0 opacity-90 w-2/3 h-4/6 overflow-y-scroll'>
            <h1 className='text-white m-4 bg-blue-500 p-4 font-bold text-center text-3xl'>My WishList</h1>
            {
                wishlist.map((e,index)=><div className='my-2 h-44 w-2/3 z-10 flex items-center justify-between mx-auto border border-white p-2'>
                    <img className='h-40' src={'https://image.tmdb.org/t/p/w500'+e[0].poster_path}/>
                    <p className='text-white w-1/2 h-40 text-xl font-bold overflow-y-scroll'>{e[0].overview}</p>
                    <button onClick={()=>{handleremovefromwishlist(index)}}>❌</button>
                </div>)
            }
        </div>
    </div>
  )
}

export default Wishlist