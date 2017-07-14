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
      selectedItem: ''
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
    const AUTH_TOKEN = 'Bearer BQDEltKabtT51jYW8wAFsdViQ3ya7Er7IhsEW_s2aN4jA3SEx8mN0Tvaf9m2vPkY0m1kZwLn0x_4SgvMlts7Y3A3YIeZ6g-KhzHs8m2I0tvCKpt0d8ZBUTjb06Vl9O3duHIUA72kNayfPO9JZujqskkV6QE6yA9EDinfipXtyp_AOniwsoE';

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
      <div className="app">
        <div className="header">Reactify</div>
        <SearchBar onSearchInput={this.searchRequest} onFilter={this.filterResults} />
        <ItemDetail selectedItem={this.state.selectedItem} />
        <ListView onSelectItem={this.selectItem} list={this.state.results}/>
      </div>
    );
  }
}

export default App;
