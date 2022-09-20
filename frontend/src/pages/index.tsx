import type { NextPage } from 'next';

import Banner from '../components/landing-site/Banner';
import Features from '../components/landing-site/Features';
import Footer from '../components/landing-site/Footer';
import Header from '../components/landing-site/Header';
import Hero from '../components/landing-site/Hero';
import Highlight from '../components/landing-site/Highlight';
import Pricing from '../components/landing-site/Pricing';
import Process from '../components/landing-site/Process';
import { Meta } from '../layouts/Meta';

const Index: NextPage = () => {
  return (
    <>
      <Meta
        title="triage | Track your lab results"
        description="If you're looking for a way to keep track of your blood test results, look no further than triage. With our easy-to-use interface, you can easily track your results over time and spot any trends that may emerge."
      />
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
