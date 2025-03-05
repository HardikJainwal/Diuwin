import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineClockCircle } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import GameHistoryHeader from "../../components/GameHistoryHeader";

function GameHistoryProfile() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const descriptions = ["Lottery", "Casino", "Fishing", "Rummy", "Original", "Slots"];

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
      <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-start mt-12">

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
        <div className="bg-[#333332] w-[390px] rounded-md p-4 shadow-lg border border-gray-700">
          <div className="bg-gray-700 rounded-md px-4 py-2 mb-3 flex items-center justify-between">
            <h2 className="text-white font-semibold text-sm">Win Go</h2>
            <span className="text-green-500 font-semibold">Win</span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-400 border-b border-gray-600 pb-1">
              <span className="flex items-center space-x-2">
                <AiOutlineInfoCircle className="text-lg" />
                <span>Type</span>
              </span>
              <span className="text-gray-300">Win Go 30s</span>
            </div>

            <div className="flex justify-between text-gray-400 border-b border-gray-600 pb-1">
              <span className="flex items-center space-x-2">
                <AiOutlineClockCircle className="text-lg" />
                <span>Period</span>
              </span>
              <span className="text-gray-300">20250305100050617</span>
            </div>

            <div className="flex justify-between text-gray-400 border-b border-gray-600 pb-1">
              <span className="flex items-center space-x-2">
                <AiOutlineInfoCircle className="text-lg" />
                <span>Order Number</span>
              </span>
              <span className="text-gray-300">WG2025030510380749466393e</span>
            </div>

            <div className="flex justify-between text-gray-400 border-b border-gray-600 pb-1">
              <span className="flex items-center space-x-2">
                <AiOutlineInfoCircle className="text-lg" />
                <span>Select</span>
              </span>
              <span className="text-gray-300">Small</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span className="flex items-center space-x-2">
                <BsCurrencyRupee className="text-lg text-yellow-500" />
                <span>Total Bet</span>
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
            <div className="bg-gray-800 p-3 rounded-md text-center">
              <p className="text-white font-semibold">₹9.80</p>
              <p className="text-gray-400 text-xs">Actual amount</p>
            </div>
            <div className="bg-gray-800 p-3 rounded-md text-center">
              <p className="text-white font-semibold">₹19.60</p>
              <p className="text-gray-400 text-xs">Winnings</p>
            </div>
            <div className="bg-gray-800 p-3 rounded-md text-center">
              <p className="text-white font-semibold">₹0.20</p>
              <p className="text-gray-400 text-xs">Handling fee</p>
            </div>
            <div className="bg-gray-800 p-3 rounded-md text-center">
              <p className="text-green-500 font-semibold">₹9.60</p>
              <p className="text-gray-400 text-xs">Profit/loss</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GameHistoryProfile;
