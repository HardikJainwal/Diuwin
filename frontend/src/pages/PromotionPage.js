import React, { useState } from "react";
import Promotionheader from "./../components/Promotionheader";
import { FaGreaterThan } from "react-icons/fa6";
import CopyLink from "./../Assets/copy link.png";
import Commission from "./../Assets/commission.png";
import Money from "./../Assets/money.png";
import RebateRatio from "./../Assets/rebateRatio.png";
import Rule from "./../Assets/rule.png";
import Right from "./../Assets/right.png";
import Server from "./../Assets/server.png";
import service_feedback from "./../Assets/service_feedback.png";
import Team_port from "./../Assets/team_port.png";
import Background from "./../Assets/bg.png";
import promotionbg from "./../Assets/promotionbg.png";
import directsubordinate from "./../Assets/directsubordinate.png";
import teamsubordinate from "./../Assets/teamsubordinates.png";
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
  FaRegFileAlt,
  FaRegCopy,
} from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import Footer from "../components/Footer";

function PromotionPage() {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setverificationCode] = useState("");
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const invitationCode = "185853395581";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(invitationCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
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

  return (
    <div className="relative w-full bg-[#242424]">
      <Promotionheader className="fixed top-0 left-0 w-full z-50" />
      
      {/* Top section with background image */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "18rem" // Adjust this value to control where the background ends
        }}
      >
        {/* Promotion background image overlay */}
        <div className="absolute z-0 top-0 w-full h-full">
          <img
            src={promotionbg}
            alt="Foreground"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Content section that partially overlaps with the background */}
      <div className="relative z-20 w-full px-2 max-w-sm mx-auto mt-[-17rem]"> {/* Adjust this negative margin to position the content box */}
        <h1 className="text-[#8f5206] text-2xl text-center font-bold mb-1">0</h1>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="w-full max-w-xs text-center text-sm bg-[#333333] bg-opacity-80 text-[#d9ac4f] py-2 rounded-full hover:bg-opacity-90 focus:ring-2 focus:ring-gray-300"
          >
            Yesterday's total commission
          </button>
        </div>
        <p className="text-[#8f5206] text-xs text-center mt-1 mb-2">
          Upgrade the level to increase commission income
        </p>
        
        {/* Table section with semi-transparent background */}
        <div className="bg-[#242424] bg-opacity-90 rounded-t-lg overflow-hidden">
          <table className="table-auto w-full bg-[#2c2c36] bg-opacity-90">
            <thead>
              <tr>
                <th className="bg-[#3a3947] text-sm font-normal text-white  border-r border-[#242424]">
                  <div className="flex items-center justify-center">
                    <img
                      src={directsubordinate}
                      alt="Direct Icon"
                      className="mr-2 w-5 h-5"
                    />
                    <span>Direct subordinates</span>
                  </div>
                </th>
                <th className="bg-[#3a3947] text-sm font-normal text-white p-2">
                  <div className="flex items-center justify-center">
                    <img
                      src={teamsubordinate}
                      alt="Team Icon"
                      className="mr-2 w-5 h-5"
                    />
                    <span>Team subordinates</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="text-white  border-r border-[#242424]">0</td>
                <td className="text-white ">0</td>
              </tr>
              <tr>
                <td className="text-white  text-xs border-r border-[#242424]">
                  number of register
                </td>
                <td className="text-white text-xs">
                  number of register
                </td>
              </tr>
              <tr>
                <td className="text-green-500 border-r border-[#242424]">0</td>
                <td className="text-green-500 ">0</td>
              </tr>
              <tr>
                <td className="text-white  text-xs border-r border-[#242424]">
                  Deposit number
                </td>
                <td className="text-white text-xs">
                  Deposit number
                </td>
              </tr>
              <tr>
                <td className="text-orange-500  border-r border-[#242424]">0</td>
                <td className="text-orange-500 ">0</td>
              </tr>
              <tr>
                <td className="text-white  text-xs border-r border-[#242424]">
                  Deposit amount
                </td>
                <td className="text-white text-xs">
                  Deposit amount
                </td>
              </tr>
              <tr>
                <td className="text-white  border-r border-[#242424]">0</td>
                <td className="text-white ">0</td>
              </tr>
              <tr>
                <td className="text-white  text-xs border-r border-[#242424]">
                  Number of people making first deposit
                </td>
                <td className="text-white  text-xs">
                  Number of people making first deposit
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Invitation Link Button - Separate from table */}
        <div className="w-full flex justify-center mt-6 mb-4">
  <button
    type="button"
    className="w-full max-w-xs bg-gradient-to-r from-[#fae59f] to-[#c4933f] p-3 text-center text-[#8f5206] font-bold text-sm rounded-lg hover:opacity-90 focus:ring-2 focus:ring-gray-300"
  >
    INVITATION LINK
  </button>
