import React, { useState } from "react";
import Promotionruleheader from "../../components/PromotionRuleHeader";
import { VscIssues } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import "./../../App.css"; // Import your CSS file
import iconround from "./../../Assets/iconround.png";
import { PiLineVerticalDuotone } from "react-icons/pi";
// Import your images
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
import RebateRatioHeader from "../../components/RebateRatioHeader";

function RebateRatio() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [img1, img2, img3, img4, img5];
  const activeImages = [
    activeImg1,
    activeImg2,
    activeImg3,
    activeImg4,
    activeImg5,
  ];
  const descriptions = ["Lottery", "Casino", "Sports", "Rummy", "Slots"];

  return (
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <RebateRatioHeader />
      <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-center mt-12">
        <div className="text-left  w-full max-w-md px-3 ">
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hidden">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg shadow-md px-8 mb-1 mt-2 flex-shrink-0 transition-all duration-300 
            ${selectedIndex === index ? "bg-gradient-to-r from-[#fae59f] to-[#c4933f]" : "bg-[#333332]"}`}
                onClick={() => setSelectedIndex(index)} // Set selected box
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
                    {descriptions[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#333332] p-3 rounded-lg shadow-md mb-2 mt-2">
            <div className="flex justify-between items-center">
              <div className="items-center ">
                <h2 className=" text-lg text-[#f5f3f0] mb-2">
                  Rebate level{" "}
                  <span className="text-[#d9ac4f] font-bold italic">L1</span>
                </h2>
                <div>
                  <div className="flex justify-between items-center">
                    {/* Icon, Vertical Line, and Text */}
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        1 level lower level commission rebate
                      </p>
                    </div>

                    {/* Value */}
                    <span className="text-[#f5f3f0] text-sm ml-16">0%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        2 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        3 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        4 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        5 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm ">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={iconround}
                        alt="File Icon"
                        className="mr-2 w-4 h-4"
                      />
                      <p className="text-[#a8a5a1] text-sm ">
                        6 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#333332] p-3 rounded-lg shadow-md mb-2 mt-4">
            <div className="flex justify-between items-center">
              <div className="items-center ">
                <h2 className="  text-lg text-[#f5f3f0] mb-2">
                  Rebate level{" "}
                  <span className="text-[#d9ac4f] font-bold italic">L2</span>
                </h2>
                <div>
                  <div className="flex justify-between items-center">
                    {/* Icon, Vertical Line, and Text */}
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        1 level lower level commission rebate
                      </p>
                    </div>

                    {/* Value */}
                    <span className="text-[#f5f3f0] text-sm ml-16">0%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        2 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        3 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        4 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        5 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm ">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={iconround}
                        alt="File Icon"
                        className="mr-2 w-4 h-4"
                      />
                      <p className="text-[#a8a5a1] text-sm ">
                        6 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#333332] p-3 rounded-lg shadow-md mb-2 mt-4">
            <div className="flex justify-between items-center">
              <div className="items-center ">
                <h2 className=" text-lg text-[#f5f3f0] mb-2">
                  Rebate level{" "}
                  <span className="text-[#d9ac4f] font-bold italic">L3</span>
                </h2>
                <div>
                  <div className="flex justify-between items-center">
                    {/* Icon, Vertical Line, and Text */}
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        1 level lower level commission rebate
                      </p>
                    </div>

                    {/* Value */}
                    <span className="text-[#f5f3f0] text-sm ml-16">0%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        2 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        3 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        4 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        5 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm ">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={iconround}
                        alt="File Icon"
                        className="mr-2 w-4 h-4"
                      />
                      <p className="text-[#a8a5a1] text-sm ">
                        6 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#333332] p-3 rounded-lg shadow-md mb-2 mt-4">
            <div className="flex justify-between items-center">
              <div className="items-center ">
                <h2 className="  text-lg text-[#f5f3f0] mb-2">
                  Rebate level{" "}
                  <span className="text-[#d9ac4f] font-bold italic">L4</span>
                </h2>
                <div>
                  <div className="flex justify-between items-center">
                    {/* Icon, Vertical Line, and Text */}
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        1 level lower level commission rebate
                      </p>
                    </div>

                    {/* Value */}
                    <span className="text-[#f5f3f0] text-sm ml-16">0%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        2 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm ml-16">
                      0%
                    </span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        3 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        4 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        5 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm ">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={iconround}
                        alt="File Icon"
                        className="mr-2 w-4 h-4"
                      />
                      <p className="text-[#a8a5a1] text-sm ">
                        6 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#333332] p-3 rounded-lg shadow-md mb-2 mt-4">
            <div className="flex justify-between items-center">
              <div className="items-center ">
                <h2 className="  text-lg text-[#f5f3f0] mb-2">
                  Rebate level{" "}
                  <span className="text-[#d9ac4f] font-bold italic">L5</span>
                </h2>
                <div>
                  <div className="flex justify-between items-center">
                    {/* Icon, Vertical Line, and Text */}
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        1 level lower level commission rebate
                      </p>
                    </div>

                    {/* Value */}
                    <span className="text-[#f5f3f0] text-sm ml-16">0%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        2 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-16 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        3 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        4 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={iconround}
                          alt="File Icon"
                          className="mr-2 w-4 h-4"
                        />
                        <PiLineVerticalDuotone className="w-[0.8px] h-2 mr-2 bg-[#d9ac4f] " />
                      </div>
                      <p className="text-[#a8a5a1] text-sm mb-2">
                        5 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm ">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={iconround}
                        alt="File Icon"
                        className="mr-2 w-4 h-4"
                      />
                      <p className="text-[#a8a5a1] text-sm ">
                        6 level lower level commission rebate
                      </p>
                    </div>
                    <span className="text-[#f5f3f0] ml-8 text-sm">0%</span>{" "}
                    {/* Add the value here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RebateRatio;
