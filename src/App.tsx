import React, { Component } from 'react';
import outOfOrder from './out-of-order.png';
import './App.css';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar title="Alan Heuertz" />
        <header className="App-header">
          <img src={outOfOrder} className="out-of-order" alt="out of order" />
        </header>
      </div>
    );
  }
}

export default App;
