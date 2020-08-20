import React, { Component, useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

class List extends Component {
    
    constructor() {
        super();
        this.state = {
            show: false
        }
      }
    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render() {
      return (
        <div className="List">
          {this.props.listItems.map(item => {
            return(
            <div>{item}</div>
            )
          })}

            <Button variant="primary" onClick={this.handleShow}>
                Add Item
            </Button>

            <Modal
                show={this.state.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
    }
  
}

export default List