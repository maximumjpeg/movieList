import React, { useState } from 'react';

const Search = (props) => {
  return <div className="search-wrapper">
    <input type="search" className="searchbar" placeholder="Search for a movie" onChange={(e) => {props.setSearch(e.target.value); console.log(e.target.value)}}></input>
    <button className="submit-search-button" onClick={() => {props.getMovie(props.search, props.model, props.list, props.setList)}}>🔎</button>
  </div>
}

export default Search