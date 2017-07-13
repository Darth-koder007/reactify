import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li key={this.props.item.id}>
          {this.props.item.type},
          {this.props.item.name},
        <audio controls>
          <source src={this.props.item.preview_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </li>
    );
  }
}

export default ListItem;
