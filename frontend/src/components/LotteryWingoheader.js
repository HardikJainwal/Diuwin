import React from "react";
import GirlMusic from "./../Assets/girl_music.png";
import Voice from "./../Assets/voice.png";

const LotteryWingoheader = () => {
  return (
    <header className="bg-[#4d4d4c] fixed top-0 h-16 flex items-center justify-between px-4 ">
      {/* bg-custom-light-gray z-2 h-14 flex items-center justify-between top-0 px-2 */}
      {/* Left side (spacer for alignment) */}
      <div className="flex-1"></div>

      {/* Center with logo */}
      <div className="items-center mr-24 ml-28 inset-x-0 flex justify-center">
        <img
          src="https://ossimg.diuacting.com/DiuWin/other/h5setting_20240724134839qf9p.png"
          alt="Logo"
          className="w-36 h-auto"
        />
      </div>

      {/* Right side with icons */}
      <div className="flex space-x-4 items-center">
        <img
          src={GirlMusic}
          alt="Girl Music Icon"
          className="w-6 h-6 rounded-full"
        />
        <img
          src={Voice}
          alt="Voice Icon"
          className="w-6 h-6 rounded-full"
        />
      </div>
    </header>
  );
};

export default LotteryWingoheader;
