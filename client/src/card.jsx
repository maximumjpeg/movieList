import React from 'react';

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
    if (props) {
      return <div className="poster-wrapper" onClick={() => {props.setFocused(true); props.setCurrentMovie(props.movie)}}>
               <object className="card-poster" data={props.movie.Poster} type="image/jpg">
                 <img className="card-poster" src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"></img>
               </object>
             </div>
    }
    if (props.focused && props.currentMovie !== {}) {
      return <div className="card-expanded">
         <div className="card-left">
            <object className="card-poster" data={props.currentMovie.Poster} type="image/jpg">
              <img className="card-poster" src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"></img>
            </object>
        </div>
        <div className="card-right">
          <div className="card-title">{props.currentMovie.Title}</div>
          <div className="card-year">{props.currentMovie.Year}</div>
          <div className="card-plot">{props.currentMovie.Plot}</div>
          <div>{props.currentMovie.Genre}</div>
          <div>{props.currentMovie.Director}</div>
          <div>{props.currentMovie.Runtime}</div>
          <div>{props.currentMovie.Actors}</div>
          <div>{props.currentMovie.Rating}</div>
          <button onClick={() => {props.setFocused(false); props.setCurrentMovie({})}}>X</button>
        </div>
       </div>
    }
}

export default Card