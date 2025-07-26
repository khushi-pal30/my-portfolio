import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import html5 from '../assets/skills/html5.png';
import css3 from '../assets/skills/css3.png';
import javascript from '../assets/skills/javascript.png';
import reactLogo from '../assets/skills/react.png';
import bootstrap from '../assets/skills/bootstrap.png';
import python from '../assets/skills/python.png';
import django from '../assets/skills/django.png';
import sql from '../assets/skills/sql.png';
import sqlite from '../assets/skills/sqlite.png';
import restapi from '../assets/skills/restapi.png';

const skills = [
  { name: 'HTML5', logo: html5 },
  { name: 'CSS3', logo: css3 },
  { name: 'JavaScript', logo: javascript },
  { name: 'React', logo: reactLogo },
  { name: 'Bootstrap', logo: bootstrap },
  { name: 'Python', logo: python },
  { name: 'Django', logo: django },
  { name: 'SQL', logo: sql },
  { name: 'SQLite', logo: sqlite },
  { name: 'REST API', logo: restapi },
];

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">My Skills</h2>
        <Row>
          {skills.map((skill, idx) => (
            <Col xs={6} md={4} lg={3} key={idx} className="mb-4 text-center">
              <Card className="p-3 border-0 shadow-sm">
                <Card.Img
                  variant="top"
                  src={skill.logo}
                  alt={skill.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain',
                    margin: 'auto',
                  }}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
