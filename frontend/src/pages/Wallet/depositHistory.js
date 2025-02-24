import React, { useState } from "react";
import DepositHistoryHeader from "../../components/DepositHistoryHeader";
import { MdExpandMore, MdContentCopy } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { MdCheck } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Import images
import img1 from "../../Assets/lottery1.png";
import img2 from "../../Assets/casino1.png";
import img3 from "../../Assets/sport1.png";
import img4 from "../../Assets/rummy1.png";
import img5 from "../../Assets/slot1.png";

// Import active state images
import activeImg1 from "../../Assets/Lottery2.png";
import activeImg2 from "../../Assets/casino2.png";
import activeImg3 from "../../Assets/sport2.png";
import activeImg4 from "../../Assets/rummy2.png";
import activeImg5 from "../../Assets/slot2.png";

function DepositHistory() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const images = [img1, img2, img3, img4, img5];
  const activeImages = [
    activeImg1,
    activeImg2,
    activeImg3,
    activeImg4,
    activeImg5,
  ];
  const descriptions = [
    "All",
    "AR Pay",
    "UPI-QRpay",
    "Wake UP-APP",
    "UPI-PayTM USDT",
  ];

  // Content data
  const contentData = [
    <div>
      <div className="space-y-4">
        {/* Completed Transaction */}
        <div className="bg-[#333332] p-4 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-1.5 rounded-lg transition-colors">
              Deposit
            </button>
            <span className="text-emerald-500">Complete</span>
          </div>

          <div className="space-y-2 text-zinc-400">
            <div className="flex justify-between">
              <span>Balance</span>
              <span className="text-amber-500">₹100.00</span>
            </div>
            <div className="flex justify-between">
              <span>Type</span>
              <span>ICE-QRpay</span>
            </div>
            <div className="flex justify-between">
              <span>Time</span>
              <span>2025-02-14 13:18:19</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Order number</span>
              <div className="flex items-center gap-1">
                <span>RC2025021413181982549900d</span>
                <MdContentCopy className="text-lg cursor-pointer hover:text-zinc-200 transition-colors" />
              </div>
            </div>
          </div>
        </div>

       
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className="bg-[#333332] p-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-1.5 rounded-lg transition-colors">
                Deposit
              </button>
              <span className="text-red-500">Failed</span>
            </div>

            <div className="space-y-2 text-zinc-400">
              <div className="flex justify-between">
                <span>Balance</span>
                <span className="text-amber-500">₹100.00</span>
              </div>
              <div className="flex justify-between">
                <span>Type</span>
                <span>Super-QRpay</span>
              </div>
              <div className="flex justify-between">
                <span>Time</span>
                <span>2025-02-03 23:43:40</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Order number</span>
                <div className="flex items-center gap-1">
                  <span>RC20250203234340845376999</span>
                  <MdContentCopy className="text-lg cursor-pointer hover:text-zinc-200 transition-colors" />
                </div>
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-600 py-3 rounded-xl mt-4 transition-colors">
                Submit Receipt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>,
    <div>
      <div className="flex items-center justify-center ">
        <div className="w-72 h-72 flex flex-col items-center justify-center rounded-lg p-6">
          <div className="relative w-24 h-24 mb-4">
            {/* Check Icon */}
            <MdCheck className="absolute inset-0 w-full h-full text-neutral-700" />

            {/* Plus Icon */}
            <AiOutlinePlus className="absolute -right-2 -bottom-2 w-6 h-6 text-neutral-700" />
          </div>

          {/* Text */}
          <p className="text-neutral-500 text-lg font-medium">No data</p>
        </div>
      </div>
    </div>,
    <div>
      <div className="space-y-4">
        {/* Completed Transaction */}
        <div className="bg-[#333332] p-4 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-1.5 rounded-lg transition-colors">
              Deposit
            </button>
            <span className="text-emerald-500">Complete</span>
          </div>

          <div className="space-y-2 text-zinc-400">
            <div className="flex justify-between">
              <span>Balance</span>
              <span className="text-amber-500">₹100.00</span>
            </div>
            <div className="flex justify-between">
              <span>Type</span>
              <span>ICE-QRpay</span>
            </div>
            <div className="flex justify-between">
              <span>Time</span>
              <span>2025-02-14 13:18:19</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Order number</span>
              <div className="flex items-center gap-1">
                <span>RC2025021413181982549900d</span>
                <MdContentCopy className="text-lg cursor-pointer hover:text-zinc-200 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Failed Transaction */}
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="bg-[#333332] p-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-1.5 rounded-lg transition-colors">
                Deposit
              </button>
              <span className="text-red-500">Failed</span>
            </div>

            <div className="space-y-2 text-zinc-400">
              <div className="flex justify-between">
                <span>Balance</span>
                <span className="text-amber-500">₹100.00</span>
              </div>
              <div className="flex justify-between">
                <span>Type</span>
                <span>Super-QRpay</span>
              </div>
              <div className="flex justify-between">
                <span>Time</span>
                <span>2025-02-03 23:43:40</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Order number</span>
                <div className="flex items-center gap-1">
                  <span>RC20250203234340845376999</span>
                  <MdContentCopy className="text-lg cursor-pointer hover:text-zinc-200 transition-colors" />
                </div>
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-600 py-3 rounded-xl mt-4 transition-colors">
                Submit Receipt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>,
     <div>
     <div className="flex items-center justify-center ">
       <div className="w-72 h-72 flex flex-col items-center justify-center rounded-lg p-6">
         <div className="relative w-24 h-24 mb-4">
           {/* Check Icon */}
           <MdCheck className="absolute inset-0 w-full h-full text-neutral-700" />

           {/* Plus Icon */}
           <AiOutlinePlus className="absolute -right-2 -bottom-2 w-6 h-6 text-neutral-700" />
         </div>

         {/* Text */}
         <p className="text-neutral-500 text-lg font-medium">No data</p>
       </div>
     </div>
   </div>,
    <div> {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="bg-[#333332] p-4 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-1.5 rounded-lg transition-colors">
            Deposit
          </button>
          <span className="text-red-500">Failed</span>
        </div>

        <div className="space-y-2 text-zinc-400">
          <div className="flex justify-between">
            <span>Balance</span>
            <span className="text-amber-500">₹100.00</span>
          </div>
          <div className="flex justify-between">
            <span>Type</span>
            <span>Super-QRpay</span>
          </div>
          <div className="flex justify-between">
            <span>Time</span>
            <span>2025-02-03 23:43:40</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Order number</span>
            <div className="flex items-center gap-1">
              <span>RC20250203234340845376999</span>
              <MdContentCopy className="text-lg cursor-pointer hover:text-zinc-200 transition-colors" />
            </div>
          </div>
          <button className="w-full bg-amber-500 hover:bg-amber-600 py-3 rounded-xl mt-4 transition-colors">
            Submit Receipt
          </button>
        </div>
      </div>
    ))}</div>,
  ];

  return (
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <DepositHistoryHeader />

      {/* Buttons Section */}
      <div className="bg-[#242424] flex flex-col items-center mt-12">
        <div className="w-full max-w-md px-3">
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hidden">
            {descriptions.map((desc, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg shadow-md px-8 mb-1 mt-2 flex-shrink-0 transition-all duration-300 cursor-pointer 
                ${selectedIndex === index ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f]" : "bg-[#333332]"}`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="flex flex-col justify-center items-center text-center">
                  <img
                    src={
                      selectedIndex === index
                        ? activeImages[index]
                        : images[index]
                    }
                    alt={`Box ${index}`}
                    className="w-6 h-6 object-contain"
                  />
                  <p
                    className={`text-xs font-semibold ${selectedIndex === index ? "text-[#8f5206]" : "text-[#a8a5a1]"}`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 text-sm font-medium rounded-xl">
            <div className="flex gap-4 mb-4">
              {/* Status Dropdown */}
              <details className="relative w-24">
                <summary className="flex items-center justify-between bg-[#333332] px-3 py-2 rounded-lg cursor-pointer">
                  <span className="text-white">All</span>
                  <MdExpandMore className="text-lg text-white" />
                </summary>
                <div className="absolute top-full left-0 w-full mt-1 bg-[#333332] rounded-lg shadow-xl">
                  <div className="p-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                    Complete
                  </div>
                  <div className="p-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
                    Failed
                  </div>
                </div>
              </details>

             {/* Date Picker */}
        <div className="relative flex-1">
          <button
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="flex items-center justify-between w-full bg-[#333332] px-3 py-2 rounded-lg cursor-pointer"
          >
            <span className={selectedDate ? "text-white" : "text-zinc-400"}>
              {selectedDate ? selectedDate.toLocaleDateString() : "Choose a date"}
            </span>
            <MdExpandMore className="text-lg text-white" />
          </button>
          {isCalendarOpen && (
            <div className="absolute top-full left-0 mt-2 bg-[#333332] p-2 rounded-lg shadow-xl z-50">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setIsCalendarOpen(false);
                }}
                inline
              />
            </div>
          )}
        </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="  rounded-lg shadow-md mt-4 max-h-scree overflow-y-auto">
            <p className="text-[#a8a5a1] text-sm mt-2">
              {contentData[selectedIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositHistory;
