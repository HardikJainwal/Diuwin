import React from "react";
import CustomerService from "../pages/CustomerService";
import BackButton from "./BackButton";

const CustomerServiceHeader = () => {
  return (
    <header className="bg-custom-light-gray fixed top-0 w-[412px] h-12 flex items-center px-2 z-10">
      {/* Back Arrow on the Left */}
      <BackButton className="text-[#f5f3f0] text-xl cursor-pointer" />

      {/* Notification Title in the Center */}
      <p className="text-[#f5f3f0] text-xl p-2 mx-auto">
        Agent line customer service
      </p>
    </header>
  );
};

export default CustomerServiceHeader;
