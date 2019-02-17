import React, { Component } from 'react'
import './App.css'
import Person from "./Person/Person" // Custom components must be capital case as best practice

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
      ...this.state.persons[personIndex]
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

    // CSS in Javascript (inline styling)
    // These inline styles are not global as with stylesheets and only scoped to this component
    // We have some restrictions using inline styles for example pseudo selectors can not be used
    const style = {
      backgroundColor: 'green', // or 'background-color' because javascript does not allow -
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHanlder(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red'
    }

    return (
      // We can only return one root element in JSX
      <div className="App">
        <h1>React App</h1>
        <button 
          style={ style }
          onClick={this.togglePersonHandler}>
            Toggle Persons
        </button>
        {
          // {} to write dynamic JS inside JSX, used here for conditionaly rendering some content
          // but we can't use if block statements, just simple ternary operators
          persons
        }
      </div>
    );
    // The above JSX code will get compiled behind the scenes to this JS code by React
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'React App'));
  }
}

export default App
