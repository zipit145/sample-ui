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
        {
          name: "list item 1",
          body: "sample list item 1",
          selected: true
        },
        {
          name: "list item 2",
          body: "sample list item 2",
          selected: false
        }
      ],
      show: false,
      valueName: '',
      valueBody: ''
  }
  this.handleChangeName = this.handleChangeName.bind(this);
  this.handleChangeBody = this.handleChangeBody.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleClose = () => this.setState({show: false});
handleShow = () => this.setState({show: true});
handleSubmit(event) {
  const newListItem = {
    name: this.state.valueName,
    body: this.state.valueBody,
    selected: false
  };
  this.setState(state => {
    const listItems = state.listItems.concat(newListItem);
    return {
      listItems,
      show: false
    };
  });
  event.preventDefault();
}
handleChangeName(event) {
  this.setState({valueName: event.target.value});
}
handleChangeBody(event) {
  this.setState({valueBody: event.target.value});
}
selectItem(event) {
  console.log(event.target.value, "itemselect")
}
  render() {
    return (
      <div className="App">
        <Header/>
        <List
          listItems={this.state.listItems}
          show={this.state.show}
          valueBody={this.state.valueBody}
          valueName={this.state.valueName}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
          handleSubmit={this.handleSubmit}
          handleChangeName={this.handleChangeName}
          handleChangeBody={this.handleChangeBody}
          selectItem={this.selectItem}
        />
        <Footer/>
      </div>
    );
  }

}

export default App;
