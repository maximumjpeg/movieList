import React, { useState } from 'react';

const Search = (props) => {
  return <div>
    <input placeholder="Search for a movie" onChange={(e) => {props.setSearch(e.target.value); console.log(e.target.value)}}></input>
    <button onClick={() => {props.getMovie(props.search, props.model, props.list, props.setList)}}>🔎</button>
  </div>
}

export default Search