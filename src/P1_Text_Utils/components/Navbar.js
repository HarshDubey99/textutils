import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import propTypes from 'prop-types';
export default function NavbarComponent(props) {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
// Validate The Props
NavbarComponent.propTypes = { title: propTypes.string.isRequired }

NavbarComponent.defaultProps = {
    title: "Title"
}


