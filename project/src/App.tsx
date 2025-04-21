import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;