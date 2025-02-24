import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLock,
  FaQuestionCircle,
  FaKey,
  FaHome,
  FaUser,
  FaBell,
  FaCog,
} from "react-icons/fa";
import service_notification from "../Assets/service_notification.png"
import service_feedback from "../Assets/service_feedback.png"
import service_guide from "../Assets/service_guide.png"
import { AiOutlineRight } from "react-icons/ai";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LotteryWingoheader from "../components/LotteryWingoheader";
import wallet from "../../src/Assets/wallets.png";
import Deposit from "../Assets/recharge.png";
import Withdraw from "../../src/Assets/Withdraw.png";
import VIP from "../Assets/VipIcon.png";
import bet from "../Assets/bet.png";
import transaction from "../Assets/transaction.png";
import rechargeIcon from "../Assets/recharge.png";
import DepositHistory from "../Assets/deposithistory.png";
import widthdraw from "../Assets/Withdraw.png";
import withdrawHistory from "../Assets/withdrawhistory.png"
import NotifyIcon from "../Assets/notifyIcon.png";
import gift from "../Assets/gift.png";
import gameStatistics from "../Assets/gamestatistics.png"
import languageIcon from "../Assets/languageIcon.png"
import SettingCenter from "../Assets/settingCenter.png"
import about from "../Assets/about.png"
import CustomerService from "../Assets/icon_sevice.png"
import logout from "../Assets/logout.png"
import safe from "../Assets/safe.png"

