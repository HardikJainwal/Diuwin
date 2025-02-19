import React from "react";
import { IoIosArrowBack } from "react-icons/io"; // Importing the back arrow icon
import Capture from "./../Assets/Capture.png";

const PromotionRuleHeader = () => {
  return (
    <header className="bg-custom-light-gray fixed top-0 w-[412px] h-12 flex items-center px-2 z-10">
      {/* Back Arrow on the Left */}
      <IoIosArrowBack className="text-[#f5f3f0] text-xl cursor-pointer" />

      {/* Notification Title in the Center */}
      <p className="text-[#f5f3f0] text-xl mx-auto">Rules</p>
    </header>
  );
};

export default PromotionRuleHeader;
