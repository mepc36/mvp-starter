import React from 'react';
import RhymeItem from './RhymeItem.jsx'

class RhymeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.rhymes.length === 0) {
      return (
        <div>
          <h4>Search for or load up a word, and then see all its rhymes here!</h4>
        </div>
      )
    } else {
      return (<div><ol>
        {this.props.rhymes.map(item => (
            <li onClick={(e) => this.props.loadRhyme(e, item.word)}>{item.word}</li>
        ))}
        </ol>
        </div>);
    }
  }
}

export default RhymeForm;
