import React from "react";
import CustomerServiceHeader from "../../components/CustomerServiceHeader";

const AgentCustomer = () => {
  return (
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <CustomerServiceHeader />
      {/* Left 1/4 image section */}
      <div className="bg-[#d9ac4f] h-auto flex items-center justify-center mt-12">
        <img
          src="https://diuwin.net/assets/png/serverbg-79bda3b1.png"
          alt="Descriptive text"
          className="w-full h-auto px-16 object-cover"
        />
      </div>

      {/* Right 3/4 empty white space */}
      <div className="w-3/4 flex flex-col items-center justify-center">
        {/* Additional content can be added here */}
      </div>
    </div>
  );
};

export default AgentCustomer;
