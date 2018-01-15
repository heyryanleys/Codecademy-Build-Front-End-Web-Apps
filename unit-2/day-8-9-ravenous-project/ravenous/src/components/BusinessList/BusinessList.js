import React from 'react';
import './Business.css';
import Business from '../Business/Business';

export class BusinessList extends React.Component {
  render(){
    return(
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    )
  };
};
