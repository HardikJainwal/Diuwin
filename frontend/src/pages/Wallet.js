import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLock, FaQuestionCircle, FaKey } from "react-icons/fa";

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
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
  const handleverificationCodeChange = (event) => setverificationCode(event.target.value);
  const handlePrivacyAgreementChange = (event) => setPrivacyAgreement(event.target.checked);
  const handleRememberPasswordChange = (event) => setRememberPassword(event.target.checked);


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
    const loginData = isPhoneLogin ? { phoneNumber, password } : { email, password };
    console.log("Login data:", loginData);
    console.log("Remember password:", rememberPassword);
    console.log("verification code:", verificationCode);
    console.log("Privacy agreement accepted:", privacyAgreement);
  };

  return (
    <div className="bg-custom-blue h-screen flex flex-col items-center justify-center">
      <div className="text-left mb-0 w-full max-w-md px-8 mt-20">
        <h1 className="text-2xl font-bold text-custom-pink mb-1">Wallet</h1>
        <p className="text-custom-pink text-sm sm:text-base">
          Total Balance
        </p>
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
            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-12 0v 1a6 6 0 0112 0v1z" />
            </svg>
          </div>
          <span className="text-gray-600 mt-2">Action 1</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 rounded-full p-4 shadow-md">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span className="text-gray-600 mt-2">Action 2</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-red-100 rounded-full p-4 shadow-md">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
            </svg>
          </div>
          <span className="text-gray-600 mt-2">Action 3</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-yellow-100 rounded-full p-4 shadow-md">
            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
          </div>
          <span className="text-gray-600 mt-2">Action 4</span>
        </div>
      </div>
    </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-8">
          

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1">
              <FaLock className="text-custom-blue" />
              Set Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1">
              <FaLock className="text-custom-blue" />
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="verificationCode" className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1">
              <FaKey className="text-custom-blue" />
              Verification Code
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={handleverificationCodeChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                placeholder="Enter your verification code"
              />
              <button
                type="button"
                onClick={handleSendVerificationCode}
                className="bg-custom-pink text-white px-4 py-2 rounded-full hover:bg-custom-blue focus:ring-2 focus:ring-gray-300"
              >
                Send
              </button>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <input
              id="privacyAgreement"
              type="checkbox"
              checked={privacyAgreement}
              onChange={handlePrivacyAgreementChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-gray-300"
            />
            <label htmlFor="privacyAgreement" className="ml-2 text-sm text-custom-pink">
              I agree to the privacy policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-custom-pink text-white py-3 rounded-full hover:bg-custom-blue focus:ring-2 focus:ring-gray-300"
          >
            Reset
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default Wallet;
