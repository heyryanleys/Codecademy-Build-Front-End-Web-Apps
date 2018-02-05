import React from 'react';
import Styles from './Track.css';

class Track extends React.Component{
  renderAction(){
    if (isRemoval){
      '+'
    } else {
      '-'
    }
  }
  render(){
    <div className="Track">
      <div className="Track-information">
        <h3><!-- track name will go here --></h3>
        <p><!-- track artist will go here--> | <!-- track album will go here --></p>
      </div>
      <a className="Track-action">{renderAction()}</a>
    </div>
  }
}

export default Track
