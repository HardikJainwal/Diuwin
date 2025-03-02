import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";

const Homeheader = () => {
  return (
    <header className="bg-[#242424] h-24 w-full flex items-center justify-between px-6 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://ossimg.diuacting.com/DiuWin/other/h5setting_20240724134835hng9.png"
          alt="Logo"
          className="w-44 h-auto"
        />
      </div>

      {/* Right Side Buttons */}
      <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center w-44 justify-center bg-gradient-to-b from-[#FAE59F] to-[#C4933F] rounded-lg px-5 py-2 shadow-md">
          <FaWallet className="text-black mr-2" />
          <span className="text-black font-semibold text-sm">Balance</span>
          <span className="text-black font-semibold ml-2">1001.91</span>
        </div>
        {/* Download App Button */}
        <div className="flex items-center w-44 justify-center bg-gradient-to-b from-[#FAE59F] to-[#C4933F] rounded-lg px-5 py-2 shadow-md cursor-pointer whitespace-nowrap">
          <FaDownload className="text-black mr-2" />
          <span className="text-black font-semibold text-sm">Download App</span>
        </div>

        {/* Balance Button */}
        
      </div>
    </header>
  );
};

export default Homeheader;
