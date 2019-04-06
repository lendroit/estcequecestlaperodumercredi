import React, { Component } from 'react';
import './App.css';

var today = new Date();

class App extends Component {
  render() {
    const itsWednesday = today.getDay() === 3
    if (itsWednesday) {

      return (
        <div className="App">
        <header className="App-header">
          <p>Oui !</p>
          <p className="App-logo">
            🍻
          </p>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
      <header className="App-header">
        <p>Non !</p>
        <p className="App-logo">
          😔
        </p>
      </header>
    </div>
  );
  }
  }
}

export default App;
