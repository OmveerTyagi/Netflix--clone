import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css"
import requests from "../requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){
    const [movie, setMovies]= useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request =await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;

        }
        fetchData();

    }, [fetchUrl]); 
    
    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };

    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
        } else{
            movieTrailer(movie?.title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch(error => console.log(error));
        }
    }
    return(
        <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
           {movie.map( movie =>(
              
                   <img key={movie.id}
                   onClick={() => handleClick(movie)} className={`row_poster ${isLargeRow &&"row_posterLarge"}`}src={ `${base_url}${isLargeRow?movie.poster_path : movie.backdrop_path}`}
                    alt={movie.title} />
               
           
               ))}
        </div>
        {trailerUrl &&<YouTube videoId={trailerUrl}  opts={opts}/>}
        </div>
    );
}
export default Row;