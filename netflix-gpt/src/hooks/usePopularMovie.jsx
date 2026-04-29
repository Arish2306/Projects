import { useDispatch } from "react-redux"
import {  addPopularMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/Constants"

const usePopularMovies=()=>{

  const disPatch=useDispatch()

  const getPopularMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS)
     let movieList=await data.json()
  disPatch(addPopularMovies(movieList.results))
     
     
  }
  useEffect(()=>{
    getPopularMovies()
  },[])

}

export default usePopularMovies