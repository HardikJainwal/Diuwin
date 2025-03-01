import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaVolumeUp } from "react-icons/fa";

import Footer from "../components/Footer";
import Homeheader from "../components/Homeheader";
import { Element } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import aviatorImg from "../Assets/Aviator.jpg";
import cricketImg from "../Assets/cricket.png";
import limboImg from "../Assets/limbo.png";
import boomImg from "../Assets/boom.png";
import MinesProImg from "../Assets/Minespro.png";
// import originalImg from "../Assets/original.png";

import Fishingwars from "../Assets/Fishingwars.png";
import royalfishing from "../Assets/royalfishing.png";
import allstarfishing from "../Assets/allstarfishing.png";
import bombingfishing from "../Assets/bombingfishing.png";
import dinasaurtycoon from "../Assets/dinasaurtycoon.png";
// import from "../Assets/"

import baccaratImg from "../Assets/casino11.png";
import threeCardsImg from "../Assets/casino12.png";
import sedieImg from "../Assets/casino13.png";
import quicknessSpinsImg from "../Assets/casino14.png";
import fishShrimpImg from "../Assets/casino15.png";
// import detailImg from "../Assets/detail.png";
// import rouletteImg from "../Assets/roulette.png";
// import blackjackImg from "../Assets/blackjack.png";
// import pokerImg from "../Assets/poker.png";
// import baccaratSexyImg from "../Assets/baccarat_sexy.png";
// import rouletteSexyImg from "../Assets/roulette_sexy.png";
// import diceSexyImg from "../Assets/dice_sexy.png";

import jiliImg from "../gamesnav/C1.png";
import cq9Img from "../gamesnav/C2.png";
import mgImg from "../gamesnav/C3.png";
import pgImg from "../gamesnav/C4.png";
import evoImg from "../gamesnav/C5.png";

import jiliActiveImg from "../gamesnav/c6.png"; // Create these active versions
import cq9ActiveImg from "../gamesnav/c7.png"; 
import mgActiveImg from "../gamesnav/c8.png";
import pgActiveImg from "../gamesnav/c9.png";
import evoActiveImg from "../gamesnav/c10.png";

const buttonData = [
  { id: 0, title: "Jili", imgSrc: jiliImg, activeImgSrc: jiliActiveImg },
  { id: 1, title: "CQ9", imgSrc: cq9Img, activeImgSrc: cq9ActiveImg },
  { id: 2, title: "MG", imgSrc: mgImg, activeImgSrc: mgActiveImg },
  { id: 3, title: "PG", imgSrc: pgImg, activeImgSrc: pgActiveImg },
  { id: 4, title: "EVO", imgSrc: evoImg, activeImgSrc: evoActiveImg },
];

