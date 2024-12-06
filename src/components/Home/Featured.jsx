import React from 'react';

const featureData = [
  {
    img: 'feature1.jpg',
    title: 'Innovative Feature 1',
    description:
      'Discover the benefits of this amazing feature to enhance your productivity.',
    buttonText: 'Learn More',
    buttonLink: '#',
  },
  {
    img: 'feature2.jpg',
    title: 'Innovative Feature 2',
    description: 'Explore how this feature can streamline your workflow.',
    buttonText: 'Discover More',
    buttonLink: '#',
  },
  {
    img: 'feature3.jpg',
    title: 'Innovative Feature 3',
    description:
      'Unleash the full potential of this feature to optimize your experience.',
    buttonText: 'Get Started',
    buttonLink: '#',
  },
];

const Featured = () => {
  return (
    <section id='blogs' className='py-16'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>
          Featured Blogs
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* maping */}
          {featureData.map((item) => {
            return (
              <div
                key={item.title}
                className='bg-white rounded-lg shadow-md overflow-hidden'
              >
                <img
                  src='/public/img/img-1.png'
                  alt='...'
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600'>{item.description}</p>
                  <a
                    href='#'
                    className='text-blue-500 mt-4 inline-block font-medium'
                  >
                    Read More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
