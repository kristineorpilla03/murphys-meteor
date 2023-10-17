import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const BottomMenu = () => (
  <footer className="fixed-bottom" id="footerColor">
    <Container>
      <Row className="py-3">
        <Col>
          Lunch
          <hr />
          <>
            Monday - Friday: 11:00 am - 2:30p pm<br />
            Saturday - Sunday: Not Open
          </>
        </Col>
        <Col>
          Bar
          <hr />
          <>
            Monday - Friday: 11:00 am to closing<br />
            Saturday - Sunday: Not Open
          </>
        </Col>
        <Col>
          Dinner
          <hr />
          <>
            Monday - Friday: 5:00 pm - 9:00 pm<br />
            Saturday - Sunday: Not Open
          </>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default BottomMenu;
