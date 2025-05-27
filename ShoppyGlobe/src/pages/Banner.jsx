import React from 'react';

const Banner = () => {
  return (
    <div className='flex items-center h-[75vh] mt-4 mx-12 border-[0.5px]'>
      <div className='basis-1/2 p-4'>
        <p>ShoppyGlobe Designs</p>
        <strong className="text-[#414141] font-bold text-5xl">Latest Collection</strong>
        <p className="text-blue-500">Shop now</p>
      </div>
      <div className='basis-1/2 h-full'>
        <img className='w-full h-full object-cover' src="/img5.jpg" alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
