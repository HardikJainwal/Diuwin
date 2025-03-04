
import React from "react"
import AttendanceHeader from "../../components/AttendanceHeader";
import Footer from "../../components/Footer";

export const Attandancebonus = () => {
    return (
        <div id="Attendace">
          <AttendanceHeader/>
            <div className="w-[445px] font-sans overflow-hidden rounded-lg shadow-lg">
                {/* Header Section */}
                <div className="bg-red-500 text-white p-6 relative">
                    <h2 className="text-2xl font-bold">Attendance bonus</h2>
                    <p className="text-sm mt-1">Get rewards based on consecutive login days</p>

                    {/* Attendance Badge */}
                    <div className="mt-4 relative">
                        <div className="bg-white text-red-500 py-2 px-4 font-medium rounded-l-full relative before:absolute before:content-[''] before:border-[10px] before:border-transparent before:border-l-white before:right-[-20px] before:top-0">
                            <span>Attended consecutively</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold">0</span>
                                <span>Day</span>
                            </div>
                        </div>
                    </div>

                    {/* Accumulated Amount */}
                    <div className="mt-4">
                        <p className="text-sm">Accumulated</p>
                        <p className="text-xl font-bold">₹0.00</p>
                    </div>

                    {/* Notebook Illustration */}
                    <div className="absolute right-6 top-8">
                        <div className="relative">
                            <svg
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M75 20C75 15 71 10 65 10H25C20 10 15 15 15 20V80C15 85 20 90 25 90H65C71 90 75 85 75 80V20Z"
                                    fill="#FFFFFF"
                                />
                                <path
                                    d="M65 10H25C20 10 15 15 15 20V80C15 85 20 90 25 90H65C71 90 75 85 75 80V20C75 15 71 10 65 10Z"
                                    stroke="#8860D0"
                                    strokeWidth="3"
                                />
                                <circle cx="30" cy="30" r="3" fill="#FF6B6B" />
                                <circle cx="45" cy="45" r="3" fill="#5AB9EA" />
                                <circle cx="60" cy="30" r="3" fill="#C1C8E4" />
                                <circle cx="30" cy="60" r="3" fill="#84CEEB" />
                                <circle cx="60" cy="60" r="3" fill="#FF6B6B" />
                            </svg>

                            {/* Pencil */}
                            <svg
                                className="absolute right-[-20px] top-10 transform rotate-45"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="10" y="5" width="40" height="10" rx="2" fill="#FFCE56" />
                                <path d="M15 15L45 15L40 50L20 50L15 15Z" fill="#F9ED69" />
                                <path d="M20 50L40 50L35 55L25 55L20 50Z" fill="#EEEEEE" />
                                <path d="M10 10L5 15L15 15L20 10L10 10Z" fill="#FF6B6B" />
                            </svg>

                            {/* Handles */}
                            <svg
                                className="absolute left-[20px] top-[-10px]"
                                width="40"
                                height="20"
                                viewBox="0 0 40 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 5C5 2.23858 7.23858 0 10 0H30C32.7614 0 35 2.23858 35 5V15C35 17.7614 32.7614 20 30 20H10C7.23858 20 5 17.7614 5 15V5Z"
                                    fill="#FFCE56"
                                />
                                <circle cx="15" cy="10" r="5" fill="#5AB9EA" />
                                <circle cx="25" cy="10" r="5" fill="#5AB9EA" />
                            </svg>

                            {/* Leaf */}
                            <svg
                                className="absolute left-[-15px] bottom-[5px]"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0Z"
                                    fill="#5cb85c"
                                />
                                <path
                                    d="M15 5C20.5228 5 25 9.47715 25 15C25 20.5228 20.5228 25 15 25C9.47715 25 5 20.5228 5 15C5 9.47715 9.47715 5 15 5Z"
                                    fill="#5cb85c"
                                />
                                <path
                                    d="M15 8C19.4183 8 23 11.5817 23 16C23 20.4183 19.4183 24 15 24C10.5817 24 7 20.4183 7 16C7 11.5817 10.5817 8 15 8Z"
                                    fill="#adebad"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between mt-8">
                        <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-white py-2 px-6 rounded-full transform hover:scale-105">
                            Game Rules
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-white py-2 px-6 rounded-full transform hover:scale-105">
                            Attendance history
                        </button>
                    </div>
                </div>

                {/* Reward Grid */}
                <div className="bg-gray-800 grid grid-cols-3 gap-px">
                    {/* Day 1 */}
                    <div className="bg-gray-700 p-4 flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 transform hover:rotate-12 transition-transform duration-300">
                            <span className="material-symbols-outlined text-yellow-100 text-2xl">star</span>
                        </div>
                        <p className="text-white font-bold">₹7.00</p>
                        <p className="text-gray-300 text-sm">1 Day</p>
                    </div>

                    {/* Day 2 */}
                    <div className="bg-gray-700 p-4 flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 transform hover:rotate-12 transition-transform duration-300">
                            <span className="material-symbols-outlined text-yellow-100 text-2xl">star</span>
                        </div>
                        <p className="text-white font-bold">₹20.00</p>
                        <p className="text-gray-300 text-sm">2 Day</p>
                    </div>

                    {/* Day 3 */}
                    <div className="bg-gray-700 p-4 flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 transform hover:rotate-12 transition-transform duration-300">
                            <span className="material-symbols-outlined text-yellow-100 text-2xl">star</span>
                        </div>
                        <p className="text-white font-bold">₹100.00</p>
                        <p className="text-gray-300 text-sm">3 Day</p>
                    </div>

                    {/* Day 4 */}
                    <div className="bg-gray-700 p-4 flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 transform hover:rotate-12 transition-transform duration-300">
                            <span className="material-symbols-outlined text-yellow-100 text-2xl">star</span>
                        </div>
                        <p className="text-white font-bold">₹200.00</p>
                        <p className="text-gray-300 text-sm">4 Day</p>
                    </div>

                    {/* Day 5 */}
                    <div className="bg-gray-700 p-4 flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 transform hover:rotate-12 transition-transform duration-300">
                            <span className="material-symbols-outlined text-yellow-100 text-2xl">star</span>
                        </div>
                        <p className="text-white font-bold">₹450.00</p>
                        <p className="text-gray-300 text-sm">5 Day</p>
                    </div>

                    {/* Day 6 */}
                    <div className="bg-gray-700 p-4 flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2 transform hover:rotate-12 transition-transform duration-300">
                            <span className="material-symbols-outlined text-yellow-100 text-2xl">star</span>
                        </div>
                        <p className="text-white font-bold">₹2,400.00</p>
                        <p className="text-gray-300 text-sm">6 Day</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
      
    )
}


export default Attandancebonus;
