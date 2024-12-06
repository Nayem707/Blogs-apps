import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800'>
      <h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold mb-2'>Oops! Page Not Found</h2>
      <p className='text-gray-600 mb-6 text-center'>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={goHome}
        className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300'
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
