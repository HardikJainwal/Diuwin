import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { TbClockFilled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Timecolor from "../../../Assets/timecolor.png";
import Timeblack from "../../../Assets/timeblack.png";
import refresh from "../../../Assets/refresh.png";
import trxbg from "../../../Assets/trxbg.png";
import empty from "../../../Assets/empty.png";
import wallet from "../../../Assets/wallets.png";
import fire from "../../../Assets/fire.png";
import HowToPlay from "../../../Assets/how to play.png";
import {
  FaHome,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import {
  FaPhone,
  FaEnvelope,
  FaLock,
  FaQuestionCircle,
  FaKey,
} from "react-icons/fa";
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
        Trx Wingo <br /> 1min
      </>
    ),
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 1,
    title: "Trx Wingo 3Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 2,
    title: "Trx Wingo 5Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 3,
    title: "Trx Wingo 10Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
];

function LotteryTrxWingo() {
  const [activeTab, setActiveTab] = useState("gameHistory");
  const [activeButton, setActiveButton] = useState(buttonData[0].id);
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [historyData, setHistoryData] = useState([]);
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

  const [selectedButton, setSelectedButton] = useState(null);
  const handleClick = (value) => {
    setSelectedButton(value);
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

      <div className="bg-[#242424]  px-8 p-2 shadow-md w-full max-w-md h-full mt-4 flex flex-col justify-center">
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

        <div className="bg-[#333332]   rounded-lg mt-4 shadow-md ">
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
          className="rounded-lg mt-4 shadow-md mb-4 p-4"
          style={{
            backgroundImage: `url(${trxbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Section */}
          <div className="flex justify-between mb-4">
            <div>
              {/* How to Play */}
              <div className="flex ">
                <p className="text-[#8f5206] mr-4 ">Period</p>
                <div className="border bg-[#333332]  border-[#d9ac4f] rounded-full px-2 py-1 flex items-center justify-center gap-2 text-[#8f5206] text-center">
                                <img src={HowToPlay} alt="How to Play" className="w-5 h-5" />
                                <p className="text-[#d9ac4f] text-sm font-medium">
                                  How to Play
                                </p>
                              </div>
              </div>
              <p className="text-lg mt-2 font-bold text-[#8f5206]">
                2928383000211334
              </p>
            </div>

            {/* Right Section */}
            <div className="text-right">
              <div className="border border-gray-300 bg-[#333332]   rounded-full py-1 px-2 text-center ">
                <p className="text-[#d9ac4f]  text-sm font-medium">
                  Public Chain Query
                </p>
              </div>
              {/* <p className="text-white mb-2 rounded-full border-white text-sm">Public Chain Query</p> */}
              <div className="flex space-x-1  justify-end items-center">
                <span className=" text-red-500 text-xl rounded">1</span>
                <span className=" text-red-500 text-xl rounded">1</span>
                <span className="e text-red-500 text-xl rounded">:</span>
                <span className=" text-red-500 text-xl rounded">2</span>
                <span className=" text-red-500 text-xl rounded">0</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between space-x-2">
            <span className="bg-gray-200 w-16 h-auto rounded-full flex items-center justify-center">
              <img
                src="https://diuwin.bet/assets/png/n0-30bd92d1.png"
                alt="Icon 1"
              />
            </span>
            <span className="bg-gray-200 w-16 h-auto rounded-full flex items-center justify-center">
              <img
                src="https://diuwin.bet/assets/png/n1-dfccbff5.png"
                alt="Icon 2"
              />
            </span>
            <span className="bg-gray-200 w-16 h-auto rounded-full flex items-center justify-center">
              <img
                src="https://diuwin.bet/assets/png/n2-c2913607.png"
                alt="Icon 3"
              />
            </span>
            <span className="bg-gray-200 w-16 h-auto rounded-full flex items-center justify-center">
              <img
                src="https://diuwin.bet/assets/png/n3-f92c313f.png"
                alt="Icon 4"
              />
            </span>
            <span className="bg-gray-200 w-16 h-auto rounded-full flex items-center justify-center">
              <img
                src="https://diuwin.bet/assets/png/n4-cb84933b.png"
                alt="Icon 5"
              />
            </span>
          </div>
        </div>
        <div className="bg-[#333332] rounded-lg  shadow-md mb-2 p-4 space-y-2">
          {/* First Line: 3 Buttons */}
          <div className="flex justify-between mb-4 space-x-2">
            <button className="bg-custom-green px-10 text-white py-2 rounded-tr-lg rounded-bl-lg">
              Green
            </button>
            <button className="bg-violet-500 px-10 text-white py-2 rounded">
              Violet
            </button>
            <button className="bg-red-500 px-10 text-white py-2 rounded-tl-lg rounded-br-lg">
              Red
            </button>
          </div>

          <div className="bg-custom-dark-gray p-2 rounded-lg">
            {/* Second Line: 5 Icons */}
            <div className="flex justify-between space-x-1">
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n0-30bd92d1.png"
                  alt="Icon 1"
                />
              </span>
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n1-dfccbff5.png"
                  alt="Icon 2"
                />
              </span>
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n2-c2913607.png"
                  alt="Icon 3"
                />
              </span>
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n3-f92c313f.png"
                  alt="Icon 4"
                />
              </span>
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n4-cb84933b.png"
                  alt="Icon 5"
                />
              </span>
            </div>

            {/* Third Line: 5 Icons */}
            <div className="flex justify-between space-x-1">
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n5-49d0e9c5.png"
                  alt="Icon 5"
                />
              </span>
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n6-a56e0b9a.png"
                  alt="Icon 1"
                />
              </span>
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n7-5961a17f.png"
                  alt="Icon 2"
                />
              </span>
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n8-d4d951a4.png"
                  alt="Icon 3"
                />
              </span>
              <span className="bg-gray-200 w-14 h-auto rounded-full flex items-center justify-center">
                <img
                  src="https://diuwin.bet/assets/png/n9-a20f6f42.png"
                  alt="Icon 4"
                />
              </span>
            </div>
          </div>
          {/* Fourth Line: Random with Border and Buttons */}
          <div className="flex justify-center px-8 items-center space-x-2">
            <span className="border border-red-700 text-red-500 text-sm px-2 py-2 rounded-lg">
              Random
            </span>
            {["X1", "X5", "X10", "X50", "X100"].map((value) => (
              <button
                key={value}
                className={`${
                  selectedButton === value
                    ? "bg-custom-green text-white"
                    : "bg-gray-300 text-black"
                } text-sm px-4 py-2 rounded-lg`}
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Fifth Line: Rounded Button Split in Two Parts */}
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white rounded-full flex overflow-hidden">
              <span className="px-20 py-2 bg-[#feaa57]">Big</span>
              <span className="px-20 py-2">Small</span>
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between space-x-2 mb-2">
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
            className={`px-6 py-2 t   ext-sm rounded-lg ${
              activeTab === "chart"
                ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]"
                : "bg-[#333332] text-[#a8a5a1]"
            }`}
            onClick={() => setActiveTab("chart")}
          >
            Chart
          </button>
          <button
            className={`px-6 py-2 text-sm rounded-lg ${
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
        <div className="bg-white mb-2 rounded-lg shadow">
          {activeTab === "gameHistory" && (
            <div className="bg-[#3a3947]">
              <table className=" bg-[#333332] table-auto rounded w-full ">
                <thead>
                  <tr className="bg-[#3a3947] text-white p-4">
                    <th className=" w-12 py-3 text-sm">Period</th>
                    <th className=" py-2 text-sm">Block height</th>
                    <th className=" py-2 text-sm">Block time</th>
                    <th className=" py-2 text-sm">Hash value</th>
                    <th className=" py-2 text-sm ">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((_, index) => {
                    const periodStart = 202504100051174;
                    const periodNumber = periodStart - index;

                    // Masking the period number by inserting "****" in the middle
                    const periodString = periodNumber.toString();
                    const maskedPeriod = `${periodString.substring(0, 3)}**${periodString.substring(11)}`;

                    const numberValue = Math.floor(Math.random() * 100);
                    const colors = ["green", "red", "purple"];
                    const color = colors[index % colors.length];
                    const isBig = numberValue >= 50;

                    // Generate 8-digit random number for Block Height
                    const blockHeight =
                      Math.floor(Math.random() * 90000000) + 10000000;

                    // Generate random time for Block Time in format hh:mm:ss
                    const randomHours = String(
                      Math.floor(Math.random() * 24)
                    ).padStart(2, "0");
                    const randomMinutes = String(
                      Math.floor(Math.random() * 60)
                    ).padStart(2, "0");
                    const randomSeconds = String(
                      Math.floor(Math.random() * 60)
                    ).padStart(2, "0");
                    const blockTime = `${randomHours}:${randomMinutes}:${randomSeconds}`;

                    // Generate a 6-character alphanumeric hash, with first two characters trimmed
                    const randomHash = Math.random()
                      .toString(36)
                      .substring(2, 10); // generates a random alphanumeric string
                    // const trimmedHash = randomHash.substring(2); // trims the first two characters
                    const trimmedHash = `**${randomHash.substring(4)}`;
                    // Generate random Result value: a random number + an alphabet from 's' or 'b'
                    const randomNumber = Math.floor(Math.random() * 100);
                    const resultLetter = Math.random() > 0.5 ? "s" : "b"; // Randomly pick between 's' or 'b'
                    const result = `${randomNumber}${resultLetter}`;

                    return (
                      <tr key={index} className="text-[#f5f3f0] ">
                        <td className="text-sm px-2 text-center py-3">
                          {maskedPeriod}
                        </td>
                        <td className="text-sm text-center py-2">
                          {blockHeight}
                        </td>
                        <td className="text-sm text-center py-2">
                          {blockTime}
                        </td>
                        <td className="text-sm text-center py-2">
                          {trimmedHash}
                        </td>
                        {/* Hash Value Column */}
                        <td className="">
                          <span className="inline-block text-white mr-2 text-xs px-1 py-1 border bg-custom-pink rounded-full">
                            {randomNumber}
                          </span>
                          {resultLetter}
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
              <table className="bg-[#333332] table-auto w-full text-left ">
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
            <div className="bg-[#333332]">
              <div className="p-4 bg-[#333332] text-right">
                {historyData.length > 0 ? (
                  // If there is history data, display it
                  historyData.map((history, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start  pb-4 mb-4"
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
                  <div className="text-center bg-[#333332] ">
                    <div className="flex flex-col bg-[#333332] items-center justify-center">
                      <img
                        src={empty}
                        alt="No Data"
                        className="w-40 h-60 object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="text-center mb-16 w-full max-w-md  mt-2">
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
      <Footer />
    </div>
  );
}

export default LotteryTrxWingo;
