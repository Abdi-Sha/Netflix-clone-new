import { useEffect, useState } from 'react'
import axios from '../../../Utils/axios'
import './row.css'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'  //helps us to find the id of the movie from youtube
// import YouTube from '@mui/icons-material/YouTube'
const Row = ({title,fetchURL,isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL,setTrailerURL] = useState("")

 

  const base_url = "https://image.tmdb.org/t/p/original";  //base url for images



  useEffect(() => {
    (async () => {
      try {
        console.log(fetchURL);
        const request = await axios.get(fetchURL);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchURL]);

  const handleClick =(movie)=>{
      if(trailerURL){
          setTrailerURL('')
      }else{
          movieTrailer(movie?.title || movie?.name || movie?.original_name)
          .then((url)=>{
              console.log(url)
              const urlParams=new URLSearchParams(new URL(url).search)
              console.log(urlParams)
              console.log(urlParams.get('v'))  //this will give me the id of the video(get('v'))
              setTrailerURL(urlParams.get('v'))
          })
      }
  }

  const opts={
      height: "390",
      width: "400%",
      playerVars:{
          autoplay:1,
      },
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={()=> handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{padding:'40px'}}>
        {trailerURL && <YouTube videoId ={trailerURL} opts={opts}/>}

    </div>
    </div>
  );
}


export default Row