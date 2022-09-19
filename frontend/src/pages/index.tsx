import type { NextPage } from 'next';

import Banner from '../components/landing-site/Banner';
import Features from '../components/landing-site/Features';
import Footer from '../components/landing-site/Footer';
import Header from '../components/landing-site/Header';
import Hero from '../components/landing-site/Hero';
import Highlight from '../components/landing-site/Highlight';
import Pricing from '../components/landing-site/Pricing';
import Process from '../components/landing-site/Process';

const Index: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Highlight />
      <Process />
      <Pricing />
      <Banner />
      <Footer />
    </>
  );
};

export default Index;
