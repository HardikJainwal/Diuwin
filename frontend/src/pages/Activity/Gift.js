import React from "react";
import ActivityAwardHeader from "../../components/ActivityAwardHeader";
import Footer from "./../../components/Footer";
import { GiBackwardTime } from "react-icons/gi";
import { BsFileEarmarkRuled } from "react-icons/bs";
import SuperJackpot from "../../components/SuperJackpot";
import { PiCrown } from "react-icons/pi";
import { AiFillAppstore } from "react-icons/ai";
import GiftHeader from "../../components/GiftHeader";
import { VscEmptyWindow } from "react-icons/vsc";
import { BiNotepad } from "react-icons/bi";
import Giftbg from "../../Assets/giftbg.png";
import iconhistory from "../../Assets/iconhistory.png";
import empty from "../../Assets/empty.png";

const Gift = () => {
  return (
    <div className="bg-[#242424] min-h-screen flex flex-col items-start">
      <GiftHeader />
      {/* Left 1/4 image section */}
      <div className="text-center w-[412px] max-w-md px-[2px] mt-[49px]">
        <img
          src={Giftbg}
          alt="Descriptive text"
          className="w-full h-[200px] object-cover"
        />
      </div>

      <div className="w-full flex px-3 flex-col items-center justify-center">
        <div className="bg-[#333332] mt-1 p-4 rounded-lg shadow-md mb-2  w-full">
          <div class="flex flex-col items-start">
            <h2 class="text-sm font-semibold text-[#a8a5a1]">Hi</h2>
            <h2 class="text-sm font-semibold text-[#a8a5a1]">
              We have a gift for you
            </h2>
          </div>

          <div class="flex flex-col items-start">
            <h2 class="text-sm font-semibold  mt-8  text-[#f5f3f0]">
              Please enter the gift code below
            </h2>
          </div>

          <div class="mt-4 ">
            <input
              type="text"
              placeholder="Please enter gift code"
              class="w-full bg-[#242424] py-3 px-6 rounded-full  "
            />
          </div>

          <button class="mt-8 mb-8 w-full py-3 rounded-full bg-gradient-to-r from-[#fae59f] to-[#c4933f] text-[#8f5206]">
            Receive
          </button>
        </div>
        <div className="bg-[#333332] p-4 rounded-lg shadow-md mb-2 mt-3 w-full">
        <div className="flex items-center">
  <img
    src={iconhistory}
    alt="Descriptive text"
    className="w-5 h-5 mr-2 object-cover"
  />
  <h2 className="text-lg text-[#f5f3f0]">History</h2>
</div>

          <div className="flex items-center mb-36 justify-center">
            <img
              src={empty}
              alt="No Data"
              className="w-48 h-52 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
