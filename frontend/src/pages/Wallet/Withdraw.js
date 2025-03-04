import React from "react";
import DepositHeader from "../../components/DepositHeader";
import { AiOutlineFileText } from "react-icons/ai";
import { BsDiamondFill } from "react-icons/bs";
import WithdrawHeader from "../../components/WithdrawHeader";
import { useState } from "react";
import wcard from "../../Assets/wcard.png";

const handleAddClick = () => {
  alert("Add beneficiary functionality triggered!");
};

const paymentOptions = [
  {
    name: "UPI-QRpay",
    img: "https://webcrumbs.cloud/placeholder",
    content: (
      <div>
        <div className=" bg-[#333332] text-white p-6 rounded-xl">
          {/* Bank Account Section */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="border-2 border-dashed border-gray-600 p-6 rounded-lg">
              <span className="material-symbols-outlined text-gray-500">
                add
              </span>
            </div>
            <p className="text-gray-400 text-sm">Add a bank account number</p>
            <p className="text-red-500 text-xs">
              Need to add beneficiary information to be able to withdraw money
            </p>
          </div>

          {/* Withdrawal Section */}
          <div className="bg-neutral-800 rounded-lg p-4 mb-4">
            {/* Amount Input */}
            <div className="flex items-center gap-2 mb-3 bg-neutral-700 rounded-lg p-3">
              <span className="text-amber-500">₹</span>
              <input
                type="text"
                placeholder="Please enter the amount"
                className="bg-transparent w-full outline-none text-white placeholder-gray-400"
              />
            </div>

            {/* Balance Info */}
            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-400">Withdrawable balance</span>
              <span>₹0.00</span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-400">Withdrawal amount received</span>
              <div className="flex items-center gap-2">
                <span>₹0.00</span>
                <button className="text-amber-500 border border-amber-500 rounded px-2 py-0.5 text-xs hover:bg-amber-500 hover:text-black transition-colors">
                  All
                </button>
              </div>
            </div>

            {/* Withdraw Button */}
            <button className="w-full bg-amber-500 text-black py-3 rounded-lg hover:bg-amber-600 transition-colors">
              Withdraw
            </button>
          </div>

          {/* Withdrawal Guidelines */}
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <span className="text-amber-500">◆</span>
              <span>Need to bet ₹7700 to be able to withdraw</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-amber-500">◆</span>
              <span>
                Withdraw time <span className="text-red-500">00:00-23:59</span>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-amber-500">◆</span>
              <span>
                Inday Remaining Withdrawal Times{" "}
                <span className="text-red-500">3</span>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-amber-500">◆</span>
              <span>
                Withdrawal amount range{" "}
                <span className="text-red-500">₹110.00-₹50,000.00</span>
              </span>
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              <span className="text-amber-500">◆</span>
              <span>
                Please confirm your beneficiary account information before
                withdrawing. If your information is incorrect, our company will
                not be liable for the amount of loss
              </span>
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              <span className="text-amber-500">◆</span>
              <span>
                If your beneficial information is incorrect, please contact
                customer service
              </span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div>
        <div className=" bg-[#333332] rounded-lg p-4">
          <button
            className="border-2 border-dashed border-zinc-700 rounded-lg h-[120px] flex items-center justify-center flex-col w-full cursor-pointer hover:bg-zinc-800 transition"
            onClick={handleAddClick}
          >
            <span className="material-symbols-outlined text-zinc-400 text-4xl">
              add
            </span>
            <span className="text-zinc-400 mt-2">Add Address</span>
          </button>
          <p className="text-red-500 text-sm mt-2">
            Ensure that beneficiary information is correctly added before
            proceeding.
          </p>
        </div>
        <div className=" bg-[#333332] p-4 mt-4 rounded-2xl font-['Open_Sans']">
          <div className="flex items-center gap-2 mb-6">
            <img
              src="https://icons8.com/icon/t5K2CR8feVdX/tether"
              className="w-6 h-6"
              alt="USDT"
            />
            <span className="text-white font-medium">
              Select amount of USDT
            </span>
          </div>

          {/* Amount Inputs */}
          <div className="space-y-3 mb-6">
            <div className="bg-neutral-800 rounded-lg p-3 flex items-center">
              <span className="text-amber-500 mr-2">₹</span>
              <input
                type="text"
                placeholder="Please enter withdrawal amount"
                className="bg-transparent w-full outline-none text-gray-300"
              />
            </div>

            <div className="bg-neutral-800 rounded-lg p-3 flex items-center">
              <img
                src="https://icons8.com/icon/t5K2CR8feVdX/tether"
                className="w-6 h-6 mr-2"
                alt="USDT"
              />
              <input
                type="text"
                placeholder="Please enter USDT amount"
                className="bg-transparent w-full outline-none text-gray-300"
              />
            </div>
          </div>

          {/* Withdrawable Balance */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-amber-500 text-sm">
              Withdrawable balance ₹0.00
            </span>
            <button className="text-amber-500 text-sm border border-amber-500 rounded px-3 py-1 hover:bg-amber-500 hover:text-black transition">
              All
            </button>
          </div>

          {/* Withdraw Button */}
          <button className="w-full bg-amber-500 rounded-lg py-3 font-medium hover:bg-amber-600 transition mb-6">
            Withdraw
          </button>

          {/* Withdrawal Conditions */}
          <div className="space-y-3 text-sm">
            {[
              {
                text: "Need to bet ₹7700 to be able to withdraw",
                highlight: "text-red-500",
              },
              {
                text: "Withdraw time 00:00-23:59",
                highlight: "text-amber-500",
              },
              {
                text: "Inday Remaining Withdrawal Times 5",
                highlight: "text-red-500",
              },
              {
                text: "Withdrawal amount range ₹1,000.00 - ₹10,000,000.00",
                highlight: "text-red-500",
              },
              {
                text: "After withdraw, you need to confirm the blockchain main network 3 times before it arrives at your account.",
              },
              {
                text: "Please confirm that the operating environment is safe to avoid information being tampered with or leaked.",
              },
              {
                text: "Please confirm your beneficial account information before withdrawing. If your information is incorrect, our company will not be liable for the amount of loss",
              },
              {
                text: "If your beneficial information is incorrect, please contact customer service.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-amber-500">♦</span>
                <span className="text-gray-300">
                  {item.text.split(" ").map((word, i) =>
                    word.startsWith("₹") || word.match(/\d+/) ? (
                      <span
                        key={i}
                        className={item.highlight || "text-gray-300"}
                      >
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const Withdraw = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className='bg-[#333332] min-h-screen flex flex-col items-center justify-center"'>
      <WithdrawHeader />
      <div className="w-[410px] min-h-screen mt-8 bg-[#242424] p-3  text-[#8f5206] font-sans">
        {/* Balance Card */}
        {/* Balance Card */}
        <div
          className="p-4 rounded-xl mb-4 h-[140px] mt-4" // Adjust height as needed
          style={{
            backgroundImage: `url(${wcard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm">Balance</span>
            <span className="material-symbols-outlined hover:rotate-180 transition-transform cursor-pointer">
              sync
            </span>
          </div>
          <div className="text-3xl font-bold mt-1">₹115.49</div>
        </div>

        {/* ARPay Section */}
        <div className="bg-[#333332] p-3 rounded-xl mb-4">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-2xl font-bold">A</span>
            <div className="flex-1">
              <div className="font-semibold text-[#f5f3f0]">ARPay</div>
              <div className="text-xs text-neutral-400">
                Use AR PAY to recharge for additional rewards 1% bonus
              </div>
            </div>
            <span className="bg-red-600 text-xs px-2 py-1 rounded">+1%</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {paymentOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`p-3 py-6 rounded-xl text-center hover:scale-105 transition cursor-pointer relative 
              ${selected === index ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f]" : "bg-[#333332]"}`}
            >
              {item.img ? (
                <img
                  src={item.img}
                  className="w-8 h-8 mx-auto mb-2"
                  alt={item.name}
                />
              ) : (
                <span className={`material-symbols-outlined ${item.color}`}>
                  {item.icon}
                </span>
              )}
              <div className="text-xs text-white">{item.name}</div>
            </div>
          ))}
        </div>

        {/* Display Content Based on Selection */}
        {selected !== null && (
          <div className=" text-white rounded-lg">
            <p>{paymentOptions[selected].content}</p>
          </div>
        )}

        <div id="webcrumbs" className=" bg-[#333332] mt-4 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-yellow-500">
              history
            </span>
            <h2 className="text-white text-lg font-medium">
              Withdrawal History
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center py-12">
            <div className="relative w-24 h-24 mb-4">
              <div className="absolute inset-0 bg-neutral-800 rounded-lg transform rotate-12"></div>
              <div className="absolute inset-0 bg-neutral-700 rounded-lg transform -rotate-6"></div>
              <div className="absolute inset-0 bg-neutral-600 rounded-lg">
                <div className="absolute -right-1 -top-1 w-3 h-3 bg-neutral-500 rounded-sm"></div>
                <div className="absolute left-2 top-2 w-2 h-2 bg-neutral-500 rounded-full"></div>
                <div className="absolute left-2 bottom-2 w-2 h-2 bg-neutral-500 rounded-full"></div>
                <div className="absolute right-2 bottom-2 w-2 h-2 bg-neutral-500 rounded-full"></div>
              </div>
            </div>

            <p className="text-neutral-500 mb-8">No data</p>

            <button className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 transition-colors rounded-lg text-black font-medium flex items-center justify-center gap-2">
              All history
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
