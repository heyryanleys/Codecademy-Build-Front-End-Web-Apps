import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.getSortByClass = this.getSortByClass.bind(this);
  }

  getSortByClass(sortByOption){
    if (this.state.sortBy == sortByOption){
      return 'active'
    } else {
      return ''
    }
  }

  handleSortByChange(sortByOption){
    this.setState(
      { sortBy: sortByOption }
    )
  }

  handleTermChange(event){
    this.setState(
      { term: event.target.value }
    )
  }

  handleLocationChange(event){
    this.setState(
      { location: event.target.value }
    )
  }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption]
        return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
    })
  }

  render(){
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
    </div>
    )
  };
};

export default SearchBar;
