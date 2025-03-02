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
    <div className="fixed bottom-0 w-full max-w-[445px] mt-10 space-x-10 bg-[#242424] shadow-lg flex justify-between p-2 mx-auto rounded-t-2xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`flex flex-col items-center ${
            tab.id === "home" ? "bg-[#d9ac4f] rounded-full px-4 py-2 mb-1" : ""
          }`}
        >
          <img
            src={activeTab === tab.id ? tab.activeIcon : tab.icon}
            alt={tab.label}
            className="w-8 h-8 rounded-full"
          />
          {tab.id !== "home" && (
            <span className={`text-xs ${activeTab === tab.id ? "text-custom-golden" : "text-[#bfbfbf]"}`}>
              {tab.label}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

export default Footer;
