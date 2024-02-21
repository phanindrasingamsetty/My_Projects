import React, { useRef, useState } from 'react'
import OpenAI from 'openai';
import Container from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { chgsuggestionbox } from './utils/dataslice';

const GptSearching = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmRiM2FiNzY1OWVlOWU1OTkzNjEyY2M4NzI1NjIyYiIsInN1YiI6IjY0ZjVlMmI2NWYyYjhkMDBlMTJjYzZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z68CPZ5T5WC9FACLuw3LKOi7Uozv57t6K03ZVUT3LTE'
        }
      };
    //const [suggestionbtn,setsuggestionbtn]=useState(true);
    const suggestionbtn=useSelector((store)=>store.data.suggestionbox)
    const userdata=useSelector((store)=>store.user.username)
    const dispatch=useDispatch()
    const searchtxt=useRef(null)
    const openai = new OpenAI({
        apiKey: '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',
        //apiKey: , // This is the default and can be omitted
        dangerouslyAllowBrowser: true
      });
    const [mvelist,setmvelist]=useState("")
    const [tmdblst,settmdblist]=useState("")
    const handlemoviesearch=async(mve)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+mve+'&language=en-US&page=1',options)
        const json=await data.json()
        return json.results;
      
    
      }
    const handlesuggestionbtn=()=>{
        //setsuggestionbtn(false)
        dispatch(chgsuggestionbox(false))
    }
    const handlegptsearch=async()=> {
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: 'act as a movie recommendation system and suggest ome movies for query'+searchtxt.current.value+ 'only give me movie names of 5 movies in a comma seperated format like surya, ravi, ram, teja, phani. Please dont give any text apartt from movie names' }],
          model: 'gpt-3.5-turbo',
        });
        const mve=chatCompletion.choices[0].message.content.split(",")
        console.log(mve)
        if(mve){
            const samplelist=mve.map((e)=>handlemoviesearch(e))
            const mainlist=await Promise.all(samplelist)
            console.log(mainlist)
            settmdblist(mainlist)
        }
    }
    //{tmdblst!==""&&tmdblst.map((e)=><Container details={e[0]} title={"pp"} />)}
  return (
    <div>
        <div className='flex justify-center'>
        {suggestionbtn&&userdata&&<div className={`bg-black  w-2/3 h-3/6 absolute mx-auto top-3 overflow-y-scroll opacity-95`}>
            <div className='flex p-5'>
            <input ref={searchtxt} className="w-full h-10 border border-blue-500 rounded-l-3xl p-4" type="text" placeholder='Type the you would like to watch'/>
            <button onClick={()=>{handlegptsearch()}} className='bg-blue-500  rounded-r-3xl h-10 w-10'>🔍</button>
            <button onClick={()=>{handlesuggestionbtn()}} className='border border-black p-2'>❌</button>
            </div>
            <div className='overflow-scroll overflow-y-scroll ml-10 bg-black'>
        {tmdblst!==""&&tmdblst.map((e)=><Container  details={e} title={e[0].title}/>)}
        </div>
        </div>}
        
        </div>
    </div>
  )
}

export default GptSearching