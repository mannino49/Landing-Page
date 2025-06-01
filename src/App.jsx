import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import WhatIsMisophonia from './sections/WhatIsMisophonia';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import ResearchFoundation from './sections/ResearchFoundation';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import CallToAction from './sections/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsMisophonia />
        <Features />
        <HowItWorks />
        <ResearchFoundation />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
