import React, { Component, useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class List extends Component {
    
    constructor() {
        super();
        this.state = {
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
        alert('A name was submitted: ' + this.state.valueName + this.state.valueBody)
        this.setState({
            show: false
        });
        event.preventDefault();
    }
    handleChangeName(event) {
        this.setState({valueName: event.target.value});
    }
    handleChangeBody(event) {
        this.setState({valueBody: event.target.value});
    }

    render() {
        return (
            <div className="List">
                <Container>
                    {this.props.listItems.map(item => {
                        return(
                            <Row>
                                <Col sm={4}>{item.name}</Col>
                                <Col sm={4}>{item.body}</Col>
                            </Row>
                        )
                    })}
                    <Row>
                        <Col sm={4}>         
                            <Button variant="primary" onClick={this.handleShow}>
                                Add Item
                            </Button>
                        </Col> 
                        <Col sm={4}>
                            <Button variant="primary" onClick={this.handleShow}>
                                Delete Selected Item
                            </Button>
                        </Col>
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
                    <Form  onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" onChange={this.handleChangeName}/>

                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Body</Form.Label>
                            <Form.Control type="text" placeholder="Enter Body" onChange={this.handleChangeBody}/>

                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
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