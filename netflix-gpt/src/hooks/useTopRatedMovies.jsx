import { useDispatch } from "react-redux"
import {  addPopularMovies, addTopRatedMovies, addUpComingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/Constants"

const useTopRatedMovies=()=>{

  const disPatch=useDispatch()

  const getTopRatedMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS)
     let movieList=await data.json()
  disPatch(addTopRatedMovies(movieList.results))
     
  
  
     
  }
  useEffect(()=>{
getTopRatedMovies()
  },[])

}

export default useTopRatedMovies