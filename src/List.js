import React, { Component, useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

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
            <Container>
                {this.props.listItems.map(item => {
                    return(
                        <Row>
                            <Col sm={8}>{item.name}</Col>
                            <Col sm={4}>{item.body}</Col>
                        </Row>
                    )
                })}
                <Row>                
                    <Button variant="primary" onClick={this.handleShow}>
                        Add Item
                    </Button>
                    <Button variant="primary" onClick={this.handleShow}>
                        Delete Selected Item
                    </Button>
                </Row>

            </Container>
            <Modal
                show={this.state.show}
                onHide={this.handleClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>New List Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>

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