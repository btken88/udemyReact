import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 30 },
      { name: 'Stephanie', age: 26 },
    ]
  }

  switchNameHandler = () => {
    this.setState({
      people: [
        { name: 'Maximus', age: 28 },
        { name: 'Manuda', age: 30 },
        { name: 'Stephan', age: 26 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is totally working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My hobbies are: .........</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    );
  }
}

export default App;
