import React from 'react';
import Card from './card.jsx';

const List = (props) => {
  if (props.focused) {
    return <div className="list-wrapper">
      <h2 className="list-header">Your Movies ({props.view.length})</h2>
      <div className="list">
        <Card key={props.currentMovie.Title} movie={props.currentMovie} focused={props.focused} setFocused={props.setFocused} currentMovie={props.currentMovie} setCurrentMovie={props.setCurrentMovie} />
      </div>
    </div>
  } else {
    return <div className="list-wrapper">
      <h2 className="list-header">Your Movies ({props.view.length})</h2>
      <div className="list">
        {props.view.map((movie) => <Card key={movie.Title} movie={movie} focused={props.focused} setFocused={props.setFocused} currentMovie={props.currentMovie} setCurrentMovie={props.setCurrentMovie} />)}
      </div>
    </div>
  }
}

export default List