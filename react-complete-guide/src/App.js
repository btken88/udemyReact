import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is totally working!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="30">My hobbies are: .........</Person>
        <Person name="Stephanie" age="29" />
      </div>
    );
  }
}

export default App;
