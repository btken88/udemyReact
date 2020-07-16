import React, { Component } from 'react';
import './App.css';
import Validation from './components/assignment 2/Validation'
import Character from './components/assignment 2/Character';

class App extends Component {
  state = {
    stringLength: 0,
    characters: ""
  }

  usernameChangeHandler = event => {
    this.setState({ username: event.target.value })
  }

  textInputHandler = event => {
    this.setState({
      stringLength: event.target.value.length,
      characters: event.target.value
    })
  }

  deleteCharacter = (index) => {
    const characters = `${this.state.characters}`.split("")
    characters.splice(index, 1)
    const updated = characters.join("")
    this.setState({ characters: updated })
  }

  render() {
    const characters = this.state.characters.split("").map((character, index) => {
      return <Character key={index} character={character} index={index} click={() => this.deleteCharacter(index)} />
    })
    return (
      <div className="App" >
        {/* Assignment 1 code below. */}
        {/* <UserInput handler={this.usernameChangeHandler.bind(this)} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput />
        <UserOutput /> */}
        <input type="text" onChange={this.textInputHandler} />
        <p>{this.state.stringLength}</p>
        <Validation textLength={this.state.stringLength} />
        {characters}
      </div>
    );
  }
}

export default App;
