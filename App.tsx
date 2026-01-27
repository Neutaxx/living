import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Security from './components/Security';
import Certificates from './components/Certificates';
import Clients from './components/Clients';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import WorkWithUs from './components/WorkWithUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white selection:bg-living-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <About />
        <Services />
        <Security />
        <Certificates />
        <Clients />
        <Differentials />
        <WorkWithUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;