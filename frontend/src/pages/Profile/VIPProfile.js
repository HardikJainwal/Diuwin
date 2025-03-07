import React, { useState, useEffect } from "react";
import RebateRatioHeader from "../../components/RebateRatioHeader";
import { FaUserCircle, FaStar, FaGift, FaCoins } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { GiLaurelCrown } from "react-icons/gi";
import { RiVipDiamondFill } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

// Import images
import vipbadge from '../../Assets/vip/vip1.png';
import bgcard from '../../Assets/vip/bgcard.png';
import bg2 from '../../Assets/vip/bg2.png';
import bg3 from '../../Assets/vip/bg3.png';
import bg4 from '../../Assets/vip/bg4.png';

import vipi from '../../Assets/vip/vipi.png';

import giftreward from '../../Assets/vip/giftreward.png';
import wallets from '../../Assets/vip/wallets.png';
import rebate from '../../Assets/vip/rebate.png';
import crown from '../../Assets/vip/crown.png';

// Enhanced card data with more information
const dummyCards = [
  { id: 1, image: bgcard, label: "VIP 1", icon: vipi, expRequired: 3000, benefits: { levelUpReward: 60, monthlyReward: 100, rebateRatio: 0.1 } },
  // { id: 2, image: bg2, label: "VIP 2", icon: vip2i, expRequired: 10000, benefits: { levelUpReward: 200, monthlyReward: 300, rebateRatio: 0.2 } },
  // { id: 3, image: bg3, label: "VIP 3", icon: vip3i, expRequired: 30000, benefits: { levelUpReward: 500, monthlyReward: 700, rebateRatio: 0.3 } },
  { id: 4, image: bg4, label: "VIP 4", icon: vipi, expRequired: 100000, benefits: { levelUpReward: 1000, monthlyReward: 1500, rebateRatio: 0.5 } },
  // { id: 5, image: bg5, label: "VIP 5", icon: vip2i, expRequired: 300000, benefits: { levelUpReward: 3000, monthlyReward: 4000, rebateRatio: 0.8 } },
  // { id: 6, image: bg6, label: "VIP 6", icon: vip3i, expRequired: 1000000, benefits: { levelUpReward: 10000, monthlyReward: 15000, rebateRatio: 1.2 } },
];

