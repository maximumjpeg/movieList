import React, { useState } from 'react';
import AdvSearch from './advSearch.jsx';


const Search = (props) => {
  if (props.expandSearch === false) {
    return <div className="search-wrapper">
      {/* <button className="submit-search-button" onClick={() => {props.getMovie(props.search, props.model, props.list, props.setList)}}>🔎</button> */}
      <button className="submit-search-button" onClick={() => {props.setExpandSearch(!props.expandSearch)}}>🔎</button>
    </div>
  }
  if (!!props.expandSearch) {
    return <div className="search-wrapper">
      {/* wrap the input with html form to call the .reset() method */}
      <input type="search" className="searchbar" placeholder="Search for a movie" onChange={(e) => {props.setSearch(e.target.value); console.log(e.target.value)}} onKeyDown={(e) => {if (e.key === 'Enter') {props.getMovie(props.search, props.model, props.list, props.setList, props.year); props.setSearch(''); props.setYear('')}}}></input>
      <button className="search-icon-button" onClick={() => {props.setExpandSearch(!props.expandSearch)}}>🔎</button>
      <AdvSearch setExpandAdv={props.setExpandAdv} expandAdv={props.expandAdv} year={props.year} setYear={props.setYear} />
    </div>
  }

}

export default Search