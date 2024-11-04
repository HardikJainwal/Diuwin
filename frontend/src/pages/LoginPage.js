import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLock, FaQuestionCircle } from "react-icons/fa";

function LoginPage() {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberPasswordChange = (event) => {
    setRememberPassword(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = isPhoneLogin
      ? { phoneNumber, password }
      : { email, password };
    console.log("Login data:", loginData);
    console.log("Remember password:", rememberPassword);
  };

  return (
    <div className="bg-green-400 h-screen flex flex-col items-center justify-center">
      <div className="text-left mb-0 w-full max-w-md px-8 mt-20">
        <h1 className="text-2xl font-bold text-white mb-1">Log in</h1>
        <p className="text-white text-sm">
          Please log in with your phone number or email
        </p>
        <p className="text-white text-sm sm:text-base">
          If you forget your password, please contact customer service
        </p>
      </div>

      <div className="bg-white p-8 shadow-md w-full max-w-md h-3/4 mt-10 flex flex-col justify-center">
        <div className="flex justify-center mb-4 gap-4">
          <button
            className={`flex flex-col items-center px-6 py-2 font-medium text-xl ${isPhoneLogin ? "text-black border-b-2 border-green-500" : " text-gray-600"}`}
            onClick={() => setIsPhoneLogin(true)}
          >
            <FaPhone className="mb-1" />
            Phone number
          </button>
          <button
            className={`flex flex-col items-center px-6 py-2 font-medium text-xl ${!isPhoneLogin ? "text-black border-b-2 border-green-500" : " text-gray-600"}`}
            onClick={() => setIsPhoneLogin(false)}
          >
            <FaEnvelope className="mb-1" />
            Email login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-8">
          {isPhoneLogin ? (
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1"
              >
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
          ) : (
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1"
              >
                <FaEnvelope className="text-gray-500" />
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
          )}

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-1"
            >
              <FaLock className="text-gray-500" />
              Password
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

          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <input
                id="remember"
                type="checkbox"
                checked={rememberPassword}
                onChange={handleRememberPasswordChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-teal-300"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-500">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-teal-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 focus:ring-2 focus:ring-indigo-300"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full border text-black py-3 rounded-full border-2 border-black hover:bg-gray-300 focus:ring-2 focus:ring-indigo-300"
          >
            Register
          </button>

          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <FaLock className="text-gray-600 mb-1 text-3xl" />{" "}
              {/* Reduced margin bottom */}
              <button
                type="button"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot Password
              </button>
            </div>
            <div className="flex flex-col items-center">
              <FaQuestionCircle className="text-gray-600 mb-1 text-3xl" />{" "}
              {/* Reduced margin bottom */}
              <button
                type="button"
                className="text-sm text-gray-600 hover:underline"
              >
                Customer Service
              </button>
            </div>
          </div>

          {/* <p className="text-sm font-light text-gray-500">
            Don’t have an account yet?{" "}
            <a href="#" className="font-medium text-teal-600 hover:underline">
              Sign up
            </a>
          </p> */}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
