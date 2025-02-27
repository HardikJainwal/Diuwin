import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../components/Header";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/Slice/loginSlice';

function LoginPage() {
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.login); 
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = isPhoneLogin
      ? { phoneNumber: credentials.phoneNumber, password: credentials.password }
      : { email: credentials.email, password: credentials.password };

    dispatch(loginUser(loginData)); 
  };

  if (token) {
    window.location.href = "/dashboard"; 
  }

  return (
    <div className="body">
      <div className="bg-custom-blue min-h-screen flex flex-col items-center justify-center">
        <Header />
        <div className="text-left mb-0 w-full max-w-md px-8 mt-20">
          <h1 className="text-2xl font-bold text-custom-pink mb-1">Login</h1>
          <p className="text-custom-pink text-sm sm:text-base">
            Please log in with your phone number or email
            <br />
            if you forget your password, please contact customer service
          </p>
        </div>

        <div className="bg-gray-100 p-8 shadow-md w-full max-w-md h-3/4 mt-10 flex flex-col justify-center">
          <div className="flex justify-center mb-4 gap-4">
            <button
              className={`flex flex-col items-center px-6 py-2 font-medium text-xl ${isPhoneLogin ? "text-custom-blue border-b-2 border-custom-pink" : "text-gray-400"}`}
              onClick={() => setIsPhoneLogin(true)}
            >
              <FaPhone className="mb-2" />
              Phone number
            </button>
            <button
              className={`flex flex-col items-center px-6 py-2 font-medium text-xl ${!isPhoneLogin ? "text-custom-blue border-b-2 border-custom-pink" : "text-gray-400"}`}
              onClick={() => setIsPhoneLogin(false)}
            >
              <FaEnvelope className="mb-2" />
              Email login
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-6">
            {isPhoneLogin ? (
              <div>
                <label htmlFor="phoneNumber" className="block mb-2 text-md font-medium text-custom-blue flex items-center gap-1">
                  <FaPhone className="text-custom-blue" />
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={credentials.phoneNumber}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            ) : (
              <div>
                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 flex items-center gap-1">
                  <FaEnvelope className="text-custom-blue" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
            )}

            <div className="relative mb-4">
              <label htmlFor="password" className="flex items-center gap-1 text-md font-medium text-gray-900 mb-2">
                <FaLock className="text-custom-blue" />
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 pr-10"
                  placeholder="Password"
                  required
                />
                <div
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-custom-pink text-white py-3 rounded-full hover:bg-custom-blue focus:ring-2 focus:ring-indigo-300"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            {error && <p className="text-red-500">{error}</p>} {/* Display error if login fails */}

            <Link to="/signup">
              <button
                type="button"
                className="w-full border text-black py-2 rounded-full border-2 border-black hover:bg-custom-blue hover:text-white focus:ring-2 focus:ring-indigo-300"
              >
                Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
