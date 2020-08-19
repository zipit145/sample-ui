import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'

class App extends Component {
  constructor() {
    super();
    this.state = {
      listItems: [
        "sample list item 1",
        "sample list item 2"
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <List listItems={this.state.listItems}/>
      </div>
    );
  }

}

export default App;
