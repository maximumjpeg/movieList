import React from 'react';
import Year from './year.jsx';

const AdvSearch = (props) => {
  if (props.expandAdv === true) {
    return <div className="adv-collapsed">
    <input type="checkbox" onClick={() => {props.setExpandAdv(!props.expandAdv)}}></input>
    <label>Advanced Search</label>
    <Year year={props.year} setYear={props.setYear} expandAdv={props.expandAdv} />
  </div>
  } else if (props && props.expandAdv === false) {
    return <div className="adv-collapsed">
      <input type="checkbox" onClick={() => {props.setExpandAdv(!props.expandAdv)}}></input>
      <label>Advanced Search</label>
    </div>
  }
}

export default AdvSearch