import React from "react"

// props is an object passed to our component by React
const person = (props) => {
  return ( // return () used for multiple line returns
    <div>
      <p>I am { props.name } and I am { props.age } years old.</p>
      <p>{ props.children }</p>
    </div>
  )
}

export default person