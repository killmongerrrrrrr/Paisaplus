import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhoWeHelp from './components/WhoWeHelp';
import AddOns from './components/AddOns';
import OwnerBios from './components/OwnerBios';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhoWeHelp />
      <AddOns />
      <OwnerBios />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;