import React from "react";
import BackButton from "./BackButton";


const NewSubordinateHeader = () => {
  return (
    <header className="bg-[#414140] fixed top-0 w-[412px] h-12 flex items-center px-2 z-10">
      {/* Back Arrow on the Left */}
      <BackButton className="text-[#f5f3f0] text-xl cursor-pointer ml-2" />

      {/* Notification Title in the Center */}
      <p className="text-[#f5f3f0] text-xl mx-auto">New subordinate</p>
    </header>
  );
};

export default NewSubordinateHeader;
