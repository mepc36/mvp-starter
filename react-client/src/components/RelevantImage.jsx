import React from 'react'
import styles from './styles/wordProfileStyles.css';

class RelevantImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.searched !== false) {
      return (
        <div>
          <img src={this.props.imageUrl} className={styles.searchedImage}></img>
        </div>
      )
    } else {
      return (
        <div>
          <div>Search a word to see a relevant image!</div>
        </div>
      )
    }
  }
}

export default RelevantImage
