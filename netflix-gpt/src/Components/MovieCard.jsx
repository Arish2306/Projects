import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'

const MovieCard = ({posterPath}) => {

//    console.log("pp",posterPath);

console.log("posterPath");

   
    
  return (
    <div className='w-36 pr-4' >
        <img  src={IMG_CDN_URL+posterPath} alt="" />
    </div>
  )
}

export default MovieCard