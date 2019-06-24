import React from 'react';
import DatabaseItem from './DatabaseItem.jsx';
import $ from 'jquery';

class DatabaseWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantedWord: '',
      databaseProfiles: [],
    }
  }

  componentDidMount() {
      $.ajax({
      method: 'GET',
      url: 'wordProfiles',
      success: (success) => {
        var newDatabaseProfiles = [];
        for (var i = 0; i < success.length; i++) {
          newDatabaseProfiles.push(success[i]);
        }
        this.setState({
          databaseProfiles: newDatabaseProfiles,
        });
      },
      error: (error) => {
        console.log(`/GET wordProfile Error-success: ${JSON.stringify(error)}`);
      }
    })
  }

  render() {
    if (this.state.databaseProfiles.length === 0) {
      return (
        <div>
          <h4>Save words to the database, and then display and load them from here!</h4>
          <DatabaseItem />
          <button onClick={(e) => this.loadWord(e)}>Load word info!</button>
        </div>
      )
    } else {
      return (<div><select onChange={(e) => this.props.setWord(e)}>
        {this.state.databaseProfiles.map(item => (
            <option>{item.word}</option>
        ))}
        </select>
        <br />
        <button onClick={(e) => this.props.loadWord(e)}>Load word info!</button>
        </div>);
    }
  }
}

export default DatabaseWords