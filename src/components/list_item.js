/**
 * React component import
 */
import React, { Component } from 'react';

/**
 * ListItem class
 */
class ListItem extends Component {
  /**
   * ListItem constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);

    this.selectItem = this.selectItem.bind(this);
  }

  /**
   * change selected Item
   */
  selectItem() {
    this.props.onSelectItem(this.props.item);
  }

  /**
   * [convert milliseconds To Minutes And Seconds]
   * @param  {Number}  millis [description]
   * @return {Boolean}
   */
  millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);

    return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
  }

  /**
   * render components
   */
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
      </li>
    );
  }
}

export default ListItem;
