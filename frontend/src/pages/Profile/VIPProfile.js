import React, { useState } from "react";
import RebateRatioHeader from "../../components/RebateRatioHeader";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { GiLaurelCrown } from "react-icons/gi";
import { RiVipDiamondFill } from "react-icons/ri";
import { FaStar, FaGift, FaCoins } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

function VIPProfile() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("history"); 
  const descriptions = ["VIP1", "VIP2", "VIP3", "VIP4", "VIP5"];

  // Different content for each button
  const contentData = [
    {
      description: (
        <div className="bg-[#333332] p-4 rounded-lg">
          {/* Header */}
          <div className="flex items-start gap-2 mb-4">
            <FaStar className="w-6 h-6 text-yellow-400" />
            <h2 className="text-lg font-bold flex items-center">
              <span className="text-yellow-400 mr-1">VIP1</span> Benefits level
            </h2>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            {/* Level up rewards */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaGift className="w-8 h-8 text-yellow-300" />
                <div>
                  <div className="font-medium">Level up rewards</div>
                  <div className="text-xs text-gray-400">
                    Each account can only receive 1 time
                  </div>
                </div>
              </div>

              {/* Points display */}
              <div className="flex flex-col gap-1">
                {[60, 0].map((points, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-yellow-700 rounded px-2 py-1 flex items-center justify-between min-w-[60px] hover:bg-gray-700 transition-colors"
                  >
                    <FaCoins className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">{points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      description: (
        <div className="bg-[#333332] p-4 items-start rounded-lg">
          {/* Header */}
          <div className="flex items-start gap-2 mb-4">
            <FaStar className="w-6 h-6 text-yellow-400" />
            <h2 className="text-lg font-bold flex items-center">
              <span className="text-yellow-400 mr-1">VIP2</span> Benefits level
            </h2>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            {/* Level up rewards */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaGift className="w-8 h-8 text-yellow-300" />
                <div>
                  <div className="font-medium">Level up rewards</div>
                  <div className="text-xs text-gray-400">
                    Each account can only receive 1 time
                  </div>
                </div>
              </div>

              {/* Points display */}
              <div className="flex flex-col gap-1">
                {[60, 0].map((points, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-yellow-700 rounded px-2 py-1 flex items-center justify-between min-w-[60px] hover:bg-gray-700 transition-colors"
                  >
                    <FaCoins className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">{points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      description: (
        <div className="bg-[#333332] p-4 rounded-lg">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="w-6 h-6 text-yellow-400" />
            <h2 className="text-lg font-bold flex items-center">
              <span className="text-yellow-400 mr-1">VIP3</span> Benefits level
            </h2>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            {/* Level up rewards */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaGift className="w-8 h-8 text-yellow-300" />
                <div>
                  <div className="font-medium">Level up rewards</div>
                  <div className="text-xs text-gray-400">
                    Each account can only receive 1 time
                  </div>
                </div>
              </div>

              {/* Points display */}
              <div className="flex flex-col gap-1">
                {[60, 0].map((points, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-yellow-700 rounded px-2 py-1 flex items-center justify-between min-w-[60px] hover:bg-gray-700 transition-colors"
                  >
                    <FaCoins className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">{points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      description: (
        <div className="bg-[#333332] p-4 rounded-lg">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="w-6 h-6 text-yellow-400" />
            <h2 className="text-lg font-bold flex items-center">
              <span className="text-yellow-400 mr-1">VIP4</span> Benefits level
            </h2>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            {/* Level up rewards */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaGift className="w-8 h-8 text-yellow-300" />
                <div>
                  <div className="font-medium">Level up rewards</div>
                  <div className="text-xs text-gray-400">
                    Each account can only receive 1 time
                  </div>
                </div>
              </div>

              {/* Points display */}
              <div className="flex flex-col gap-1">
                {[60, 0].map((points, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-yellow-700 rounded px-2 py-1 flex items-center justify-between min-w-[60px] hover:bg-gray-700 transition-colors"
                  >
                    <FaCoins className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">{points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      description: (
        <div className="bg-[#333332] p-4 rounded-lg">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="w-6 h-6 text-yellow-400" />
            <h2 className="text-lg font-bold flex items-center">
              <span className="text-yellow-400 mr-1">VIP5</span> Benefits level
            </h2>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            {/* Level up rewards */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaGift className="w-8 h-8 text-yellow-300" />
                <div>
                  <div className="font-medium">Level up rewards</div>
                  <div className="text-xs text-gray-400">
                    Each account can only receive 1 time
                  </div>
                </div>
              </div>

              {/* Points display */}
              <div className="flex flex-col gap-1">
                {[60, 0].map((points, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-yellow-700 rounded px-2 py-1 flex items-center justify-between min-w-[60px] hover:bg-gray-700 transition-colors"
                  >
                    <FaCoins className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">{points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#242424] w-[410px] min-h-screen flex flex-col">
      <RebateRatioHeader />
      <div className="bg-[#242424] min-h-screen flex flex-col items-start justify-start mt-12">
        <div className="text-left w-full max-w-md px-4">
          {/* Profile Section */}
          <div className="p-4 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="bg-yellow-400 text-xs text-gray-800 px-2 py-0.5 rounded-full font-bold flex items-center space-x-1">
                  <RiVipDiamondFill className="text-yellow-700" />
                  <span>VIP</span>
                </span>
                <h3 className="text-white font-medium flex items-center space-x-1">
                  <FaUserCircle className="text-gray-400" />
                  <span>Member: NNGHEGCK</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Experience & Payout Time */}
          <div className="flex mt-2">
            <div className="w-1/2 p-4 m-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <GiLaurelCrown className="text-yellow-400 text-3xl" />
                <span className="text-yellow-400 font-bold text-xl">
                  26 EXP
                </span>
                <span className="text-gray-400 text-sm">My experience</span>
              </div>
            </div>
            <div className="w-1/2 p-4 m-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <MdOutlineTimer className="text-white text-3xl" />
                <span className="text-white font-bold text-xl">3 Days</span>
                <span className="text-gray-400 text-sm">Payout time</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="px-4 pb-4 text-center">
            <p className="text-gray-400 text-sm">
              VIP level rewards are settled at 2:00 AM on the 1st of every month
            </p>
          </div>
          {/* Navigation Buttons */}
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hidden">
            {contentData.map((_, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg shadow-md px-8 mb-1 mt-2 flex-shrink-0 transition-all duration-300 
                  ${selectedIndex === index ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f]" : "bg-[#333332]"}`}
                onClick={() => setSelectedIndex(index)} // Set selected box
              >
                <div className="flex flex-col justify-center items-center text-center">
                  <p
                    className={`text-xs font-semibold ${selectedIndex === index ? "text-[#8f5206]" : "text-[#a8a5a1]"}`}
                  >
                    {descriptions[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Content */}
          <div
            className={`mt-5  rounded-lg ${contentData[selectedIndex].color} text-white`}
          >
            <p className="text-sm mt-2">
              {contentData[selectedIndex].description}
            </p>
          </div>

       {/* Header Tabs */}
       <div className="bg-[#333332] mt-4 rounded-lg">
      <div className="flex text-center border-b border-gray-700">
        <div
          className={`w-1/2 py-3 font-semibold cursor-pointer ${
            activeTab === "history"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("history")}
        >
          History
        </div>
        <div
          className={`w-1/2 py-3 font-semibold cursor-pointer ${
            activeTab === "rules"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("rules")}
        >
          Rules
        </div>
      </div>
      

      {/* Content Section */}
      <div className=" space-y-4">
        {activeTab === "history" ? (
          // History Content
          [
            { date: "2025-02-22 21:57:44", exp: 4 },
            { date: "2025-02-21 09:47:42", exp: 5 },
            { date: "2025-02-20 14:32:44", exp: 10 },
          ].map((item, index) => (
            <div key={index} className="flex flex-col p-4">
              <span className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                Experience Bonus
              </span>
              <span className="text-sm text-gray-400">Betting EXP</span>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <FiClock className="text-gray-400" />
                  {item.date}
                </span>
                <span className="text-green-500 flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {item.exp} EXP
                </span>
              </div>
            </div>
          ))
        ) : (
          // Rules Content
          <div className=" bg-[#242424] mb-4 rounded-md text-gray-200 shadow-lg">
        <h2 className="text-amber-500 font-bold text-xl text-center mb-1">
          VIP Privileges
        </h2>
        <p className="text-gray-400 text-sm text-center mb-4">
          VIP rule description
        </p>

        <div className="space-y-4">
          {/* Upgrade Standard */}
          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium">
              Upgrade Standard
            </h3>
            <p className="text-sm">
              The VIP member's experience points (valid bet amount) that meet
              the requirements of the corresponding rank will be promoted to the
              corresponding VIP level. The member's VIP data statistics period
              starts from 00:00:00 when the VIP system launches. VIP level
              calculation is refreshed every 10 minutes! The corresponding
              experience level is calculated according to valid odds 1:1.
            </p>
          </div>

          {/* Upgrade Order */}
          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium">
              Upgrade Order
            </h3>
            <p className="text-sm">
              The VIP level that meets the corresponding requirements can be
              promoted by one level every day, but the VIP level cannot be
              promoted by leapfrogging.
            </p>
          </div>

          {/* Level Maintenance */}
          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium">
              Level Maintenance
            </h3>
            <p className="text-sm">
              VIP members need to complete the maintenance requirements of the
              corresponding level within 30 days after the "VIP level change."
              If the promotion is completed during this period, the maintenance
              requirements will be calculated according to the current level.
            </p>
          </div>

          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium">
              Downgrade standard
            </h3>
            <p className="text-sm">
            If a VIP member fails to complete the corresponding level maintenance requirements within 30 days, the system will automatically deduct the experience points corresponding to the level. If the experience points are insufficient, the level will be downgraded, and the corresponding discounts will be adjusted to the downgraded level accordingly.
            </p>
          </div>
  
          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium">
              Upgrade Bonus
            </h3>
            <p className="text-sm">
            The upgrade benefits can be claimed on the VIP page after the member reaches the VIP membership level, and each VIP member can only get the upgrade reward of each level once.
            </p>
          </div>

          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium">
              Monthly reward
            </h3>
            <p className="text-sm">
            VIP members can earn the highest level of VIP rewards once a month.Can only be received once a month. Prizes cannot be accumulated. And any unclaimed rewards will be refreshed on the next settlement day. When receiving the highest level of monthly rewards this month Monthly Rewards earned in this month will be deducted e.g. when VIP1 earns 500 and upgrades to VIP2 to receive monthly rewards 500 will be deducted.
            </p>
          </div>

          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium">
              Real-time rebate
            </h3>
            <p className="text-sm">
            The higher the VIP level, the higher the return rate, all the games are calculated in real time and can be self-rewarded!
            </p>
          </div>

          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300 ">
            <h3 className="text-white text-center mb-2 font-medium">
              Safe
            </h3>
            <p className="text-sm">
            VIP members who have reached the corresponding level will get additional benefits on safe deposit based on the member's VIP level.
            </p>
          </div>
        </div>
      </div>
        )}
      </div>

      {/* View All Button */}
      {activeTab === "history" && (
        <div className="p-4 pt-0">
          <button className="w-full py-3 bg-gradient-to-r from-yellow-700 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 rounded-md text-yellow-100 font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
            View All
          </button>
        </div>
      )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default VIPProfile;
