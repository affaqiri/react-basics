import React from 'react'

// we could have just write (props ) => () if we were to return only JSX but here we have some extra JS logic we execute before the return statement
const cockpit = ( props ) => {
  
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
  
  if (props.showPerson) {
    style.backgroundColor = 'red'
  }

  const classes = []
  if (props.persons.length < 2) {
    classes.push('red')
  }
  if (props.persons.length < 1) {
    classes.push('bold')
  }

  return ( 
    <div>
      <h1>React App</h1>
      <p className={classes.join(' ')}>This is a react app</p>
      <button style={ style } onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default cockpit
