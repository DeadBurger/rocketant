import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export class NavigationBar extends React.PureComponent {
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="/">RocketAnt 🚀🐜</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Tasks</Nav.Link>
            <Nav.Link href="/generate">Generate tasks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
