import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtowishlist } from './utils/dataslice'

const Card = ({data}) => {
    const mvedata=data
    let status=0
    const dispatch=useDispatch()
    const [wishcart,setwishcart]=useState(false)
    const userdata=useSelector((store)=>store.user.username)
    const wishlist=useSelector((store)=>store.data.wishlist)
    const [wishstat,setwishstat]=useState(0)
    for(let i=0;i<wishlist.length;i++){
        if(data.id==wishlist[i].id){
            status=1
        }
    }
    const handleover=()=>{
        setwishcart(true)
    }
    const handleout=()=>{
        setwishcart(false)
    }
    const handleaddtowishlist=(data)=>{
        if(status==0){
        dispatch(addtowishlist(data))
        }
        //console.log(data)
    }
  return (
    <div className='p-2' onMouseOver={()=>{handleover()}} onMouseOut={()=>{handleout()}}>
        <div className={`w-48 opacity-100 relative flex justify-center`}>
            {wishcart&&userdata&&<button onClick={()=>{handleaddtowishlist(data)}}className='flex justify-center absolute top-1/2 p-2  bg-gray-300 font-bold text-black z-20'>{status?'✅AddedToWishList':'➕WishList'}</button>}
            <img  className= {`p-2 ${userdata&&'hover:opacity-45'}`} src={'https://image.tmdb.org/t/p/w500'+data.poster_path}/>
        </div>
        
    </div>
  )
}

export default Card