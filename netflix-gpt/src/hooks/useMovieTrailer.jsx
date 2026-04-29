import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer=(movieId)=>{
    const disPatch=useDispatch()

  const getMoviesData = async () => {


    let data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS,
    );

    let json = await data.json();

    console.log(json);

    const filterData = json.results.filter((val) => val.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    // setTrailerId(trailer.key)
    disPatch(addTrailerVideo(trailer))
    
  };

  useEffect(() => {
    getMoviesData();
  }, []);

}

export default useMovieTrailer