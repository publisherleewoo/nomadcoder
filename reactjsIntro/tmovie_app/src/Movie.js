import React from 'react'
import PropTypes from 'prop-types';

function Moive({id,year,title,summary,poster}){
    return (
        <div>
            id:{id} <br/>
            year:{year}<br/>
            title:{title}<br/>
            summary:{summary}<br/>
            <img src={poster} alt={title}/>
        </div>
    )
}

Moive.prototype={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,

}


export default Moive;
