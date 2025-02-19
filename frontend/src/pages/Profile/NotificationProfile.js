import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Footer from "../../components/Footer";
import NotificationHeader from "../../components/NotificationHeader";
import Notification from "../../Assets/notification.png";
import Delete from "../../Assets/delete.png";

function NotificationProfile() {

  const formatDateTime = () => {
    const now = new Date();
    return now.toLocaleString("en-IN", {
      hour12: false, 
    });
  };


  return (
    <div className="bg-[#242424] min-h-screen flex flex-col">
      <NotificationHeader />

      <div className="bg-[#242424] p-4  w-50%  h-full flex flex-col">

          <div className="bg-[#333332] px-4  py-2 mt-14 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
            <img src={Notification} alt="File Icon" className=" w-5 h-4 mr-1" />
              <p className="text-white text-lg mr-24 font-semibold">LOGIN NOTIFICATION</p>
              <img src={Delete} alt="File Icon" className=" w-8 h-8 ml-4" />
            </div>

            {/* Date and Time */}
            <p className="text-[#666462] text-xs mb-2">{formatDateTime()}</p>

            {/* Notification Text */}
            <p className="text-[#a8a5a1] text-xs mr-18 mt-1">
              Your account is logged in on {formatDateTime()}
            </p>
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default NotificationProfile;

