import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import GameStatisticsHeader from "../../components/GameStatisticsHeader";

function GameStatistics() {
  const [selectedTab, setSelectedTab] = useState("Today");

  // Data mapping for each button
  const data = {
    Today: { amount: "₹0.00", description: "Total bet for today" },
    Yesterday: { amount: "₹0.00", description: "Total bet for yesterday" },
    "This week": { amount: "₹19.00", description: "Total bet this week" },
    "This month": { amount: "₹24.00", description: "Total bet this month" },
  };

  return (
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <GameStatisticsHeader />
      <div className="px-4">
        <div className="mt-14 rounded-xl ">
          {/* Navigation Buttons */}
          <nav className="flex justify-between mb-4">
            {Object.keys(data).map((tab) => (
              <button
                key={tab}
                className={`px-3 py-1.5 rounded-full transition-colors text-sm ${
                  selectedTab === tab
                    ? "bg-amber-500 text-black"
                    : "hover:bg-neutral-800 text-neutral-400"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Dynamic Content */}
          <div className="bg-[#333332] rounded-lg p-8 mb-4 flex flex-col items-center justify-center text-center">
            <span className="text-amber-500 text-2xl font-semibold">
              {data[selectedTab].amount}
            </span>
            <p className="text-neutral-400 text-sm mt-1">
              {data[selectedTab].description}
            </p>
          </div>

          {/* Display "No data" if amount is 0 */}
          {data[selectedTab].amount === "₹0.00" && (
            <div className="flex flex-col items-center justify-center py-8">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                className="text-neutral-700 mb-3"
              >
                <path
                  d="M14 3v4a1 1 0 001 1h4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <p className="text-neutral-600">No data</p>
            </div>
          )}

          {data[selectedTab].amount !== "₹0.00" && (
        <div className=" bg-[#333332] rounded-lg p-4">
        {/* Header with Icon and Title */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-white">casino</span>
          </div>
          <span className="text-gray-300">Lottery</span>
        </div>

        {/* Stats Section */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Total bet</span>
            <span className="text-gray-300">{data[selectedTab].amount}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Number of bets</span>
            <span className="text-gray-300">10</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Winning amount</span>
            <span className="text-amber-500">₹32.34</span>
          </div>
        </div>
      </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameStatistics;
