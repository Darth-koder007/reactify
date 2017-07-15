import React, { Component } from 'react';

import ListItem from './list_item';

class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.list.length < 1) {
      return (
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
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
