import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaVolumeUp } from "react-icons/fa";

import Footer from "../components/Footer";
import Homeheader from "../components/Homeheader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import speakar from '../Assets/Homeicon/speakar.png';
import hot from '../Assets/Homeicon/hot.svg';
import smallbg from '../Assets/Homeicon/smallbg.png';
import bg from '../Assets/Homeicon/bg.png';

import wingo from "../Assets/wingo.png";
import D from "../Assets/D.png";
import K from '../Assets/K.png';
import Tir from "../Assets/tir.png";

import aviatorImg from "../Assets/Aviator.jpg";
import cricketImg from "../Assets/cricket.png";
import limboImg from "../Assets/limbo.png";
import boomImg from "../Assets/boom.png";
import MinesProImg from "../Assets/Minespro.png";
import Fishingwars from "../Assets/Fishingwars.png";
import royalfishing from "../Assets/royalfishing.png";
import allstarfishing from "../Assets/allstarfishing.png";
import bombingfishing from "../Assets/bombingfishing.png";
import dinasaurtycoon from "../Assets/dinasaurtycoon.png";

import baccaratImg from "../Assets/casino11.png";
import threeCardsImg from "../Assets/casino12.png";
import sedieImg from "../Assets/casino13.png";
import quicknessSpinsImg from "../Assets/casino14.png";
import fishShrimpImg from "../Assets/casino15.png";

import jiliImg from "../gamesnav/C1.png";
import cq9Img from "../gamesnav/C2.png";
import mgImg from "../gamesnav/C3.png";
import pgImg from "../gamesnav/C4.png";
import evoImg from "../gamesnav/C5.png";

import jiliActiveImg from "../gamesnav/c6.png";
import cq9ActiveImg from "../gamesnav/c7.png";
import mgActiveImg from "../gamesnav/c8.png";
import pgActiveImg from "../gamesnav/c9.png";
import evoActiveImg from "../gamesnav/c10.png";

import lotteryIcon from "../Assets/Gamecategory/gc4.png";
import originalIcon from "../Assets/Gamecategory/gc8.png";
import slotsIcon from "../Assets/Gamecategory/gc6.png";
import sportsIcon from "../Assets/Gamecategory/gc1.png";
import popularIcon from "../Assets/Gamecategory/gc5.png";
import casinoIcon from "../Assets/Gamecategory/gc2.png";
import rummyIcon from "../Assets/Gamecategory/gc7.png";
import fishingIcon from "../Assets/Gamecategory/gc3.png";

const gameCategories = [
  {
    id: 1,
    title: "Lottery",
    image: lotteryIcon,
  },
  {
    id: 2,
    title: "Original",
    image: originalIcon,
  },
  {
    id: 3,
    title: "Slots",
    image: slotsIcon,
  },
  {
    id: 4,
    title: "Sports",
    image: sportsIcon,
  },
  {
    id: 5,
    title: "Popular",
    image: popularIcon,
  },
  {
    id: 6,
    title: "Casino",
    image: casinoIcon,
  },
  {
    id: 7,
    title: "Rummy",
    image: rummyIcon,
  },
  {
    id: 8,
    title: "Fishing",
    image: fishingIcon,
  },
];

// GameCategory component for the gaming platform menu
const GameCategory = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow"
      style={{ background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)" }}
    >
      <div className="w-full h-24 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-2"
        />
      </div>
      <div className="w-full bg-[#FAE59F] bg-opacity-0 py-1 text-center">
        <span className="text-gray-800 font-bold ">{title}</span>
      </div>
    </div>
  );
};


// Button data definition that was missing
const buttonData = [
  { id: 0, name: "JILI", image: jiliImg, activeImage: jiliActiveImg },
  { id: 1, name: "CQ9", image: cq9Img, activeImage: cq9ActiveImg },
  { id: 2, name: "MG", image: mgImg, activeImage: mgActiveImg },
  { id: 3, name: "PG", image: pgImg, activeImage: pgActiveImg },
  { id: 4, name: "EVO", image: evoImg, activeImage: evoActiveImg },
];

