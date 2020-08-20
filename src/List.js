import React, { Component } from 'react';
import './List.css';
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
                                <ListGroup.Item key={item.id}>
                                    <Row>
                                        <Col sm={4}>Name: {item.name}</Col>
                                        <Col sm={4}>Body: {item.body}</Col>
                                        <Col sm={4}>
                                            <Button variant="danger" onClick={() =>this.props.deleteItem(item.id)}  id={item.id}>
                                                Delete Item
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                    <Row>
                        <Col sm={4}></Col> 
                        <Col sm={4}>
                            <Button variant="info" onClick={this.props.handleShow}>
                                Add Item
                            </Button>
                        </Col>
                        <Col sm={4}></Col>
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
                </Modal>
            </div>
        );
    }
}

export default List