import React from 'react';

const Card = (props) => {
  return <div className="card">
    <div>
      <img className="card-poster" src={props.movie.Poster}></img>
    </div>
    <div className="card-title">{props.movie.Title}</div>
    <div className="card-plot">{props.movie.Plot}</div>
    <div></div>

  </div>
}

export default Card