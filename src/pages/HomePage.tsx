import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Collections from '../components/home/Collections';
import About from '../components/home/About';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Collections />
      <About />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;