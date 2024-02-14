import React from 'react'

const Card = ({data}) => {
  return (
    <div className={`w-48 opacity-100`}>
        <img className= {`p-2 hover:opacity-45`} src={'https://image.tmdb.org/t/p/w500'+data.poster_path}/>
    </div>
  )
}

export default Card