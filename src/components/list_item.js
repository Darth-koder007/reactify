import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    this.props.onSelectItem(this.props.item);
  }

  millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);

    return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
  }

  render() {
    return(
      <li key={this.props.item.id} onClick={this.selectItem} className="list-item grouping">
        <img src={this.props.item.album.images[2].url} />
        <span>
          {this.props.item.name}
        </span>
        <span>
          Duration: {this.millisToMinutesAndSeconds(this.props.item.duration_ms)}
        </span>
        {/* <span>
          <audio controls>
            <source src={this.props.item.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </span> */}
      </li>
    );
  }
}

export default ListItem;
