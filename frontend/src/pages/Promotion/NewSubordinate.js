import React, { useState } from "react";

import empty from "./../../Assets/empty.png";

import Timecolor from "./../../Assets/timecolor.png";
import Timeblack from "./../../Assets/timeblack.png";
import LotteryWingoheader from "./../../components/LotteryWingoheader";
import NewSubordinateHeader from "../../components/NewSubordinateHeader";

function NewSubordinate() {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="bg-[#242424] min-h-screen flex flex-col items-start">
      <NewSubordinateHeader />
      <div className="text-center  w-[412px] max-w-md px-[2px] mt-[49px]">
        {/* Buttons */}
        <div className="flex justify-between mb-2">
          <button
            className={`px-12 py-2  text-sm rounded-lg ${
              activeTab === "today"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#333332] text-[#a8a5a1]"
            }`}
            onClick={() => setActiveTab("today")}
          >
            Today
          </button>
          <button
            className={`px-8 py-3 t   ext-sm rounded-lg ${
              activeTab === "yesterday"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#333332] text-[#a8a5a1]"
            }`}
            onClick={() => setActiveTab("yesterday")}
          >
            Yesterday
          </button>
          <button
            className={`px-[37px] py-2 text-sm rounded-lg ${
              activeTab === "thisMonth"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#333332] text-[#a8a5a1]"
            }`}
            onClick={() => setActiveTab("thisMonth")}
          >
            This month
          </button>
        </div>

        {/* Content */}
        <div className=" ">
          {activeTab === "today" && (
            <div className="flex flex-col justify-center items-center">
              <img src={empty} alt="" className="ml-2 mt-14 w-52 h-26" />
              <p className="text-[#666462] text-sm">No data</p>
            </div>
          )}

          {activeTab === "yesterday" && (
            <div className="flex flex-col justify-center items-center">
              <img src={empty} alt="" className="ml-2 mt-14 w-52 h-26" />
              <p className="text-[#666462] text-sm">No data</p>
            </div>
          )}

          {activeTab === "thisMonth" && (
            <div className="flex flex-col justify-center items-center">
              <img src={empty} alt="" className="ml-2 mt-14 w-52 h-26" />
              <p className="text-[#666462] text-sm">No data</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewSubordinate;
