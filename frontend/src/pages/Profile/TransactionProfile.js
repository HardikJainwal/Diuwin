import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineClockCircle } from "react-icons/ai";
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

        <div className=" bg-[#333332] w-[390px] rounded-md p-4 shadow-lg">
        {/* Header Section */}
        <div className="bg-gray-700 rounded-md px-4 py-3 mb-4 flex items-center justify-between">
          <h2 className="text-white font-semibold text-lg">Agent Commission</h2>
          <AiOutlineInfoCircle className="text-white text-xl" />
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-gray-400">
            <div className="flex items-center space-x-2">
              <AiOutlineInfoCircle className="text-lg" />
              <span>Detail</span>
            </div>
            <span className="text-gray-300">Agent commission</span>
          </div>

          <div className="flex justify-between items-center text-gray-400">
            <div className="flex items-center space-x-2">
              <AiOutlineClockCircle className="text-lg" />
              <span>Time</span>
            </div>
            <span className="text-gray-300">2025-02-26 02:16:08</span>
          </div>

          <div className="flex justify-between items-center text-gray-400">
            <div className="flex items-center space-x-2">
              <BsCurrencyRupee className="text-lg text-green-500" />
              <span>Balance</span>
            </div>
            <span className="text-green-500">₹0.03</span>
          </div>

          {/* Clickable Section */}
          <div className="bg-gray-800 rounded-md p-4 min-h-[60px] transition-all duration-300 hover:bg-gray-700 cursor-pointer"></div>

          {/* Footer */}
          <div className="text-center text-gray-300 mt-2">
            <span className="text-sm">No more</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TransactionProfile;
