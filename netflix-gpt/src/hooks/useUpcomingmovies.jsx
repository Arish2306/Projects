import { useDispatch } from "react-redux"
import {  addPopularMovies, addUpComingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/Constants"

const useUpComingMovies=()=>{

  const disPatch=useDispatch()

  const getUpComingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS)
     let movieList=await data.json()
  disPatch(addUpComingMovies(movieList.results))
     
     
  }
  useEffect(()=>{
   getUpComingMovies()
  },[])

}

export default useUpComingMovies