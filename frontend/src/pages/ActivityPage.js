import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaLock,
  FaQuestionCircle,
  FaKey,
} from "react-icons/fa";
import Footer from "../components/Footer";
import invitationBonus from "./../Assets/invitationBonus.png";
import ActivityHeader from "../components/ActivityHeader";
import signInBanner from '../Assets/signInBanner.png'
import giftRedeem from '../Assets/giftRedeem.png'
import BettingRebate from '../Assets/BettingRebate.png'
import superJackpot from '../Assets/superJackpot.png'

function ActivityPage() {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setverificationCode] = useState("");
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);
  const handleverificationCodeChange = (event) =>
    setverificationCode(event.target.value);
  const handlePrivacyAgreementChange = (event) =>
    setPrivacyAgreement(event.target.checked);
  const handleRememberPasswordChange = (event) =>
    setRememberPassword(event.target.checked);

  const handleSendVerificationCode = () => {
    // Logic to send verification code
    console.log("Verification code sent!");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const loginData = isPhoneLogin
      ? { phoneNumber, password }
      : { email, password };
    console.log("Login data:", loginData);
    console.log("Remember password:", rememberPassword);
    console.log("verification code:", verificationCode);
    console.log("Privacy agreement accepted:", privacyAgreement);
  };

  return (
    <div className="bg-[#242424] min-h-screen w-full flex flex-col items-center justify-center">
      <ActivityHeader />
      <div className="text-left mb-0 w-full max-w-md px-4 mt-16">
        <h1 className="text-xl text-white mb-1">Activity</h1>
        <p className="text-white text-xs sm:text-base">
          Please Remember to follow the event page
          <br />
          We will launch user feedback activities from time to time
        </p>
      </div>

      <div className="bg-custom-dark-gray p-4 shadow-md w-full max-w-md h-full mt-2 flex flex-col justify-between">
        <div className="grid grid-cols-3 text-[#a8a5a1] items-center mb-2">
          <div className="text-center">
            <Link to="/activityaward">
              <img
                src={invitationBonus}
                alt="Target"
                className="w-12 h-12 mx-auto"
              />
              <div className="text-xs mt-2">
                Invitation <br /> bonus
              </div>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/rebate">
              <img
                src={superJackpot}
                alt="Idea"
                className="w-12 h-12 mx-auto"
              />
              <div className="text-xs mt-2">
                Activity
                <br />
                Award
              </div>{" "}
            </Link>
          </div>
          <div className="text-center">
            <Link to="/jackpot">
              <img
                src={BettingRebate}
                alt="Idea"
                className="w-12 h-12 mx-auto"
              />
              <div className="text-xs mt-2">
                Betting
                <br />
                Rebate
              </div>{" "}
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center mb-0">
          <div className="flex justify-between items-center mb-4">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="h-48 bg-custom-light-gray rounded-lg shadow-md flex flex-col">
                <Link to="/Gift">
                  <div className="w-full h-2/4 mb-2">
                    <img
                      src={signInBanner}
                      alt="description"
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="w-full h-1/4 flex flex-col items-left justify-center mb-8 p-2">
                    <h2 className="text-sm text-[#f5f3f0] font-semibold mb-1 ">
                      Gifts
                    </h2>
                    <p className="text-[#a8a5a1] text-xs ">
                      Enter the redemption code to receive gift rewards
                    </p>
                  </div>
                </Link>
              </div>

              <div className="h-48 bg-custom-light-gray rounded-lg shadow-md flex flex-col">
                <Link to="/AttendanceBonus">
                  <div className="w-full h-2/4 mb-2">
                    <img
                      src={giftRedeem}
                      alt="description"
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="w-full h-1/4 flex flex-col items-left justify-center mb-8 p-2">
                    <h2 className="text-sm text-[#f5f3f0] font-semibold">
                      Attendance Bonus
                    </h2>
                    <p className="text-[#a8a5a1] text-xs ">
                      The more consecutive days you sign in, the higher the
                      reward will be.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-custom-light-gray rounded-lg shadow-md flex flex-col mb-4">
          <div>
            <img
              src="https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827180534ickk.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center  p-2">
            <h2 className="text-lg text-[#f5f3f0] font-semibold">
              First Deposit Bonus
            </h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-custom-light-gray rounded-lg shadow-md flex flex-col mb-4">
          <div>
            <img
              src="https://ossimg.diuacting.com/DiuWin/banner/Banner_20240827175709gnr5.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center p-2">
            <h2 className="text-lg text-[#f5f3f0] font-semibold">
              Daily Bonus
            </h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-custom-light-gray rounded-lg shadow-md flex flex-col mb-4">
          <div>
            <img
              src="https://ossimg.diuacting.com/DiuWin/banner/Banner_20240828174930butj.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center  p-2">
            <h2 className="text-lg text-[#f5f3f0] font-semibold">
              Aviator Challenger
            </h2>
            {/* <p className="text- gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-custom-light-gray rounded-lg shadow-md flex flex-col mb-4">
          <div>
            <img
              src="https://ossimg.diuacting.com/DiuWin/banner/Banner_20240828175051yb1x.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center  p-2">
            <h2 className="text-lg text-[#f5f3f0] font-semibold">
              Lucky 10 days
            </h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-custom-light-gray rounded-lg shadow-md flex flex-col mb-4">
          <div>
            <img
              src="https://ossimg.diuacting.com/DiuWin/banner/Banner_20240828175144x8p1.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center p-2">
            <h2 className="text-lg text-[#f5f3f0] font-semibold">
              wingo win streak Bonus
            </h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-custom-light-gray rounded-lg shadow-md flex flex-col mb-14">
          <div>
            <img
              src="https://ossimg.diuacting.com/DiuWin/banner/Banner_202408291537368dtv.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center p-2">
            <h2 className="text-lg text-[#f5f3f0] font-semibold">
              Diuwin Content Creators
            </h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ActivityPage;