import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/Constants"

const useNowPlayingMovies=()=>{

  const disPatch=useDispatch()

  const getNowPlayingMoviees=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing',API_OPTIONS)
     let movieList=await data.json()
  disPatch(addNowPlayingMovies(movieList.results))
     
     
  }
  useEffect(()=>{
    getNowPlayingMoviees()
  },[])

}

export default useNowPlayingMovies