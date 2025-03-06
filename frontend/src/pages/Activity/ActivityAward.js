import React from 'react';
import invitation from '../../Assets/invitation_bg.png';
import inviterule from '../../Assets/inviterule.svg'
import inviterecord from '../../Assets/inviterecord.svg'
import ActivityHeader from '../../components/ActivityHeader';

const InviteFriendsComponent = () => {
  return (

    
    <div className="flex flex-col w-full max-w-md overflow-hidden rounded-lg ">
    {/* Activity Header - Placed at the Top */}
    <ActivityHeader />

    {/* Top banner section with background image */}
    <div
      className="p-4 bg-orange-500 mt-10 text-white relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${invitation})` }}
    >
      <h2 className="text-xl font-bold mb-1">Invite friends and deposit</h2>
      <p className="text-sm mb-1">Both parties can receive rewards</p>
      <p className="text-sm mb-1">Invite friends to register and recharge to receive rewards</p>
      <p className="text-sm mb-2">activity date</p>
      <p className="text-lg font-semibold">2024-05-03 - 2099-05-03</p>
      </div>
      
      {/* Navigation buttons */}
      <div className="bg-gray-800 p-3 flex justify-around">
        <div className="flex flex-col items-center">
          <img src={inviterule} alt="Rules icon" className="w-10 h-10 mb-1" />
          <span className="text-gray-400 text-xs">Invitation reward rules</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={inviterecord} alt="Record icon" className="w-10 h-10 mb-1" />
          <span className="text-gray-400 text-xs">Invitation record</span>
        </div>
      </div>
      
      {/* First Bonus section */}
      <div className="bg-gray-900 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="bg-green-500 text-white px-3 py-1 rounded-l-full text-sm">Bonus</span>
            <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center ml-1 text-sm">1</span>
            <img src="/api/placeholder/20/20" alt="Close" className="w-6 h-6 ml-1" />
          </div>
          <span className="text-amber-500">₹55.00</span>
        </div>
        
        {/* Invitee details */}
        <div className="bg-gray-800 p-3 rounded mb-2">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Number of invitees</span>
            <span className="text-white">1</span>
          </div>
        </div>
        
        <div className="bg-gray-800 p-3 rounded mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Recharge per people</span>
            <span className="text-red-500">₹300.00</span>
          </div>
        </div>
        
        <div className="border-t border-gray-700 border-dashed pt-4">
          <div className="flex justify-between mb-4">
            <div className="text-center">
              <div className="text-white font-medium mb-1">1 / 1</div>
              <div className="text-gray-400 text-xs">Number of invitees</div>
            </div>
            <div className="text-center">
              <div className="text-white font-medium mb-1">0 / 1</div>
              <div className="text-gray-400 text-xs">Deposit number</div>
            </div>
          </div>
        </div>
        
        {/* Button */}
        <button className="w-full bg-gray-500 text-white py-3 rounded text-center">
          Unfinished
        </button>
      </div>
      
      {/* Second Bonus section */}
      <div className="bg-gray-900 p-4 border-t border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="bg-green-500 text-white px-3 py-1 rounded-l-full text-sm">Bonus</span>
            <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center ml-1 text-sm">2</span>
            <img src="/api/placeholder/20/20" alt="Close" className="w-6 h-6 ml-1" />
          </div>
          <span className="text-amber-500">₹155.00</span>
        </div>
        
        {/* Invitee details */}
        <div className="bg-gray-800 p-3 rounded mb-2">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Number of invitees</span>
            <span className="text-white">3</span>
          </div>
        </div>
        
        <div className="bg-gray-800 p-3 rounded mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Recharge per people</span>
            <span className="text-red-500">₹300.00</span>
          </div>
        </div>
        
        <div className="border-t border-gray-700 border-dashed pt-4">
          <div className="flex justify-between mb-4">
            <div className="text-center">
              <div className="text-white font-medium mb-1">1 / 3</div>
              <div className="text-gray-400 text-xs">Number of invitees</div>
            </div>
            <div className="text-center">
              <div className="text-white font-medium mb-1">0 / 3</div>
              <div className="text-gray-400 text-xs">Deposit number</div>
            </div>
          </div>
        </div>
        
        {/* Button */}
        <button className="w-full bg-gray-500 text-white py-3 rounded text-center">
          Unfinished
        </button>
      </div>
      
      {/* Third Bonus section */}
      <div className="bg-gray-900 p-4 border-t border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="bg-green-500 text-white px-3 py-1 rounded-l-full text-sm">Bonus</span>
            <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center ml-1 text-sm">3</span>
            <img src="/api/placeholder/20/20" alt="Close" className="w-6 h-6 ml-1" />
          </div>
          <span className="text-amber-500">₹555.00</span>
        </div>
        
        {/* Invitee details */}
        <div className="bg-gray-800 p-3 rounded mb-2">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Number of invitees</span>
            <span className="text-white">10</span>
          </div>
        </div>
        
        <div className="bg-gray-800 p-3 rounded mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Recharge per people</span>
            <span className="text-red-500">₹300.00</span>
          </div>
        </div>
        
        <div className="border-t border-gray-700 border-dashed pt-4">
          <div className="flex justify-between mb-4">
            <div className="text-center">
              <div className="text-white font-medium mb-1">1 / 10</div>
              <div className="text-gray-400 text-xs">Number of invitees</div>
            </div>
            <div className="text-center">
              <div className="text-white font-medium mb-1">0 / 10</div>
              <div className="text-gray-400 text-xs">Deposit number</div>
            </div>
          </div>
        </div>
        
        {/* Button */}
        <button className="w-full bg-gray-500 text-white py-3 rounded text-center">
          Unfinished
        </button>
      </div>
    </div>
  );
};

export default InviteFriendsComponent;