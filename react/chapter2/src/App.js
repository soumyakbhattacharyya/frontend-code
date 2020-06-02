import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';


class App extends Component {
  render() {
    return (
      <div>
        <Person message="fish will fail if you ask it to climb tree" />
        <Person message="man is creator of his own destiny" />
      </div>
    );
  }
}

export default App;
