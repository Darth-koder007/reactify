import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.searchTerm = this.searchTerm.bind(this);
    this.debounce = this.debounce.bind(this);
    this.state = {term: ''};
  }

  searchTerm(event) {
    let val = event.target.value;
    this.setState({term: val});
    this.debounce(this.props.onSearchInput(this.state.term), 1000);
  }

  debounce(func, wait, immediate) {
  	let timeout;
  	return () => {
  		const args = arguments;
  		const later = function() {
  			timeout = null;
  			if (!immediate) func.apply(this, args);
  		};
  		const callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(this, args);
  	};
  };

  render() {
    const ASC = 'icon-sort-alt-up';
    const DESC = 'icon-sort-alt-down';
    let sortOrder = ASC;

    return (
      <div className="search-bar">
        <div className="search-field">
          <input type="text" placeholder="Search" onChange={this.searchTerm} />
          <i className="icon-search"></i>
        </div>
        <div className="search-filter grouping">
          <span>Sort By: </span>
          <span onClick={()=> this.props.onFilter('popularity')}>Popularity<i className={sortOrder}></i></span>
          <span onClick={()=> this.props.onFilter('name')}>Name<i className={sortOrder}></i></span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
