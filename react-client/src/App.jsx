import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import WordSubmit from './components/WordSubmit.jsx';
import WordProfile from './components/WordProfile.jsx'
import keys from './components/wordsApiKey';
import RelevantImage from './components/RelevantImage.jsx';
import DatabaseWords from './components/DatabaseWords.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWord: '',
      searched: false,
      favoriteWords: ['hullabaloo', 'serendipitous', 'mondegreen', 'tittle', 'paella', 'antediluvian', 'sinecure', 'imprimatur', 'cellar door', 'summer afternoon', 'hebenon', 'honorificabilitudinitatibus', 'zhuzh', 'jabberwocky', 'sesquipedalian', 'contronym', 'hyphy', 'gewgaw', 'pettifog', 'gyre', 'milquetoast', 'eunoia', 'rigmarole', 'esoteric', 'cardamom', 'erroneous', 'tiramisu'],
      word: '',
      profile: {
        word: '',
        definition: '',
        partOfSpeech: '',
        similarTo: '',
        antonyms: '',
        examples: '',
        frequency: undefined,
        numberOfSyllables: '',
        list: '',
        pronunciation: '',
      },
      imageUrl: '',
    }
  }

  getWord(e) {
    e.preventDefault();
    this.setState({
      word: e.target.value,
    });
  }

  submitInfo(e) {
    e.preventDefault();
    const wordsApiKey = keys.wordsApiKey;
    const wordsApiUrl = `https://wordsapiv1.p.rapidapi.com/words/${this.state.word}/`
    const wordsApiXRapidApiHost = 'wordsapiv1.p.rapidapi.com'
    const twinWordApiUrl = "https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=mask"
    const twinWordXRapidApiHost = "twinword-word-graph-dictionary.p.rapidapi.com"

    $.ajax({
      url: `https://wordsapiv1.p.rapidapi.com/words/${this.state.word}/`,
      headers: {
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        "X-RapidAPI-Key": wordsApiKey,
      },
      dataType: 'application/json',
      error: (success) => {
        const parsed = JSON.parse(success.responseText);
        var newProfile = {}

        if (parsed.word !== undefined) {
          newProfile.word = parsed.word;
        } else {
          newProfile.word = '';
        }
        if (parsed.results[0].definition !== undefined) {
          newProfile.definition = parsed.results[0].definition;
        } else {
          newProfile.definition = '';
        }
        if (parsed.results[0].partOfSpeech !== undefined) {
          newProfile.partOfSpeech = parsed.results[0].partOfSpeech;
        } else {
          newProfile.partOfSpeech = '';
        }
        if (parsed.frequency !== undefined) {
          newProfile.frequency = parsed.frequency;
        } else {
          newProfile.frequency = '';
        }
        if (parsed.syllables.count !== undefined) {
          newProfile.numberOfSyllables = parsed.syllables.count;
        } else {
          newProfile.numberOfSyllables = '';
        }
        if (parsed.pronunciation.all !== undefined) {
          newProfile.pronunciation = parsed.pronunciation.all;
        } else {
          newProfile.pronunciation = '';
        }
        if (parsed.results[0].similarTo !== undefined) {
          newProfile.similarTo = parsed.results[0].similarTo[0];
        } else {
          newProfile.similarTo = '';
        }
        if (parsed.results[0].antonyms !== undefined) {
          newProfile.antonyms = parsed.results[0].antonyms[0];
        } else {
          newProfile.antonyms = '';
        }
        if (parsed.results[0].examples !== undefined) {
          newProfile.examples = `"${parsed.results[0].examples[0]}..."`;
        } else {
          newProfile.examples = '';
        }
        // TO-DO: MAP OUT ALL THESE SYLLABLES:
        newProfile.list = parsed.syllables.list[0];

        this.setState({
          profile: newProfile,
          searched: true,
        });

        $.ajax({
          url: `https://www.googleapis.com/customsearch/v1?key=${keys.googleCustomSearchKey}&searchType=image&cx=${keys.googleSearchEngineKey}&q=${this.state.word}`,
          success: (success) => {
            if (success.items[0] !== undefined) {
              var newImageUrl = success.items[0].link;
            } else {
              this.state.imageUrl = '';
            }
            this.setState({
              imageUrl: newImageUrl,
            })
          }
        });
      },
    })
  }

  saveWord(e) {
    e.preventDefault();
    const newRecord = this.state.profile;
    if (this.state.word === '') {
      console.log('You must search for a word before you can save its profile to a database!')
    } else {
      $.ajax({
        url: '/wordProfiles',
        method: 'POST',
        data: newRecord,
        dataType: 'application/json',
        success: (success) => {
          console.log(`saveWord() Success-success: ${JSON.stringify(success)}`);
        },
        error: (error) => {
          console.log(`saveWord() Error-success: ${JSON.stringify(error)}`);
        }
      });
    }
  }

  componentDidMount() {
    var newChosenWord = this.state.favoriteWords[Math.round(Math.random() * (this.state.favoriteWords.length - 1))];
    this.setState({
      chosenWord: newChosenWord,
    })
  }

  loadWord(e, searchedWord) {
    e.preventDefault();
    console.log('Loading word!');
    $.ajax({
      url: '/loadWord',
      data: searchedWord,
      success: (success) => {
        if (success.items[0] !== undefined) {
          var newImageUrl = success.items[0].link;
        } else {
          this.state.imageUrl = '';
        }
        this.setState({
          imageUrl: newImageUrl,
        })
      }
    });
  }

  render () {
    return (<div>
      <h1>Friends With Words:</h1>
      <h3>Do you "{this.state.chosenWord}"? Us too!</h3>
      <WordSubmit submitInfo={this.submitInfo.bind(this)} getWord={this.getWord.bind(this)}/>
      <br />
      <WordProfile searched={this.state.searched} saveWord={this.saveWord.bind(this)} word={this.state.profile.word} definition={this.state.profile.definition} partOfSpeech={this.state.profile.partOfSpeech} similarTo={this.state.profile.similarTo} antonyms={this.state.profile.antonyms} examples={this.state.profile.examples} frequency={this.state.profile.frequency} numberOfSyllables={this.state.profile.numberOfSyllables} list={this.state.profile.list} pronunciation={this.state.profile.pronunciation} />
      <br />
      <DatabaseWords />
      <br />
      <button onClick={(e) => this.loadWord(e)}>Load word info!</button>
      <RelevantImage searched={this.state.searched} imageUrl={this.state.imageUrl}/>
    </div>)
  }
}

export default App;
