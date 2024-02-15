import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Card = ({data}) => {
    const [wishcart,setwishcart]=useState(false)
    const userdata=useSelector((store)=>store.user.username)
    const handleover=()=>{
        setwishcart(true)
    }
    const handleout=()=>{
        setwishcart(false)
    }
  return (
    <div className='p-2' onMouseOver={()=>{handleover()}} onMouseOut={()=>{handleout()}}>
        <div className={`w-48 opacity-100 relative flex justify-center`}>
            {wishcart&&userdata&&<button className='flex justify-center absolute top-1/2 p-2  bg-gray-300 font-bold text-white text-black z-20'>➕WishList</button>}
            <img  className= {`p-2 ${userdata&&'hover:opacity-45'}`} src={'https://image.tmdb.org/t/p/w500'+data.poster_path}/>
        </div>
        
    </div>
  )
}

export default Card