import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLock, FaQuestionCircle, FaKey } from "react-icons/fa";

function SignupPage() {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
  const handleInviteCodeChange = (event) => setInviteCode(event.target.value);
  const handlePrivacyAgreementChange = (event) => setPrivacyAgreement(event.target.checked);
  const handleRememberPasswordChange = (event) => setRememberPassword(event.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = isPhoneLogin ? { phoneNumber, password } : { password };
    console.log("Login data:", loginData);
    console.log("Privacy agreement accepted:", privacyAgreement);
  };

  return (
    <div className="bg-green-400 h-screen flex flex-col items-center justify-center">
      <div className="text-left mb-0 w-full max-w-md px-8 mt-20">
        <h1 className="text-2xl font-bold text-white mb-1">Register</h1>
        <p className="text-white text-sm sm:text-base">
          Please register by phone number or email
        </p>
      </div>

      <div className="bg-white p-8 shadow-md w-full max-w-md h-auto mt-8 flex flex-col justify-center">
        <div className="flex justify-center mb-4">
          <button
            className={`flex flex-col items-center px-6 py-2 font-medium text-xl ${isPhoneLogin ? "text-black border-b-2 border-green-500" : " text-gray-600"}`}
            onClick={() => setIsPhoneLogin(true)}
          >
            <FaPhone className="mb-1" />
            Register your phone
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-4">
          {isPhoneLogin && (
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1">
                <FaPhone className="text-gray-500" />
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
                placeholder="Enter your phone number"
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1">
              <FaLock className="text-gray-500" />
              Set Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1">
              <FaLock className="text-gray-500" />
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="inviteCode" className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1">
              <FaKey className="text-gray-500" />
              Invite Code
            </label>
            <input
              type="text"
              id="inviteCode"
              value={inviteCode}
              onChange={handleInviteCodeChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
              placeholder="Enter your invite code"
            />
          </div>

          <div className="flex items-start mb-4">
            <input
              id="privacyAgreement"
              type="checkbox"
              checked={privacyAgreement}
              onChange={handlePrivacyAgreementChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-teal-300"
            />
            <label htmlFor="privacyAgreement" className="ml-2 text-sm text-gray-500">
              I agree to the privacy policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 focus:ring-2 focus:ring-indigo-300"
          >
            Register
          </button>
          <button
            type="button"
            className="w-full border text-black py-3 rounded-full border-2 border-black hover:bg-gray-300 focus:ring-2 focus:ring-indigo-300 mt-2"
            onClick={() => console.log("Switch to Login")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
