// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Fake Review Detection</Card.Title>
                <Card.Text>
                  A machine learning project to detect fake movie reviews using NLP and Python.
                </Card.Text>
                <Button variant="primary" href="https://github.com/khushi-pal30/Fake-Reviews-Detection-for-Movies" target="_blank">GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Gas Booking System</Card.Title>
                <Card.Text>
                  The Gas Booking System is a web-based application developed using Python and Django to streamline the process of booking cooking gas for households.
                </Card.Text>
                <Button variant="primary" href="https://github.com/khushi-pal30/gas_booking_system" target="_blank">GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
