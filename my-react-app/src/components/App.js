import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Header';
import Materials from './Materials';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        
        <Routes>
            <Route exact path='/' component={Materials}/>
          </Routes>
      </div>
    );
  }
}

export default App;
