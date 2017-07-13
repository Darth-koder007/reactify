import React, { Component } from 'react';

import ListItem from './list_item';

class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.list.length < 1) {
      return null;
    }

    const list = this.props.list.map((item) => {
      return (
        <ListItem key={item.id} item={item} />
      );
    });

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default ListView;
