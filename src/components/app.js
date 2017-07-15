import React, { Component } from 'react';

import SearchBar from './search_bar';
import ListView from './list_view';
import ItemDetail from './item_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.searchRequest = this.searchRequest.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.selectItem = this.selectItem.bind(this);

    this.state = {
      term: '',
      results: [],
      filter: '',
      selectedItem: '',
      auth_code:''
    };
  }

  async componentWillMount() {
    const AUTH_TOKEN = await this.getAccessToken();
    this.setState({auth_code: AUTH_TOKEN});
  }

  getAccessToken() {
    const REFRESH_TOKEN = 'AQCo-tf2_-1SIPcJm06vDO-tPv7FaEWQIHbYwXRSLuicEVf2Eg4UMCxD-YhJOZNoDvigr3HTdB6pqmWR3ozkIrSG3jjdTf9z8DlbjdCFTEugJVcoYNHxnhR4Xb0HwKAsc2I';
    const URL = `${window.location.href}spotify-server/refresh_token?refresh_token=${REFRESH_TOKEN}`;
    fetch(URL, {
      method: 'GET'
    })
    .then((response) => {
      console.log(response);
      return response.json();
    });
  }

  searchRequest(term) {
    const URL = `https://api.spotify.com/v1/search?q=${term}&type=track`;
    // const AUTH_TOKEN = "Bearer "+ await this.getAccessToken();

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

  filterResults(type, order) {
    const sorted = this.state.results.sort((a, b) => {
      order === 'ASC' ? a[type] - b[type] : b[type] - a[type];
    });

    this.setState({results: sorted});
  }

  selectItem(item) {
    this.setState({selectedItem: item});
  }

  render() {
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
