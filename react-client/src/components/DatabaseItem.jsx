import React from 'react';

class DatabaseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.item === undefined) {
      return (
        <div>
          <div>Database Item!</div>
        </div>
      )
    } else {
      return (
        <div>{this.props.item.word}</div>
      )
    }
  }
}

export default DatabaseItem
