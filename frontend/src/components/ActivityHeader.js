import React from "react";

const ActivityHeader = () => {
  return (
    <header className="bg-custom-light-gray fixed top-0 w-[412px] flex items-center justify-between  ">
      <div className="flex-1"></div>

      {/* Center with logo */}
      <div className="flex items-center px-36">
        <img
          src="https://ossimg.diuacting.com/DiuWin/other/h5setting_20240724134839qf9p.png" // Replace with your image path
          alt="Logo"
          className="w-36 h-auto mb-0"
        />
      </div>
    </header>
  );
};

export default ActivityHeader;
