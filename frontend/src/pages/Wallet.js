import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DepositIcon from "./../Assets/icondeposit.png";
import DepositHistory from "./../Assets/icondeposithistory.png";
import Withdraw from "./../Assets/iconwithdraw.png";
import WithdrawHistory from "./../Assets/iconwithdrawhistory.png";
import IconWallet from "./../Assets/iconwallet1.png";

import {
  FaPhone,
  FaEnvelope,
  FaLock,
  FaQuestionCircle,
  FaKey,
} from "react-icons/fa";
import Footer from "../components/Footer";
import WalletHeader from "../components/WalletHeader";

function Wallet() {
  const [countdown, setCountdown] = useState(null);
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleTransferClick = () => {
    setCountdown(5);
  };

  useEffect(() => {
    if (countdown === null) return;
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCountdown(null);
    }
  }, [countdown]);

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
    console.log("Verification code:", verificationCode);
    console.log("Privacy agreement accepted:", privacyAgreement);
  };

  return (
    <div className="bg-[#333332] min-h-screen flex flex-col items-center justify-center pb-20">
      <WalletHeader />
      <div className="text-center mb-0 w-full max-w-md px-8  flex flex-col items-center">
        <h1 className="text-xl font-bold  mb-6">Wallet</h1>
        <img src={IconWallet} alt="File Icon" className=" w-12 h-12" />

        <h1 className="text-2xl font-semibold text-white"> ₹ 115.49</h1>
        <p className="text-white text-sm sm:text-base">Total Balance</p>
      </div>

      <div className="bg-[#242424] p-4 shadow-md w-full max-w-md flex-1 mt-4 flex flex-col justify-center">
        <div className="bg-[#333332] p-2 rounded-lg shadow-md">
          <div className="flex justify-center space-x-20 p-4">
            {/* Main Wallet - Yellow */}
            <div className="text-center">
              <div className="relative w-24 h-24">
                <svg
                  className="w-full h-full absolute inset-0"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#c4933f"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#f5f3f0]">
                  100%
                </div>
              </div>
              <p className="mt-2 font-semibold text-[#f5f3f0]">₹115.49</p>
              <p className="text-xs text-[#f5f3f0]">Main wallet</p>
            </div>

            {/* Main Wallet - Gray */}
            <div className="text-center">
              <div className="relative w-24 h-24">
                <svg
                  className="w-full h-full absolute inset-0"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#666462"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#f5f3f0]">
                  0%
                </div>
              </div>
              <p className="mt-2 font-semibold text-[#f5f3f0]">₹0.00</p>
              <p className="text-xs text-[#f5f3f0]">3rd party wallet</p>
            </div>
          </div>

          {/* Transfer Button */}
          <button
            onClick={handleTransferClick}
            disabled={countdown !== null}
            className={`w-full py-2 font-sm font-semibold bg-gradient-to-r from-[#fae59f] to-[#c4933f] p-4 rounded-full text-white 
             ${countdown !== null ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {countdown !== null
              ? `Recalling ${countdown}s`
              : "Main wallet transfer"}
          </button>

          <div className="grid grid-cols-4 gap-4 mt-4 text-center">
            <Link to="/deposit" className="flex flex-col items-center">
              <div>
                <img
                  src={DepositIcon}
                  alt="File Icon"
                  className="w-[70px] h-[70px]"
                />
              </div>
              <span className="text-[#a8a5a1] text-sm mt-0">Deposit</span>
            </Link>

            <Link to="/withdraw" className="flex flex-col items-center">
              <div>
                <img
                  src={Withdraw}
                  alt="File Icon"
                  className="w-[70px] h-[70px]"
                />
              </div>
              <span className="text-[#a8a5a1] text-sm mt-0">Withdraw</span>
            </Link>

            <Link to="/deposit-history" className="flex flex-col items-center">
              <div>
                <img
                  src={DepositHistory}
                  alt="File Icon"
                  className="w-[70px] h-[70px]"
                />
              </div>
              <span className="text-[#a8a5a1] text-sm mt-0">
                Deposit history
              </span>
            </Link>

            <Link to="/withdraw-history" className="flex flex-col items-center">
              <div>
                <img
                  src={WithdrawHistory}
                  alt="File Icon"
                  className="w-[70px] h-[70px]"
                />
              </div>
              <span className="text-[#a8a5a1] text-sm mt-0">
                Withdrawal history
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 text-[#a8a5a1] text-sm mt-4 grid-rows-2 gap-3">
          <div className="bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">Lottery</span>
          </div>
          <div className="bg-[#333332] p-6  h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">TB_Chess</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">jili</span>
          </div>

          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">CQ9</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">MG</span>
          </div>
          <div className="bg-[#333332] p-6  h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">JBD</span>
          </div>

          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">DG</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">CMD</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">SaBa</span>
          </div>

          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">PG</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">Card365</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">V8Card</span>
          </div>

          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">EVO_Video</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">WM_Video</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2 ">SEXY_Video</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">G9</span>
          </div>
          <div className="bg-[#333332] p-6 h-[85px] rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300 mt-2">ARGame</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wallet;
