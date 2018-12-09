import React, { Component } from 'react';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
