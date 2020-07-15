import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 30 },
      { name: 'Stephanie', age: 26 },
    ],
    showPeople: false,
  }

  switchNameHandler = (newName) => {
    this.setState({
      people: [
        { name: newName, age: 28 },
        { name: 'Manuda', age: 30 },
        { name: 'Stephan', age: 26 },
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      people: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 30 },
        { name: 'Stephan', age: 26 },
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPeople
    this.setState({ showPeople: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is totally working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle People</button>
        {people}
      </div>
    );
  }
}

export default App;
