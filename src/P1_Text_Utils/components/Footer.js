import React from 'react'
import { Navbar, Container } from "react-bootstrap";
export default function Footer() {
    return (
        <div className="mt-4">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="text-primary">Developed by HD</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}