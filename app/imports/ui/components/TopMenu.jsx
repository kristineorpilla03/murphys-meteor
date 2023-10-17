import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Container fluid className="justify-content-center px-0">
    <Navbar className="navbar">
      <Container className="gx-0">
        <Nav className="justify-content-center">
          <Nav.Link><Image className="logoHeight" src="http://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/murphyslogowhite.png" /></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About Us</Nav.Link>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Nav.Link>St. Patrick's Day</Nav.Link>
          <Nav.Link>To Go Ordering</Nav.Link>
          <Nav.Link><Instagram /></Nav.Link>
          <Nav.Link><Facebook /></Nav.Link>
          <Nav.Link><Twitter /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </Container>
);

export default TopMenu;
