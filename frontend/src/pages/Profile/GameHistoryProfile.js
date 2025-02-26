import React, { useState } from "react";
import { MdOutlineDataUsage } from "react-icons/md";

import { MdExpandMore } from "react-icons/md";
import img1 from "../../Assets/lottery1.png";
import img2 from "../../Assets/casino1.png";
import img3 from "../../Assets/sport1.png";
import img4 from "../../Assets/rummy1.png";
import img5 from "../../Assets/slot1.png";
import activeImg1 from "../../Assets/Lottery2.png";
import activeImg2 from "../../Assets/casino2.png";
import activeImg3 from "../../Assets/sport2.png";
import activeImg4 from "../../Assets/rummy2.png";
import activeImg5 from "../../Assets/slot2.png";
import GameHistoryHeader from "../../components/GameHistoryHeader";

function GameHistoryProfile() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5, img5];
  const activeImages = [activeImg1, activeImg2, activeImg3, activeImg4, activeImg5, activeImg5];
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
        <div className="text-left w-full max-w-md px-3">
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hidden">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg shadow-md px-8 mb-1 mt-2 flex-shrink-0 transition-all duration-300 
                  ${selectedIndex === index ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f]" : "bg-[#333332]"}`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="flex flex-col justify-center items-center text-center">
                  <img
                    src={selectedIndex === index ? activeImages[index] : images[index]}
                    alt={descriptions[index]}
                    className="w-6 h-6 object-contain"
                  />
                  <p className={`text-xs font-semibold ${selectedIndex === index ? "text-[#8f5206]" : "text-[#a8a5a1]"}`}>{descriptions[index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Options */}
        {selectedIndex !== null && (
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
)}


<div className="flex flex-col items-center justify-center w-full text-[#a8a5a1] mt-6">
  <MdOutlineDataUsage className="text-4xl" />
  <p className="text-sm mt-2">No Data Available</p>
</div>

      </div>
    </div>
  );
}

export default GameHistoryProfile;