function Home() {
  const [activeButton, setActiveButton] = useState(buttonData[0].id);
  const [sliderData, setSliderData] = useState([
    {
      id: 1,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png",
      alt: "Slide 1 Image",
    },
    {
      id: 2,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240828152235lvxc.png",
      alt: "Slide 2 Image",
    },
    {
      id: 3,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png",
      alt: "Slide 3 Image",
    },
    {
      id: 4,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175355rwqi.png",
      alt: "Slide 3 Image",
    },
    {
      id: 5,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240826140214u7o9.png",
      alt: "Slide 3 Image",
    },
    {
      id: 6,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png",
      alt: "Slide 3 Image",
    },
    {
      id: 7,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png",
      alt: "Slide 3 Image",
    },
    {
      id: 8,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png",
      alt: "Slide 3 Image",
    },
    {
      id: 9,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png",
      alt: "Slide 3 Image",
    },
    {
      id: 10,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png",
      alt: "Slide 3 Image",
    },
    {
      id: 11,
      imgSrc:
        "https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175238lien.png",
      alt: "Slide 3 Image",
    },
  ]);

  const [cardData, setCardData] = useState([
    {
      id: 1,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/TB_Chess/810.png",
      alt: "Slide 1 Image",
    },
    {
      id: 2,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/45.png",
      alt: "Slide 2 Image",
    },
    {
      id: 3,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/51.png",
      alt: "Slide 3 Image",
    },
    {
      id: 4,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/TB_Chess/100.png",
      alt: "Slide 3 Image",
    },
    {
      id: 5,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/51.png",
      alt: "Slide 3 Image",
    },
    {
      id: 6,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/45.png",
      alt: "Slide 3 Image",
    },
    {
      id: 7,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/223.png",
      alt: "Slide 3 Image",
    },
    {
      id: 8,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/51.png",
      alt: "Slide 3 Image",
    },
    {
      id: 9,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/JILI/119.png",
      alt: "Slide 3 Image",
    },
    {
      id: 10,
      imgSrc: "https://ossimg.diuacting.com/DiuWin/gamelogo/TB_Chess/106.png",
      alt: "Slide 3 Image",
    },
  ]);

  // Updated slider settings for better mobile experience
  const slidesettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Changed to 1 for small screens
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

 
  const [lotterycardData, setlotteryCardData] = useState([
    {
      id: 1,
      imgSrc: wingo,
      alt: "Slide 1 Image",
      title: "Wingo " // Add title for each lottery
    },
    {
      id: 2,
      imgSrc: K,
      alt: "Slide 2 Image",
      title: "K3 "
    },
    {
      id: 3,
      imgSrc: D,
      alt: "Slide 3 Image",
      title: "5D "
    },
    {
      id: 4,
      imgSrc: Tir,
      alt: "Slide 4 Image",
      title: "Tirx"
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
    EVO_Video: [
      // Added missing data for other tabs
      { id: 1, image: baccaratImg, name: "EVO Baccarat" },
      { id: 2, image: threeCardsImg, name: "EVO THREE CARDS" },
      { id: 3, image: sedieImg, name: "EVO Sedie" },
    ],
    SEXY_Video: [
      { id: 1, image: baccaratImg, name: "SEXY Baccarat" },
      { id: 2, image: threeCardsImg, name: "SEXY THREE CARDS" },
      { id: 3, image: sedieImg, name: "SEXY Sedie" },
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
  ];

  return (
    <div className="flex flex-col items-center bg-custom-light-gray min-h-screen w-full">
      <Homeheader />

      {/* Main container with fixed width for mobile */}
      <div className="w-full max-w-md mx-auto flex flex-col">
        {/* Main slider */}
        <div className="w-full px-2 py-2">
          <Slider {...settings}>
            {sliderData.map((slide) => (
              <div key={slide.id} className="px-1">
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Speaker section */}
        <div className="w-full px-2 py-2">
          <div className="bg-white p-2 rounded-full shadow-md">
            <div className="flex justify-between items-center w-full">
              <img src={speakar} alt="Speaker Icon" className="w-8 h-8 ml-2" />
              <button className="bg-gradient-to-r from-[#FAE59F] to-[#C4933F] p-1 rounded-lg flex items-center space-x-2">
                <img src={hot} alt="Hot Icon" className="w-4 h-4" />
                <span>Detail</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category carousel */}
        <div className="w-full px-2 py-2">
          <div className="overflow-x-auto">
            <div className="flex space-x-2 py-2">
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className="flex-shrink-0 w-16 h-16 transform transition hover:scale-110"
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
                className="flex-shrink-0 w-16 h-16 transform transition hover:scale-110"
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
                className="flex-shrink-0 w-16 h-16 transform transition hover:scale-110"
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
                className="flex-shrink-0 w-16 h-16 transform transition hover:scale-110"
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
                className="flex-shrink-0 w-16 h-16 transform transition hover:scale-110"
              >
                <img
                  src="https://ossimg.diuacting.com/DiuWin/gamecategory/gamecategory_20240722092524eyc6.png"
                  alt="Go to Section 2"
                  className="w-16 h-16 rounded-lg object-cover shadow-md"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Game categories */}
        <div className="w-full px-2 py-2">
          {/* First row - 3 items with gaps */}
          <div className="flex w-full gap-2 mb-2">
            {gameCategories.slice(0, 3).map((category, index) => (
              <div
                key={category.id}
                className="flex-1"
              >
                <div
                  className="flex flex-col items-center overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow h-full rounded-lg"
                  style={{
                    backgroundImage: `url(${smallbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="w-full h-16 flex items-center justify-center">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="w-full py-1 text-center bg-opacity-30">
                    <span className="text-gray-800 text-xs font-bold">{category.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row - 3 items */}
          <div className="flex w-full mb-2">
            {gameCategories.slice(3, 6).map((category, index) => (
              <div
                key={category.id}
                className="flex-1"
              >
                <div
                  className={`flex flex-col items-center overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow h-full ${
                    index === 0 ? 'rounded-l-lg' : 
                    index === gameCategories.slice(3, 6).length - 1 ? 'rounded-r-lg' : ''
                  }`}
                  style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="w-full h-16 flex items-center justify-center">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="w-full py-1 text-center bg-opacity-30">
                    <span className="text-gray-800 text-xs font-bold">{category.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Third row - 2 items with gaps */}
          <div className="flex w-full gap-2">
            {gameCategories.slice(6, 8).map((category, index) => (
              <div key={category.id} className="flex-1">
                <div
                  className="flex flex-row items-center overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow h-16 rounded-lg"
                  style={{
                    backgroundImage: `url(${smallbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Image on the Left */}
                  <div className="w-1/3 h-full flex items-center justify-center p-2">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text on the Right */}
                  <div className="w-2/3 text-left px-2">
                    <span className="text-gray-800 text-xs font-bold">{category.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Lottery Section */}
<div className="bg-custom-light-gray w-full max-w-md px-4">
  <div className="w-full">
    <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
      <span className="w-2 h-6 bg-[#C4933F] inline-block rounded-sm"></span>
      Lottery
    </h2>
    <p className="text-sm text-gray-400 px-2">
      when you win a super jackpot, you will receive additional rewards
    </p>
  </div>

  {/* Fixed lottery card layout for mobile */}
  <div className="w-full py-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-2">
        {lotterycardData.slice(0, 3).map((slide) => (
          <div key={slide.id} className="w-full">
            <div className="relative">
              <img
                src={slide.imgSrc}
                alt={slide.alt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              {/* Overlay text on the image */}
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 p-1 rounded-b-lg">
                <p className="text-[#ffee6a] text-base text-center font-bold">{slide.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <div className="relative w-1/3">
          <img
            src={lotterycardData[3].imgSrc}
            alt={lotterycardData[3].alt}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          {/* Overlay text on the image */}
          <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 p-1 rounded-b-lg">
            <p className="text-[#ffee6a] text-base text-center font-bold">{lotterycardData[3].title}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Original Games Section */}
  <div className="w-full py-4">
    <div className="container mx-auto">
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
          <span className="w-2 h-6 bg-[#C4933F] inline-block rounded-sm"></span>
          Original
        </h2>
        <p className="text-gray-400 text-sm">
          The games are independently developed by our team, fun, fair,
          and safe
        </p>
      </div>

      {/* Fixed Original Games Grid */}
      <div className="grid grid-cols-3 gap-2">
        {originalGames.map((game, index) => (
          <div key={index} className="relative">
            <img
              src={game.img}
              alt={game.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Fishing Games Section */}
  <div className="w-full py-4">
    <div className="container mx-auto">
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
          <span className="w-2 h-6 bg-[#C4933F] inline-block rounded-sm"></span>
          Fishing
        </h2>
        <p className="text-gray-400 text-sm">
          Classic arcade gameplay, super cool visual enjoyment
        </p>
      </div>

      {/* Fixed Fishing Games Grid */}
      <div className="grid grid-cols-3 gap-2">
        {fishingGames.map((game, index) => (
          <div key={index} className="relative">
            <img
              src={game.img}
              alt={game.name}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Live Casino Section */}
  <div className="pb-10">
  <div className="grid grid-cols-3 gap-2">
    {gameData[activeTab]?.map((game, index) => (
      <div key={index} className="relative">
        <img
          src={game.image}
          alt={game.name || "Casino game"}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    ))}
  </div>
</div>

      {/* Tabs - Made more responsive for mobile */}
      <div className="flex mb-2 bg-gray-900 rounded-lg p-1 overflow-x-auto">
        <button
          onClick={() => handleTabChange("DG")}
          className={`flex-1 py-2 px-2 rounded-lg flex items-center justify-center ${
            activeTab === "DG" ? "bg-[#C4933F] text-white" : "text-gray-400"
          }`}
        >
          <span className="font-bold text-sm">DG</span>
        </button>
        <button
          onClick={() => handleTabChange("EVO_Video")}
          className={`flex-1 py-2 px-2 rounded-lg flex items-center justify-center ${
            activeTab === "EVO_Video"
              ? "bg-[#C4933F] text-white"
              : "text-gray-400"
          }`}
        >
          <span className="text-sm">EVO_Video</span>
        </button>
        <button
          onClick={() => handleTabChange("SEXY_Video")}
          className={`flex-1 py-2 px-2 rounded-lg flex items-center justify-center ${
            activeTab === "SEXY_Video"
              ? "bg-[#C4933F] text-white"
              : "text-gray-400"
          }`}
        >
          <span className="text-sm">SEXY_Video</span>
        </button>
      </div>

      <div className="pb-10">
        <div className="grid grid-cols-3 gap-2">
          {gameData[activeTab]?.map((game, index) => (
            <div key={index} className="relative">
              <img
                src={game.image}
                alt={game.name || "Casino game"}
                className="w-full h-auto object-cover rounded-lg"
              />
             </div>
    ))}
  </div>
</div>

{/* These elements need to be inside the main container div */}
</div> {/* This is likely closing some other div */}
</div> {/* This is likely closing the main container */}

{/* The br and Footer are outside the main container, which causes the error */}
<br></br>
<Footer />
</div>
  );
}

export default Home;

