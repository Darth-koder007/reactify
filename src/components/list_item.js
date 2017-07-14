import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    this.props.onSelectItem(this.props.item);
  }

  render() {
    return(
      <li key={this.props.item.id} onClick={this.selectItem}>
        <span>
          <img src={this.props.item.album.images[2].url} />
        </span>
        <span>
          {this.props.item.type},
        </span>
        <span>
          {this.props.item.name},
        </span>
        <span>
          <audio controls>
            <source src={this.props.item.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </span>
      </li>
    );
  }
}

export default ListItem;
