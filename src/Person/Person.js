import React from "react"

// props is an object passed to our component by React
const person = (props) => {
  return <p>I am {props.name} and I am {props.age} years old.</p>
}

export default person