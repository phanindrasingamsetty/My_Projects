import React from 'react'
import Browse from './Browse'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Body = () => {
    const userdata=useSelector((store)=>store.user.username)
    const navigate=useNavigate()
    
  return (
    <div>
        <Browse/>
    </div>
  )
}

export default Body