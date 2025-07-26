// src/App.js
// App.js
import React from 'react';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <MyNavbar />
      <section id="home"><Home /></section>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
