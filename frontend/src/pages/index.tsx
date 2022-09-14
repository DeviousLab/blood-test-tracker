import { NextPage } from 'next';

import Banner from '../components/landing-site/Banner';
import Features from '../components/landing-site/Features';
import Footer from '../components/landing-site/Footer';
import Header from '../components/landing-site/Header';
import Hero from '../components/landing-site/Hero';
import Process from '../components/landing-site/Process';
import Highlight from '../components/landing-site/Highlight';

const Index: NextPage = () => {

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Highlight />
      <Process />
      <Banner />
      <Footer />
    </>
  );
};

export default Index;
