import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineClockCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import TransactionHistoryHeader from "../../components/TransactionHistoryHeader";

function TransactionProfile() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const dropdownOptions = [
    "All",
    "Bet",
    "Agent Commission",
    "Win",
    "Red Envelope",
    "Deposit",
    "Withdraw",
    "Cancel Withdraw",
    "Attendance Bonus",
    "Agent's Red Envelope",
    "Withdraw Rejected",
    "Deposit Gift",
    "Manual Deposit",
    "Sign Up Bonus",
    "Bonus",
    "First Deposit Bonus",
    "First Deposit Rebate",
  ];

  return (
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <TransactionHistoryHeader />
      <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-start mt-12">
        
        {/* Filter Options */}
        <div className="flex w-full p-3 gap-3 mb-4 text-[#f5f3f0]">
          <details className="relative w-1/2">
            <summary className="bg-[#333332] p-3 rounded-lg cursor-pointer transition-colors flex justify-between items-center list-none appearance-none">
              {dropdownOptions[0]}
              <MdExpandMore className="text-gray-400" />
            </summary>
            <ul className="absolute bg-[#333332] mt-2 rounded-lg shadow-lg p-2 w-full">
              {dropdownOptions.map((option, i) => (
                <li key={i} className="p-2 hover:bg-[#444] cursor-pointer">
                  {option}
                </li>
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

        {/* Win Transaction Card */}
        <div className="bg-[#333332] w-[390px] rounded-md p-4 shadow-lg border border-gray-700 mb-4">
          <div className="bg-gray-700 rounded-md px-4 py-2 mb-3 flex items-center justify-between">
            <h2 className="text-white font-semibold text-sm">Win</h2>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-400 border-b border-gray-600 pb-1">
              <span className="flex items-center space-x-2">
                <AiOutlineInfoCircle className="text-lg" />
                <span>Detail</span>
              </span>
              <span className="text-gray-300">Win</span>
            </div>

            <div className="flex justify-between text-gray-400 border-b border-gray-600 pb-1">
              <span className="flex items-center space-x-2">
                <AiOutlineClockCircle className="text-lg" />
                <span>Time</span>
              </span>
              <span className="text-gray-300">2025-03-05 10:38:27</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span className="flex items-center space-x-2">
                <BsCurrencyRupee className="text-lg text-green-500" />
                <span>Balance</span>
              </span>
              <span className="text-green-500 font-semibold">₹19.60</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-md p-4 mt-3 min-h-[50px]"></div>
        </div>

        {/* Bet Transaction Card */}
        <div className="bg-[#333332] w-[390px] rounded-md p-4 shadow-lg border border-gray-700">
          <div className="bg-gray-700 rounded-md px-4 py-2 mb-3 flex items-center justify-between">
            <h2 className="text-white font-semibold text-sm">Bet</h2>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-400 border-b border-gray-600 pb-1">
              <span className="flex items-center space-x-2">
                <AiOutlineInfoCircle className="text-lg" />
                <span>Detail</span>
              </span>
              <span className="text-gray-300">Bet</span>
            </div>

            <div className="flex justify-between text-gray-400 border-b border-gray-600 pb-1">
              <span className="flex items-center space-x-2">
                <AiOutlineClockCircle className="text-lg" />
                <span>Time</span>
              </span>
              <span className="text-gray-300">2025-03-05 11:00:15</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span className="flex items-center space-x-2">
                <BsCurrencyRupee className="text-lg text-red-500" />
                <span>Balance</span>
              </span>
              <span className="text-red-500 font-semibold">₹-5.00</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-md p-4 mt-3 min-h-[50px]"></div>
        </div>

      </div>
    </div>
  );
}

export default TransactionProfile;
