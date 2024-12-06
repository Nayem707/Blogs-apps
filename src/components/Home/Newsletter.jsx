import React from 'react';

const Newsletter = () => {
  return (
    <section className='bg-slate-900 text-white py-16'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Stay Updated</h2>
        <p className='text-lg mb-6'>
          Subscribe to our newsletter for the latest blog updates.
        </p>
        <form className='flex flex-col sm:flex-row justify-center'>
          <input
            type='email'
            placeholder='Enter your email'
            className='px-4 py-3 text-gray-800 w-full sm:w-80'
          />
          <button
            type='submit'
            className='bg-slate-600 text-gray-100 font-semibold py-3 px-6 shadow-md hover:bg-gray-100 hover:text-gray-800'
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
