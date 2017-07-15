/**
 * React component import
 */
import React, { Component } from 'react';

/**
 * SearchBar class
 */
class SearchBar extends Component {
  /**
   * Searchbar constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);

    this.searchTerm = this.searchTerm.bind(this);
    this.debounce = this.debounce.bind(this);

    // Initialize state
    this.state = {term: ''};
  }

  /**
   * searchterm passes term to parent search function
   * @param  {Object} event [event object]
   */
  searchTerm(event) {
    const val = event.target.value;

    this.setState({term: val});
    this.debounce(() => this.props.onSearchInput(this.state.term), 1000)();
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing.
   * @param  {function} func      [function to be debounced]
   * @param  {number} wait      [milliseconds]
   * @param  {boolean} immediate [boolean flag to invoke function immediately]
   */
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

  /**
   * render component
   */
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
