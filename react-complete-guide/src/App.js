import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 30 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    showPeople: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(person => {
      return person.id === id;
    });

    const person = { ...this.state.people[personIndex] }
    person.name = event.target.value

    const people = [...this.state.people]
    people[personIndex] = person

    this.setState({ people: people })

  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
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
          {this.state.people.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
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
