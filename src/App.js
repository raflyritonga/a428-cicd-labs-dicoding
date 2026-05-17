import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App</h1>
          <span className="App-badge">react-app branch</span>
        </header>
        <main className="App-main">
          <p className="App-intro">
            A simple React single-page app deployed via Jenkins CI/CD.
          </p>
          <div className="App-card">
            <h2>Edit and reload</h2>
            <p>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </main>
        <footer className="App-footer">
          Built with React &middot;
        </footer>
      </div>
    );
  }
}

export default App;
