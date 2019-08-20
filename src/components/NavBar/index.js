import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Link, Route} from "react-router-dom";
import ContactPage from "../../containers/ContactPage";

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link href="#topic"><Link to="/pageDetail">Page Detail</Link></Nav.Link>
                    <Nav.Link href="#topic"><Link to="/contact">Contact</Link></Nav.Link>
                    <Nav.Link href="#story"><Link to="/story">Story</Link></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

export default NavBar;


