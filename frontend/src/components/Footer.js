import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Import icons
import icons8Activity from "./../Assets/icons8-activity.png";
import icons8Diamond from "./../Assets/icons8-diamond.png";
import icons8Wallet from "./../Assets/icons8-wallet.png";
import icons8man from "./../Assets/icons8-man.png";
import GameIcon from "./../Assets/game_icon.png";

// Active icons
import icons8ActivityActive from "../Icons/active.png";
import icons8DiamondActive from "../Icons/icons8-diamond-64.png";
import icons8WalletActive from "../Icons/icons8-wallet-68.png";
import icons8manActive from "../Icons/icons8-man-48.png";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: "promotion", path: "/promotionPage", icon: icons8Diamond, activeIcon: icons8DiamondActive, label: "Promotion" },
    { id: "activity", path: "/activityPage", icon: icons8Activity, activeIcon: icons8ActivityActive, label: "Activity" },
    { id: "home", path: "/home", icon: GameIcon, activeIcon: GameIcon, label: "" },
    { id: "wallet", path: "/wallet", icon: icons8Wallet, activeIcon: icons8WalletActive, label: "Wallet" },
    { id: "account", path: "/ProfilePage", icon: icons8man, activeIcon: icons8manActive, label: "Account" }
  ];

  const getActiveTabFromPath = (pathname) => {
    const tab = tabs.find(tab => pathname === tab.path);
    return tab ? tab.id : "home"; // Default to home if no match
  };

  const [activeTab, setActiveTab] = useState(getActiveTabFromPath(location.pathname));

  useEffect(() => {
    setActiveTab(getActiveTabFromPath(location.pathname));
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    const tabData = tabs.find(t => t.id === tab);
    if (tabData) {
      navigate(tabData.path);
      setActiveTab(tab);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#333332] shadow-lg z-50" style={{ width: "100%", maxWidth: "450px", margin: "0 auto" }}>
      <div className="flex justify-around items-end h-16 px-2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center justify-center ${
              tab.id === "home" ? "bg-[#d9ac4f] rounded-full p-2 -mt-5" : "px-1"
            }`}
          >
            <img
              src={activeTab === tab.id ? tab.activeIcon : tab.icon}
              alt={tab.label}
              className={`${
                tab.id === "home" ? "w-8 h-8" : "w-6 h-6"
              } mb-1`}
            />
            {tab.id !== "home" && (
              <span className={`text-xs font-medium ${
                activeTab === tab.id ? "text-[#d9ac4f]" : "text-gray-500"
              }`}>
                {tab.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;