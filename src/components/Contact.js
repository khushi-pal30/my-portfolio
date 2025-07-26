// src/components/Contact.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


function Contact() {
  return (
    <section id="contact" className="py-5  text-white">
      <Container>
        <h4 className="text-center mb-4">Contact Me</h4>
        <center><a
  href="https://github.com/khushi-pal30"
  className="resume-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub style={{ marginRight: '8px' }} />
  
</a>

<a
  href="https://www.linkedin.com/in/khushi-pal-a4422a280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  className="resume-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin style={{ marginRight: '8px' }} />

</a>
<a
  href="mailto:palkhushi163@gmail.com?subject=Let%27s%20Connect&body=Hi%20Khushi%2C%0D%0A%0D%0AI%20found%20your%20profile%20interesting%20and%20would%20like%20to%20connect!"
  className="resume-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope style={{ marginRight: '8px' }} />

</a>
</center>

      </Container>
    </section>
  );
}

export default Contact;
