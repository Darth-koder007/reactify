/**
 * React component import
 */
import React, { Component } from 'react';

/**
 * Custom component import
 */
import ListItem from './list_item';

/**
 * ListView class
 */
class ListView extends Component {
  /**
   * ListView constructor
   * @param  {object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * render component
   */
  render() {
    if(this.props.list.length < 1) {
      return (
        <div className="search-message">
          Search Something, Awesomness Awaits!!
        </div>
      );
    }

    const list = this.props.list.map((item) => {
      return (
        <ListItem key={item.id} onSelectItem={this.props.onSelectItem} item={item} />
      );
    });

    return (
      <div className="list-view">
        <ul className="list">
          {list}
        </ul>
      </div>
    );
  }
}

export default ListView;
