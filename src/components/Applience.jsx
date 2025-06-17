import React from 'react';
import bigImg from '../assets/big-img.webp';

const HomeAppliancesSection = () => {
  return (
    <div className="">
      <div
        className="relative bg-gray-100 p-8 min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bigImg})`,
        }}
      >
        <div className='items-center  absolute bottom-20 border-gray-300 left-[50px] px-[26px] py-3 border-b  bg-white  '>Shop the looks</div>
        <div className="flex items-center space-x-4 absolute bottom-10 left-32 transform -translate-x-1/2 bg-white">

          <button className="px-4 py-2 bg-white border-r shadow hover:bg-gray-200 cursor-pointer  border-gray-300 ">←</button>
          <span>1 / 2</span>
          <button className="px-4 py-2 bg-white  border-l shadow hover:bg-gray-200 cursor-pointer  border-gray-300 ">→</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAppliancesSection;
