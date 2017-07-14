import React, { Component } from 'react';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.selectedItem) {
      return null;
    }
    return(
      <div>
        <img src={this.props.selectedItem.album.images[1].url}/>
        <span>{this.props.selectedItem.duration_ms}</span>
        <span>{this.props.selectedItem.name}</span>
        <span>{this.props.selectedItem.album.name}</span>
        <span>
          <audio controls>
            <source src={this.props.selectedItem.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </span>
      </div>
    );
  }
}

export default ItemDetail;
