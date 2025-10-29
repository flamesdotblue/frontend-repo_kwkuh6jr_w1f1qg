import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import FinalSection from './components/FinalSection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="features" className="scroll-mt-24">
          <Features />
        </section>
        <section id="why" className="scroll-mt-24">
          <WhyChooseUs />
        </section>
        <section id="contact" className="scroll-mt-24">
          <FinalSection />
        </section>
      </main>
    </div>
  );
}

export default App;
