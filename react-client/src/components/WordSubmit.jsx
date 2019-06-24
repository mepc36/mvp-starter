import React from 'react';
import $ from 'jquery';
import keys from './wordsApiKey';

class WordSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <form>
        <input onChange={(e) => this.props.getWord(e)} placeholder="Favorite word?" width="200" id="inputBox"></input>
        <br/>
        <br/>
        <button onClick={(e) => this.props.submitInfo(e)}>Get word info!</button>
      </form>
    </div>
    )
  }
}

export default WordSubmit;