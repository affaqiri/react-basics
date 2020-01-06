import React, { Component } from 'react'
import './App.css'
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from "../components/Persons/Persons" // Custom components must be capital case as best practice

// Any class component has access to this.props and this.state
class App extends Component {
  
  // state can only be used withing class components
  // any state change will rerender the DOM tree to reflect the changes
  // state is a reserved keyword in React
  state = {
    persons: [
      { id: '1', name: 'Ahmad', age: 34 },
      { id: '2', name: 'Lina', age: 30 },
      { id: '3', name: 'Farhad', age: 40 }
    ],
    otherStateProperty: 'some other value',
    showPersons: false
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

  nameChangedHanlder = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    // const person = Object.assign({}, this.state.persons[personIndex]); // alternative old JS object copy style
    const person = {
      ...this.state.persons[personIndex]  // better way to copy an object reference
    }
    person.name = event.target.value
    
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons  // avoid this approach as we are copying the state
    //const persons = this.state.persons.slice()  // immutable way of copying the state array
    const persons = [...this.state.persons] // better approach using ES6 spread operator
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }
   
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHanlder} />
    }

    return (
      // We can only return one root element in JSX
      <div className="App">
        <Cockpit appTitle={this.props.title} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonHandler} />
        { persons }
      </div>
    );
    // The above JSX code will get compiled behind the scenes to this JS code by React
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'React App'));
  }
}

export default App
