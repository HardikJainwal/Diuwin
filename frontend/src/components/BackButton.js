import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="p-2 rounded-full hover:bg-gray-700 transition duration-300"
      aria-label="Go Back"
    >
      <IoIosArrowBack className="text-[#f5f3f0] text-xl cursor-pointer ml-2" />
    </button>
  );
};

export default BackButton;
