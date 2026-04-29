import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovie'
import useUpComingMovies from '../hooks/useUpcomingmovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useUpComingMovies()
  useTopRatedMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse