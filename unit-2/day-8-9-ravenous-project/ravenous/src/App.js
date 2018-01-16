import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Business from './components/Business/Business.js'
import BusinessList from './components/BusinessList/BusinessList.js'
import SearchBar from './components/SearchBar/SearchBar.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar />
          <BusinessList />
      </div>
    );
  }
}
