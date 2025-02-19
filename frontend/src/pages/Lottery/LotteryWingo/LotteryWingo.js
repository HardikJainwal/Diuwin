import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import back from "./../../../Assets/back.png";
import speaker from "./../../../Assets/speaker.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import invitation from "../../../Assets/invitation.png";
import refresh from "../../../Assets/refresh.png";
import wallet from "../../../Assets/wallets.png";
import fire from "../../../Assets/fire.png";
import HowToPlay from "../../../Assets/how to play.png";
import Timecolor from "../../../Assets/timecolor.png";
import Timeblack from "../../../Assets/timeblack.png";
import LotteryWingoheader from "../../../components/LotteryWingoheader";
import agree from "../../../Assets/agree-a.png";
import notAgree from "../../../Assets/agree-b.png";

const buttonData = [
  {
    id: 0,
    title: (
      <>
        Win Go <br />
        30s
      </>
    ),
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 1,
    title: "Win Go 1Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 2,
    title: "Win Go 3Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 3,
    title: "Win Go 5Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
];

const iconColorMap = [
  "ReVi",
  "Green",
  "Red",
  "Green",
  "Red",
  "GrVi",
  "Red",
  "Green",
  "Red", // icon 8 is Red
  "Green",
];

const tailwindColorMap = {
  Green: "bg-green-600 hover:bg-green-500",
  Violet: "bg-violet-600 hover:bg-violet-500",
  Red: "bg-red-600 hover:bg-red-500",
  ReVi: "bg-gradient-to-r from-red-600 via-violet-600 to-violet-600 hover:bg-gradient-to-r hover:from-red-500 hover:via-violet-500 hover:to-violet-500", // 50% red and 50% violet
  GrVi: "bg-gradient-to-r from-green-600 via-violet-600 to-violet-600 hover:bg-gradient-to-r hover:from-green-500 hover:via-violet-500 hover:to-violet-500", // 50% green and 50% violet
  Big: "bg-orange-600 hover:bg-orange-500",
  Small: "bg-blue-600 hover:bg-blue-500",
};

function LotteryWingo() {
  const [activeTab, setActiveTab] = useState("gameHistory");
  const [activeButton, setActiveButton] = useState(buttonData[0].id);
  const [selectedTitle, setSelectedTitle] = useState(buttonData[0].title);
  const [selectedButton, setSelectedButton] = useState(null);
  const [currentPage, setCurrentPage] = useState();
  const [selectedBigOption, setSelectedBigOption] = useState(null);
  const [checked, setChecked] = useState(false);
  // const [showGreenPopup, setShowGreenPopup] = useState(false);
  // const [showVioletPopup, setShowVioletPopup] = useState(false);
  // const [showRedPopup, setShowRedPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(null);
  const [showBigPopup, setShowBigPopup] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);

    const selectedButton = buttonData.find((button) => button.id === buttonId);

    if (selectedButton) {
      setSelectedTitle(selectedButton.title);
    }
  };

  const handleBet = (color) => setShowPopup(color);
  const handleCancelBet = () => setShowPopup(null);

  const iconColor = {
    Big: "bg-[#dd9138] hover:bg-[#e69d42]",
    Small: "bg-[#5088d3] hover:bg-[#5a92e0]",
  };

  const colors = ["Green", "Violet", "Red"];

  const handleIconClick = (iconName) => {
    setShowPopup(iconName);
  };

  const handleToggleBigPopup = (option) => {
    setSelectedBigOption(option);
    setShowBigPopup(true);
  };

  const handleCancelBigBet = () => {
    setShowBigPopup(false);
    setSelectedBigOption(null);
  };

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const totalPages = 5;
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleClick = (value) => {
    setSelectedButton(value);
  };

  // const handleButtonClick = (buttonId) => {
  //   setActiveButton(buttonId);
  // };

  return (
    <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-center ">
      <LotteryWingoheader />
      <div className="text-center mb-0 w-full max-w-md px-8 mt-20">
        <div className="bg-[#333332]  rounded-xl shadow-lg p-4">
          {/* Amount */}
          <div className="flex items-center justify-center">
            <div className="text-xl font-bold text-white">₹0.24</div>
            <img
              src={refresh}
              alt="icon"
              className="w-6 h-6 ml-2" // Adjust the spacing with `ml-2` or as needed
            />
          </div>

          {/* Wallet Balance */}
          <div className="flex items-center justify-center  text-center text mb-4">
            <img src={wallet} alt="icon" className="w-6 h-6 ml-2 " />
            <span className="text-[#f5f3f0] text-sm font-medium">
              Wallet Balance
            </span>
          </div>

          {/* Buttons */}
          <div className="flex mt-4  justify-between">
            <button className="bg-red-500 px-6 text-white py-1.5 rounded-full hover:bg-red-600">
              Withdraw
            </button>
            <button className="bg-custom-green px-8 text-white py-1.5 rounded-full hover:bg-green-600">
              Deposit
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#242424] px-8 p-2 shadow-md w-full max-w-md h-full mt-4 flex flex-col justify-center">
        <div className="bg-[#333332] p-2 rounded-full shadow-md  mt-0">
          <div className="flex justify-between items-center w-full">
            <img
              src={speaker}
              alt="icon"
              className="w-6 h-6 ml-2" // Adjust the spacing with `ml-2` or as needed
            />
            <p className="text-xs text-white ml-4">
              Thanks to all new and old members, because of your accompany, we
              have
            </p>
            <button
              className=" text-[#8f5206] text-sm px-5 py-1 rounded-lg flex items-center justify-center gap-0"
              style={{
                backgroundImage: `url(${invitation})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img src={fire} alt="icon" className="w-4 h-4" />
              Detail
            </button>
          </div>
        </div>

        <div className="bg-[#333332]  rounded-lg mt-4 shadow-md ">
          <div className="button-container justify-between flex">
            {buttonData.map((button) => (
              <button
                key={button.id}
                onClick={() => handleButtonClick(button.id)}
                className={`flex flex-col items-center text-xs px-4 py-2 rounded-lg w-24 h-auto transition-all duration-300
      ${activeButton === button.id ? "bg-gradient-to-b from-[#fae59f] to-[#c4933f]  text-[#8f5206]" : "bg-[#333332] text-[#a8a5a1]"} 
      hover:bg-gradient-to-r from-[#fae59f] to-[#c4933f] hover:text-[#8f5206] `}
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  className="icon"
                  style={{ fontSize: "24px", marginBottom: "8px" }}
                >
                  {activeButton === button.id ? button.activeIcon : button.icon}
                </div>
                <span>{button.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div
          className=" rounded-lg mt-4 bg-cover  mb-4 p-4"
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Section */}
          <div className="flex justify-between">
            <div className="">
              {/* How to Play */}
              <div className="border border-[#8f5206] rounded-full px-2 py-1 flex items-center justify-center gap-2 text-[#8f5206] text-center">
                <img src={HowToPlay} alt="How to Play" className="w-5 h-5" />
                <p className="text-[#8f5206] text-sm font-medium">
                  How to Play
                </p>
              </div>

              {/* Wingo 30s */}
              <p className="text-[#8f5206] mb-2 text-sm font-semibold ">
                Wingo 30s
              </p>

              {/* Icons */}
              <div className="flex space-x-2">
                <span className="w-7 h-  rounded-full flex items-center justify-center text-black">
                  <img
                    src="https://diuwin.bet/assets/png/n2-c2913607.png"
                    alt="Icon 1"
                    className="w-7 h-7 object-cover rounded-full"
                  />
                </span>
                <span className="w-7 h-7  rounded-full flex items-center justify-center text-black">
                  <img
                    src="https://diuwin.bet/assets/png/n8-d4d951a4.png"
                    alt="Icon 2"
                    className="w-7 h-7  object-cover rounded-full"
                  />
                </span>
                <span className=" w-7 h-7  rounded-full flex items-center justify-center text-black">
                  <img
                    src="https://diuwin.bet/assets/png/n7-5961a17f.png"
                    alt="Icon 3"
                    className="w-7 h-7 object-cover rounded-full"
                  />
                </span>
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-black">
                  <img
                    src="https://diuwin.bet/assets/png/n1-dfccbff5.png"
                    alt="Icon 4"
                    className="w-7 h-7  object-cover rounded-full"
                  />
                </span>
                <span className=" w-7 h-7  rounded-full flex items-center justify-center text-white">
                  <img
                    src="https://diuwin.bet/assets/png/n1-dfccbff5.png"
                    alt="Icon 5"
                    className="w-7 h-7  object-cover  rounded-full"
                  />
                </span>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-center">
              <p className="text-[#8f5206] text-sm">Time Remaining</p>
              <div className="flex space-x-3 text-[#8f5206] justify-end items-center">
                <span className=" text-[#8f5206] font-bold text-2xl rounded ">
                  1
                </span>
                <span className=" text-[#8f5206] font-bold text-2xl rounded">
                  1
                </span>
                <span className=" text-[#8f5206] font-bold text-2xl rounded">
                  :
                </span>
                <span className=" text-[#8f5206] font-bold text-2xl rounded">
                  2
                </span>
                <span className=" text-[#8f5206] font-bold text-2xl rounded">
                  0
                </span>
              </div>

              <p className="text-lg mt-2 text-sm font-bold text-[#8f5206]">
                2928383000211334
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#333332] rounded-lg  shadow-md mb-2 p-4 space-y-2">
          {/* First Line: 3 Buttons */}
          <div className="relative">
            {/* Betting Buttons */}
            <div className="flex justify-between mb-4 space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`bg-${color.toLowerCase()}-500 px-10 text-white py-2 rounded`}
                  onClick={() => handleBet(color)}
                >
                  {color}
                </button>
              ))}
            </div>
            {/* Popups */}
            {showPopup && (
              <div className="fixed bottom-0 left-0 w-[410px] shadow-lg rounded-t-lg">
                <div className="w-[410px] rounded-xl bg-neutral-900 text-white p-4 font-['Open_Sans']">
                  <div
                    className={`bg-${iconColorMap[showPopup]}-600 rounded-t-xl p-4 flex flex-col items-center text-center`}
                  >
                    <h2 className="text-xl font-bold">{selectedTitle}</h2>
                    <div className="flex w-[300px] items-center justify-center bg-white text-black gap-2 mt-2 p-2 rounded-lg">
                      <span>Select</span>
                      <span className="font-bold">{showPopup}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Balance Section */}
                    <div className="flex justify-between">
                      <p className="mb-2">Balance</p>
                      <div className="flex gap-2">
                        {[1, 10, 100, 1000].map((value) => (
                          <button
                            key={value}
                            className={`bg-${iconColorMap[showPopup]}-600 px-4 py-1 rounded`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Section */}
                    <div className="flex justify-between">
                      <p className="mb-2">Quantity</p>
                      <div className="flex items-center gap-2">
                        <button
                          className={`bg-${iconColorMap[showPopup]}-600 px-2 rounded`}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          defaultValue="1"
                          className="w-20 bg-neutral-800 text-center py-1 rounded"
                        />
                        <button
                          className={`bg-${iconColorMap[showPopup]}-600 px-2 rounded`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Multiplier Buttons */}
                    <div className="flex gap-2 mt-2 justify-end">
                      {["X1", "X5", "X10", "X20", "X50", "X100"].map(
                        (label) => (
                          <button
                            key={label}
                            className={`bg-neutral-700 px-3 py-1 rounded hover:bg-${iconColorMap[showPopup]}-600 transition`}
                          >
                            {label}
                          </button>
                        )
                      )}
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-center gap-2">
                      <div className="" onClick={() => setChecked(!checked)}>
                        {checked ? (
                          <img
                            src={agree}
                            alt="icon"
                            className="w-6 h-6 ml-2" // Adjust the spacing with `ml-2` or as needed
                          />
                        ) : (
                          <img
                            src={notAgree}
                            alt="icon"
                            className="w-6 h-6 ml-2" // Adjust the spacing with `ml-2` or as needed
                          />
                        )}
                      </div>
                      <span>I agree</span>
                      <button className="text-red-500 hover:underline">
                        Pre-sale rules
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={handleCancelBet}
                        className="bg-neutral-700 flex-1 py-2 rounded-lg hover:bg-neutral-600 transition"
                      >
                        Cancel
                      </button>
                      <button
                        className={`bg-${iconColorMap[showPopup]}-600 flex-1 py-2 rounded-lg hover:bg-${iconColorMap[showPopup]}-500 transition`}
                      >
                        Total amount ₹1.00
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-custom-dark-gray p-2 rounded-lg">
            {/* Second Line: 5 Icons */}
            <div className="flex justify-between space-x-1">
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("0")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n0-30bd92d1.png"
                  alt="Icon 0"
                />
              </span>
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("1")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n1-dfccbff5.png"
                  alt="Icon 1"
                />
              </span>
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("2")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n2-c2913607.png"
                  alt="Icon 2"
                />
              </span>
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("3")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n3-f92c313f.png"
                  alt="Icon 3"
                />
              </span>
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("4")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n4-cb84933b.png"
                  alt="Icon 4"
                />
              </span>
            </div>

            {/* Third Line: 5 Icons */}
            <div className="flex justify-between space-x-1">
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("5")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n5-49d0e9c5.png"
                  alt="Icon 5"
                />
              </span>
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("6")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n6-a56e0b9a.png"
                  alt="Icon 6"
                />
              </span>
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("7")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n7-5961a17f.png"
                  alt="Icon 7"
                />
              </span>
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("8")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n8-d4d951a4.png"
                  alt="Icon 8"
                />
              </span>
              <span
                className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center"
                onClick={() => handleIconClick("9")}
              >
                <img
                  src="https://diuwin.bet/assets/png/n9-a20f6f42.png"
                  alt="Icon 9"
                />
              </span>
            </div>

            {showPopup && (
              <div className="fixed bottom-0 left-0 w-[410px] shadow-lg rounded-t-lg">
                <div className="w-[410px] rounded-xl bg-neutral-900 text-white p-4 font-['Open_Sans']">
                  <div
                    className={`${
                      tailwindColorMap[iconColorMap[showPopup]] || "bg-gray-600"
                    } rounded-t-xl p-4 flex flex-col items-center text-center`}
                  >
                    <h2 className="text-xl font-bold">{selectedTitle}</h2>
                    <div className="flex w-[300px] items-center justify-center bg-white text-black gap-2 mt-2 p-2 rounded-lg">
                      <span>Select</span>
                      <span className="font-bold">{showPopup}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Balance Section */}
                    <div className="flex justify-between">
                      <p className="mb-2">Balance</p>
                      <div className="flex gap-2">
                        {["1", "10", "100", "1000"].map((label) => (
                          <button
                            key={label}
                            className={`bg-neutral-700 px-3 py-1 rounded ${
                              tailwindColorMap[
                                iconColorMap[showPopup]
                              ]?.replace("bg-", "hover:bg-") ||
                              "hover:bg-gray-500"
                            } transition`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Section */}
                    <div className="flex justify-between">
                      <p className="mb-2">Quantity</p>
                      <div className="flex items-center gap-2">
                        <button
                          className={`${
                            tailwindColorMap[iconColorMap[showPopup]] ||
                            "bg-gray-600"
                          } px-2 rounded`}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          defaultValue="1"
                          className="w-20 bg-neutral-800 text-center py-1 rounded"
                        />
                        <button
                          className={`${
                            tailwindColorMap[iconColorMap[showPopup]] ||
                            "bg-gray-600"
                          } px-2 rounded`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Multiplier Buttons */}
                    <div className="flex gap-2 mt-2 justify-end">
                      {["X1", "X5", "X10", "X20", "X50", "X100"].map(
                        (label) => (
                          <button
                            key={label}
                            className={`bg-neutral-700 px-3 py-1 rounded ${
                              tailwindColorMap[
                                iconColorMap[showPopup]
                              ]?.replace("bg-", "hover:bg-") ||
                              "hover:bg-gray-500"
                            } transition`}
                          >
                            {label}
                          </button>
                        )
                      )}
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-center gap-2">
                      <div className="" onClick={() => setChecked(!checked)}>
                        {checked ? (
                          <img
                            src={agree}
                            alt="icon"
                            className="w-6 h-6 ml-2" // Adjust the spacing with `ml-2` or as needed
                          />
                        ) : (
                          <img
                            src={notAgree}
                            alt="icon"
                            className="w-6 h-6 ml-2" // Adjust the spacing with `ml-2` or as needed
                          />
                        )}
                      </div>
                      <span>I agree</span>
                      <button className="text-red-500 hover:underline">
                        Pre-sale rules
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={handleCancelBet}
                        className="bg-neutral-700 flex-1 py-2 rounded-lg hover:bg-neutral-600 transition"
                      >
                        Cancel
                      </button>
                      <button
                        className={`${
                          tailwindColorMap[iconColorMap[showPopup]] ||
                          "bg-gray-600"
                        } flex-1 py-2 rounded-lg transition`}
                      >
                        Total amount ₹1.00
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Fourth Line: Random with Border and Buttons */}
          <div className="flex justify-center px-8 items-center space-x-2">
            <span className="border border-red-700 text-red-500 text-sm px-1 py-2 rounded-lg">
              Random
            </span>
            {["X1", "X5", "X10", "X50", "X100"].map((value) => (
              <button
                key={value}
                className={`${
                  selectedButton === value
                    ? "bg-custom-green text-white"
                    : "bg-[#242424] text-[#a8a5a1]"
                } text-sm px-4 py-2 rounded-lg`}
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Fifth Line: Rounded Button Split in Two Parts */}
          <div className="flex justify-center mt-4">
            <button className="bg-[#5088d3] text-white rounded-full flex overflow-hidden">
              <span
                className="px-20 py-2 bg-[#feaa57] cursor-pointer"
                onClick={() => handleToggleBigPopup("Big")}
              >
                Big
              </span>
              <span
                className="px-20 py-2 cursor-pointer"
                onClick={() => handleToggleBigPopup("Small")}
              >
                Small
              </span>
            </button>
          </div>

          {showBigPopup && (
            <div className="fixed bottom-0 left-0 w-[410px] shadow-lg rounded-t-lg">
              <div className="w-[410px] rounded-xl bg-neutral-900 text-white p-4 font-['Open_Sans']">
                <div
                  className={`${iconColor[selectedBigOption] || "bg-gray-600"} 
              rounded-t-xl p-4 flex flex-col items-center text-center`}
                >
                  <h2 className="text-xl font-bold">{selectedTitle}</h2>
                  <div className="flex w-[300px] items-center justify-center bg-white text-black gap-2 mt-2 p-2 rounded-lg">
                    <span>Select</span>
                    <span className="font-bold">{selectedBigOption}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Balance Section */}
                  <div className="flex justify-between">
                    <p className="mb-2">Balance</p>
                    <div className="flex gap-2">
                      {[1, 10, 100, 1000].map((value) => (
                        <button
                          key={value}
                          className={`${iconColor[selectedBigOption] || "bg-gray-600"} px-4 py-1 rounded`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Section */}
                  <div className="flex justify-between">
                    <p className="mb-2">Quantity</p>
                    <div className="flex items-center gap-2">
                      <button
                        className={`${iconColor[selectedBigOption] || "bg-gray-600"} px-2 rounded`}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        defaultValue="1"
                        className="w-20 bg-neutral-800 text-center py-1 rounded"
                      />
                      <button
                        className={`${iconColor[selectedBigOption] || "bg-gray-600"} px-2 rounded`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Multiplier Buttons */}
                  <div className="flex gap-2 mt-2 justify-end">
                    {["X1", "X5", "X10", "X20", "X50", "X100"].map((label) => (
                      <button
                        key={label}
                        className={`bg-neutral-700 px-3 py-1 rounded 
                    ${iconColor[selectedBigOption]?.replace("bg-", "hover:bg-") || "hover:bg-gray-500"} transition`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-center gap-2">
                    <div className="" onClick={() => setChecked(!checked)}>
                      {checked ? (
                        <img
                          src={agree}
                          alt="icon"
                          className="w-6 h-6 ml-2" // Adjust the spacing with `ml-2` or as needed
                        />
                      ) : (
                        <img
                          src={notAgree}
                          alt="icon"
                          className="w-6 h-6 ml-2" // Adjust the spacing with `ml-2` or as needed
                        />
                      )}
                    </div>
                    <span>I agree</span>
                    <button className="text-red-500 hover:underline">
                      Pre-sale rules
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={handleCancelBigBet}
                      className="bg-neutral-700 flex-1 py-2 rounded-lg hover:bg-neutral-600 transition"
                    >
                      Cancel
                    </button>
                    <button
                      className={`${iconColor[selectedBigOption] || "bg-gray-600"} flex-1 py-2 rounded-lg transition`}
                    >
                      Total amount ₹1.00
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between space-x-1 mb-2">
          <button
            className={`px-6 py-2  text-sm rounded-lg ${
              activeTab === "gameHistory"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#333332] text-[#a8a5a1]"
            }`}
            onClick={() => setActiveTab("gameHistory")}
          >
            Game History
          </button>
          <button
            className={`px-8 py-2 t   ext-sm rounded-lg ${
              activeTab === "chart"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#333332] text-[#a8a5a1]"
            }`}
            onClick={() => setActiveTab("chart")}
          >
            Chart
          </button>
          <button
            className={`px-8 py-2 text-sm rounded-lg ${
              activeTab === "myHistory"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#333332] text-[#a8a5a1]"
            }`}
            onClick={() => setActiveTab("myHistory")}
          >
            My History
          </button>
        </div>

        {/* Content */}
        <div className=" mb-2 rounded-lg shadow">
          {activeTab === "gameHistory" && (
            <div className="">
              <table className="table-auto rounded-lg w-full text-sm text-left bg-[#333332] text-[#f5f3f0]">
                <thead>
                  <tr className="bg-[#3a3947] p-2">
                    <th className="px-2 py-2 text-white rounded-tl-lg text-sm">
                      Period
                    </th>
                    <th className="px-4 py-2 text-white text-sm">Number</th>
                    <th
                      className="px-
      2 py-2 text-sm text-white"
                    >
                      Big/Small
                    </th>
                    <th className="px-2 py-2 text-white rounded-tr-lg text-sm">
                      Color
                    </th>
                  </tr>
                </thead>
                <tbody classname="">
                  {[...Array(10)].map((_, index) => {
                    const periodStart = 202504100051174;
                    const periodNumber = periodStart - index;
                    const numberValue = Math.floor(Math.random() * 100);
                    const colors = ["green", "red", "purple"];
                    const color = colors[index % colors.length];
                    const isBig = numberValue >= 50;

                    return (
                      <tr key={index} className="  ">
                        <td className="px-2 py-2">{periodNumber}</td>
                        <td
                          className={`px-4 py-2 text-xl font-bold`}
                          style={{ color: color }}
                        >
                          {numberValue}
                        </td>
                        <td className="px-4 text-sm py-2">
                          {isBig ? "Big" : "Small"}
                        </td>
                        <td className="px-2 py-2">
                          <span
                            className="inline-block text-xs w-4 h-4 rounded-full"
                            style={{ backgroundColor: color }}
                          ></span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "chart" && (
            <div>
              <table className="table-auto bg-[#333332] w-full text-left ">
                <thead>
                  <tr className="bg-[#3a3947] text-white">
                    <th className="px-2 w-1/3 py-2 text-center"> Period</th>
                    <th className="px-2 py-2 text-center ">Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-[#f5f3f0] px-2 text-sm">
                      Statistic (last 100 Periods)
                    </td>
                  </tr>
                  {/* Row 1: Winning Numbers */}
                  <tr>
                    <td className="px-2 text-[#f5f3f0]">Winning Numbers</td>
                    <td className="px-2 py-2 text-sm text-red-500 text-center">
                      {[...Array(10)].map((_, index) => (
                        <span
                          key={index}
                          className="inline-block text-sm w-5 h-6 border text-center border-red-400 rounded-full
     "
                        >
                          {index}
                        </span>
                      ))}

                      {[...Array(1)].map((_, index) => (
                        <span
                          key={index}
                          className="inline-block w-4 h-4 border-gray-400 text-center "
                        >
                          {Math.random() > 0.5 ? "S" : "B"}{" "}
                          {/* Randomly choose 'S' or 'B' */}
                        </span>
                      ))}
                    </td>
                  </tr>

                  {/* Row 2: Missing */}
                  <tr>
                    <td className="px-2 py-2 text-[#f5f3f0] text-sm">
                      Missing
                    </td>
                    <td className=" py-2 text-center text-[#666462] text-sm">
                      {[26, 2, 3, 5, 25, 6, 14, 0, 15, 1].map((num, idx) => (
                        <span
                          key={idx}
                          className="inline-block w-4 h-4  rounded-full text-center mr-1"
                        >
                          {num}
                        </span>
                      ))}
                    </td>
                  </tr>

                  {/* Row 3: Avg Missing */}
                  <tr>
                    <td className="px-2 py-2 text-[#f5f3f0] text-sm">
                      Avg Missing
                    </td>
                    <td className="px-2 py-2 text-[#666462] text-sm text-center">
                      {[11, 15, 7, 8, 11, 6, 6, 7, 8, 13].map((num, idx) => (
                        <span
                          key={idx}
                          className="inline-block w-4 h-4 rounded-full text-center mr-1"
                        >
                          {num}
                        </span>
                      ))}
                    </td>
                  </tr>

                  {/* Row 4: Frequency */}
                  <tr>
                    <td className="px-2 py-2 text-[#f5f3f0]">Frequency</td>
                    <td className="px-2 text-sm py-2 text-[#666462] text-center">
                      {[7, 6, 11, 11, 7, 12, 15, 12, 10, 9].map((num, idx) => (
                        <span
                          key={idx}
                          className="inline-block w-4 h-4 rounded-full text-center mr-1"
                        >
                          {num}
                        </span>
                      ))}
                    </td>
                  </tr>

                  {/* Row 5: Max Consecutive */}
                  <tr>
                    <td className="text-sm px-2 text-[#f5f3f0] py-2">
                      Max Consecutive
                    </td>
                    <td className="px-2 text-sm py-2 text-[#666462] text-center">
                      {[1, 1, 1, 3, 1, 1, 3, 1, 1, 2].map((num, idx) => (
                        <span
                          key={idx}
                          className="inline-block w-4 h-4 rounded-full text-center mr-1"
                        >
                          {num}
                        </span>
                      ))}
                    </td>
                  </tr>

                  {/* Data Rows */}
                  {[...Array(10)].map((_, index) => {
                    const periodStart = 202504100051319;
                    const periodNumber = periodStart - index;
                    const randomNumberIndex = Math.floor(Math.random() * 10); // Randomly choose an index to highlight

                    return (
                      <>
                        <tr key={index} className=" border-t relative">
                          <td className="px-2 text-sm text-[#f5f3f0] py-4">
                            {periodNumber}
                          </td>
                          <td className="px-2 py-2 text-sm text-[#666462] text-center">
                            <div className="relative">
                              {[...Array(10)].map((_, numIndex) => (
                                <span
                                  key={numIndex}
                                  className={`inline-block w-5 h-5 border text-center border-gray-400 rounded-full ${numIndex === randomNumberIndex ? "bg-blue-500 text-white" : ""}`}
                                >
                                  {numIndex}
                                </span>
                              ))}

                              {[...Array(1)].map((_, index) => (
                                <span
                                  key={index}
                                  className="inline-block w-4 h-4 border-gray-400 text-center"
                                >
                                  {Math.random() > 0.5 ? "S" : "B"}{" "}
                                </span>
                              ))}
                              {/* Connecting Line */}
                              {index < 9 && (
                                <div
                                  className="absolute top-1/2 transform -translate-y-1/2"
                                  style={{
                                    left: `${randomNumberIndex * 30 + 20}px`, // Adjust based on the number's width and spacing
                                    width: "2px",
                                    height: "40px", // Adjust this based on the row height or distance between rows
                                    backgroundColor: "gray",
                                    zIndex: -1,
                                  }}
                                ></div>
                              )}
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "myHistory" && (
            <div className="p-4 mb-4 bg-[#333332] text-center ">
              <div className="flex justify-between items-start">
                {/* Left Section */}
                <div className="flex items-center">
                  <div className="w-12 h-12  bg-green-800 rounded-md mb-2 mr-3"></div>
                  <div>
                    <p className="text-[#666462]">2078543425378344</p>
                    <p className="text-[#666462] text-sm">Date: 2025-01-13</p>
                    <p className="text-[#666462] text-sm">Time: 11:20 AM</p>
                  </div>
                </div>

                {/* Right Section */}
                <div>
                  <p className="text-custom-green mt-2 border text-center rounded text-sm px-2 border-custom-green">
                    Detail
                  </p>
                  <p className="text-custom-green mt-2 border rounded text-sm px-2 border-custom-green">
                    Succeed
                  </p>
                  <p className="text-black font-medium ">$500</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-center mb-0 w-full max-w-md  mt-2">
          <div className="bg-[#333332] rounded-xl  shadow-lg p-4 flex items-center justify-center">
            {/* Left Arrow */}
            <button
              className="p-3 text-[#8f5206] bg-[#d9ac4f] rounded-lg disabled:opacity-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack />
            </button>

            {/* Page Numbering */}
            <span className=" px-8 text-sm text-[#a8a5a1] font-semibold">
              {currentPage} / {totalPages}
            </span>

            {/* Right Arrow */}
            <button
              className="p-3 text-[#8f5206] bg-[#d9ac4f] rounded-lg disabled:opacity-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LotteryWingo;
