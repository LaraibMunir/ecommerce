import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCollections from '../components/home/FeaturedCollections';
import BestSellers from '../components/home/BestSellers';
import CustomerTestimonials from '../components/home/CustomerTestimonials';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedCollections />
      <BestSellers />
      <CustomerTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
