import React from 'react';
import Newsletter from '../../components/Home/Newsletter';
import Featured from '../../components/Home/Featured';
import Hero from '../../components/Home/Hero';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      {/* Hero Section */}
      <Hero />

      {/* Featured Blogs Section */}
      <Featured />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Home;
