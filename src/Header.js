import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './App.css';

class Header extends Component {
    render() {
      return (
        <Navbar bg="info" expand="lg">
        <Navbar.Brand href="#home">Example Nav Bar, not functional since this is one page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link>These dont work</Nav.Link>
            <Nav.Link href="#link">These dont work</Nav.Link>
            <NavDropdown title="Dropdown Doesnt Go Anywhere" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">These dont work</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">These dont work</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">These dont work</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">These dont work</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      );
    }
  
}

export default Header