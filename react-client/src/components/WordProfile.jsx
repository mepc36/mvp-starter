import React from 'react';
import styles from './styles/wordProfileStyles.css';
import responsiveVoice from 'responsivevoice';
import PronounceWord from './PronounceWord.jsx'

class WordProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Word Profile:</h3>
        <table style={{width: '600px' }} >
          <tbody>
            <tr>
              <td className={styles.tableHeaders}>Category:</td>
              <td className={styles.tableHeaders}>Info:</td>
            </tr>
            <tr>
              <td>Word:</td>
              <td>{this.props.word}</td>
            </tr>
            <tr>
              <td>Part Of Speech:</td>
              <td>{this.props.partOfSpeech}</td>
            </tr>
            <tr>
              <td>Definition:</td>
              <td>{this.props.definition}</td>
            </tr>
            <tr>
              <td>Synonyms:</td>
              <td>{this.props.similarTo}</td>
            </tr>
            <tr>
              <td>Antonyms:</td>
              <td>{this.props.antonyms}</td>
            </tr>
            <tr>
              <td>Examples:</td>
              <td>{this.props.examples}</td>
            </tr>
            <tr>
              <td>Frequency:</td>
              <td>{this.props.frequency}</td>
            </tr>
            <tr>
              <td>Number of Syllables:</td>
              <td>{this.props.numberOfSyllables}</td>
            </tr>
            <tr>
              <td>List:</td>
              <td>{this.props.list}</td>
            </tr>
            <tr>
              <td>Pronunciation:</td>
              <td>{this.props.pronunciation}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <button onClick={(e) => this.props.saveWord(e)}>Save word to database!</button>
        <br />
        <br />
        <PronounceWord searched={this.props.searched} word={this.props.word}/>
      </div>
    )
  }
}

export default WordProfile