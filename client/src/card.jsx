import React from 'react';

const Card = (props) => {
  return <div className="card">
    <div>
      <object className="card-poster" data={props.movie.Poster} type="image/jpg">
        <img className="card-poster" src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"></img>
      </object>
    </div>
    <div className="card-title">{props.movie.Title}</div>
    <div className="card-year">{props.movie.Year}</div>
    <div className="card-plot">{props.movie.Plot}</div>
    <div></div>

  </div>
}

export default Card