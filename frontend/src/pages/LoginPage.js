import React, { useState } from 'react';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    alert(`Logging in with ${phoneNumber}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-custom-blue to-blue-400 px-4">
      <img
        src="https://ossimg.diuacting.com/DiuWin/other/h5setting_20240724134839qf9p.png"
        alt="DiuWin"
        className="mt-14 w-36 h-auto"
      />
      <div className="bg-white p-10 mt-20 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-sm text-gray-500">Log in to your account</p>
          <p className="text-sm text-gray-600">Forgot password? Contact support.</p>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <div className="flex border rounded-md overflow-hidden">
            <select className="border-0 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 px-3 py-2">
              <option value="+91">+91</option>
              {/* Add more country codes if needed */}
            </select>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border-0 w-full bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 px-3 py-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-custom-blue mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md w-full bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-5 flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded"
            checked={rememberPassword}
            onChange={(e) => setRememberPassword(e.target.checked)}
          />
          <label className="ml-2 text-sm text-gray-600">Remember me</label>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-custom-pink text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Log In
        </button>
        
        <button className="w-full bg-gray-100 text-custom-pink font-semibold py-2 rounded-md mt-3 hover:bg-gray-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500">
          Register
        </button>

        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-custom-pink hover:text-green-700">Forgot Password?</a>
          <a href="#" className="text-custom-pink hover:text-green-700">Customer Service</a>
        </div>
      </div> 
    </div>
  );
};

export default Login;
