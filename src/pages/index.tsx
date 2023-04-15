import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Faq from '../components/Faq';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';

const App = () => {
  return (
    // <div className={`bg-background grid overflow-hidden`}>
    <div>
      <Header />
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex h-screen justify-center items-center bg-[url('https://lh3.googleusercontent.com/2fhJkFwt3xI_vMYXWSWYhRSyVYWT0a6OPXsgdhg55qxG0H4JIhc8tT6ILf738VdDzDyi7eVGcUE8Fp8xDuonLzH9h-I=w640-h400-e365-rj-sc0x00ffffff')] sm:bg-black"
            // className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <MainHero />
            <MainHeroImage />
          </div>
        </div>
      </div>
      <LazyShow>
        <>
          <Features />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Faq />
        </>
      </LazyShow>
      <>
        <About />
      </>
      <Analytics />
    </div>
  );
};

export default App;