function Home() {
  const [activeButton, setActiveButton] = useState(buttonData[0].id);
  const [sliderData, setSliderData] = useState([
    {
      id: 1,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png", // Replace with your image URL
      alt: "Slide 1 Image",
    },
    {
      id: 2,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240828152235lvxc.png", // Replace with your image URL
      alt: "Slide 2 Image",
    },
    {
      id: 3,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 4,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175355rwqi.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 5,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240826140214u7o9.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 6,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 7,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 8,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 9,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 10,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 11,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
  ]);

  const [cardData, setCardData] = useState([
    {
      id: 1,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/TB_Chess/810.png", // Replace with your image URL
      alt: "Slide 1 Image",
    },
    {
      id: 2,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/45.png", // Replace with your image URL
      alt: "Slide 2 Image",
    },
    {
      id: 3,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/51.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 4,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/TB_Chess/100.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 5,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/51.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 6,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/45.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 7,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/223.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 8,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/51.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 9,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/119.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 10,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/TB_Chess/106.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
  ]);

  const slidesettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at once
    slidesToScroll: 3, // Scroll 3 slides at once
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Automatically change slides
    autoplaySpeed: 2000, // Change slide every 2 seconds
  };

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); // Update the active button state
  };

  const [lotterycardData, setlotteryCardData] = useState([
    {
      id: 1,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/lotterycategory/lotterycategory_20240730135644c9au.png", // Replace with your image URL
      alt: "Slide 1 Image",
    },
    {
      id: 2,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/lotterycategory/lotterycategory_20240730135652xdlu.png", // Replace with your image URL
      alt: "Slide 2 Image",
    },
    {
      id: 3,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/lotterycategory/lotterycategory_202407301356593l49.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
    {
      id: 4,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/lotterycategory/lotterycategory_2024073013570787wd.png", // Replace with your image URL
      alt: "Slide 3 Image",
    },
  ]);

  const cardgridData = {
    0: [
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/229.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/224.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/51.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/223.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/109.png" },
      {
        image:
          "https://thumbs.dreamstime.com/b/view-more-icon-white-background-button-sign-flat-style-264179681.jpg",
      },
      // { title: "Home Card 6", image: "https://via.placeholder.com/150" },
    ],
    1: [
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/CQ9/19.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/CQ9/117.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/CQ9/103.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/CQ9/10.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/CQ9/113.png" },
      {
        image:
          "https://thumbs.dreamstime.com/b/view-more-icon-white-background-button-sign-flat-style-264179681.jpg",
      },
    ],
    2: [
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/MG/SMG_wildfireWins.png",
      },
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/MG/SMG_10000Wishes.png",
      },
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/MG/SMG_777RoyalWheel.png",
      },
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/MG/SMG_4DiamondBlues.png",
      },
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/MG/SMG_25000Talons.png",
      },
      {
        image:
          "https://thumbs.dreamstime.com/b/view-more-icon-white-background-button-sign-flat-style-264179681.jpg",
      },
    ],
    3: [
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/PG/103.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/PG/54.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/PG/87.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/PG/98.png" },
      { image: "https://ossimg.diuacting.com/DiuWin/gamelogo/PG/40.png" },
      {
        image:
          "https://thumbs.dreamstime.com/b/view-more-icon-white-background-button-sign-flat-style-264179681.jpg",
      },
    ],
    4: [
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/EVO_Electronic/reelheist0000000.png",
      },
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/EVO_Electronic/grandwheel000000.png",
      },
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/EVO_Electronic/777strike0000000.png",
      },
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/EVO_Electronic/777superstrike00.png",
      },
      {
        image:
          "https://ossimg.diuacting.com/DiuWin/gamelogo/EVO_Electronic/101candiesr96f10.png",
      },
      {
        image:
          "https://thumbs.dreamstime.com/b/view-more-icon-white-background-button-sign-flat-style-264179681.jpg",
      },
    ],
  };
  const [activeTab, setActiveTab] = useState("DG");

  const gameData = {
    DG: [
      { id: 1, image: baccaratImg, name: "Baccarat" },
      { id: 2, image: threeCardsImg, name: "THREE CARDS" },
      { id: 3, image: sedieImg, name: "Sedie" },
      { id: 4, image: quicknessSpinsImg, name: "QUICKNESS SPINS" },
      { id: 5, image: fishShrimpImg, name: "Fish Shrimp" },
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Original games data with correct image references
  const originalGames = [
    { name: "Aviator", img: aviatorImg },
    { name: "Cricket", img: cricketImg },
    { name: "Mines Pro", img: MinesProImg },
    { name: "Limbo", img: limboImg },
    { name: "Boom", img: boomImg },
  ];

  // Fishing games data with correct image references
  const fishingGames = [
    { name: "Fishingwars", img: Fishingwars },
    { name: "royalfishing", img: royalfishing },
    { name: "allstarfishing", img: allstarfishing },
    { name: "bombingfishing", img: bombingfishing },
    { name: "dinasaurtycoon", img: dinasaurtycoon },
    // { name: "Original", img: originalImg },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-custom-light-gray">
      <Homeheader />

      <div className="shadow-md w-full max-w-md h-full mt-0 flex flex-col justify-center bg-custom-light-gray">
        <div className="w-full py-4 bg-custom-light-gray">
          <div className="container mx-auto px-4">
            <Slider {...settings}>
              {sliderData.map((slide) => (
                <img
                  key={slide.id}
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="bg-custom-light-gray p-4 shadow-md w-full max-w-md h-full mt-0 flex flex-col justify-center">
        <div className="bg-white p-2 rounded-full shadow-md mt-0">
          <div className="flex justify-between items-center w-full">
            <FaVolumeUp className="text-custom-blue ml-2 text-2xl" />
            <button className="bg-custom-blue text-white p-2 px-8 rounded-full">
              Detail
            </button>
          </div>
        </div>
      </div>

      <div className="bg-custom-light-gray px-4 shadow-md w-full max-w-md h-full mt-0 flex flex-col justify-center">
        <div className="container">
          <div className="relative">
            {/* Image carousel with images starting from left */}
            <div
              id="image-carousel"
              className="flex overflow-x-auto scrollbar-hidden snap-x snap-mandatory scroll-smooth py-4 gap-4 hide-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                scrollSnapType: "x mandatory",
              }}
            >
              {/* Removed empty placeholder div */}
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className="flex-shrink-0 w-16 h-16 snap-center transform transition hover:scale-110"
              >
                <img
                  src="https://ossimg.diuacting.com/DiuWin/gamecategory/gamecategory_20240722092552pj7d.png"
                  alt="Go to Section 2"
                  className="w-16 h-16 rounded-lg object-cover shadow-md"
                />
              </Link>
              <Link
                to="section3"
                smooth={true}
                duration={500}
                className="flex-shrink-0 w-16 h-16 snap-center transform transition hover:scale-110"
              >
                <img
                  src="https://ossimg.diuacting.com/DiuWin/gamecategory/gamecategory_20240722092542sh85.png"
                  alt="Go to Section 3"
                  className="w-16 h-16 rounded-lg object-cover shadow-md"
                />
              </Link>
              <Link
                to="section1"
                smooth={true}
                duration={500}
                className="flex-shrink-0 w-16 h-16 snap-center transform transition hover:scale-110"
              >
                <img
                  src="https://ossimg.diuacting.com/DiuWin/gamecategory/gamecategory_20240722092452swfv.png"
                  alt="Go to Section 1"
                  className="w-16 h-16 rounded-lg object-cover shadow-md"
                />
              </Link>
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className="flex-shrink-0 w-16 h-16 snap-center transform transition hover:scale-110"
              >
                <img
                  src="https://ossimg.diuacting.com/DiuWin/gamecategory/gamecategory_20240722092502uryl.png"
                  alt="Go to Section 2"
                  className="w-16 h-16 rounded-lg object-cover shadow-md"
                />
              </Link>
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className="flex-shrink-0 w-16 h-16 snap-center transform transition hover:scale-110"
              >
                <img
                  src="https://ossimg.diuacting.com/DiuWin/gamecategory/gamecategory_20240722092524eyc6.png"
                  alt="Go to Section 2"
                  className="w-16 h-16 rounded-lg object-cover shadow-md"
                />
              </Link>
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className="flex-shrink-0 w-16 h-16 snap-center transform transition hover:scale-110"
              >
                <img
                  src="https://ossimg.diuacting.com/DiuWin/gamecategory/gamecategory_20240722092533461f.png"
                  alt="Go to Section 2"
                  className="w-16 h-16 rounded-lg object-cover shadow-md"
                />
              </Link>
              <Link
                to="section3"
                smooth={true}
                duration={500}
                className="flex-shrink-0 w-16 h-16 snap-center transform transition hover:scale-110"
              >
                <img
                  src="https://ossimg.diuacting.com/DiuWin/gamecategory/gamecategory_20240722092510alv1.png"
                  alt="Go to Section 3"
                  className="w-16 h-16 rounded-lg object-cover shadow-md"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-light-gray p-4 w-full max-w-md h-full mt-0 flex flex-col justify-center">
        <h2 className="text-2xl text-white">Slots</h2>
        <p className="text-sm text-gray-400">
          Online real-time game dealers, all verified fair games
        </p>
      </div>
      <div className="bg-custom-light-gray px-4 shadow-md w-full max-w-md h-full mb-0 flex flex-col justify-center">
        {/* Button Container */}
        <div className="bg-gray-900 rounded-lg shadow-md mb-4">
  <div className="button-container justify-center flex" style={{ gap: "0px" }}>
    {buttonData.map((button) => (
      <button
        key={button.id}
        onClick={() => handleButtonClick(button.id)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "120px",
          padding: "10px 0",
          borderRadius: "8px",
          border: "none",
          backgroundColor: activeButton === button.id ? "#ffa31a" : "#f5f5f5", // Golden when active
          color: "#333",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (activeButton !== button.id) e.target.style.backgroundColor = "#ffa31a";
        }}
        onMouseLeave={(e) => {
          if (activeButton !== button.id) e.target.style.backgroundColor = "#f5f5f5";
        }}
      >
        <img
          src={activeButton === button.id ? button.activeImgSrc : button.imgSrc}
          alt={button.title}
          style={{
            width: activeButton === button.id ? "40px" : "30px", // Increase image size when active
            height: activeButton === button.id ? "40px" : "30px",
            objectFit: "contain",
            marginBottom: "2px",
            transition: "all 0.3s ease",
          }}
        />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>
          {button.title}
        </span>
      </button>
    ))}
  </div>
</div>




        {/* Card Grid */}
        <div className="grid grid-cols-3 gap-4 rounded-lg">
          {cardgridData[activeButton]?.map((card, index) => (
            <div
              key={index}
              className="rounded-lg text-center hover:shadow-lg transition-all duration-300"
            >
              {/* Access the specific properties of the object */}
              <img
                src={card.image} // Access the 'image' property
                alt={card.title} // Access the 'title' property for alt text
                className="w-full h-auto object-cover rounded-md mb-2"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-custom-light-gray px-4 shadow-md w-full max-w-md h-full mt-0 flex flex-col justify-center">
        <div className="bg-custom-light-gray max-w-md h-full mt-0 flex flex-col justify-center">
          <h2 className="text-2xl text-white">Lottery</h2>
          <p className="text-sm text-gray-400">
            when you win a super jackpot, you will receive additional rewards
          </p>
        </div>

        <div className="w-full py-4 bg-custom-light-gray">
          <div className="container mx-auto flex flex-col items-center gap-6">
            <div className="flex justify-center gap-6">
              {lotterycardData.slice(0, 3).map((slide) => (
                <div key={slide.id} className="w-[120px]">
                  <img
                    src={slide.imgSrc}
                    alt={slide.alt}
                    className="w-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
            <div className="w-[120px] self-start">
              <img
                src={lotterycardData[3].imgSrc}
                alt={lotterycardData[3].alt}
                className="w-full object-cover rounded-lg shadow-lg ml-2"
              />
            </div>
          </div>
        </div>
        <div className="w-full py-6">
          <div className="container mx-auto">
            {/* Title */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
                <span className="w-2 h-6 bg-green-500 inline-block rounded-sm"></span>{" "}
                Original
              </h2>
              <p className="text-gray-400 text-sm">
                The games are independently developed by our team, fun, fair,
                and safe
              </p>
            </div>

            {/* Cards Grid - Using properly imported image variables */}
            <div className="grid grid-cols-3 gap-4">
              {originalGames.map((game, index) => (
                <div key={index} className="relative">
                  {/* Background Image - Using the imported image variables */}
                  <img
                    src={game.img}
                    alt={game.name}
                    className="w-[250px] h-[180px] object-contain rounded-lg "
                  />
                  {/* Text Overlay */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full py-6">
          <div className="container mx-auto">
            {/* Title */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
                <span className="w-2 h-6 bg-green-500 inline-block rounded-sm"></span>{" "}
                Fishing
              </h2>
              <p className="text-gray-400 text-sm">
                Classic arcade gameplay, super cool visual enjoyment
              </p>
            </div>

            {/* Cards Grid - Using properly imported image variables */}
            <div className="grid grid-cols-3 gap-4">
              {fishingGames.map((game, index) => (
                <div key={index} className="relative ">
                  {/* Background Image - Using the imported image variables */}
                  <img
                    src={game.img}
                    alt={game.name}
                    className="   w-[250px] h-[180px] object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-custom-light-gray p-4 rounded-lg max-w-md mx-auto">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
              <span className="w-2 h-6 bg-green-500 inline-block rounded-sm"></span>{" "}
              Live Casino
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Guided by live dealers, you will experience the fun of baccarat
            </p>
          </div>

          {/* Tabs */}
          <div className="flex mb-4 bg-gray-900 rounded-lg p-1">
            <button
              onClick={() => handleTabChange("DG")}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center ${
                activeTab === "DG" ? "bg-green-500 text-white" : "text-gray-400"
              }`}
            >
              <span className="font-bold">DG</span>
            </button>
            <button
              onClick={() => handleTabChange("EVO_Video")}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center ${
                activeTab === "EVO_Video"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400"
              }`}
            >
              <span>EVO_Video</span>
            </button>
            <button
              onClick={() => handleTabChange("SEXY_Video")}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center ${
                activeTab === "SEXY_Video"
                  ? "bg-purple-500 text-white"
                  : "text-gray-400"
              }`}
            >
              <span>SEXY_Video</span>
            </button>
          </div>

          {/* Game Grid */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 mb-10">
            {gameData[activeTab]?.map((game) => (
              <div
                key={game.id}
                className="relative overflow-hidden rounded-lg"
              >
                <div
                  className="relative h-40 w-full overflow-hidden rounded-lg"
                  style={{ backgroundColor: game.color }}
                >
                  <img
                    src={game.image}
                    alt={game.name || "Casino game"}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default Home;
