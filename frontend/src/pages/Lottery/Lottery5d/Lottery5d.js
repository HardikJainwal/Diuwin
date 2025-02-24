import React, { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

import Timecolor from "../../../Assets/timecolor.png";
import Timeblack from "../../../Assets/timeblack.png";
import refresh from "../../../Assets/refresh.png";
import empty from "../../../Assets/empty.png";
import wallet from "../../../Assets/wallets.png";
import fire from "../../../Assets/fire.png";
import HowToPlay from "../../../Assets/how to play.png";
import BackButton from "./../../../components/BackButton";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import speaker from "./../../../Assets/speaker.png";
import invitation from "../../../Assets/invitation.png";
import LotteryWingoheader from "../../../components/LotteryWingoheader";

const buttonData = [
  {
    id: 0,
    title: (
      <>
        5d Lotre <br /> 1min
      </>
    ),
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 1,
    title: "5d Lotre 3Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 2,
    title: "5d Lotre 5Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 3,
    title: "5d Lotre 10Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
];

// Array of different image URLs
const imageUrls = [
  {
    url: "https://diuwin.bet/assets/png/n3-f92c313f.png",
    description: "207.36X",
  },
  {
    url: "https://diuwin.bet/assets/png/n2-c2913607.png",
    description: "69.12X",
  },
  {
    url: "https://diuwin.bet/assets/png/n3-f92c313f.png",
    description: "9.88X",
  },
  {
    url: "https://diuwin.bet/assets/png/n2-c2913607.png",
    description: "207.36X",
  },
  {
    url: "https://diuwin.bet/assets/png/n3-f92c313f.png",
    description: "69.9X",
  },
  {
    url: "https://diuwin.bet/assets/png/n2-c2913607.png",
    description: "34.7X",
  },
  {
    url: "https://diuwin.bet/assets/png/n0-30bd92d1.png",
    description: "13.4X",
  },
  {
    url: "https://diuwin.bet/assets/png/n3-f92c313f.png",
    description: "9.88X",
  },
  {
    url: "https://diuwin.bet/assets/png/n2-c2913607.png",
    description: "7.68X",
  },
  { url: "https://diuwin.bet/assets/png/n0-30bd92d1.png", description: "34.X" },
  {
    url: "https://diuwin.bet/assets/png/n3-f92c313f.png",
    description: "7.34X",
  },
  {
    url: "https://diuwin.bet/assets/png/n3-f92c313f.png",
    description: "69.9X",
  },
  {
    url: "https://diuwin.bet/assets/png/n2-c2913607.png",
    description: "13.4X",
  },
  {
    url: "https://diuwin.bet/assets/png/n0-30bd92d1.png",
    description: "9.88X",
  },
  {
    url: "https://diuwin.bet/assets/png/n3-f92c313f.png",
    description: "69.9X",
  },
  {
    url: "https://diuwin.bet/assets/png/n0-30bd92d1.png",
    description: "69.9X",
  },
];

function Lottery5d() {
  const [activeTab, setActiveTab] = useState("gameHistory");
  const [activeImgTab, setActiveImgTab] = useState("A");
  const [historyData, setHistoryData] = useState([]);
  const [activeButton, setActiveButton] = useState(buttonData[0].id);
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setverificationCode] = useState("");
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const [currentPage, setCurrentPage] = useState();
  const totalPages = 5; // Change this based on your total pages

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);
  const handleverificationCodeChange = (event) =>
    setverificationCode(event.target.value);
  const handlePrivacyAgreementChange = (event) =>
    setPrivacyAgreement(event.target.checked);
  const handleRememberPasswordChange = (event) =>
    setRememberPassword(event.target.checked);

  const handleSendVerificationCode = () => {
    // Logic to send verification code
    console.log("Verification code sent!");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const loginData = isPhoneLogin
      ? { phoneNumber, password }
      : { email, password };
    console.log("Login data:", loginData);
    console.log("Remember password:", rememberPassword);
    console.log("verification code:", verificationCode);
    console.log("Privacy agreement accepted:", privacyAgreement);
  };

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); // Update the active button state
  };

  return (
    <div className="bg-[#333332] min-h-screen flex flex-col items-center justify-center">
      <LotteryWingoheader />
      <div className="text-center mb-0 w-full max-w-md px-4 mt-2">
        <div className="bg-[#4d4d4c]  rounded-xl shadow-lg p-4">
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
          <div className="flex  items-center justify-center  text-center text mb-4">
            <img src={wallet} alt="icon" className="w-6 h-6 ml-2" />
            <span className="text-white text-sm font-medium">
              Wallet Balance
            </span>
          </div>

          {/* Buttons */}
          <div className="flex mt-4 justify-between">
            <button className="bg-red-500 px-6 text-white py-1.5 rounded-full hover:bg-red-600">
              Withdraw
            </button>
            <button className="bg-custom-green px-8 text-white py-1.5 rounded-full hover:bg-green-600">
              Deposit
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#00000030]  px-4 py-2 shadow-md w-full max-w-md h-full mt-4 flex flex-col justify-center">
        <div className="bg-[#4d4d4c] p-2 rounded-full shadow-md  mt-0">
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

        <div className="bg-[#4d4d4c]  rounded-lg mt-4 shadow-md ">
          <div className="button-container justify-between flex">
            {buttonData.map((button) => (
              <button
                key={button.id}
                onClick={() => handleButtonClick(button.id)}
                className={`flex flex-col items-center text-xs px-4 py-2 rounded-lg w-24 h-auto transition-all duration-300
      ${activeButton === button.id ? "bg-gradient-to-b from-[#fae59f] to-[#c4933f]  text-[#8f5206]" : "bg-[#4d4d4c] text-[#a8a5a1]"} 
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
        <div className="bg-[#3f3f3e] flex rounded-lg mt-4 shadow-md mb-4 p-2">
          <h1 className="text-[#a8a5a1] text-sm mt-2 mr-2">
            Lottery <br />
            Result
          </h1>

          <div className="flex justify-between items-center">
            {/* Left Side - Numbers in Circular Borders */}
            <div className="flex space-x-3">
              {["7", "3", "8", "7", "3"].map((number, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#5e5e5dbd] text-[#f5f3f0] rounded-full text-sm ">
                    {number}
                  </div>
                  <div className="text-[#a8a5a1] text-sm mb-2">
                    {["A", "B", "C", "D", "E"][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-black text-sm align-top mt-2 mx-1">=</div>

          {/* Right Side - Total */}
          <div className="ml-1">
            <div className="flex items-center  justify-center text-black">
              <div className="w-10 h-10 flex items-center justify-center bg-[#d9ac4f] text-[#8f5206] rounded-full text-sm ">
                {["7", "3", "8", "7", "3"]
                  .map(Number) // Convert strings to numbers
                  .reduce((acc, current) => acc + current, 0)}{" "}
                {/* Calculate total */}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#3f3f3e] rounded-lg mt-2 shadow-md mb-2 p-2">
          {/* Left Section */}
          <div className="flex justify-between mb-4">
            <div>
              {/* How to Play */}
              <div className="flex ">
                <p className="text-[#a8a5a1] mr-4 ">Period</p>
                <div className="border border-[#d9ac4f] rounded-full px-2 py-1 flex items-center justify-center gap-2 text-[#8f5206] text-center">
                  <img src={HowToPlay} alt="How to Play" className="w-5 h-5" />
                  <p className="text-[#d9ac4f] text-sm font-medium">
                    How to Play
                  </p>
                </div>
              </div>
              <p className="text-lg mt-2 font-bold text-[#f5f3f0]">
                2928383000211334
              </p>
            </div>

            {/* Right Section */}
            <div className="text-right">
              <p className="text-[#a8a5a1] mb-2 text-sm">Time Remaining</p>
              <div className="flex space-x-2  justify-end items-center">
                <span className=" text-[#d9ac4f] text-xl rounded">1</span>
                <span
                  className=" text-[#d9ac4f] t
                ext-xl rounded"
                >
                  1
                </span>
                <span className="e text-[#d9ac4f] text-xl rounded">:</span>
                <span className=" text-[#d9ac4f] text-xl rounded">2</span>
                <span className=" text-[#d9ac4f] text-xl rounded">0</span>
              </div>
            </div>
          </div>
          <div className="bg-custom-green rounded-lg w-full p-2">
            {/* Grid with 6 columns */}
            <div className="grid grid-cols-5 bg-slate-700  rounded-lg">
              {/* Numbers with half-circles and full borders */}
              {["2", "3", "4", "5", "6"].map((number, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border-2 border-black rounded-lg px-2"
                >
                  {/* Top Half-Circle */}
                  <div className="w-16 h-8 bg-gray-400 rounded-b-full border-x-2 border-t-2 border-black"></div>

                  {/* Main Number Circle */}
                  <div className="flex items-center justify-center bg-gray-400 text-white rounded-full w-16 h-16 text-xl mt-2 mb-2 font-bold border-2 border-gray-500">
                    {number}
                  </div>

                  {/* Bottom Half-Circle */}
                  <div className="w-16 h-8 bg-gray-400 rounded-t-full border-x-2 border-b-2 border-gray-500"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mt-4 justify-left space-x-3 mb-4">
            <button
              className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${
                activeImgTab === "A"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#6f7381] text-white"
              }`}
              onClick={() => setActiveImgTab("A")}
            >
              A
            </button>
            <button
              className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${
                activeImgTab === "B"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#6f7381] text-white"
              }`}
              onClick={() => setActiveImgTab("B")}
            >
              B
            </button>
            <button
              className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${
                activeImgTab === "C"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#6f7381] text-white"
              }`}
              onClick={() => setActiveImgTab("C")}
            >
              C
            </button>
            <button
              className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${
                activeImgTab === "D"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#6f7381] text-white"
              }`}
              onClick={() => setActiveImgTab("D")}
            >
              D
            </button>
            <button
              className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${
                activeImgTab === "E"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#6f7381] text-white"
              }`}
              onClick={() => setActiveImgTab("E")}
            >
              E
            </button>
            <button
              className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${
                activeImgTab === "SUM"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#6f7381] text-white"
              }`}
              onClick={() => setActiveImgTab("SUM")}
            >
              SUM
            </button>
          </div>

          {/* Conditionally render when activeImgTab is "A" */}
          {activeImgTab === "A" && (
            <div className="grid  grid-cols-4 gap-4">
              {/* Image Cards */}
              {/* Buttons */}
              <div className="col-span-4  flex justify-between mt-">
                {["Big 1.98", "Small 1.98", "Odd 1.98", "Even 1.98"].map(
                  (label, idx) => (
                    <button
                      key={idx}
                      className="bg-[#6f7381] text-white px-1 py-2 rounded-md hover:bg-[#d9ac4f]"
                    >
                      {label}
                    </button>
                  )
                )}
              </div>

              <div className="flex flex-col px-2">
                {/* First Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["1", "2", "3", "4", "5"].map((number, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex border border-[#666462] items-center justify-center  text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]"> {number}</p>
                    </div>
                  ))}
                </div>

                {/* Second Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["6", "7", "8", "9", "10"].map((number, index) => (
                    <div key={index + 5} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center border border-[#666462] justify-center text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]">{number}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeImgTab === "B" && (
            <div className="grid  grid-cols-4 gap-4">
              {/* Image Cards */}
              {/* Buttons */}
              <div className="col-span-4  flex justify-between mt-">
                {["Big 1.98", "Small 1.98", "Odd 1.98", "Even 1.98"].map(
                  (label, idx) => (
                    <button
                      key={idx}
                      className="bg-[#6f7381] text-white px-1 py-2 rounded-md hover:bg-[#d9ac4f]"
                    >
                      {label}
                    </button>
                  )
                )}
              </div>

              <div className="flex flex-col px-2">
                {/* First Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["1", "2", "3", "4", "5"].map((number, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex border border-[#666462] items-center justify-center  text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]"> {number}</p>
                    </div>
                  ))}
                </div>

                {/* Second Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["6", "7", "8", "9", "10"].map((number, index) => (
                    <div key={index + 5} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center border border-[#666462] justify-center text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]">{number}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeImgTab === "C" && (
            <div className="grid  grid-cols-4 gap-4">
              {/* Image Cards */}
              {/* Buttons */}
              <div className="col-span-4  flex justify-between mt-">
                {["Big 1.98", "Small 1.98", "Odd 1.98", "Even 1.98"].map(
                  (label, idx) => (
                    <button
                      key={idx}
                      className="bg-[#6f7381] text-white px-1 py-2 rounded-md hover:bg-[#d9ac4f]"
                    >
                      {label}
                    </button>
                  )
                )}
              </div>

              <div className="flex flex-col px-2">
                {/* First Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["1", "2", "3", "4", "5"].map((number, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex border border-[#666462] items-center justify-center  text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]"> {number}</p>
                    </div>
                  ))}
                </div>

                {/* Second Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["6", "7", "8", "9", "10"].map((number, index) => (
                    <div key={index + 5} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center border border-[#666462] justify-center text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]">{number}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeImgTab === "D" && (
            <div className="grid  grid-cols-4 gap-4">
              {/* Image Cards */}
              {/* Buttons */}
              <div className="col-span-4  flex justify-between mt-">
                {["Big 1.98", "Small 1.98", "Odd 1.98", "Even 1.98"].map(
                  (label, idx) => (
                    <button
                      key={idx}
                      className="bg-[#6f7381] text-white px-1 py-2 rounded-md hover:bg-[#d9ac4f]"
                    >
                      {label}
                    </button>
                  )
                )}
              </div>

              <div className="flex flex-col px-2">
                {/* First Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["1", "2", "3", "4", "5"].map((number, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex border border-[#666462] items-center justify-center  text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]"> {number}</p>
                    </div>
                  ))}
                </div>

                {/* Second Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["6", "7", "8", "9", "10"].map((number, index) => (
                    <div key={index + 5} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center border border-[#666462] justify-center text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]">{number}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeImgTab === "E" && (
            <div className="grid  grid-cols-4 gap-4">
              {/* Image Cards */}
              {/* Buttons */}
              <div className="col-span-4  flex justify-between mt-">
                {["Big 1.98", "Small 1.98", "Odd 1.98", "Even 1.98"].map(
                  (label, idx) => (
                    <button
                      key={idx}
                      className="bg-[#6f7381] text-white px-1 py-2 rounded-md hover:bg-[#d9ac4f]"
                    >
                      {label}
                    </button>
                  )
                )}
              </div>

              <div className="flex flex-col px-2">
                {/* First Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["1", "2", "3", "4", "5"].map((number, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex border border-[#666462] items-center justify-center  text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]"> {number}</p>
                    </div>
                  ))}
                </div>

                {/* Second Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["6", "7", "8", "9", "10"].map((number, index) => (
                    <div key={index + 5} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center border border-[#666462] justify-center text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]">{number}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeImgTab === "SUM" && (
            <div className="grid  grid-cols-4 gap-4">
              {/* Image Cards */}
              {/* Buttons */}
              <div className="col-span-4  flex justify-between mt-">
                {["Big 1.98", "Small 1.98", "Odd 1.98", "Even 1.98"].map(
                  (label, idx) => (
                    <button
                      key={idx}
                      className="bg-[#6f7381] text-white px-1 py-2 rounded-md hover:bg-[#d9ac4f]"
                    >
                      {label}
                    </button>
                  )
                )}
              </div>

              <div className="flex flex-col px-2">
                {/* First Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["1", "2", "3", "4", "5"].map((number, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex border border-[#666462] items-center justify-center  text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]"> {number}</p>
                    </div>
                  ))}
                </div>

                {/* Second Line of Numbers */}
                <div className="flex justify-between px-2 mb-2 space-x-8">
                  {["6", "7", "8", "9", "10"].map((number, index) => (
                    <div key={index + 5} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center border border-[#666462] justify-center text-[#666462] rounded-full text-sm font-bold">
                        {number}
                      </div>
                      <p className="text-xs text-[#a8a5a1]">{number}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between space-x-2 mb-4">
          <button
            className={`px-6 py-2 rounded-lg ${
              activeTab === "gameHistory"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#3f3f3e] text-[#a8a5a1]"
            }`}
            onClick={() => setActiveTab("gameHistory")}
          >
            Game History
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${
              activeTab === "chart"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#3f3f3e] text-[#a8a5a1]"
            }`}
            onClick={() => setActiveTab("chart")}
          >
            Chart
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${
              activeTab === "myHistory"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#3f3f3e] text-[#a8a5a1]"
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
              <table className="table-auto w-full text-left ">
                <thead>
                  <tr className="bg-[#3a3947] text-white">
                    <th className="px-2 py-2 text-center">Period</th>
                    <th className="px-2 py-2 text-center">Result</th>
                    <th className="px-2 py-2 text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Data Rows */}
                  {[...Array(10)].map((_, index) => {
                    const periodStart = 202504100051319;
                    const periodNumber = periodStart - index;

                    // Generate 5 random numbers between 1 and 9
                    const resultNumbers = Array.from(
                      { length: 5 },
                      () => Math.floor(Math.random() * 9) + 1
                    );

                    // Calculate total of result numbers
                    const total = resultNumbers.reduce(
                      (sum, num) => sum + num,
                      0
                    );

                    return (
                      <tr
                        key={index}
                        className=" bg-[#3f3f3e]  hover:bg-gray-50  relative"
                      >
                        <td className="px-2 text-sm font-semibold text-[#f5f3f0] py-2">
                          {periodNumber}
                        </td>
                        <td className="px-2 py-2 text-sm text-center">
                          {/* Wrapper to center numbers */}
                          <div className="flex justify-center items-center space-x-1">
                            {resultNumbers.map((number, idx) => (
                              <div
                                key={idx}
                                className="w-6 h-6 flex items-center justify-center text-[#f5f3f0] bg-[#3f3f3e] rounded-full border border-gray-400"
                              >
                                {number}
                              </div>
                            ))}
                          </div>
                        </td>

                        <td className="px-2 py-2 text-sm text-center">
                          <div className="flex items-center justify-center">
                            <div className="w-6 h-6 flex items-center justify-center bg-[#d9ac4f] rounded-full border border-gray-400">
                              {total}
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "chart" && (
            <div classname="">
              <div className="text-center  w-full max-w-md ">
                <div className="bg-[#3f3f3e] rounded-xl shadow-lg px-4 py-4 ">
                  <div className="flex justify-left space-x-3">
                    <button
                      className={`px-4 py-2 rounded-tl-2xl rounded-tr-2xl ${
                        activeImgTab === "A"
                          ? "bg-[#d9ac4f] text-[#8f5206]"
                          : "bg-[#6f7381] text-white"
                      }`}
                      onClick={() => setActiveImgTab("A")}
                    >
                      A
                    </button>
                    <button
                      className={`px-4 py-2 rounded-tl-2xl rounded-tr-2xl ${
                        activeImgTab === "B"
                          ? "bg-[#d9ac4f] text-[#8f5206]"
                          : "bg-[#6f7381] text-white"
                      }`}
                      onClick={() => setActiveImgTab("B")}
                    >
                      B
                    </button>
                    <button
                      className={`px-4 py-2 rounded-tl-2xl rounded-tr-2xl ${
                        activeImgTab === "C"
                          ? "bg-[#d9ac4f] text-[#8f5206]"
                          : "bg-[#6f7381] text-white"
                      }`}
                      onClick={() => setActiveImgTab("C")}
                    >
                      C
                    </button>
                    <button
                      className={`px-4 py-2 rounded-tl-2xl rounded-tr-2xl ${
                        activeImgTab === "D"
                          ? "bg-[#d9ac4f] text-[#8f5206]"
                          : "bg-[#6f7381] text-white"
                      }`}
                      onClick={() => setActiveImgTab("D")}
                    >
                      D
                    </button>
                    <button
                      className={`px-4 py-2 rounded-tl-2xl rounded-tr-2xl ${
                        activeImgTab === "E"
                          ? "bg-[#d9ac4f] text-[#8f5206]"
                          : "bg-[#6f7381] text-white"
                      }`}
                      onClick={() => setActiveImgTab("E")}
                    >
                      E
                    </button>
                  </div>

                  {/* Conditionally render when activeImgTab is "A" */}
                  {activeImgTab === "A" && (
                    <div className="">
                      <tr>
                        <td className=" text-sm text-[#f5f3f0]">
                          Statistic (last 100 Periods)
                        </td>
                      </tr>
                      {/* Row 2: Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Missing
                        </td>
                        <td className="text-[#a8a5a1] justify-between text-sm">
                          {[26, 2, 3, 5, 25, 6, 14, 0, 15, 1].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2 "
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 3: Avg Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Avg Missing
                        </td>
                        <td className="  text-sm text-[#a8a5a1] text-center">
                          {[11, 15, 7, 8, 11, 6, 6, 7, 8, 13].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 4: Frequency */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Frequency
                        </td>
                        <td className="text-sm  text-[#a8a5a1] text-center">
                          {[7, 6, 11, 11, 7, 12, 15, 12, 10, 9].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 5: Max Consecutive */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Max Consecutive
                        </td>
                        <td className=" text-sm  text-[#a8a5a1] text-center">
                          {[1, 1, 1, 3, 1, 1, 3, 1, 1, 2].map((num, idx) => (
                            <span
                              key={idx}
                              className="inline-block w-2 h-2  rounded-full text-center mr-2"
                            >
                              {num}
                            </span>
                          ))}
                        </td>
                      </tr>
                    </div>
                  )}
                  {activeImgTab === "B" && (
                    <div className="">
                      <tr>
                        <td className=" text-sm text-[#f5f3f0]">
                          Statistic (last 100 Periods)
                        </td>
                      </tr>
                      {/* Row 2: Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Missing
                        </td>
                        <td className="text-[#a8a5a1] justify-between text-sm">
                          {[26, 2, 3, 5, 25, 6, 14, 0, 15, 1].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2 "
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 3: Avg Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Avg Missing
                        </td>
                        <td className="  text-sm text-[#a8a5a1] text-center">
                          {[11, 15, 7, 8, 11, 6, 6, 7, 8, 13].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 4: Frequency */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Frequency
                        </td>
                        <td className="text-sm  text-[#a8a5a1] text-center">
                          {[7, 6, 11, 11, 7, 12, 15, 12, 10, 9].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 5: Max Consecutive */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Max Consecutive
                        </td>
                        <td className=" text-sm  text-[#a8a5a1] text-center">
                          {[1, 1, 1, 3, 1, 1, 3, 1, 1, 2].map((num, idx) => (
                            <span
                              key={idx}
                              className="inline-block w-2 h-2  rounded-full text-center mr-2"
                            >
                              {num}
                            </span>
                          ))}
                        </td>
                      </tr>
                    </div>
                  )}
                  {activeImgTab === "C" && (
                    <div className="">
                      <tr>
                        <td className=" text-sm text-[#f5f3f0]">
                          Statistic (last 100 Periods)
                        </td>
                      </tr>
                      {/* Row 2: Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Missing
                        </td>
                        <td className="text-[#a8a5a1] justify-between text-sm">
                          {[26, 2, 3, 5, 25, 6, 14, 0, 15, 1].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2 "
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 3: Avg Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Avg Missing
                        </td>
                        <td className="  text-sm text-[#a8a5a1] text-center">
                          {[11, 15, 7, 8, 11, 6, 6, 7, 8, 13].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 4: Frequency */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Frequency
                        </td>
                        <td className="text-sm  text-[#a8a5a1] text-center">
                          {[7, 6, 11, 11, 7, 12, 15, 12, 10, 9].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 5: Max Consecutive */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Max Consecutive
                        </td>
                        <td className=" text-sm  text-[#a8a5a1] text-center">
                          {[1, 1, 1, 3, 1, 1, 3, 1, 1, 2].map((num, idx) => (
                            <span
                              key={idx}
                              className="inline-block w-2 h-2  rounded-full text-center mr-2"
                            >
                              {num}
                            </span>
                          ))}
                        </td>
                      </tr>
                    </div>
                  )}
                  {activeImgTab === "D" && (
                    <div className="">
                      <tr>
                        <td className=" text-sm text-[#f5f3f0]">
                          Statistic (last 100 Periods)
                        </td>
                      </tr>
                      {/* Row 2: Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Missing
                        </td>
                        <td className="text-[#a8a5a1] justify-between text-sm">
                          {[26, 2, 3, 5, 25, 6, 14, 0, 15, 1].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2 "
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 3: Avg Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Avg Missing
                        </td>
                        <td className="  text-sm text-[#a8a5a1] text-center">
                          {[11, 15, 7, 8, 11, 6, 6, 7, 8, 13].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 4: Frequency */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Frequency
                        </td>
                        <td className="text-sm  text-[#a8a5a1] text-center">
                          {[7, 6, 11, 11, 7, 12, 15, 12, 10, 9].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 5: Max Consecutive */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Max Consecutive
                        </td>
                        <td className=" text-sm  text-[#a8a5a1] text-center">
                          {[1, 1, 1, 3, 1, 1, 3, 1, 1, 2].map((num, idx) => (
                            <span
                              key={idx}
                              className="inline-block w-2 h-2  rounded-full text-center mr-2"
                            >
                              {num}
                            </span>
                          ))}
                        </td>
                      </tr>
                    </div>
                  )}
                  {activeImgTab === "E" && (
                    <div className="">
                      <tr>
                        <td className=" text-sm text-[#f5f3f0]">
                          Statistic (last 100 Periods)
                        </td>
                      </tr>
                      {/* Row 2: Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Missing
                        </td>
                        <td className="text-[#a8a5a1] justify-between text-sm">
                          {[26, 2, 3, 5, 25, 6, 14, 0, 15, 1].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2 "
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 3: Avg Missing */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Avg Missing
                        </td>
                        <td className="  text-sm text-[#a8a5a1] text-center">
                          {[11, 15, 7, 8, 11, 6, 6, 7, 8, 13].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 4: Frequency */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Frequency
                        </td>
                        <td className="text-sm  text-[#a8a5a1] text-center">
                          {[7, 6, 11, 11, 7, 12, 15, 12, 10, 9].map(
                            (num, idx) => (
                              <span
                                key={idx}
                                className="inline-block w-2 h-2  rounded-full text-center mr-2"
                              >
                                {num}
                              </span>
                            )
                          )}
                        </td>
                      </tr>

                      {/* Row 5: Max Consecutive */}
                      <tr>
                        <td className=" text-sm text-[#f5f3f0] text-left">
                          Max Consecutive
                        </td>
                        <td className=" text-sm  text-[#a8a5a1] text-center">
                          {[1, 1, 1, 3, 1, 1, 3, 1, 1, 2].map((num, idx) => (
                            <span
                              key={idx}
                              className="inline-block w-2 h-2  rounded-full text-center mr-2"
                            >
                              {num}
                            </span>
                          ))}
                        </td>
                      </tr>
                    </div>
                  )}
                </div>
              </div>
              <div></div>

              <div>
                <table className="table-auto mt-2 w-full text-left ">
                  <thead>
                    <tr className="bg-[#3a3947] text-white">
                      <th className="px-2 py-2 text-center"> Period</th>
                      <th className="px-2 py-2 text-center ">Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Data Rows */}
                    {[...Array(10)].map((_, index) => {
                      const periodStart = 202504100051319;
                      const periodNumber = periodStart - index;
                      const randomNumberIndex = Math.floor(Math.random() * 10); // Randomly choose an index to highlight

                      return (
                        <>
                          <tr key={index} className=" bg-[#3f3f3e]  relative">
                            <td className="px-2 text-[#f5f3f0] text-sm py-4">
                              {periodNumber}
                            </td>
                            <td className="px-2 py-2 text-sm text-right">
                              <div className="relative">
                                {[...Array(10)].map((_, numIndex) => (
                                  <span
                                    key={numIndex}
                                    className={`inline-block w-5 h-6 border text-[#666462] text-center border-[#666462] rounded-full ${numIndex === randomNumberIndex ? "bg-custom-blue text-white" : ""}`}
                                  >
                                    {numIndex}
                                  </span>
                                ))}

                                {[...Array(1)].map((_, index) => (
                                  <span
                                    key={index}
                                    className="inline-block w-3 h-3 border-gray-400 text-center"
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
            </div>
          )}

          {activeTab === "myHistory" && (
            <div className="p-4 mb-4 text-right">
              {historyData.length > 0 ? (
                // If there is history data, display it
                historyData.map((history, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start border-b pb-4 mb-4"
                  >
                    {/* Left Section */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-800 rounded-md mb-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700">{history.id}</p>
                        <p className="text-gray-500 text-sm">
                          Date: {history.date || "N/A"}
                        </p>
                        <p className="text-gray-500 text-sm">
                          Time: {history.time || "N/A"}
                        </p>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div>
                      <p className="text-custom-green mt-2 border text-right rounded text-sm px-2 border-custom-green">
                        {history.detail || "Detail"}
                      </p>
                      <p className="text-custom-green mt-2 border rounded text-sm px-2 border-custom-green">
                        {history.status || "Succeed"}
                      </p>
                      <p className="text-black font-medium ">
                        {history.amount || "$0"}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                // If no data, display "No Data" with an icon
                <div className="text-center bg-[#4d4d4c] ">
                  <div className="flex flex-col bg-[#4d4d4c] items-center justify-center">
                    <img
                      src={empty}
                      alt="No Data"
                      className="w-40 h-60 object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="text-center mb-0 w-full max-w-md  mt-2">
            <div className="bg-[#4d4d4c] rounded-xl  shadow-lg p-4 flex items-center justify-center">
              {/* Left Arrow */}
              <button
                className="p-3 text-[#8f5206] bg-[#d9ac4f] rounded-lg disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <BackButton />
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
    </div>
  );
}

export default Lottery5d;
