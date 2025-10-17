import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import Banner1 from '../../../assets/banner1.png';
import Banner2 from '../../../assets/banner2.jpg';

const Banner = () => {
  return (
    <div className='p-4 lg:p-16 border-2 border-[#FFFFFFFF] rounded-xl'>
      <div className='text-center lg:w-[950px] w-full mx-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#0F0F0FFF] leading-10 lg:leading-16'>Dependable Care, Backed by Trusted Professionals.</h2>
        <p className='text-[#0F0F0FFF]'>
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
        <div className='mt-6 flex gap-3'>
          <input 
          type="text" 
          placeholder='Search any doctor...'
          className='text-[#9CA3AF] bg-white outline-none border border-[#9CA3AF] px-6 rounded-full w-full'
           />
           <PrimaryButton btnText={"Search Now"}></PrimaryButton>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 lg:mt-10'>
        <div>
          <img className='w-full h-full object-cover rounded-xl' src={Banner1} alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover rounded-xl' src={Banner2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;