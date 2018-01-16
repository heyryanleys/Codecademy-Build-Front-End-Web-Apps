import React from 'react';
import '../SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
}

export class SearchBar extends React.Component {
  renderSortByOptions(){
    return Object.keys(soryByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[soryByOption]
        return <li key={sortByOptionValue}>{sortByOption}</li>
    })
  }
  render(){
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
    </div>
    )
  };
};
