import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import Search from "../../Assets/search.png";
import NotificationHeader from "../../components/NotificationHeader";
import SubordinateHeader from "../../components/SubordinateHeader";
import { MdExpandMore } from "react-icons/md";

function Subordinate() {
  const uid = "14480808";
  const handleCopy = () => {
    navigator.clipboard.writeText(uid);
    alert("UID copied!");
  };

  return (
    <div className="bg-[#242424] min-h-screen w-[412px] flex flex-col">
      <SubordinateHeader />

      <div className="bg-[#242424] p-4  w-[412px] h-full flex flex-col mt-10">
        {/* Search Input */}
        <div className="relative mb-2 ">
          <input
            type="text"
            placeholder="Search subordinate UID"
            className="w-full bg-[#333332] text-[#a8a5a1] p-3 rounded-lg pr-8 outline-none focus:ring-2 ring-yellow-500 transition-all w-[380px]"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2  rounded-lg">
            <img src={Search} alt="File Icon" className=" w-18 h-10" />
          </button>
        </div>

        {/* Filter Options */}
        <div className="flex gap-3 mb-4 text-[#f5f3f0]">
          <details className="relative w-1/2">
            <summary className="bg-[#333332] p-3 rounded-lg cursor-pointer transition-colors flex justify-between items-center list-none appearance-none">
              All
              <MdExpandMore className="text-gray-400" />
            </summary>
          </details>
          <details className="relative w-1/2">
            <summary className="bg-[#333332] p-3 rounded-lg cursor-pointer transition-colors flex justify-between items-center list-none appearance-none">
              2025-02-09
              <MdExpandMore className="text-gray-400" />
            </summary>
          </details>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 grid-rows-3  mb-4 bg-[#4d4d4c] py-4 rounded-lg">
          {/* Row 1 */}
          <div className="border-r border-[#a8a5a13f]  h-14 pr-3">
            <div className="text-lg font-bold text-center text-[#f5f3f0] mb-2">
              0
            </div>
            <div className="text-sm text-center font-semibold text-[#a8a5a1]">
              Deposit number
            </div>
          </div>
          <div className="pl-3">
            <div className="text-lg font-bold text-center text-[#f5f3f0] mb-2">
              0
            </div>
            <div className="text-sm text-center font-semibold text-[#a8a5a1]">
              Deposit amount
            </div>
          </div>

          {/* Row 2 */}
          <div className="border-r border-[#a8a5a13f]  h-14 pr-3">
            <div className="text-lg font-bold text-center text-[#f5f3f0] mb-2">
              0
            </div>
            <div className="text-sm text-center font-semibold text-[#a8a5a1]">
              Number of bettors
            </div>
          </div>
          <div className="pl-3">
            <div className="text-lg font-bold text-center text-[#f5f3f0] mb-2">
              0
            </div>
            <div className="text-sm text-center font-semibold text-[#a8a5a1]">
              Total bet
            </div>
          </div>

          {/* Row 3 */}
          <div className="border-r border-[#a8a5a13f]  h-14 pr-3 mb-4">
            <div className="text-lg font-bold text-center text-[#f5f3f0] mb-2">
              0
            </div>
            <div className="text-sm text-center font-semibold text-[#a8a5a1]">
              Number of people making first deposit
            </div>
          </div>
          <div className="pl-3">
            <div className="text-lg font-bold text-center text-[#f5f3f0] mb-2">
              0
            </div>
            <div className="text-sm text-center font-semibold text-[#a8a5a1]">
              First deposit amount
            </div>
          </div>
        </div>

        {/* UID Details */}
        <div className="bg-[#333332] rounded-lg p-4 mb-4">
          <div className="flex justify-start items-center mb-2">
            <span className="text-[#f5f3f0]">UID: {uid}</span>
            <button
              onClick={handleCopy}
              className="text-[#f5f3f0] hover:text-[#dd9138]"
            >
              <AiOutlineCopy size={18} />
            </button>
          </div>
          <hr className="border-[#666462] mb-2" />

          <div className="flex justify-between ">
            <span className="text-[#a8a5a1]">Level</span>
            <span className="text-[#a8a5a1]">1</span>
          </div>
          <div className="flex justify-between ">
            <span className="text-[#a8a5a1]">Deposit amount</span>
            <span className="text-[#dd9138]">0</span>
          </div>
          <div className="flex justify-between ">
            <span className="text-[#a8a5a1]">Commission</span>
            <span className="text-[#dd9138]">0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a8a5a1]">Time</span>
            <span className="text-[#666462]">2025-02-09</span>
          </div>
        </div>

        {/* No More Data */}
        <div className="text-center text-[#f5f3f0]">No more</div>
      </div>
    </div>
  );
}

export default Subordinate;
