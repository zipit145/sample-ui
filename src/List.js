import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class List extends Component {
    render() {
      return (
        <div className="List">
          {this.props.listItems.map(item => {
            return(
            <div>{item}</div>
            )
          })}
          <Button variant="secondary" size="lg">Add Item</Button>
        </div>
      );
    }
  
}

export default List