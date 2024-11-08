import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLock,
  FaQuestionCircle,
  FaKey,
} from "react-icons/fa";

function Wallet() {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setverificationCode] = useState("");
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

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

  return (
    <div className="bg-custom-blue min-h-screen flex flex-col items-center justify-center">
      <div className="text-left mb-0 w-full max-w-md px-8 mt-20">
        <h1 className="text-2xl font-bold text-custom-pink mb-1">Wallet</h1>
        <p className="text-custom-pink text-sm sm:text-base">Total Balance</p>
      </div>

      <div className="bg-gray-100 p-8 shadow-md w-full max-w-md h-full mt-10 flex flex-col justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="bg-gray-200 rounded-full p-4">
                <span className="text-xl font-bold">0%</span>
              </div>
              <div className="text-gray-600 mt-2">
                ₹0.00
                <br />
                Main wallet
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-full p-4">
                <span className="text-xl font-bold">0%</span>
              </div>
              <div className="text-gray-600 mt-2">
                ₹0.00
                <br />
                3rd party wallet
              </div>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Main wallet transfer
          </button>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 rounded-full p-4 shadow-md">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-12 0v 1a6 6 0 0112 0v1z"
                  />
                </svg>
              </div>
              <span className="text-gray-600 mt-2">Action 1</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 shadow-md">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <span className="text-gray-600 mt-2">Action 2</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-100 rounded-full p-4 shadow-md">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v8m4-4H8"
                  />
                </svg>
              </div>
              <span className="text-gray-600 mt-2">Action 3</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 rounded-full p-4 shadow-md">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                  />
                </svg>
              </div>
              <span className="text-gray-600 mt-2">Action 4</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-4 grid-rows-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">Lottery</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">TB_Chess</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">jili</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">CQ9</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">MG</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">JBD</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">DG</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">CMD</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">SaBa</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">PG</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">Card365</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">V8Card</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">EVO_Video</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">WM_Video</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">SEXY_Video</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">G9</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <span>0.00</span>
            <span className="text-grey-300">ARGame</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
