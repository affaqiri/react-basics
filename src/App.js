import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      // We can only return one root element in JSX
      <div className="App">
        <h1>React App</h1>
      </div>
    );
    // The above JSX code will get compiled behind the scenes to this JS code by React
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'React App'));
  }
}

export default App;
