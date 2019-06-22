import React from 'react';

class WordProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h4>Word Profile!</h4>
        <ul>
          <li>Word: {this.props.word}</li>
          <li>Definition: {this.props.definition}</li>
          <li>Part Of Speech: {this.props.partOfSpeech}</li>
          <li>Similar To: {this.props.similarTo}</li>
          <li>Antonyms: {this.props.antonyms}</li>
          <li>Examples: {this.props.examples}</li>
          <li>Frequency: {this.props.frequency}</li>
          <li>Number of Syllalbes: {this.props.numberOfSyllables}</li>
          <li>List: {this.props.list}</li>
          <li>I.P.A. Pronunciation: {this.props.pronunciation}</li>
        </ul>
        <button onClick={(e) => this.props.saveWord(e)}>Save!</button>
      </div>
    )
  }
}

export default WordProfile