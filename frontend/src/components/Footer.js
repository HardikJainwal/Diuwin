import React from "react";
import {
  FaRegPaperPlane,
  FaRegListAlt,
  FaHome,
  FaWallet,
  FaUserCircle,
} from "react-icons/fa"; // Example icons from react-icons
import icons8Activity from "./../Assets/icons8-activity.png";
import icons8Diamond from "./../Assets/icons8-diamond.png";
import icons8Wallet from "./../Assets/icons8-wallet.png";
import icons8man from "./../Assets/icons8-man.png";
import GameIcon from "./../Assets/game_icon.png";

function Footer() {
  return (
    <div className="fixed bottom-0 rounded-tr-3xl rounded-tl-3xl space-x-10 bg-custom-light-gray shadow-lg flex justify-between p-2">
      {/* Promotion Tab */}
      <a href="/promotionPage" className="flex flex-col items-center">
        <img
          src={icons8Diamond}
          alt="Country Flag"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-xs text-[#bfbfbf]">Promotion</span>
      </a>

      {/* Activity Tab */}
      <a href="/activityPage" className="flex flex-col items-center">
      <img
          src={icons8Activity}
          alt="Country Flag"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-xs text-[#bfbfbf]">Activity</span>
      </a>

      {/* Home Tab (active) */}
      <a
        href="/home"
        className="flex flex-col items-center bg-[#d9ac4f] rounded-full px-4 py-2 mb-1"
      >
        <img
          src={GameIcon}
          alt="Country Flag"
          className="w-8 h-8 rounded-full"
        />
      </a>

      {/* Wallet Tab */}
      <a href="/wallet" className="flex flex-col items-center">
      <img
          src={icons8Wallet}
          alt="Country Flag"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-xs text-[#bfbfbf]">Wallet</span>
      </a>

      {/* Account Tab */}
      <a href="/ProfilePage" className="flex flex-col items-center">
      <img
          src={icons8man}
          alt="Country Flag"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-xs text-[#bfbfbf]">Account</span>
      </a>
    </div>
  );
}

export default Footer;