</div>
        
        {/* Additional menu items (overlay style) */}
        <div className="bg-[#2c2c36] bg-opacity-90 p-3 rounded-lg mb-3">
          <div className="flex justify-between items-center">
            <div
              className="flex text-white items-center cursor-pointer"
              onClick={handleCopy}
            >
              <img src={CopyLink} alt="Copy Icon" className="mr-2 w-5 h-5" />
              <p className="text-sm">Copy invitation code</p>
            </div>
            <div className="flex items-center text-gray-400 space-x-2">
              <span className="text-sm truncate max-w-20">{invitationCode}</span>
              <button
                className="flex items-center text-gray-400"
                onClick={handleCopy}
              >
                <MdOutlineContentCopy className="w-5 h-5" />
              </button>
            </div>
          </div>
          {copied && <span className="text-green-500 text-xs">Copied!</span>}
        </div>

        <Link to="/subordinate" className="w-full">
          <div className="bg-[#2c2c36] bg-opacity-90 p-3 rounded-lg mb-3">
            <div className="flex justify-between items-center">
              <div className="flex text-white items-center">
                <img
                  src={Team_port}
                  alt="Team Icon"
                  className="mr-2 w-5 h-5"
                />
                <p className="text-sm">Subordinate data</p>
              </div>
              <span className="text-gray-400">
                <img src={Right} alt="Right Icon" className="w-5 h-5" />
              </span>
            </div>
          </div>
        </Link>

        <Link to="/commissiondetailpage" className="w-full">
          <div className="bg-[#2c2c36] bg-opacity-90 p-3 rounded-lg mb-3">
            <div className="flex justify-between items-center">
              <div className="flex text-white items-center">
                <img
                  src={Commission}
                  alt="Commission Icon"
                  className="mr-2 w-5 h-5"
                />
                <p className="text-sm">Commission detail</p>
              </div>
              <span className="text-gray-400">
                <img src={Right} alt="Right Icon" className="w-5 h-5" />
              </span>
            </div>
          </div>
        </Link>

        <Link to="/promotionrule" className="w-full">
          <div className="bg-[#2c2c36] bg-opacity-90 p-3 rounded-lg mb-3">
            <div className="flex justify-between items-center">
              <div className="flex text-white items-center">
                <img src={Rule} alt="Rule Icon" className="mr-2 w-5 h-5" />
                <p className="text-sm">Invitation rules</p>
              </div>
              <span className="text-gray-400">
                <img src={Right} alt="Right Icon" className="w-5 h-5" />
              </span>
            </div>
          </div>
        </Link>

        <Link to="/agentcustomer" className="w-full">
          <div className="bg-[#2c2c36] bg-opacity-90 p-3 rounded-lg mb-3">
            <div className="flex justify-between items-center">
              <div className="flex text-white items-center">
                <img src={Server} alt="Server Icon" className="mr-2 w-5 h-5" />
                <p className="text-sm">Agent line customer service</p>
              </div>
              <span className="text-gray-400">
                <img src={Right} alt="Right Icon" className="w-5 h-5" />
              </span>
            </div>
          </div>
        </Link>

        <Link to="/rebateratio" className="w-full">
          <div className="bg-[#2c2c36] bg-opacity-90 p-3 rounded-lg mb-3">
            <div className="flex justify-between items-center">
              <div className="flex text-white items-center">
                <img
                  src={RebateRatio}
                  alt="Rebate Icon"
                  className="mr-2 w-5 h-5"
                />
                <p className="text-sm">Rebate ratio</p>
              </div>
              <span className="text-gray-400">
                <img src={Right} alt="Right Icon" className="w-5 h-5" />
              </span>
            </div>
          </div>
        </Link>

        <div className="bg-[#2c2c36] bg-opacity-90 p-3 rounded-lg mb-16">
          <div className="flex mb-2">
            <img src={Money} alt="Money Icon" className="mr-2 w-5 h-5" />
            <h2 className="font-bold text-white text-sm">Promotion data</h2>
          </div>
          <div className="grid grid-cols-2 mb-4">
            <div className="flex flex-col items-center">
              <div className="text-white">
                <span className="font-semibold text-sm">0.62</span>
              </div>
              <div className="text-white text-center">
                <span className="text-xs">This week</span>
              </div>
            </div>

            <div className="flex flex-col border-l border-gray-700 items-center">
              <div className="text-white">
                <span className="font-semibold text-sm">0</span>
              </div>
              <div className="text-white text-center">
                <span className="text-xs">Total Commission</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="text-white">
                <span className="font-semibold text-sm">0</span>
              </div>
              <div className="text-white text-center">
                <span className="text-xs">direct subordinate</span>
              </div>
            </div>

            <div className="flex flex-col border-l border-gray-700 items-center">
              <div className="text-white">
                <span className="font-semibold text-sm">0</span>
              </div>
              <div className="text-white text-center">
                <span className="text-xs">Total number of subordinates in the team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PromotionPage;