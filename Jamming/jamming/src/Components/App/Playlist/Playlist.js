import React from 'react';
import styles from 'Playlist.css';
import {Tracklist} from '../TrackList/TrackList';

class Playlist extends React.Component{
  render(){
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      // <!-- Add a TrackList component -->
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
  }
}

export default Playlist
