import React from 'react'
import responsiveVoice from 'responsivevoice';

class PronounceWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accent: ''
    }
  }

  getAccent(e) {
    e.preventDefault();
    this.setState({
      accent: e.target.value,
    })
  }

  pronounceWord(e) {
    e.preventDefault();
    if (this.props.searched === false) {
      console.log('You must search for a word, or load one from the database, before you can hear its pronunciation!')
    } else if (this.state.accent === '') {
      console.log('You must select an accent from the dropdown menu in order to hear a pronunciation!')
    }
    else {
      const newWord = this.props.word;
      const newAccent = this.state.accent;
      setTimeout(window.responsiveVoice.speak(newWord, newAccent), 0);
    }
  }

  render() {
    return (
      <div>
        <select onChange={(e) => this.getAccent(e)}>
          <option>Pick an accent!</option>
          <option>UK English Female</option>
          <option>UK English Male</option>
          <option>US English Female</option>
          <option>US English Male</option>
          <option>Arabic Male</option>
          <option>Arabic Female</option>
          <option>Armenian Male</option>
          <option>Australian Female</option>
          <option>Australian Male</option>
          <option>Brazilian Portuguese Female</option>
          <option>Brazilian Portuguese Male</option>
          <option>Chinese Female</option>
          <option>Chinese Male</option>
          <option>Chinese (Hong Kong) Female</option>
          <option>Chinese (Hong Kong) Male</option>
          <option>Chinese Taiwan Female</option>
          <option>Chinese Taiwan Male</option>
          <option>Czech Female</option>
          <option>Czech Male</option>
          <option>Danish Female</option>
          <option>Danish Male</option>
          <option>Deutsch Female</option>
          <option>Deutsch Male</option>
          <option>Dutch Female</option>
          <option>Dutch Male</option>
          <option>Finnish Female</option>
          <option>Finnish Male</option>
          <option>French Female</option>
          <option>French Male</option>
          <option>Greek Female</option>
          <option>Greek Male</option>
          <option>Hindi Female</option>
          <option>Hindi Male</option>
          <option>Hungarian Female</option>
          <option>Hungarian Male</option>
          <option>Indonesian Female</option>
          <option>Indonesian Male</option>
          <option>Italian Female</option>
          <option>Italian Male</option>
          <option>Japanese Female</option>
          <option>Japanese Male</option>
          <option>Korean Female</option>
          <option>Korean Male</option>
          <option>Latin Female</option>
          <option>Latin Male</option>
          <option>Norwegian Female</option>
          <option>Norwegian Male</option>
          <option>Polish Female</option>
          <option>Polish Male</option>
          <option>Portuguese Female</option>
          <option>Portuguese Male</option>
          <option>Romanian Female</option>
          <option>Russian Female</option>
          <option>Russian Male</option>
          <option>Slovak Female</option>
          <option>Slovak Male</option>
          <option>Spanish Female</option>
          <option>Spanish Male</option>
          <option>Spanish Latin American Female</option>
          <option>Spanish Latin American Male</option>
          <option>Swedish Female</option>
          <option>Swedish Male</option>
          <option>Tamil Male</option>
          <option>Thai Female</option>
          <option>Thai Male</option>
          <option>Turkish Female</option>
          <option>Turkish Male</option>
          <option>Vietnamese Female</option>
          <option>Vietnamese Male</option>
          <option>Afrikaans Male</option>
          <option>Albanian Male</option>
          <option>Bosnian Male</option>
          <option>Catalan Male</option>
          <option>Croatian Male</option>
          <option>Esperanto Male</option>
          <option>Icelandic Male</option>
          <option>Latvian Male</option>
          <option>Macedonian Male</option>
          <option>Moldavian Female</option>
          <option>Moldavian Male</option>
          <option>Montenegrin Male</option>
          <option>Serbian Male</option>
          <option>Serbo-Croatian Male</option>
          <option>Swahili Male</option>
          <option>Welsh Male</option>
          <option>Fallback UK Female</option>
        </select>
        <br/>
        <button onClick={(e) => this.pronounceWord(e)}>Pronounce word!</button>
        <br/>
      </div>
    )
  }
}

export default PronounceWord;
