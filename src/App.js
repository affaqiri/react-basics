import React, { Component } from 'react'
import './App.css'
import Person from "./Person/Person" // Custom components must be capital case as best practice

class App extends Component {
  
  // state can only be used withing class components
  // any state change will rerender the DOM tree to reflect the changes
  state = {
    persons: [
      { name: 'Ahmad', age: 34 },
      { name: 'Lina', age: 30 },
      { name: 'Farhad', age: 40 }
    ]
  }
  
  render() {
    return (
      // We can only return one root element in JSX
      <div className="App">
        <h1>React App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          My Hobbies: fishing
        </Person>
      </div>
    );
    // The above JSX code will get compiled behind the scenes to this JS code by React
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'React App'));
  }
}

export default App
