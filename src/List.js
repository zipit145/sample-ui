import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

class List extends Component {
    render() {
        return (
            <div className="List">
                <Container>
                    <ListGroup>
                        {this.props.listItems.map(item => {
                            return(
                                <ListGroup.Item className={item.selected ? "selected" : ""}  onClick={this.props.selectItem}>
                                    <Row>
                                        <Col sm={4}>{item.name}</Col>
                                        <Col sm={4}>{item.body}</Col>
                                    </Row>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                    <Row>
                        <Col sm={4}>         
                            <Button variant="primary" onClick={this.props.handleShow}>
                                Add Item
                            </Button>
                        </Col> 
                        <Col sm={4}>
                            <Button variant="primary" onClick={this.props.handleShow}>
                                Delete Selected Item
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Modal
                    show={this.props.show}
                    onHide={this.props.handleClose}
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>New List Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form  onSubmit={this.props.handleSubmit}>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" onChange={this.props.handleChangeName}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Body</Form.Label>
                            <Form.Control type="text" placeholder="Enter Body" onChange={this.props.handleChangeBody}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
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