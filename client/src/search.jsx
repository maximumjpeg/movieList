import React, { useState } from 'react';

const Search = (props) => {
  if (props.expandSearch === false) {
    return <div className="search-wrapper">
      {/* <button className="submit-search-button" onClick={() => {props.getMovie(props.search, props.model, props.list, props.setList)}}>🔎</button> */}
      <button className="submit-search-button" onClick={() => {props.setExpandSearch(!props.expandSearch)}}>🔎</button>
    </div>
  }
  if (!!props.expandSearch) {
    return <div className="search-wrapper">
      <input type="search" className="searchbar" placeholder="Search for a movie" onChange={(e) => {props.setSearch(e.target.value); console.log(e.target.value)}}></input>
      <button className="search-icon-button" onClick={() => {props.setExpandSearch(!props.expandSearch)}}>🔎</button>
    </div>
  }

}

export default Search