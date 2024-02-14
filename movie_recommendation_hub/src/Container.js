import React from 'react'
import Card from './Card'

const Container = ({details,title}) => {
  return (
    <div className=''>
        <h1 className='bg-gradient-to-r from-blue-700 text-white font-bold w-1/2 text-5xl p-2 opacity-100'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {details.map((e)=><Card data={e}/>)}
        </div></div>
    </div>
  )
}

export default Container