function ProfilePage() {




  return (
    <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-center">
      <LotteryWingoheader />
      <div className="text-left mb-0 w-full max-w-md px-8 ">
        <div className="flex  items-center mt-10">
          {/* Profile Picture and Info */}
          <div className="w-16 h-16 rounded-full overflow-hidden  mr-4">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2qp0siotla746.cloudfront.net%2Fimg%2Fuse-cases%2Fprofile-picture%2Ftemplate_3.jpg&f=1&nofb=1&ipt=a95567c890d315f651ab0809a31d998d65c0ecded6be57f17704fdc7eeb07666&ipo=images"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">
              User Name
            </h2>
            <p className="text-white text-sm px-2 rounded-full bg-[#dd9138]">UID: 12345</p>
            <p className="text-[#a8a5a1] text-xs">
              Last Login: 2025-02-07 16:59:27
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#242424] p-4 shadow-md w-full max-w-md h-full flex flex-col justify-center">
        <div className="bg-[#333332] p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center ">
            <div>
              <div className="text-[#a8a5a1]">
                Total Balance
                <br />
                <span className="text-lg text-[#f5f3f0]"> 0.00 </span>
              </div>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <img src={wallet} alt="File Icon" className=" w-8 h-8" />
              <p className="text-[#a8a5a1] text-sm">Wallet</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={rechargeIcon} alt="File Icon" className=" w-8 h-8" />
              <p className="text-[#a8a5a1] text-sm">Deposit</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={widthdraw} alt="File Icon" className=" w-8 h-8" />
              <p className="text-[#a8a5a1] text-sm">Withdraw</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={VIP} alt="File Icon" className=" w-8 h-8" />
              <p className="text-[#a8a5a1] text-sm">VIP</p>
            </div>
          </div>
        </div>

        <div className="bg-[#333332] p-4 rounded-lg shadow-md mt-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex">
            <img src={safe} alt="File Icon" className=" w-10 h-10 mt-3 mr-2" />
              <div className="text-[#a8a5a1] ">
                Safe
                <br />
                <span className="text-xs leading-tight"
                >the daily interest rate is 0.1%, and the income is<br/> calculated
                once every 1 minutes.</span>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* 2x2 grid layout */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-[#333332] p-4 rounded-lg shadow-md flex ">
          <img src={bet} alt="File Icon" className=" w-8 h-8 mr-2" />
          <div className="flex flex-col">
            <p className="text-[#f5f3f0]">game History</p>
            <p className="text-[#a8a5a1] text-xs">My game history</p>
          </div>
          </div>
          <div className="bg-[#333332] p-4 rounded-lg shadow-md flex">
          <img src={transaction} alt="File Icon" className=" w-8 h-8 mr-2" />
          <div className="flex flex-col">
            <p className="text-[#f5f3f0]">Transaction</p>
            <p className="text-[#a8a5a1] text-xs">My transaction history</p>
          </div>
          </div>
          <div className="bg-[#333332] p-4 rounded-lg shadow-md flex">
          <img src={DepositHistory} alt="File Icon" className=" w-8 h-8 mr-2" />
          <div className="flex flex-col">
            <p className="text-[#f5f3f0]">Deposit</p>
            <p className="text-[#a8a5a1] text-xs">My deposit history</p>
            </div>
          </div>
          <div className="bg-[#333332] p-4 rounded-lg shadow-md flex">
          <img src={withdrawHistory} alt="File Icon" className=" w-8 h-8 mr-2" />
          <div className="flex flex-col">
            <p className="text-[#f5f3f0]">Withdraw</p>
            <p className="text-[#a8a5a1] text-xs">My withdraw history</p>
            </div>
          </div>
        </div>

        <div className="bg-[#333332] p-4 rounded-lg shadow-md mt-4">
  <div className="space-y-4">
    <div>
      <button
        type="button"
        className="w-full text-base font-medium text-[#a8a5a1] flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <img src={NotifyIcon} alt="File Icon" className="w-8 h-8" />
          Notification
        </div>
        <AiOutlineRight className="text-gray-500 text-lg" />
      </button>
      <hr className="my-4 border-gray-300" />
    </div>

    <div>
      <button
        type="button"
        className="w-full text-base font-medium text-[#a8a5a1] flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <img src={gift} alt="File Icon" className="w-8 h-8" />
          Gifts
        </div>
        <AiOutlineRight className="text-gray-500 text-lg" />
      </button>
      <hr className="my-4 border-gray-300" />
    </div>

    <div>
      <button
        type="button"
        className="w-full text-base font-medium text-[#a8a5a1] flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <img src={gameStatistics} alt="File Icon" className="w-8 h-8" />
          Game Statistics
        </div>
        <AiOutlineRight className="text-gray-500 text-lg" />
      </button>
      <hr className="my-4 border-gray-300" />
    </div>

    <div>
      <button
        type="button"
        className="w-full text-base font-medium text-[#a8a5a1] flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <img src={languageIcon} alt="File Icon" className="w-8 h-8" />
          Language
        </div>
        <AiOutlineRight className="text-gray-500 text-lg" />
      </button>
    </div>
  </div>
</div>

        <div className="bg-[#333332] text-[#a8a5a1] p-4 rounded-lg shadow-md mt-4">
  {/* Title aligned to the left */}
  <p className="text-sm font-semibold mb-4 text-[#f5f3f0] text-left">Service Center</p>

  {/* Grid layout */}
  <div className="grid grid-cols-3 gap-4">
    <div className="symbol flex flex-col items-center">
      <img src={SettingCenter} alt="File Icon" className="w-8 h-8" />
      <p className="mt-2 text-sm">Settings</p>
    </div>
    <div className="symbol flex flex-col items-center">
      <img src={service_feedback} alt="File Icon" className="w-8 h-8" />
      <p className="mt-2 text-sm">Feedback</p>
    </div>
    <div className="symbol flex flex-col items-center">
      <img src={service_notification} alt="File Icon" className="w-8 h-8" />
      <p className="mt-2 text-sm">Notification</p>
    </div>
    <div className="symbol flex flex-col items-center">
      <img src={CustomerService} alt="File Icon" className="w-8 h-8" />
      <p className="mt-2 text-sm text-center">Customer Service</p>
    </div>
    <div className="symbol flex flex-col items-center">
      <img src={service_guide} alt="File Icon" className="w-8 h-8" />
      <p className="mt-2 text-sm text-center">Beginner's Guide</p>
    </div>
    <div className="symbol flex flex-col items-center">
      <img src={about} alt="File Icon" className="w-8 h-8" />
      <p className="mt-2 text-sm">About us</p>
    </div>
  </div>
</div>


        <form 
        // onSubmit={handleSubmit} 
        className="space-y-4 md:space-y-6 mt-2 mb-14">
  <button
    type="submit"
    className="w-full flex items-center justify-center border border-[#d9ac4f] text-[#d9ac4f] py-3 rounded-full hover:bg-custom-blue focus:ring-2 focus:ring-gray-300"
  >
    <img src={logout} alt="File Icon" className="w-6 h-6 mr-2" />
    Log Out
  </button>
</form>

      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
