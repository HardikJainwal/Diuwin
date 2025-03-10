import React from 'react';
import Capture from './../Assets/Capture.png';

const Promotionheader = () => {
  return (
    <header className="bg-[#414140] fixed w-[450px] z-50 h-14 flex items-center justify-between top-0 px-2">
      <div className="flex-1"></div>

      {/* Center with logo */}
      <div className="flex items-center mr-24">
        <p className='text-[#f5f3f0] text-2xl'>Agency</p>
      </div>

      {/* Right side with flag */}
      <div className="flex space-x-2 ml-10 mr-auto">
        <img
          src={Capture}
          alt="Country Flag"
          className="w-6 h-6 rounded-full"
        />
      </div>
    </header>
  );
};

export default Promotionheader;
