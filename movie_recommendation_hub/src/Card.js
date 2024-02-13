import React from 'react'

const Card = ({data}) => {
  return (
    <div className='w-48 p-4'>
        <img src={'https://image.tmdb.org/t/p/w500'+data.poster_path}/>
    </div>
  )
}

export default Card