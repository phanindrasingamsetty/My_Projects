import React, { useEffect, useState } from 'react'
import Container from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { addnowplaying, addpopular, addtoprated, addupcoming } from './utils/dataslice';

const Browse = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmRiM2FiNzY1OWVlOWU1OTkzNjEyY2M4NzI1NjIyYiIsInN1YiI6IjY0ZjVlMmI2NWYyYjhkMDBlMTJjYzZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z68CPZ5T5WC9FACLuw3LKOi7Uozv57t6K03ZVUT3LTE'
        }
        }
        const dispatch=useDispatch()
        const genre=['now_playing','popular','top_rated','upcoming']
        const fetching=async()=>{
            const nowplaying =await(await fetch('https://api.themoviedb.org/3/movie/'+'now_playing'+'?language=en-US&page=1', options)).json()
            const popular =await(await fetch('https://api.themoviedb.org/3/movie/'+'popular'+'?language=en-US&page=1', options)).json()
            const toprated =await(await fetch('https://api.themoviedb.org/3/movie/'+'top_rated'+'?language=en-US&page=1', options)).json()
            const upcoming =await(await fetch('https://api.themoviedb.org/3/movie/'+'upcoming'+'?language=en-US&page=1', options)).json()
            //const upcoming=await data.json()
            dispatch(addnowplaying(nowplaying.results))
            dispatch(addpopular(popular.results))
            dispatch(addtoprated(toprated.results))
            dispatch(addupcoming(upcoming.results))  
        }
    useEffect(()=>{fetching()},[])
    const listnowplaying=useSelector((store)=>store.data.nowplaying)
    const listpopular=useSelector((store)=>store.data.popular)
    const listtoprated=useSelector((store)=>store.data.toprated)
    const listupcoming=useSelector((store)=>store.data.upcoming)
    const userdata=useSelector((store)=>store.user.username)
    if(!listnowplaying)return
  return (
    <div className='relative'>
        <div className='relative'>
        <div className='mt-36'>
            <Container details={listnowplaying} title="Now_Playing"/>
            <Container details={listtoprated} title="Top_Rated"/>
            <Container details={listpopular} title="Popular"/>
            <Container details={listupcoming} title="Upcoming"/>
        </div>
        </div>
        {userdata&&<div className='flex justify-center'>
        <div className='bg-black opacity-90 w-2/3 h-3/6 absolute mx-auto top-3'>
            <div className='flex p-5 '>
            <input className="w-full h-10 border border-blue-500 rounded-l-3xl p-4" type="text" placeholder='Type the you would like to watch'/>
            <button className='bg-blue-500  rounded-r-3xl h-10 w-10'>🔍</button>
            </div>
        </div>
        </div>}
    </div>
    )
}

export default Browse