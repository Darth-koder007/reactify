import React, { Component } from 'react';

class ListHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li><span>Name</span>Type<span>Popularity</span><span>Preview</span></li>
      </div>
    );
  }
}

export default ListHeader;
