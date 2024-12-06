import React from 'react';

const Header = () => {
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-800'>My Blog</h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <a href='/' className='text-gray-600 hover:text-blue-600'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='text-gray-600 hover:text-blue-600'>
                About
              </a>
            </li>
            <li>
              <a href='#contact' className='text-gray-600 hover:text-blue-600'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
