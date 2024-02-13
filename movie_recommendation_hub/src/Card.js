import React from 'react'

const Card = ({data}) => {
    console.log(data)
  return (
    <div className={`w-48`}>
        <img className= {`p-2 hover:opacity-45`} src={'https://image.tmdb.org/t/p/w500'+data.poster_path}/>
    </div>
  )
}

export default Card