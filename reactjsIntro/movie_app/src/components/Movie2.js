import React from 'react';
import {Link} from "react-router-dom" 
import PropTypes from 'prop-types';
import "./Movie.css"


function Movie2({id,year,title,summary,poster,genres}){
    return <Link to={{
        pathname:`/movie/${id}`,
        state:{
            year,
            title,
            summary,
            poster,
            genres
        }
    }}>
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">    
                <h3 className="movie__title" style={{backgroundColor:"red"}}>{title}</h3>
                <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
                <ul>
                    {genres.map((genre,index)=>{
                        return <li key={index} className="genres__genre">{genre}</li>
                    })}
                </ul>
            </div>
        </div>
    </Link>
}
Movie2.prototype={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie2;