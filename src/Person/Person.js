import React from "react"
import Radium from "radium";
import './Person.css'

// props is an object passed to our component by React
// functional (stateless) components should be used as much as possible 
// these components do not manipulate the application state and therefore do not introduce side effects
const person = (props) => {

  const style = {
    '@media (min-length: 500px)': {
      width: '450px'
    }
  }

  return ( // return () used for multiple line returns
    <div className="Person" style={style}>
      <p onClick={ props.click }>I am { props.name } and I am { props.age } years old.</p>
      <p>{ props.children }</p>
      <input type="text" onChange={ props.changed } value={ props.name }/>
    </div>
  )
}

export default Radium(person)