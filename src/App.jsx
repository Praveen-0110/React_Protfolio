import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'

import { Route, Routes } from 'react-router-dom'
import About from './componets/About'
import Skills from './componets/Skills'
import Projects from './componets/Projects'
import Educations from './componets/Educations'
import Expriance from './componets/Expriance'
import Certificatation from './componets/Certificatation'
import ProfessionalDevelopment from './componets/ProfessionalDevelopment'
import Footer from './componets/Footer'


function App() {

  const navItems = [
    'Summary',
    'Skills',
    'Projects',
    'Education',
    'Experience',
    'Certification',
    'Professional Development'
  ];

  return (
    <>
      <Navbar items={navItems} />
      <Routes>
        <Route path="/summary" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Educations />} />
        <Route path="/experience" element={<Expriance />} />
        <Route path="/certification" element={<Certificatation />} />
        <Route path="/professional-development" element={<ProfessionalDevelopment />} />

        {/* Add more routes as needed */}
      </Routes>

      {/* <Footer /> */}
    </>

  );
}

export default App
