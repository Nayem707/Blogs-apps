import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white '>
      <div className='container mx-auto text-center py-6'>
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
