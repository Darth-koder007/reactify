import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.searchTerm = this.searchTerm.bind(this);
    this.state = {term: ''};
  }

  searchTerm(event) {
    let val = event.target.value;
    this.setState({term: val});
    this.props.onSearchInput(this.state.term);
  }

  render() {
    const ASC = 'icon-sort-alt-up';
    const DESC = 'icon-sort-alt-down';
    let sortOrder = ASC;

    return (
      <div className="search-bar">
        <div className="search-field">
          <input type="text" onChange={this.searchTerm} />
        </div>
        <div className="search-filter">
          <span onClick={()=> this.props.onFilter('popularity')}>Popularity<i className={sortOrder}></i></span>
          <span onClick={()=> this.props.onFilter('name')}>Name<i className={sortOrder}></i></span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
