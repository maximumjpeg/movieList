import React from 'react';

const Year = (props) => {
  if (props.expandAdv)
  return <div className="year-search">
    <label>Year released</label>
    <input type="search" onChange={(e) => {props.setYear(e.target.value)}}></input>
  </div>
}

export default Year