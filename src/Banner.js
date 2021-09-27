import axios from "./axios";
import React ,{useState, useEffect} from "react";
import requests from "./requests";
import "./Banner.css";



function Banner(){
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    
    console.log(movie);

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return(
        <header className="banner" 
            style={{ 
                backgroundSize:"cover" ,
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition:"center center",
            }}
        >

            <div className="banner_contents">
                <h1>{movie.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h2 className="banner_description">{truncate(movie?.overview,150)}</h2>
            </div>
                <div className="banner_fadeBotton"></div>
        </header>
    )
}

export default Banner;