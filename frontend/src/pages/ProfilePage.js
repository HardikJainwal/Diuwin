import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import service_notification from "../Assets/service_notification.png";
import service_feedback from "../Assets/service_feedback.png";
import service_guide from "../Assets/service_guide.png";
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
import withdrawHistory from "../Assets/withdrawhistory.png";
import NotifyIcon from "../Assets/notifyIcon.png";
import gift from "../Assets/gift.png";
import gameStatistics from "../Assets/gamestatistics.png";
import languageIcon from "../Assets/languageIcon.png";
import SettingCenter from "../Assets/settingCenter.png";
import about from "../Assets/about.png";
import CustomerService from "../Assets/icon_sevice.png";
import logout from "../Assets/logout.png";
import safe from "../Assets/safe.png";

function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center pb-10">
      <div
        className="w-full flex flex-col items-center rounded-b-[30px] pb-20 h-[250px]" // Increased height
        style={{
          background: "linear-gradient(90deg, #FAE59F 0%, #C4933F 100%)", // Keep existing gradient
          // Or try a different gradient:
          // background: "linear-gradient(135deg, #FFC371 0%, #FF5F6D 100%)",
        }}
      >
        {/* Profile Box */}
        <div className="text-left mb-0 w-full max-w-md px-8 mt-10">
          <div className="flex items-center space-x-3">
            {/* Profile Picture and Info */}
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2qp0siotla746.cloudfront.net%2Fimg%2Fuse-cases%2Fprofile-picture%2Ftemplate_3.jpg&f=1&nofb=1"
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-white">
                MEMBERNGHEGGCK
              </h2>
              <p className="text-white text-sm px-2 rounded-full bg-[#dd9138]">
                UID: 1952877
              </p>
              <p className="text-white text-xs">
                Last Login: 2025-03-05 10:19:37
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Balance Box - Now below the Yellow Background */}
      <div className="bg-[#242424] p-4 shadow-md max-w-md h-full flex flex-col justify-center -mt-10 rounded-lg w-[400px]">
        {" "}
        {/* Increased negative margin */}
        <div className="bg-[#333332] p-4 rounded-lg shadow-md -mt-14">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[#a8a5a1]">
                Total Balance
                <br />
                <span className="text-lg text-[#f5f3f0]"> ₹125.04 </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <Link
              to="/ar-wallet"
              className="flex flex-col items-center cursor-pointer"
            >
              <img src={wallet} alt="AR Wallet" className="w-8 h-8" />
              <p className="text-[#a8a5a1] text-sm">AR Wallet</p>
            </Link>

            <Link
              to="/deposit"
              className="flex flex-col items-center cursor-pointer"
            >
              <img src={rechargeIcon} alt="Deposit" className="w-8 h-8" />
              <p className="text-[#a8a5a1] text-sm">Deposit</p>
            </Link>

            <Link
              to="/withdraw"
              className="flex flex-col items-center cursor-pointer"
            >
              <img src={widthdraw} alt="Withdraw" className="w-8 h-8" />
              <p className="text-[#a8a5a1] text-sm">Withdraw</p>
            </Link>

            <Link
              to="/vipprofile"
              className="flex flex-col items-center cursor-pointer"
            >
              <img src={VIP} alt="VIP" className="w-8 h-8" />
              <p className="text-[#a8a5a1] text-sm">VIP</p>
            </Link>
          </div>
        </div>
        <div className="bg-[#333332] p-4 rounded-lg shadow-md mt-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex">
              <img
                src={safe}
                alt="File Icon"
                className=" w-10 h-10 mt-3 mr-2"
              />
              <div className="text-[#a8a5a1] ">
                Safe
                <br />
                <span className="text-xs leading-tight">
                  the daily interest rate is 0.1%, and the income is
                  <br /> calculated once every 1 minutes.
                </span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* 2x2 grid layout */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link
            to="/gamehistoryProfile"
            className="bg-[#333332] p-4 rounded-lg shadow-md flex cursor-pointer"
          >
            <img src={bet} alt="File Icon" className="w-8 h-8 mr-2" />
            <div className="flex flex-col">
              <p className="text-[#f5f3f0]">Game History</p>
              <p className="text-[#a8a5a1] text-xs">My game history</p>
            </div>
          </Link>

          <Link
            to="/transactionProfile"
            className="bg-[#333332] p-4 rounded-lg shadow-md flex cursor-pointer"
          >
            <img src={transaction} alt="File Icon" className="w-8 h-8 mr-2" />
            <div className="flex flex-col">
              <p className="text-[#f5f3f0]">Transaction</p>
              <p className="text-[#a8a5a1] text-xs">My transaction history</p>
            </div>
          </Link>

          <Link
            to="/deposit-history"
            className="bg-[#333332] p-4 rounded-lg shadow-md flex cursor-pointer"
          >
            <img
              src={DepositHistory}
              alt="File Icon"
              className="w-8 h-8 mr-2"
            />
            <div className="flex flex-col">
              <p className="text-[#f5f3f0]">Deposit</p>
              <p className="text-[#a8a5a1] text-xs">My deposit history</p>
            </div>
          </Link>

          <Link
            to="/withdraw-history"
            className="bg-[#333332] p-4 rounded-lg shadow-md flex cursor-pointer"
          >
            <img
              src={withdrawHistory}
              alt="File Icon"
              className="w-8 h-8 mr-2"
            />
            <div className="flex flex-col">
              <p className="text-[#f5f3f0]">Withdraw</p>
              <p className="text-[#a8a5a1] text-xs">My withdraw history</p>
            </div>
          </Link>
        </div>
        <div className="bg-[#333332] p-4 rounded-lg shadow-md mt-4">
          <div className="space-y-4">
            {/* Notification Button */}
            <div>
              <Link
                to="/notificationProfile"
                className="w-full text-base font-medium text-[#a8a5a1] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={NotifyIcon}
                    alt="Notification Icon"
                    className="w-8 h-8"
                  />
                  Notification
                </div>
                <AiOutlineRight className="text-gray-500 text-lg" />
              </Link>
              <hr className="my-4 border-gray-300" />
            </div>

            {/* Gifts Button */}
            <div>
              <Link
                to="/giftsProfile"
                className="w-full text-base font-medium text-[#a8a5a1] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <img src={gift} alt="Gift Icon" className="w-8 h-8" />
                  Gifts
                </div>
                <AiOutlineRight className="text-gray-500 text-lg" />
              </Link>
              <hr className="my-4 border-gray-300" />
            </div>

            {/* Game Statistics Button */}
            <div>
              <Link
                to="/gamestatistics"
                className="w-full text-base font-medium text-[#a8a5a1] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={gameStatistics}
                    alt="Game Statistics Icon"
                    className="w-8 h-8"
                  />
                  Game Statistics
                </div>
                <AiOutlineRight className="text-gray-500 text-lg" />
              </Link>
              <hr className="my-4 border-gray-300" />
            </div>

            {/* Language Button */}
            <div>
              <Link
                to="/language"
                className="w-full text-base font-medium text-[#a8a5a1] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={languageIcon}
                    alt="Language Icon"
                    className="w-8 h-8"
                  />
                  Language
                </div>
                <AiOutlineRight className="text-gray-500 text-lg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#333332] text-[#a8a5a1] p-4 rounded-lg shadow-md mt-4">
          {/* Title aligned to the left */}
          <p className="text-sm font-semibold mb-4 text-[#f5f3f0] text-left">
            Service Center
          </p>

          {/* Grid layout */}
          <div className="grid grid-cols-3 gap-4">
            {/* Settings */}
            <Link
              to="/settings"
              className="symbol flex flex-col items-center cursor-pointer"
            >
              <img src={SettingCenter} alt="Settings" className="w-8 h-8" />
              <p className="mt-2 text-sm">Settings</p>
            </Link>

            {/* Feedback */}
            <Link
              to="/feedbackProfile"
              className="symbol flex flex-col items-center cursor-pointer"
            >
              <img src={service_feedback} alt="Feedback" className="w-8 h-8" />
              <p className="mt-2 text-sm">Feedback</p>
            </Link>

            {/* Notification */}
            <Link
              to="/notificationsService"
              className="symbol flex flex-col items-center cursor-pointer"
            >
              <img
                src={service_notification}
                alt="Notification"
                className="w-8 h-8"
              />
              <p className="mt-2 text-sm">Notification</p>
            </Link>

            {/* Customer Service */}
            <Link
              to="/customer-service"
              className="symbol flex flex-col items-center cursor-pointer"
            >
              <img
                src={CustomerService}
                alt="Customer Service"
                className="w-8 h-8"
              />
              <p className="mt-2 text-sm text-center">Customer Service</p>
            </Link>

            {/* Beginner's Guide */}
            <Link
              to="/beginnerguide"
              className="symbol flex flex-col items-center cursor-pointer"
            >
              <img
                src={service_guide}
                alt="Beginner's Guide"
                className="w-8 h-8"
              />
              <p className="mt-2 text-sm text-center">Beginner's Guide</p>
            </Link>

            {/* About Us */}
            <Link
              to="/aboutusprofile"
              className="symbol flex flex-col items-center cursor-pointer"
            >
              <img src={about} alt="About Us" className="w-8 h-8" />
              <p className="mt-2 text-sm">About us</p>
            </Link>
          </div>
        </div>
        <form
          // onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6 mt-2 mb-14"
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center border border-[#d9ac4f] text-[#d9ac4f] py-3 rounded-full focus:ring-2 focus:ring-gray-300"
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
