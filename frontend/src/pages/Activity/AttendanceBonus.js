import React from "react";
import AttendanceHeader from "../../components/AttendanceHeader";
import Footer from "../../components/Footer";
import attendance from '../../Assets/attendance.png';
import coin from '../../Assets/coin.png';
import giftattd from '../../Assets/giftattd.png';

export const Attandancebonus = () => {
    return (
        <div className="flex flex-col w-[400px] bg-[#242424]">
            <AttendanceHeader />
            {/* Header Section with Red Background - Reduced height */}
            <div className="bg-red-500 text-white p-3  relative h-64">
                <h2 className="text-xl font-bold">Attendance bonus</h2>
                <p className="text-sm mb-3">Get rewards based on consecutive</p><p className="text-sm mb-3 -mt-4"> login days</p>

                <div className="flex justify-between">
                    <div>
                        {/* White Badge with text on separate lines */}
                        <div className="bg-white text-red-500 rounded-md py-1 px-3 inline-block shadow-sm mb-2">
                            <p>Attended consecutively</p>
                            <p className="font-bold">0 Day</p>
                        </div>

                        {/* Accumulated Amount */}
                        <div className="flex items-center mt-2">
                            <img src={coin} alt="coin" className="w-6 h-6 mr-2" />
                            <div>
                                <p className="text-sm">Accumulated</p>
                                <p className="text-xl font-bold">₹0.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attendance Image Positioned Bottom Right with Increased Size */}
                <img src={attendance} alt="attendance" className="w-72 h-72 absolute bottom-[-0px] right-[-0px]" />

                {/* Buttons */}
                <div className="flex justify-between mt-3 relative z-10">
                    <button className="bg-gradient-to-b from-[#FFBD40] to-[#FF7F3D] text-sm text-white py-1 px-4 rounded-full font-normal">
                        Game Rules
                    </button>
                    <button className="bg-gradient-to-b from-[#FFBD40] to-[#FF7F3D] text-sm text-white py-1 px-4 rounded-full font-normal">
                        Attendance history
                    </button>
                </div>
            </div>

            {/* Reward Tiers Grid */}
            <div className="bg-[#242424] grid grid-cols-3 gap-2 p-2">
                {[7, 20, 100, 200, 450, 2400].map((amount, index) => (
                    <div key={index} className="bg-[#333332] p-4 flex flex-col items-center rounded-lg">
                        <p className="text-white font-bold mb-2">₹{amount}.00</p>
                        <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                            <img src={coin} alt="coin" className="w-10 h-10" />
                        </div>
                        <p className="text-white text-sm">{index + 1} Day</p>
                    </div>
                ))}
            </div>

            {/* Day 7 Special Reward - Fixed aspect ratio for gift image */}
            <div className="bg-[#242424] px-2 pb-2">
                <div className="bg-[#333332] p-4 rounded-lg flex items-center justify-between">
                    <div className="flex items-start">
                        {/* Improved gift image sizing to maintain aspect ratio */}
                        <div className="w-32 flex items-center justify-center">
                            <img 
                                src={giftattd} 
                                alt="gift" 
                                className="object-contain max-w-full max-h-24" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <span className="text-gray-400 mx-2">—</span>
                            <p className="text-white text-xl font-bold">₹6,400.00</p>
                            <span className="text-gray-400 mx-2">—</span>
                        </div>
                        <p className="text-white text-lg mt-2">7 Day</p>
                    </div>
                </div>
            </div>

            {/* Attendance Button with corrected gradient */}
            <div className="bg-[#242424] px-4 pb-4 pt-2 flex justify-center mb-20">
                <button 
                    className="w-full py-3 rounded-full text-amber-900  text-lg font-normal" 
                    style={{ background: "linear-gradient(90deg, #FAE59F 0%, #C4933F 100%)" }}
                >
                    Attendance
                </button>
            </div>
            
            <Footer />
        </div>
    );
};

export default Attandancebonus;