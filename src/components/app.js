/**
 * React component import
 */
import React, { Component } from 'react';

/**
 * Custom component import
 */
import SearchBar from './search_bar';
import ListView from './list_view';
import ItemDetail from './item_detail';

/**
 * App class
 */
class App extends Component {
  /**
   * App constructor
   * @param  {Object} props [description]
   */
  constructor(props) {
    super(props);

    this.searchRequest = this.searchRequest.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.selectItem = this.selectItem.bind(this);

    // Initialize state
    this.state = {
      term: '',
      results: [],
      filter: '',
      selectedItem: '',
      auth_code:''
    };
  }

  /**
   * componentWillMount lifecycle callback
   * Asyncronous call is made to spotify server to get auth token
   */
  componentWillMount() {
      const REFRESH_TOKEN = 'AQCo-tf2_-1SIPcJm06vDO-tPv7FaEWQIHbYwXRSLuicEVf2Eg4UMCxD-YhJOZNoDvigr3HTdB6pqmWR3ozkIrSG3jjdTf9z8DlbjdCFTEugJVcoYNHxnhR4Xb0HwKAsc2I';
      const URL = `${window.location.href}spotify-server/refresh_token?refresh_token=${REFRESH_TOKEN}`;

      fetch(URL, {
        method: 'GET'
      })
      .then((response) => {
        return response.json().then((res) => {
          this.setState({auth_code: 'Bearer ' + res.access_token});
        });
      });
  }

  /**
   * Initiate search request and update state
   * @param  {String} term [search term]
   */
  searchRequest(term) {
    const URL = `https://api.spotify.com/v1/search?q=${term}&type=track`;
    this.setState({
      results: [],
      selectedItem: ''
    });

    if(term) {
      fetch(URL, {
        method: 'GET',
        headers: new Headers({
          'Authorization': this.state.auth_code
        })
      })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response && response.tracks) {
          this.setState({results: response.tracks.items});
        }
      });
    }
  }

  /**
   * filter serch results
   * @param  {String} type  [supported name and Popularity]
   * @param  {[type]} order [supported asc or desc]
   */
  filterResults(type, order) {
    const sorted = this.state.results.sort((a, b) => {
      order === 'ASC' ? a[type] - b[type] : b[type] - a[type];
    });

    this.setState({results: sorted});
  }

  /**
   * select item from list
   * @param  {Object} item
   */
  selectItem(item) {
    this.setState({selectedItem: item});
  }

  /**
   * render component
   */
  render() {
    if(this.state.auth_code === '') {
      return(
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      );
    }

    return (
      <div className="wrapper">
        <div className="header">Reactify</div>
        <div className="app">
          <SearchBar onSearchInput={this.searchRequest} onFilter={this.filterResults} />
          <ItemDetail selectedItem={this.state.selectedItem} />
          <ListView onSelectItem={this.selectItem} list={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default App;
