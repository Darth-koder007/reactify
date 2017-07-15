import React, { Component } from 'react';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
  }

  millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);

    return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
  }

  render() {
    if(!this.props.selectedItem) {
      return null;
    }
    return(
      <div className="item-detail">
        <img src={this.props.selectedItem.album.images[1].url}/>
        <span>Name: {this.props.selectedItem.name}</span>
        <span>Album: {this.props.selectedItem.album.name}</span>
        <span>Duration: {this.millisToMinutesAndSeconds(this.props.selectedItem.duration_ms)}</span>
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
