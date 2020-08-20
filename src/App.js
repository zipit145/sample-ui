import React, { Component } from 'react';
import './App.css';
import List from './List';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listItems: [
        {
          id: 1,
          name: "list item 1",
          body: "sample list item 1",
        },
        {
          id: 2,
          name: "list item 2",
          body: "sample list item 2",
        }
      ],
      nextId: 3,
      show: false,
      valueName: '',
      valueBody: ''
  }
  this.handleChangeName = this.handleChangeName.bind(this);
  this.handleChangeBody = this.handleChangeBody.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
};
handleClose = () => this.setState({show: false});
handleShow = () => this.setState({show: true});
handleSubmit(event) {
  const newListItem = {
    id: this.state.nextId,
    name: this.state.valueName,
    body: this.state.valueBody,
  };
  this.setState(state => {
    const listItems = state.listItems.concat(newListItem);
    return {
      listItems,
      show: false,
      nextId: state.nextId++
    };
  });
  event.preventDefault();
};
handleChangeName(event) {
  this.setState({valueName: event.target.value});
};
handleChangeBody(event) {
  this.setState({valueBody: event.target.value});
};
deleteItem(id) {
  this.setState(state => {
    const listItems = state.listItems.filter(item => item.id !== id);
    return {
      listItems,
    }
  })
};
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
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
