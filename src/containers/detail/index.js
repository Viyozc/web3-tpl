import React, { Component } from 'react';
import Table from './Table'
import './index.css';

class App extends Component {
  state = {

  }
  componentDidMount () {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Detail</h1>
        </header>
        <Table />
      </div>
    );
  }
}

export default App;
