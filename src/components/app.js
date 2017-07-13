import React, { Component } from 'react';

import SearchBar from './search_bar';
import ListView from './list_view';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.searchRequest = this.searchRequest.bind(this);
    this.state = {
      term: '',
      results: []
    };
  }

  getAccessToken() {
    const REFRESH_TOKEN = 'AQCo-tf2_-1SIPcJm06vDO-tPv7FaEWQIHbYwXRSLuicEVf2Eg4UMCxD-YhJOZNoDvigr3HTdB6pqmWR3ozkIrSG3jjdTf9z8DlbjdCFTEugJVcoYNHxnhR4Xb0HwKAsc2I';
    const URL = `http://localhost:8888/refresh_token?refresh_token=${REFRESH_TOKEN}`;
    const AUTH_HEADER = 'Basic OWQzMTM3OTM5MWU5NDQ2YmJjNDJlYzAzZmM0ZjIxM2E6N2FlMTk1YjJmNThkNGE1NGJkYmVlZDU4MWE0NGVjNDI=';
    const AUTH_TOKEN = 'BQABtdbCmxGD9fvlg7bInIhAizIFZsaviAvcrUQpAoIdxZq-Pd2MzgR7HrbpH2Xhz819yWhLe_g_UXkggi3LBoU41G0cJm8HFHLqaZWpyZmMqU22Qbv4imtg7Sy7m6QNb1m6Ea7U4I-DycW4hB2buL8JNIaK0X0yJZwLTYdaPF9zJoVr6_k';
    fetch(URL, {
      method: 'GET'
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      console.log("response => ", response);
    });
  }

  searchRequest(term) {
    const URL = `https://api.spotify.com/v1/search?q=${term}&type=track`;
    const AUTH_TOKEN = 'Bearer BQBqjDU_E2qJkJ6nfplkQWmxRuLBJ42tWvpDykv3KHFaRRwFweUWv2MlPnVlU-0RruymhRjwAaorUjuVJyVDbcJZA3jpqQQg9Qguw5AKSFz1akz3C6BpV1_lYBhcp205Wn-_IN3MlyBbVGat4KwiX0QXjr8dC9Bj8tdeUIyVevH7WugVX0w';

    fetch(URL, {
      method: 'GET',
      headers: new Headers({
        'Authorization': AUTH_TOKEN
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

  render() {
    return (
      <div>
        <div>Reactify</div>
        <SearchBar onSearchInput={this.searchRequest}/>
        <ListView list={this.state.results}/>
      </div>
    );
  }
}
