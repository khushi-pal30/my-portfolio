// src/components/Experience.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Experience() {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4 text-center">Experience</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Python Developer Intern - Analyze Infotech</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">July 2024 - September 2024</Card.Subtitle>
                <Card.Text>
                  As a Python Developer Intern, I worked on developing and optimizing backend functionalities using Python. I contributed to writing clean, efficient code for automation scripts, APIs, and data processing tasks. During the internship, I improved my skills in libraries like Django, Pandas, and NumPy, collaborated with team members using Git, and gained hands-on experience in real-world web Development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Campus Ambassador Intern - Pregrad Org</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">June 2024 - July 2024</Card.Subtitle>
                <Card.Text>
                  As a Campus Ambassador Intern, I acted as the organization and my college, promoting events, workshops, and products among students. I handled outreach through social media and campus networks, encouraged participation, and helped drive sign-ups and engagement. This role enhanced my communication, marketing, and leadership skills while giving me hands-on experience in brand promotion and student engagement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
