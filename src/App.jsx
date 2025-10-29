import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import FinalSection from './components/FinalSection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-[Inter] text-white">
      <Hero />
      <Features />
      <WhyChooseUs />
      <FinalSection />
    </div>
  );
}

export default App;
