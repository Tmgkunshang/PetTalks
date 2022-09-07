import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Slider />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
