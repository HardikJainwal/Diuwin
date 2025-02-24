import React from 'react'
import DepositHeader from '../../components/DepositHeader';
import { AiOutlineFileText } from "react-icons/ai";
import { BsDiamondFill } from "react-icons/bs";


const Deposit = () => {
  return (
    <div className='bg-[#333332] min-h-screen flex flex-col items-center justify-center"'>
      <DepositHeader/>
   <div className="w-[410px] min-h-screen mt-8 bg-[#242424] p-3  text-[#8f5206] font-sans">
    {/* Balance Card */}
    <div className="bg-gradient-to-r from-[#fae59f] to-[#c4933f] p-4 rounded-xl mb-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">Balance</span>
        <span className="material-symbols-outlined hover:rotate-180 transition-transform cursor-pointer">
          sync
        </span>
      </div>
      <div className="text-3xl font-bold mt-1">₹115.49</div>
      <div className="flex gap-2 mt-4">
        <span className="material-symbols-outlined mt-2 ">credit_card</span>
        <div className="flex-1 mt-2 text-right">•••• ••••</div>
      </div>
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
      {[
        { name: "UPI-QRpay", img: "https://webcrumbs.cloud/placeholder" },
        { name: "Wake UP-APP", icon: "water_drop", color: "text-green-500" },
        { name: "UPI-PayTM", img: "https://webcrumbs.cloud/placeholder" },
        { name: "USDT", img: "https://webcrumbs.cloud/placeholder", badge: "+2%" },
      ].map((item, index) => (
        <div
          key={index}
          className={`${
            item.img ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f]" : "bg-[#333332]"
          } p-3 py-6 rounded-xl text-center hover:scale-105 transition cursor-pointer relative`}
        >
          {item.img ? (
            <img src={item.img} className="w-8 h-8 mx-auto mb-2" alt={item.name} />
          ) : (
            <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
          )}
          <div className="text-xs">{item.name}</div>
          {item.badge && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-xs px-2 py-1 rounded">
              {item.badge}
            </span>
          )}
        </div>
      ))}
    </div>

    {/* Payment Channels */}
    <div className='bg-[#333332] p-3 rounded-xl'>
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-amber-500">account_balance_wallet</span>
        <span className="font-semibold">Select channel</span>
      </div>

      <div className="grid grid-cols-2 gap-3 ">
        {[
          { name: "TT-QRpay", balance: "500 - 50K", highlight: true },
          { name: "OS-QRpay", balance: "500 - 50K" },
          { name: "FAST-QRpay", balance: "500 - 50K" },
          { name: "YaYa-QRpay", balance: "200 - 50K" },
          { name: "UPI-QRpay", balance: "500 - 50K" },
          { name: "Hpay-QRpay", balance: "1000 - 50K" },
          { name: "7Day-QRpay", balance: "200 - 50K" },
          { name: "RS-APPpay", balance: "100 - 50K" },
          { name: "TT-QRpay", balance: "500 - 50K", },
          { name: "OS-QRpay", balance: "500 - 50K" },
          { name: "FAST-QRpay", balance: "500 - 50K" },
          { name: "YaYa-QRpay", balance: "200 - 50K" },
          { name: "UPI-QRpay", balance: "500 - 50K" },
          { name: "Hpay-QRpay", balance: "1000 - 50K" },
          { name: "7Day-QRpay", balance: "200 - 50K" },
          { name: "RS-APPpay", balance: "100 - 50K" },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl cursor-pointer transition relative ${
              item.highlight ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f] " : "bg-[#4d4d4c] hover:bg-neutral-700"
            }`}
          >
            <div className="font-semibold text-neutral-400">{item.name}</div>
            <div className=" text-neutral-400">Balance: {item.balance}</div>
            {item.emoji && (
              <span className="absolute bottom-2 right-2 text-amber-500 text-2xl">{item.emoji}</span>
            )}
            {item.img && (
              <img src={item.img} className="w-6 h-6 absolute bottom-2 right-2" alt={item.name} />
            )}
          </div>
        ))}
      </div>
    </div>

    
      <div className=" bg-[#333332] mt-4 p-3 rounded-xl text-white">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-[#d9ac4f]">payments</span>
          <h2 className="text-lg font-semibold">Deposit amount</h2>
        </div>

        {/* Preset Amount Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {["500", "1K", "5K", "10K", "20K", "50K"].map((amount) => (
            <button
              key={amount}
              className=" border border-[#666462] hover:bg-neutral-700 transition-colors rounded-lg py-2 text-[#d9ac4f]"
            >
             <span className='text-[#666462] justify-start'> ₹ </span> {amount}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="relative mb-6">
          <div className="flex items-center bg-neutral-800 rounded-full px-4 py-3 ">
            <span className="text-[#d9ac4f] mr-2">₹</span>
            <input
              type="text"
              placeholder="Please enter the amount"
              className="bg-transparent w-full outline-none placeholder-neutral-400 "
            />
            <button className="text-neutral-400 hover:text-neutral-300">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        {/* Deposit Button */}
        <button className="w-full bg-[#6f7381]  transition-colors rounded-full py-3 mb-2">
          Deposit
        </button>
        </div>

        <div className="bg-[#333332] mt-4 p-3 rounded-xl text-white">
      {/* Recharge Instructions */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-amber-500 mb-2">
          <AiOutlineFileText className="text-xl" />
          <h3 className="font-semibold text-[#f5f3f0]">Recharge Instructions</h3>
        </div>

        <div className="border p-4 rounded-xl space-y-2 border-[#666462]">
          {[
            "If the transfer time is up, please fill out the deposit form again.",
            "The transfer amount must match the order you created, otherwise the money cannot be credited successfully.",
            "If you transfer the wrong amount, our company will not be responsible for the lost amount!",
            "Note: do not cancel the deposit order after the money has been transferred.",
          ].map((instruction, index) => (
            <div key={index} className="flex items-start gap-2 text-neutral-400 text-sm">
              <BsDiamondFill className="text-amber-500 text-sm mt-1" />
              <p>{instruction}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className=" bg-[#242424] rounded-xl font-sans">
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-neutral-200">receipt_long</span>
        <h2 className="text-neutral-200 text-lg font-medium">Deposit history</h2>
      </div>

      <div className="space-y-4">
        {/* First Deposit Entry - Completed */}
        <div className="bg-[#333332] p-4 rounded-lg">
          <div className="flex justify-between items-center mb-3 border-b py-2 border-[#666462]">
            <button className="bg-emerald-600 hover:bg-emerald-700 transition px-4 py-1.5 rounded-md text-white text-sm">
              Deposit
            </button>
            <span className="text-emerald-500 text-sm">Complete &gt;</span>
          </div>

          <div className="space-y-2 text-sm ">
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Balance</span>
              <span className="text-[#dd9138]">₹100.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Type</span>
              <span className="text-[#a8a5a1]">ICE-QRpay</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Time</span>
              <span className="text-[#a8a5a1]">2025-02-16 13:18:19</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Order number</span>
              <span className="text-[#a8a5a1]">RC20250216131819825449900口</span>
            </div>
          </div>
        </div>

        {/* Second Deposit Entry - Failed */}
        <div className="bg-[#333332] p-4 rounded-lg">
          <div className="flex justify-between items-center mb-3 border-b py-2 border-[#666462]">
            <button className="bg-emerald-600 hover:bg-emerald-700 transition px-4 py-1.5 rounded-md text-white text-sm">
              Deposit
            </button>
            <span className="text-red-500 text-sm">Failed</span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Balance</span>
              <span className="text-[#dd9138]">₹100.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Type</span>
              <span className="text-[#a8a5a1]">Super-QRpay</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Time</span>
              <span className="text-[#a8a5a1]">2025-02-03 23:43:40</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Order number</span>
              <span className="text-[#a8a5a1]">RC202502032343408653769977</span>
            </div>
          </div>
       

        {/* Submit Receipt Button */}
        <button className="w-full mt-4 bg-[#d9ac4f] hover:bg-amber-600 transition text-white py-2 rounded-full font-medium">
          Submit Receipt
        </button>
        </div>

         {/* Second Deposit Entry - Failed */}
         <div className="bg-[#333332] p-4 rounded-lg">
          <div className="flex justify-between items-center mb-3 border-b py-2 border-[#666462]">
            <button className="bg-emerald-600 hover:bg-emerald-700 transition px-4 py-1.5 rounded-md text-white text-sm">
              Deposit
            </button>
            <span className="text-red-500 text-sm">Failed</span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Balance</span>
              <span className="text-[#dd9138]">₹100.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Type</span>
              <span className="text-[#a8a5a1]">Super-QRpay</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Time</span>
              <span className="text-[#a8a5a1]">2025-02-03 23:43:40</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Order number</span>
              <span className="text-[#a8a5a1]">RC202502032343408653769977</span>
            </div>
          </div>
       

        {/* Submit Receipt Button */}
        <button className="w-full mt-4 bg-[#d9ac4f] hover:bg-amber-600 transition text-white py-2 rounded-full font-medium">
          Submit Receipt
        </button>
        </div>

         {/* Second Deposit Entry - Failed */}
         <div className="bg-[#333332] p-4 rounded-lg">
          <div className="flex justify-between items-center mb-3 border-b py-2 border-[#666462]">
            <button className="bg-emerald-600 hover:bg-emerald-700 transition px-4 py-1.5 rounded-md text-white text-sm">
              Deposit
            </button>
            <span className="text-red-500 text-sm">Failed</span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Balance</span>
              <span className="text-[#dd9138]">₹100.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Type</span>
              <span className="text-neutral-200">Super-QRpay</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Time</span>
              <span className="text-[#a8a5a1]">2025-02-03 23:43:40</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Order number</span>
              <span className="text-[#a8a5a1]">RC202502032343408653769977</span>
            </div>
          </div>
       

        {/* Submit Receipt Button */}
        <button className="w-full mt-4 bg-[#d9ac4f] hover:bg-amber-600 transition text-white py-2 rounded-full font-medium">
          Submit Receipt
        </button>
        </div>

         {/* Second Deposit Entry - Failed */}
         <div className="bg-[#333332] p-4 rounded-lg">
          <div className="flex justify-between items-center mb-3 border-b py-2 border-[#666462]">
            <button className="bg-emerald-600 hover:bg-emerald-700 transition px-4 py-1.5 rounded-md text-white text-sm">
              Deposit
            </button>
            <span className="text-red-500 text-sm">Failed</span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Balance</span>
              <span className="text-[#dd9138]">₹100.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Type</span>
              <span className="text-[#a8a5a1]">Super-QRpay</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Time</span>
              <span className="text-[#a8a5a1]">2025-02-03 23:43:40</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a8a5a1]">Order number</span>
              <span className="text-[#a8a5a1]">RC202502032343408653769977</span>
            </div>
          </div>
       

        {/* Submit Receipt Button */}
        <button className="w-full mt-4 bg-[#d9ac4f] hover:bg-amber-600 transition text-white py-2 rounded-full font-medium">
          Submit Receipt
        </button>
        </div>

        <div className='px-2'>
        <button className="w-full mb-4 bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]  transition  py-2 rounded-full font-medium">
          All history
        </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Deposit