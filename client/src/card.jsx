import React from 'react';
import Panel from './panel.jsx';

const Card = (props) => {
  // return <div className="card">
  //   <div className="card-left">
  //     <object className="card-poster" data={props.movie.Poster} type="image/jpg">
  //       <img className="card-poster" src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"></img>
  //     </object>
  //   </div>
  //   <div className="card-right">
  //     <div className="card-title">{props.movie.Title}</div>
  //     <div className="card-year">{props.movie.Year}</div>
  //     <div className="card-plot">{props.movie.Plot}</div>
  //     <div>{props.movie.Genre}</div>
  //     <div>{props.movie.Director}</div>
  //     <div>{props.movie.Runtime}</div>
  //     <div>{props.movie.Actors}</div>
  //     <div>{props.movie.Rating}</div>
  //   </div>
  // </div>
    if (props.focused && props.currentMovie !== {}) {
      return <div className="card-expanded">
               <div className="card-top">
               <div className="card-left">
                    <object className="poster-expanded" data={props.currentMovie.Poster} type="image/jpg">
                      <img className="poster-expanded" src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"></img>
                    </object>
                </div>
                <div className="card-right">
                  <button className="close-expanded" onClick={() => {props.setFocused(false); props.setCurrentMovie({})}}>X</button>
                  <div className="card-title-expanded">
                    <h2>{props.currentMovie.Title}</h2>
                  </div>
                  <div className="card-year">{props.currentMovie.Year}</div>
                  <div>{props.currentMovie.Genre}</div>
                  <div>Director: {props.currentMovie.Director}</div>
                  <div>{props.currentMovie.Runtime}</div>
                  <div>Starring: {props.currentMovie.Actors}</div>
                  <div className="movie-rating">{props.currentMovie.Rated}</div>
                  <div className="card-plot">{props.currentMovie.Plot}</div>
                </div>
               </div>
                <Panel />
             </div>
    }
    if (props) {
      return <div className="poster-wrapper" onClick={() => {props.setFocused(true); props.setCurrentMovie(props.movie)}}>
               <object className="card-poster" data={props.movie.Poster} type="image/jpg">
                 <img className="card-poster" src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"></img>
               </object>
             </div>
    }
}

export default Card