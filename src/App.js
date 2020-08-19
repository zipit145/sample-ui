import React, { Component } from 'react';
import './App.css';
import List from './List';
import Header from './Header';
import Footer from './Footer';


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
        <Header/>
        <List listItems={this.state.listItems}/>
        <Footer/>
      </div>
    );
  }

}

export default App;
