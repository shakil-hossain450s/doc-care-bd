import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className='lg:w-10/12 w-full mx-auto p-3 text-center mb-8'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>{title}</h2>
      <p className='text-[#0F0F0FFF]'>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;