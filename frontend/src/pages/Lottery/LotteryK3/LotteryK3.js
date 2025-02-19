import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { TbClockFilled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Timecolor from "../../../Assets/timecolor.png";
import Timeblack from "../../../Assets/timeblack.png";
import speaker from "./../../../Assets/speaker.png";
import back from "./../../../Assets/back.png";
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
import LotteryWingoheader from "../../../components/LotteryWingoheader";
import invitation from "../../../Assets/invitation.png";
import refresh from "../../../Assets/refresh.png";
import num1 from "../../../Assets/num1.png";
import num2 from "../../../Assets/num2.png";
import num3 from "../../../Assets/num3.png";
import num4 from "../../../Assets/num4.png";
import num5 from "../../../Assets/num5.png";
import num6 from "../../../Assets/num6.png";

const buttonData = [
  {
    id: 0,
    title: (
      <>
        K3 Lotre <br /> 1min
      </>
    ),
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 1,
    title: "K3 Lotre 3Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 2,
    title: "K3 Lotre 5Min",
    icon: <img src={Timeblack} alt="clock icon" className="w-8 h-8" />,
    activeIcon: (
      <img src={Timecolor} alt="active clock icon" className="w-8 h-8" />
    ),
  },
  {
    id: 3,
    title: "K3 Lotre 10Min",
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

function LotteryK3() {
  const [activeTab, setActiveTab] = useState("gameHistory");
  const [activeImgTab, setActiveImgTab] = useState("total");
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

  const diceImages = [num1, num2, num3, num4, num5, num6];

  const [dice1, setDice1] = useState(diceImages[0]);
  const [dice2, setDice2] = useState(diceImages[0]);
  const [dice3, setDice3] = useState(diceImages[0]);

  const rollDice = () => {
    let interval1, interval2, interval3;

    // Randomly stop each dice
    const stopDice = () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);

      setDice1(diceImages[Math.floor(Math.random() * diceImages.length)]);
      setDice2(diceImages[Math.floor(Math.random() * diceImages.length)]);
      setDice3(diceImages[Math.floor(Math.random() * diceImages.length)]);
    };

    // Start animating dice
    interval1 = setInterval(() => {
      setDice1(diceImages[Math.floor(Math.random() * diceImages.length)]);
    }, 100);

    interval2 = setInterval(() => {
      setDice2(diceImages[Math.floor(Math.random() * diceImages.length)]);
    }, 100);

    interval3 = setInterval(() => {
      setDice3(diceImages[Math.floor(Math.random() * diceImages.length)]);
    }, 100);

    // Stop dice after 2 seconds
    setTimeout(stopDice, 2000);
  };

  useEffect(() => {
    // Start rolling dice initially
    rollDice();

    // Set interval to repeat the process every 10 seconds
    const rollingInterval = setInterval(() => {
      rollDice();
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(rollingInterval);
  }, []);

  return (
    <div className="bg-[#333332] min-h-screen flex flex-col items-center justify-center ">
      <LotteryWingoheader />
      <div className="text-center mb-0 w-full max-w-md px-4 mt-20">
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

      <div className="bg-[#333332]  px-4 p-2 shadow-md w-full max-w-md h-full mt-2 flex flex-col justify-center">
        <div className="bg-[#4d4d4c] p-2 rounded-full shadow-md  mt-0">
          <div className="flex justify-between items-center w-full">
            <img
              src={speaker}
              alt="icon"
              className="w-6 h-6 ml-2" // Adjust the spacing with `ml-2` or as needed
            />
            <p className="text-xs text-white ml-4">
              Thanks to all new and old members,
              <br /> because of your accompany, we have
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

        <div className="bg-[#4d4d4c]   rounded-lg mt-4 shadow-md ">
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
        <div className="bg-[#4d4d4c]  rounded-lg mt-4 shadow-md mb-4 p-4">
          {/* Left Section */}
          <div className="flex justify-between mb-4">
            <div>
              {/* How to Play */}
              <div className="flex ">
                <p className="text-[#a8a5a1] mr-4 ">Period</p>
                <div className="border border-[#8f5206] rounded-full px-2 py-1 flex items-center justify-center gap-2 text-[#8f5206] text-center">
                                <img src={HowToPlay} alt="How to Play" className="w-5 h-5" />
                                <p className="text-[#8f5206] text-sm font-medium">
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
          <div className="bg-[#00b971] p-3 rounded-lg w-full space-x-1">
            <div className="bg-black p-1 rounded-lg w-full space-x-1">
              <div className="grid grid-cols-3 gap-2">
                {/* Dice Columns */}
                <div className="flex bg-gray-600 p-2 rounded justify-center">
                  <img src={dice1} alt="Dice 1" className="w-22 h-20" />
                </div>
                <div className="flex bg-gray-600 p-2 rounded justify-center">
                  <img src={dice2} alt="Dice 2" className="w-22 h-20" />
                </div>
                <div className="flex bg-gray-600 p-2 rounded justify-center">
                  <img src={dice3} alt="Dice 3" className="w-22 h-20" />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between text-center mt-2 mb-2">
            <button
              className={`px-6 py-3 text-xs rounded-r-lg rounded-br-none rounded-l-lg rounded-bl-none ${
                activeImgTab === "total"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#4d4d4c] text-[#a8a5a1]"
              }`}
              onClick={() => setActiveImgTab("total")}
            >
              Total
            </button>
            <button
              className={`px-6 py-2 text-xs rounded-r-lg rounded-br-none rounded-l-lg rounded-bl-none  ${
                activeImgTab === "2same"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#4d4d4c] text-[#a8a5a1]"
              }`}
              onClick={() => setActiveImgTab("2same")}
            >
              2 Same
            </button>
            <button
              className={`px-6 py-2 text-xs rounded-r-lg rounded-br-none rounded-l-lg rounded-bl-none  ${
                activeImgTab === "3same"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#4d4d4c] text-[#a8a5a1]"
              }`}
              onClick={() => setActiveImgTab("3same")}
            >
              3 Same
            </button>
            <button
              className={`px-6 py-2 text-xs rounded-r-lg rounded-br-none rounded-l-lg rounded-bl-none  ${
                activeImgTab === "different"
                  ? "bg-[#d9ac4f] text-[#8f5206]"
                  : "bg-[#4d4d4c] text-[#a8a5a1]"
              }`}
              onClick={() => setActiveImgTab("different")}
            >
              Different
            </button>
          </div>
          {/* Conditional Rendering for Total */}
          {activeImgTab === "total" && (
            <div className="grid grid-cols-4 gap-4">
              {imageUrls.map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={image.url}
                    alt={`Image ${index + 1}`}
                    className="w-12 h-12 "
                  />
                  <p className="text-xs  text-[#a8a5a1]">{image.description}</p>
                </div>
              ))}
              {/* Buttons */}
              <div className="col-span-4 flex justify-between text-xs mb-2">
                {["Big 1.98", "Small 1.98", "Odd 1.98", "Even 1.98"].map(
                  (label, idx) => {
                    const colors = [
                      "bg-red-500",
                      "bg-[#00b971]",
                      "bg-blue-500",
                      "bg-yellow-500",
                    ]; // Array of color classes

                    return (
                      <button
                        key={idx}
                        className={`${colors[idx]} text-white px-7 py-2 rounded-md hover:opacity-90 text-center`}
                      >
                        {label.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          )}

          {activeImgTab === "2same" && (
            <div className="space-y-2">
              {/* First Line */}
              <div className="text-sm font-medium text-gray-800">
                2 matching numbers: odds (13.83)
              </div>

              {/* Second Line */}
              <div className="flex justify-center text-sm space-x-2">
                {[11, 22, 33, 44, 55, 66].map((value, index) => (
                  <div
                    key={index}
                    className="w-16 h-12 flex text-white bg-purple-300 justify-center items-center border rounded-lg bg-gray-100"
                  >
                    {value}
                  </div>
                ))}
              </div>

              {/* Third Line */}
              <div className="text-sm font-medium  text-gray-800">
                A pair of unique numbers: odds (69.12)
              </div>

              {/* Fourth Line */}
              <div className="flex text-sm justify-center text-white space-x-2">
                {[11, 22, 33, 44, 55, 66].map((value, index) => (
                  <div
                    key={index}
                    className="w-16 h-12 flex bg-red-300 justify-center items-center border rounded-lg bg-gray-100"
                  >
                    {value}
                  </div>
                ))}
              </div>

              {/* Fifth Line */}
              <div className="flex text-sm justify-center text-white space-x-2">
                {[1, 2, 3, 4, 5, 6].map((value, index) => (
                  <div
                    key={index}
                    className="w-16 h-12 flex bg-green-300 justify-center items-center border rounded-lg bg-gray-100"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeImgTab === "3same" && (
            <div className="space-y-1 ">
              {/* First Line */}
              <div className="text-sm mb-2 font-medium text-gray-800">
                3 of the same number: odds (207.36)
              </div>

              {/* Second Line */}
              <div className="flex justify-center text-sm space-x-4">
                {[111, 222, 333, 444, 555, 666].map((value, index) => (
                  <div
                    key={index}
                    className="w-16 h-12 flex  bg-purple-300 justify-center items-center border rounded-lg bg-gray-100"
                  >
                    {value}
                  </div>
                ))}
              </div>

              {/* Third Line */}
              <div className="text-sm mb-2 font-medium text-gray-800">
                Any 3 of the same number: odds(34.56)
              </div>

              {/* Fourth Line */}
              <div className="flex text-sm mb-2 justify-center ">
                <button className="px-8 w-full py-3 bg-red-300 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
                  Any 3 of the same number: odds
                </button>
              </div>
            </div>
          )}

          {activeImgTab === "different" && (
            <div className="space-y-2">
              {/* First Line */}
              <div className="text-lg font-medium text-gray-800">
                3 of the same number: odds (207.36)
              </div>

              {/* Second Line */}
              <div className="flex justify-center  space-x-2">
                {[111, 222, 333, 444, 555, 666].map((value, index) => (
                  <div
                    key={index}
                    className="w-16 h-12 flex  bg-purple-300 justify-center items-center border rounded-lg bg-gray-100"
                  >
                    {value}
                  </div>
                ))}
              </div>

              {/* Third Line */}
              <div className="text-lg font-medium text-gray-800">
                Any 3 of the same number: odds(34.56)
              </div>

              {/* Fourth Line */}
              <div className="flex  justify-center">
                <button className="px-8 w-full  py-3 bg-red-300 text-white font-semibold rounded-lg shadow-md  focus:outline-none">
                  Any 3 of the same number: odds
                </button>
              </div>

              <div className="text-lg font-medium text-gray-800">
                2 different numbers : odds (6.91)
              </div>

              {/* Second Line */}
              <div className="flex justify-center  space-x-4">
                {[111, 222, 333, 444, 555, 666].map((value, index) => (
                  <div
                    key={index}
                    className="w-16 h-12 flex mb-2 bg-purple-300 justify-center items-center border rounded-lg bg-gray-100"
                  >
                    {value}
                  </div>
                ))}
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
        <div className="mb-2 rounded-lg shadow">
          {activeTab === "gameHistory" && (
            <div className="">
              <table className="table-auto bg-[#3f3f3e] rounded-lg w-full text-left ">
                <thead>
                  <tr className="bg-[#3a3947] text-white">
                    <th className="px-2 py-2 text-center">Period</th>
                    <th className="px-2 py-2 text-center ">Sum</th>
                    <th className="px-2 py-2 text-center">Results</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((_, index) => {
                    const periodStart = 202504100051174;
                    const periodNumber = periodStart - index;

                    // Generate a random number for the Sum column
                    const sumValue = Math.floor(Math.random() * 100);
                    const isBig = sumValue >= 50;

                    // Generate random dice values
                    const diceValues = [
                      Math.floor(Math.random() * 6) + 1,
                      Math.floor(Math.random() * 6) + 1,
                      Math.floor(Math.random() * 6) + 1,
                    ];
                    const diceSum = diceValues.reduce((a, b) => a + b, 0);
                    const isEven = diceSum % 2 === 0;

                    // Predefined dice image paths
                    const diceImages = [
                      "https://diuwin.bet/assets/png/n1-584b8878.png",
                      "https://diuwin.bet/assets/png/n2-447499dc.png",
                      "https://diuwin.bet/assets/png/n3-1432a6bd.png",
                      "https://diuwin.bet/assets/png/n4-9d453819.png",
                      "https://diuwin.bet/assets/png/n5-09b70e91.png",
                      "https://diuwin.bet/assets/png/n6-b68c6bb6.png",
                    ];

                    return (
                      <tr key={index} className="bg-[#3f3f3e] ">
                        <td className="px-2 text-sm text-[#f5f3f0] py-2">
                          {periodNumber}
                        </td>
                        <td className="px-2 py-2 text-[#f5f3f0] text-sm">
                          {sumValue} {isBig ? "Big" : "Small"}
                        </td>
                        <td className="px-2 py-2 text-sm text-[#f5f3f0]">
                          <div className="flex items-center space-x-2">
                            <span className="ml-4">
                              {isEven ? "Even" : "Odd"}
                            </span>
                            {diceValues.map((value, idx) => (
                              <img
                                key={idx}
                                src={diceImages[value - 1]} // Fetch the correct dice image
                                alt={`Dice ${value}`}
                                className="w-6 h-6"
                              />
                            ))}
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
            <div>
              <table className="table-auto bg-[#3f3f3e] rounded-lg w-full text-left ">
                <thead>
                  <tr className="bg-[#3a3947] text-white rounded-lg">
                    <th className="px-2 py-2 text-center">Period</th>
                    <th className="px-2 py-2 text-center">Result</th>
                    <th className="px-2 py-2 text-center">Number</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Data Rows */}
                  {[...Array(10)].map((_, index) => {
                    const periodStart = 202504100051319;
                    const periodNumber = periodStart - index;

                    // Generate random dice values
                    const diceValues = [
                      Math.floor(Math.random() * 6) + 1,
                      Math.floor(Math.random() * 6) + 1,
                      Math.floor(Math.random() * 6) + 1,
                    ];
                    const diceSum = diceValues.reduce((a, b) => a + b, 0);
                    const isEven = diceSum % 2 === 0;

                    // Check if the dice values are all different or two are the same
                    const uniqueValues = new Set(diceValues);
                    const numberDescription =
                      uniqueValues.size === 1
                        ? "All same numbers"
                        : uniqueValues.size === 2
                          ? "2 same numbers"
                          : "3 different numbers";

                    return (
                      <tr key={index} className="bg-[#3f3f3e]">
                        <td className="px-2 text-[#f5f3f0] text-sm py-2 text-center">
                          {periodNumber}
                        </td>
                        <td className="px-2 py-2 text-sm text-center">
                          <div className="flex items-center justify-center space-x-2">
                            {diceValues.map((value, idx) => (
                              <div
                                key={idx}
                                className="w-8 h-8 bg-red-500 rounded border border-gray-400 flex items-center justify-center"
                              >
                                {/* Render dots based on dice value */}
                                <div className="grid grid-cols-3 grid-rows-3 gap-1">
                                  {Array.from({ length: 9 }).map(
                                    (_, dotIndex) => {
                                      const dotPositions = {
                                        1: [4],
                                        2: [0, 8],
                                        3: [0, 4, 8],
                                        4: [0, 2, 6, 8],
                                        5: [0, 2, 4, 6, 8],
                                        6: [0, 2, 3, 5, 6, 8],
                                      };

                                      return (
                                        <span
                                          key={dotIndex}
                                          className={`w-1 h-1 rounded-full ${
                                            dotPositions[value].includes(
                                              dotIndex
                                            )
                                              ? "bg-white"
                                              : ""
                                          }`}
                                        ></span>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-2 py-2 text-sm text-[#f5f3f0] text-center">
                          {numberDescription}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
                      <div className="w-12 h-12 bg-[#00b971] rounded-md mb-2 mr-3"></div>
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
                      <p className="text-[#00b971] mt-2 border text-right rounded text-sm px-2 border-[#00b971]">
                        {history.detail || "Detail"}
                      </p>
                      <p className="text-[#00b971] mt-2 border rounded text-sm px-2 border-[#00b971]">
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
        </div>
        <div className="text-center mb-0 w-full max-w-md  mt-2">
          <div className="bg-[#4d4d4c] rounded-xl  shadow-lg p-4 flex items-center justify-center">
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

export default LotteryK3;
