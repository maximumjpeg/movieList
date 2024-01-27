import React from 'react';
import Card from './card.jsx';

const List = (props) => {
  return <div className="list-wrapper">
    <h2 className="list-header">Your Movies</h2>
    <div className="list">
    {props.view.map((movie) => <Card key={movie.Title} movie={movie} />)}
    </div>
  </div>
}

export default List