import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../assets/skills/profile.jpg';

function Home() {
  return (
    <section className="bg-primary text-white py-5">
      <Container>
      <center><img src={profile} alt="Profile" className="profile-img" /></center>
      <Row>
          <Col md={12} className="text-center">
            <h1>Hello, I'm Khushi</h1>
            <p className="lead">Aspiring Python Developer | Python, React & Django Enthusiast</p>
            <a
                  href="https://drive.google.com/uc?export=download&id=1ea89Pe2yE2NHgY4A0XykwBpY9wKf2NRa" 
              target="_blank"
             rel="noopener noreferrer"
             className="btn btn-outline-light mt-3"
            >
               Download Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Home;
