import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
    render() {
      return (
        <div className="List">
          {this.props.listItems.map(item => {
            return(
            <div>{item}</div>
            )
          })}
        </div>
      );
    }
  
}

export default List