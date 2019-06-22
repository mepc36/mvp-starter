import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import WordSubmit from './components/WordSubmit.jsx';
import keys from './components/wordsApiKey';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWord: '',
      favoriteWords: ['serendipitous', 'mondegreen', 'tittle', 'paella', 'antediluvian', 'sinecure', 'imprimatur', 'cellar door', 'summer afternoon', 'hebenon', 'honorificabilitudinitatibus', 'zhuzh', 'jabberwocky', 'sesquipedalian', 'contronym', 'gewgaw', 'pettifog', 'gyre', 'milquetoast', 'euphoia', 'rigmarole', 'esoteric', 'cardamom', 'erroneous', 'tiramisu'],
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
    $.ajax({
      url: `https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=mask`,
      headers: {
        "X-RapidAPI-Host": "twinword-word-graph-dictionary.p.rapidapi.com",
        "X-RapidAPI-Key": wordsApiKey,
      },
      dataType: 'application/json',
      error: (success) => {
        console.log(success);
        // const parsed = JSON.parse(success.responseText);
        // // console.log(`JSON.stringify(parsed.results): ${JSON.stringify(parsed)}`);
        // console.log(`Word: ${JSON.stringify(parsed.word)}`);
        // console.log(`Definition: ${JSON.stringify(parsed.results[0].definition)}`);
        // console.log(`Part of Speech: ${JSON.stringify(parsed.results[0].partOfSpeech)}`);
        // console.log(`Also: ${JSON.stringify(parsed.results[0].also)}`);
        // console.log(`Similar To: ${JSON.stringify(parsed.results[0].similarTo)}`);
        // console.log(`Antonyms: ${JSON.stringify(parsed.results[0].antonyms)}`);
        // console.log(`Examples: ${JSON.stringify(parsed.results[0].examples)}`);
        // console.log(`Frequency: ${JSON.stringify(parsed.frequency)}`);
        // console.log(`Syllables list: ${JSON.stringify(parsed.syllables.list)}`);
        // console.log(`Syllables count: ${JSON.stringify(parsed.syllables.count)}`);
        // console.log(`Pronunciation: ${JSON.stringify(parsed.pronunciation.all)}`);

        // // Non-arrays:
        // const newWord = parsed.word;
        // const newDefinition = parsed.results[0].definition;
        // const newPartOfSpeech = parsed.results[0].partOfSpeech;
        // const newFrequency = parsed.frequency;
        // const newNumberOfSyllables = parsed.syllables.count;
        // const newPronunciation = parsed.pronunciation.all;
        // // Arrays:
        // const newSimilarTo = parsed.results[0].similarTo[0];
        // const newAntonyms = parsed.results[0].antonyms[0];
        // const newExamples = parsed.results[0].examples[0];
        // // TO-DO: MAP ALL SYLLABLES:
        // const newList = parsed.syllables.list;
        
        // this.setState({
        //   word: newWord,
        //   definition: newDefinition,
        //   partOfSpeech: newPartOfSpeech,
        //   similarTo: newSimilarTo,
        //   antonyms: newAntonyms,
        //   examples: newExamples,
        //   frequency: newFrequency,
        //   numberOfSyllables: newNumberOfSyllables,
        //   list: newList,
        //   pronunciation: newPronunciation,
        // });

      },
    })
  }

  componentDidMount() {
    var newChosenWord = this.state.favoriteWords[Math.round(Math.random() * (this.state.favoriteWords.length - 1))];
    this.setState({
      chosenWord: newChosenWord,
    })
  }

  render () {
    return (<div>
      <h1>Friends With Words:</h1>
      <h2>Do you "{this.state.chosenWord}"?</h2>
      <h2>So do we!</h2>
      <WordSubmit submitInfo={this.submitInfo.bind(this)} getWord={this.getWord.bind(this)}/>
    </div>)
  }
}

export default App;
