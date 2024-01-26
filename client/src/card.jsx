import React from 'react';

const Card = (props) => {
  return <div>
    <div>
      <img className="poster" src={props.movie.Poster}></img>
    </div>
    <div>{props.movie.Title}</div>
    <div>{props.movie.Plot}</div>
    <div></div>

  </div>
}

export default Card