// CardCarousel Component
const CardCarousel = ({ selectedIndex, setSelectedIndex, userExp }) => {
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      setSelectedIndex((prev) => (prev + 1) % dummyCards.length); // Next card
    } else if (info.offset.x > 50) {
      setSelectedIndex((prev) => (prev === 0 ? dummyCards.length - 1 : prev - 1)); // Previous card
    }
  };

  // Visual indicator for drag direction
  const [dragDirection, setDragDirection] = useState(null);
  
  const handleDrag = (event, info) => {
    if (info.offset.x < -20) {
      setDragDirection("right");
    } else if (info.offset.x > 20) {
      setDragDirection("left");
    } else {
      setDragDirection(null);
    }
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    const currentCard = dummyCards[selectedIndex];
    return Math.min(100, Math.round((userExp / currentCard.expRequired) * 100));
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden my-4 mx-auto">
      <motion.div
        key={selectedIndex}
        className="p-4 rounded-lg shadow-lg w-full flex justify-center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
    <div 
  className="relative w-full max-w-md h-55 rounded-lg overflow-hidden p-2 text-white"
  style={{ 
    position: "relative",
    background: `url(${dummyCards[selectedIndex].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay"
  }}
>
  {/* Blue Overlay with High Opacity */}
  <div 
    className="absolute inset-0" 
    style={{ 
      background: "linear-gradient(117.29deg, rgba(166, 183, 208, 0.9) 21.85%, rgba(136, 158, 190, 0.9) 67.02%)"
    }} 
  ></div>

  {/* Content (Ensured All Text is White) */}
  <div className="relative z-10">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center rounded">
          <div className="w-6 h-6">
            <img src={crown} alt="VIP Icon" />
          </div>
        </div>
        <span className="text-white text-2xl font-bold font-['Roboto',sans-serif]">
          {dummyCards[selectedIndex].label}
        </span>
        <div className="flex items-center bg-opacity-50 px-4 py-2 rounded-full">
          <span className="text-white text-xs font-['Roboto',sans-serif]">Not open yet</span>
        </div>
      </div>
    </div>

    <div className="mb-4">
      <p className="text-white text-sm ml-2">
        Upgrading {dummyCards[selectedIndex].label} requires
      </p>
      <span className="flex items-center text-white text-sm ml-2 leading-none">
        <span>{dummyCards[selectedIndex].expRequired} EXP</span>
      </span>
    </div>

    <div className="mb-4">
      <button className="border border-white text-xs text-white px-1 rounded-sm ml-2">
        Bet ₹1=1EXP
      </button>
    </div>

    {/* Progress Bar */}
    <div className="mb-8 mx-2">
      <div className="h-2 bg-[#748AAA] bg-opacity-50 rounded-full relative">
        <div 
          className="absolute left-0 top-0 h-full bg-yellow-200 rounded-l-full"
          style={{ width: `${calculateProgress()}%` }}
        >
          <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="absolute left-1 top-3 px-1 mt-1 rounded-full bg-gradient-to-r from-[#899fbf] to-[#6f85a5] text-white text-xs">
          {userExp}/{dummyCards[selectedIndex].expRequired}
        </div>
      </div>
    </div>

    {/* White Text VIP Labels */}
    <div className="absolute bottom-14 right-8 text-white text-sm font-medium">
      {dummyCards[selectedIndex].label}
    </div>

    <div className="absolute bottom-4 right-4 text-white text-xs font-medium">
      {dummyCards[selectedIndex].expRequired} Experience can be leveled up
    </div>

    {/* Right Side Image */}
    <div className="absolute top-4 right-4">
      <div className="w-8 h-8 md:w-14 md:h-12 rounded-full flex items-center justify-center">
        <img 
          src={dummyCards[selectedIndex].icon} 
          alt="VIP Badge" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

      </motion.div>
      
      {/* Card indicators */}
      <div className="absolute -bottom-4 flex space-x-1">
        {dummyCards.map((card, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full ${selectedIndex === index ? "bg-yellow-400" : "bg-gray-600"}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

// VIP Benefits Component that changes based on selected card
const VIPBenefits = ({ selectedCard }) => {
  return (
    <div className="bg-[#333332] p-4 rounded-lg">
      {/* Header */}
      <div className="flex items-start gap-2 mb-4">
        <FaStar className="w-6 h-6 text-yellow-400" />
        <h2 className="text-lg font-bold flex items-center">
          <span className="text-yellow-400 mr-1">{selectedCard.label}</span> Benefits level
        </h2>
      </div>

      {/* Benefits */}
      <div className="space-y-4">
        {/* Level up rewards */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={giftreward} alt="Level Up Reward" className="w-14 h-14" /> 
            <div>
              <div className="font-medium">Level up rewards</div>
              <div className="text-xs text-gray-400">
                Each account can only receive 1 time
              </div>
            </div>
          </div>

          {/* Points display */}
          <div className="flex flex-col gap-1">
            <div className="border border-yellow-700 rounded px-2 py-1 flex items-center justify-between min-w-[60px] hover:bg-gray-700 transition-colors">
              <img src={wallets} alt="Coins" className="w-4 h-4" /> 
              <span className="font-medium">{selectedCard.benefits.levelUpReward}</span>
            </div>
          </div>
        </div>

        {/* Monthly reward */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <img src={giftreward} alt="Monthly Reward" className="w-14 h-14" /> 
            <div>
              <div className="font-medium">Monthly reward</div>
              <div className="text-xs text-gray-400">
                Receive once per month
              </div>
            </div>
          </div>

          {/* Points display */}
          <div className="flex flex-col gap-1">
            <div className="border border-yellow-700 rounded px-2 py-1 flex items-center justify-between min-w-[60px] hover:bg-gray-700 transition-colors">
              <img src={wallets} alt="Coins" className="w-4 h-4" /> 
              <span className="font-medium">{selectedCard.benefits.monthlyReward}</span>
            </div>
          </div>
        </div>

        {/* Rebate Ratio */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <img src={rebate} alt="Rebate Ratio" className="w-14 h-14" /> 
            <div>
              <div className="font-medium">Rebate Ratio</div>
              <div className="text-xs text-gray-400">
                Real-time rebate on all games
              </div>
            </div>
          </div>

          {/* Ratio display */}
          <div className="flex flex-col gap-1">
            <div className="border border-yellow-700 rounded px-2 py-1 flex items-center justify-between min-w-[60px] hover:bg-gray-700 transition-colors">
              <img src={wallets} alt="Percentage" className="w-4 h-4" /> 
              <span className="font-medium">{selectedCard.benefits.rebateRatio}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function VIPProfile() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("history");
  const [userExp, setUserExp] = useState(2500);

  // Calculate progress percentage
  const calculateProgress = () => {
    const currentCard = dummyCards[selectedIndex];
    return Math.min(100, Math.round((userExp / currentCard.expRequired) * 100));
  };

  return (
    <div className="bg-[#242424] w-[410px] min-h-screen flex flex-col font-['Roboto',sans-serif]">
      <RebateRatioHeader />
      <div className="bg-[#242424] min-h-screen flex flex-col items-start justify-start mt-12">
        <div className="text-left w-full max-w-md px-4">
          {/* Profile Section */}
          <div className="p-4 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center">
              <img src={vipbadge} alt="VIP Badge" className="w-14 h-6 mb-1 mr-28" />
              <h3 className="text-white font-medium flex items-center space-x-1">
                <span>Member: NNGHEGCK</span>
              </h3>
            </div>
          </div>

          {/* Experience & Payout Time */}
          <div className="flex mt-2">
            <div className="w-1/2 py-2 px-4 m-2 bg-[#4d4d4c] rounded-lg hover:bg-gray-600 transition duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <span className="text-[#d9ac4f] text-sm mt-1 font-['Roboto',sans-serif] tracking-[0.05em] leading-none [font-feature-settings:'tnum']">
                  {userExp} EXP
                </span>
                <span className="text-gray-400 text-sm font-['Roboto',sans-serif] mt-1">My experience</span>
              </div>
            </div>
            <div className="w-1/2 py-2 px-4 m-2 bg-[#4d4d4c] rounded-lg hover:bg-gray-600 transition duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm font-['Roboto',sans-serif]">3 Days</span>
                <span className="text-gray-400 text-sm font-['Roboto',sans-serif]">Payout time</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="px-2 py-2 text-center border border-gray-400 rounded">
            <p className="text-gray-400 text-xs leading-tight m-0 font-['Roboto',sans-serif]">
              VIP level rewards are settled at 2:00 AM on the 1st of every month
            </p>
          </div>

          {/* Card Carousel - Updated to pass userExp */}
          <CardCarousel 
            selectedIndex={selectedIndex} 
            setSelectedIndex={setSelectedIndex} 
            userExp={userExp}
          />

          {/* VIP Benefits Section that changes based on selected card */}
          <div className="mt-5 rounded-lg text-white">
            <VIPBenefits selectedCard={dummyCards[selectedIndex]} />
          </div>

          {/* Header Tabs */}
          <div className="bg-[#333332] mt-4 rounded-lg">
            <div className="flex text-center border-b border-gray-700">
              <div
                className={`w-1/2 py-3 font-semibold cursor-pointer font-['Roboto',sans-serif] ${
                  activeTab === "history"
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("history")}
              >
                History
              </div>
              <div
                className={`w-1/2 py-3 font-semibold cursor-pointer font-['Roboto',sans-serif] ${
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
            <div className="space-y-4">
              {activeTab === "history" ? (
                // History Content
                [
                  { date: "2025-02-22 21:57:44", exp: 4 },
                  { date: "2025-02-21 09:47:42", exp: 5 },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col p-4">
                    <span className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer font-['Roboto',sans-serif]">
                      Experience Bonus
                    </span>
                    <span className="text-sm text-gray-400 font-['Roboto',sans-serif]">Betting EXP</span>
                    <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1 font-['Roboto',sans-serif]">
                        <FiClock className="text-gray-400" />
                        {item.date}
                      </span>
                      <span className="text-green-500 flex items-center gap-1 font-['Roboto',sans-serif]">
                        {item.exp} EXP
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                // Rules Content - Abbreviated for brevity
                <div className="bg-[#242424] mb-4 rounded-md text-gray-200 shadow-lg">
                  <h2 className="text-amber-500 font-bold text-xl text-center mb-1 font-['Roboto',sans-serif]">
                    VIP Privileges
                  </h2>
                  <p className="text-gray-400 text-sm text-center mb-4 font-['Roboto',sans-serif]">
                    VIP rule description
                  </p>

                  <div className="space-y-4">
                    {/* Upgrade Standard */}
                    <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
                      <h3 className="text-white text-center mb-2 font-medium font-['Roboto',sans-serif]">
                        Upgrade Standard
                      </h3>
                      <p className="text-sm font-['Roboto',sans-serif]">
                        The VIP member's experience points (valid bet amount) that meet
                        the requirements of the corresponding rank will be promoted to the
                        corresponding VIP level. The member's VIP data statistics period
                        starts from 00:00:00 when the VIP system launches. VIP level
                        calculation is refreshed every 10 minutes! The corresponding
                        experience level is calculated according to valid odds 1:1.
                      </p>
                    </div>

                    <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium font-['Roboto',sans-serif]">
              Upgrade Order
            </h3>
            <p className="text-sm font-['Roboto',sans-serif]">
              The VIP level that meets the corresponding requirements can be
              promoted by one level every day, but the VIP level cannot be
              promoted by leapfrogging.
            </p>
          </div>

          {/* Level Maintenance */}
          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium font-['Roboto',sans-serif]">
              Level Maintenance
            </h3>
            <p className="text-sm font-['Roboto',sans-serif]">
              VIP members need to complete the maintenance requirements of the
              corresponding level within 30 days after the "VIP level change."
              If the promotion is completed during this period, the maintenance
              requirements will be calculated according to the current level.
            </p>
          </div>

          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium font-['Roboto',sans-serif]">
              Downgrade standard
            </h3>
            <p className="text-sm font-['Roboto',sans-serif]">
            If a VIP member fails to complete the corresponding level maintenance requirements within 30 days, the system will automatically deduct the experience points corresponding to the level. If the experience points are insufficient, the level will be downgraded, and the corresponding discounts will be adjusted to the downgraded level accordingly.
            </p>
          </div>
  
          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium font-['Roboto',sans-serif]">
              Upgrade Bonus
            </h3>
            <p className="text-sm font-['Roboto',sans-serif]">
            The upgrade benefits can be claimed on the VIP page after the member reaches the VIP membership level, and each VIP member can only get the upgrade reward of each level once.
            </p>
          </div>

          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium font-['Roboto',sans-serif]">
              Monthly reward
            </h3>
            <p className="text-sm font-['Roboto',sans-serif]">
            VIP members can earn the highest level of VIP rewards once a month.Can only be received once a month. Prizes cannot be accumulated. And any unclaimed rewards will be refreshed on the next settlement day. When receiving the highest level of monthly rewards this month Monthly Rewards earned in this month will be deducted e.g. when VIP1 earns 500 and upgrades to VIP2 to receive monthly rewards 500 will be deducted.
            </p>
          </div>

          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300">
            <h3 className="text-white text-center mb-2 font-medium font-['Roboto',sans-serif]">
              Real-time rebate
            </h3>
            <p className="text-sm font-['Roboto',sans-serif]">
            The higher the VIP level, the higher the return rate, all the games are calculated in real time and can be self-rewarded!
            </p>
          </div>

          <div className="bg-[#333332] bg-opacity-60 p-4 rounded-md hover:bg-opacity-70 transition-colors duration-300 ">
            <h3 className="text-white text-center mb-2 font-medium font-['Roboto',sans-serif]">
              Safe
            </h3>
            <p className="text-sm font-['Roboto',sans-serif]">
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
                <button className="w-full py-2 bg-[linear-gradient(90deg,#FAE59F_0%,#C4933F_100%)] hover:opacity-90 rounded-full text-yellow-900 font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-['Roboto',sans-serif]">
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