import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = { username: 'BoogeyBoy' }

  usernameChangeHandler = event => {
    this.setState({ username: event.target.value })
  }
  render() {
    return (
      <div className="App" >
        <UserInput handler={this.usernameChangeHandler.bind(this)} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
