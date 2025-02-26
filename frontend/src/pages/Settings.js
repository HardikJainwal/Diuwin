import React, { useState } from "react";
import { AiOutlineLock, AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegCopy, FaChevronRight, FaIdBadge } from "react-icons/fa";
import SettingsHeader from "../components/SettingsHeader";

function Settings() {
  const [selectedTab, setSelectedTab] = useState("Today");

  

  return (
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <SettingsHeader />
      <div className="px-4">
      <div  className="  rounded-xl p-4 mt-10 text-white font-sans">
      {/* Profile Section */}
      <div className="flex items-center gap-4 bg-[#333332] rounded-lg p-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          className="w-16 h-16 rounded-full object-cover"
          alt="avatar"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-neutral-400 text-sm">Nickname</p>
            <div className="flex items-center gap-1 hover:bg-neutral-700 px-2 py-1 rounded cursor-pointer transition">
              <span>Change avatar</span>
              <FaChevronRight className="text-lg" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-lg">MemberRNGHEGCK</p>
            <FaChevronRight className="text-lg" />
          </div>
        </div>
      </div>

      {/* UID Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <FaIdBadge className="text-amber-500" />
          <span>UID</span>
          <span className="text-neutral-400">1952877</span>
          <FaRegCopy className="text-amber-500 text-sm cursor-pointer hover:text-amber-400 transition" />
        </div>
      </div>

      {/* Security Information */}
      <div className="space-y-1">
        <p className="text-lg font-medium mb-3">Security information</p>

        {[
          { icon: <AiOutlineLock className="text-amber-500" />, label: "Login password", action: "Edit" },
          { icon: <AiOutlineMail className="text-amber-500" />, label: "Bind mailbox", action: "to bind" },
          { icon: <AiOutlineInfoCircle className="text-amber-500" />, label: "Updated version", action: "1.0.9" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-[#333332] rounded-lg hover:bg-neutral-700/50 transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div className="flex items-center gap-1 text-neutral-400">
              <span>{item.action}</span>
              <FaChevronRight />
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}

export default Settings;
