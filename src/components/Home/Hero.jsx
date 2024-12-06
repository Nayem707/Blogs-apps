import React from 'react';

const bologsData = [
  {
    img: '/img/img-2.jpg',
    date: 'December 4, 2024',
    title: '10 Tips for Outdoor Adventures',
  },
  {
    img: '/img/img-2.jpg',
    date: 'December 3, 2024',
    title: 'How to Plan a Perfect Vacation',
  },
  {
    img: '/img/img-3.jpg',
    date: 'December 1, 2024',
    title: 'The Art of Minimalist Travel',
  },
  {
    img: '/img/img-3.jpg',
    date: 'December 1, 2024',
    title: 'The Art of Minimalist Travels',
  },
];

const Hero = () => {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto flex flex-wrap lg:flex-nowrap gap-8'>
        {/* Left Column */}
        <div className='flex-1'>
          <div className='relative overflow-hidden rounded-lg cursor-pointer'>
            <img
              src='/img/img-2.jpg'
              alt='Featured Blog'
              className='w-full h-auto'
            />
            <div className='absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-10 flex flex-col justify-end p-6 text-white'>
              <p className='text-sm mb-2 opacity-80'>December 6, 2024</p>
              <h2 className='text-2xl font-bold'>
                Exploring the Beauty of Nature
              </h2>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='flex-1 flex flex-col gap-6'>
          {bologsData.map((blog, index) => (
            <div
              key={index}
              className='flex items-center gap-4 hover:cursor-pointer bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow'
            >
              <img
                src={blog.img}
                alt={blog.title}
                className='w-20 h-20 object-cover rounded-lg'
              />
              <div>
                <p className='text-xs text-gray-500 mb-1'>{blog.date}</p>
                <h3 className='text-lg font-semibold text-gray-800'>
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
