import React, { useState } from "react";
import Promotionruleheader from "../../components/PromotionRuleHeader";
import { VscIssues } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import "./../../App.css"; // Import your CSS file
import iconround from "./../../Assets/iconround.png";
import { PiLineVerticalDuotone } from "react-icons/pi";
// Import your images
import img1 from "../../Assets/lottery1.png";
import img2 from "../../Assets/casino1.png";
import img3 from "../../Assets/sport1.png";
import img4 from "../../Assets/rummy1.png";
import img5 from "../../Assets/slot1.png";
import poster from "../../Assets/poster.png";
import bank from "../../Assets/bank.png";
import bg from "../../Assets/bg1.png";
import truck from "../../Assets/trucktick.png";
// Import active state images
import activeImg1 from "../../Assets/Lottery2.png";
import activeImg2 from "../../Assets/casino2.png";
import activeImg3 from "../../Assets/sport2.png";
import activeImg4 from "../../Assets/rummy2.png";
import activeImg5 from "../../Assets/slot2.png";
import RebateRatioHeader from "../../components/RebateRatioHeader";
import InviteHeader from "../../components/InviteHeader";

function InvitePage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [img1, img2, img3, img4, img5];
  const activeImages = [
    activeImg1,
    activeImg2,
    activeImg3,
    activeImg4,
    activeImg5,
  ];
  //   const descriptions = ["Lottery", "Casino", "Sports", "Rummy", "Slots"];

  return (
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <InviteHeader />
      <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-center mt-2">
        <div className="text-left  w-full max-w-md px-3 ">
          <p className="mb-4 text-[#a8a5a1] text-sm font-semibold text-center">
            Please swipe left-right to choose your favourite poster
          </p>
          <div className="flex px-12 items-start space-x-4 overflow-x-scroll scrollbar-hidden">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="p-2 rounded-lg shadow-md px-8 mb-1 mt-2 flex-shrink-0 transition-all duration-300 bg-[#333332]"
                style={{
                  backgroundImage: `url(${poster})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col justify-center items-center text-center">
                  <p className="text-xs h-[460px] w-56 font-semibold text-[#a8a5a1]">
                    {/* {descriptions[index]} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-lg justify-center mt-6  flex">
            <p className="text-white mr-6">Invite freinds </p>
            <p className="text-white">
              Income <span className="text-[#d23838]"> 10 billion </span>
              Commission
            </p>
          </div>
          <div className="px-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#fae59f] to-[#c4933f] p-4 rounded-full mt-8 text-[#8f5206] font-bold py-2 rounded-full hover:bg-custom-blue focus:ring-2 focus:ring-gray-300"
          >
            INVITATION LINK
          </button>
          <button
            type="submit"
            className="w-full flex items-center mb-20 mt-4 justify-center border border-[#d9ac4f] text-[#d9ac4f] py-2 rounded-full hover:bg-custom-blue focus:ring-2 focus:ring-gray-300"
          >
            Copy invitation link
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvitePage;
