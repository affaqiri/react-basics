import React, { Component } from 'react'
import './App.css'
import Person from "./Person/Person" // Custom components must be capital case as best practice

class App extends Component {
  
  // state can only be used withing class components
  // any state change will rerender the DOM tree to reflect the changes
  // state is a reserved keyword in React
  state = {
    persons: [
      { name: 'Ahmad', age: 34 },
      { name: 'Lina', age: 30 },
      { name: 'Farhad', age: 40 }
    ],
    otherStateProperty: 'some other value'
  }

  switchNameHandler = ( newName ) => {
    // Do not mutate state like this, instead use react's setState()
    // this.state.persons[0].name = 'Fraidoon'
    // setState merges the passed in object with any existing state and updates the DOM
    // otherStateProperty is not impacted by our updates
    // So basically React only allows two ways of updating the UI: state and props
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: 'Lina', age: 30 },
        { name: 'Farhad', age: 40 }
      ]
    })
  }

  nameChangedHanlder = ( event ) => {
    this.setState({
      persons: [
        { name: 'Ahmad', age: 34 },
        { name: event.target.value, age: 30 },
        { name: 'Farhad', age: 40 }
      ]
    })
  }
  
  render() {
    return (
      // We can only return one root element in JSX
      <div className="App">
        <h1>React App</h1>
        <button onClick={() => this.switchNameHandler('Fraidoon')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Fraid')}
          changed={this.nameChangedHanlder} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
          My Hobbies: fishing
        </Person>
      </div>
    );
    // The above JSX code will get compiled behind the scenes to this JS code by React
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'React App'));
  }
}

export default App
