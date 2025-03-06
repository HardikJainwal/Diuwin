import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineClockCircle } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import GameHistoryHeader from "../../components/GameHistoryHeader";

import activeImg1 from "../../Assets/Lottery2.png";
import activeImg2 from "../../Assets/casino2.png";
import activeImg3 from "../../Assets/sport2.png";
import activeImg4 from "../../Assets/rummy2.png";
import activeImg5 from "../../Assets/slot2.png";



function GameHistoryProfile() {
  const [selectedIndex, setSelectedIndex] = useState(0);
    
  const descriptions = ["Lottery", "Casino", "Fishing", "Rummy", "Original", "Slots"];
  const images = [activeImg1, activeImg2, activeImg3, activeImg4, activeImg5, activeImg1];

  const dropdownOptions = {
    Lottery: ["Wingo", "TRX Wingo", "5D", "K3"],
    Casino: ["All", "Evo Video", "DG", "AG Video"],
    Fishing: ["All", "Jili", "JDB", "CQ9", "V8Card"],
    Rummy: ["All", "V8Card", "Card365"],
    Original: ["All", "Jili", "JDB", "TB Chess", "Spribe"],
    Slots: ["All", "Jili", "JDB", "Evo Electronic", "MG", "CQ9", "AG Electronic", "9G"],
  };

  return (
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <GameHistoryHeader />
      <div className="bg-[#242424] flex flex-col items-center mt-12">
        <div className="w-full max-w-md px-3">
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hidden">
            {descriptions.map((desc, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg shadow-md px-8 mb-1 mt-2 flex-shrink-0 transition-all duration-300 cursor-pointer 
                ${selectedIndex === index ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f]" : "bg-[#333332]"}`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="flex flex-col justify-center items-center text-center">
                  <img
                    src={images[index]}
                    alt={`Box ${index}`}
                    className="w-6 h-6 object-contain"
                  />
                  <p
                    className={`text-xs font-semibold ${selectedIndex === index ? "text-[#8f5206]" : "text-[#a8a5a1]"}`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-start ">

        {/* Filter Options */}
        <div className="flex w-full p-3 gap-3 mb-4 text-[#f5f3f0]">
          <details className="relative w-1/2">
            <summary className="bg-[#333332] p-3 rounded-lg cursor-pointer transition-colors flex justify-between items-center list-none appearance-none">
              {descriptions[selectedIndex] in dropdownOptions ? dropdownOptions[descriptions[selectedIndex]][0] : "All"}
              <MdExpandMore className="text-gray-400" />
            </summary>
            <ul className="absolute bg-[#333332] mt-2 rounded-lg shadow-lg p-2 w-full">
              {dropdownOptions[descriptions[selectedIndex]]?.map((option, i) => (
                <li key={i} className="p-2 hover:bg-[#444] cursor-pointer">{option}</li>
              ))}
            </ul>
          </details>
          <details className="relative w-1/2">
            <summary className="bg-[#333332] p-3 rounded-lg cursor-pointer transition-colors flex justify-between items-center list-none appearance-none">
              Select Date
              <MdExpandMore className="text-gray-400" />
            </summary>
          </details>
        </div>

        {/* Transaction Card (Win Go) */}
        <div className="bg-[#333332] w-[390px] rounded-md p-3 shadow-lg border border-gray-700">
  {/* Header Section */}
  <div className="rounded-md py-1 mb-2 flex items-center">
    <h2 className="text-white font-semibold text-xl">Win Go</h2>
    <span className="text-green-500 font-extralight ml-auto text-lg">Win</span>
  </div>

  {/* Border below header */}
  <div className="border-b border-gray-600 mb-2"></div>

  {/* Details Section */}
  <div className="space-y-2 text-xs">
    <div className="flex justify-between text-gray-400">
      <span className="flex items-center space-x-1">
        <AiOutlineInfoCircle className="text-sm" />
        <span className="text-white">Type</span>
      </span>
      <span className="text-white">Win Go 30s</span>
    </div>

    <div className="flex justify-between text-gray-400">
      <span className="flex items-center space-x-1">
        <AiOutlineClockCircle className="text-sm" />
        <span className="text-white">Period</span>
      </span>
      <span className="text-white">20250305100050617</span>
    </div>

    <div className="flex justify-between text-gray-400">
      <span className="flex items-center space-x-1">
        <AiOutlineInfoCircle className="text-sm" />
        <span className="text-white">Order No.</span>
      </span>
      <span className="text-white">WG2025030510380749466393e</span>
    </div>

    <div className="flex justify-between text-gray-400">
      <span className="flex items-center space-x-1">
        <AiOutlineInfoCircle className="text-sm" />
        <span className="text-white">Select</span>
      </span>
      <span className="text-white">Small</span>
    </div>

    <div className="flex justify-between text-gray-400">
      <span className="flex items-center space-x-1">
        <BsCurrencyRupee className="text-sm text-yellow-500" />
        <span className="text-white">Total Bet</span>
      </span>
      <span className="text-yellow-500 font-semibold">₹10.00</span>
    </div>
  </div>
</div>




        {/* Lottery Results Section */}
        <div className="bg-[#333332] w-[390px] rounded-md p-4 shadow-lg border border-gray-700 mt-4">
          <h2 className="text-white font-semibold text-sm mb-3">Lottery Results</h2>

          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">0</span>
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">Small</span>
            <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-md">Red Violet</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-[#4d4d4c] p-3 rounded-md text-center">
              <p className="text-[#a8a5a1] font-semibold">₹9.80</p>
              <p className="text-[#a8a5a1] text-xs">Actual amount</p>
            </div>
            <div className="bg-[#4d4d4c] p-3 rounded-md text-center">
              <p className="text-[#a8a5a1] font-semibold">₹19.60</p>
              <p className="text-[#a8a5a1] text-xs">Winnings</p>
            </div>
            <div className="bg-[#4d4d4c] p-3 rounded-md text-center">
              <p className="text-[#a8a5a1] font-semibold">₹0.20</p>
              <p className="text-[#a8a5a1] text-xs">Handling fee</p>
            </div>
            <div className="bg-[#4d4d4c] p-3 rounded-md text-center">
              <p className="text-[#a8a5a1] font-semibold">₹9.60</p>
              <p className="text-[#a8a5a1] text-xs">Profit/loss</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GameHistoryProfile;
