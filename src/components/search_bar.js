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
    return (
      <div>
        <input type="text" onChange={this.searchTerm}></input>
      </div>
    );
  }
}

export default SearchBar;
