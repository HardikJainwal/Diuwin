import React from "react";
import { IoIosArrowBack } from "react-icons/io"; // Importing the back arrow icon
import Capture from "./../Assets/Capture.png";

const NotificationHeader = () => {
  return (
    <header className="bg-custom-light-gray fixed top-0 w-[412px] h-12 flex items-center px-2 z-10">
      {/* Back Arrow on the Left */}
      <IoIosArrowBack className="text-white text-xl cursor-pointer" />

      {/* Notification Title in the Center */}
      <p className="text-white text-xl mx-auto">Notification</p>
    </header>
  );
};

export default NotificationHeader;
