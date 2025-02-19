import React, { useState } from "react";
import Promotionheader from "./../components/Promotionheader";
import { FaGreaterThan } from "react-icons/fa6";
import CopyLink from "./../Assets/copy link.png";
import Commission from "./../Assets/commission.png";
import Money from "./../Assets/money.png";
import RebateRatio from "./../Assets/rebateRatio.png";
import Rule from "./../Assets/rule.png";
import Right from "./../Assets/right.png";
// import { fetchPromotionData } from "../redux/Slice/PromotionSlice";
import Server from "./../Assets/server.png";
import service_feedback from "./../Assets/service_feedback.png";
import Team_port from "./../Assets/team_port.png";
import Background from "./../Assets/bg.png";
import promotionbg from "./../Assets/promotionbg.png";
import directsubordinate from "./../Assets/directsubordinate.png";
import teamsubordinate from "./../Assets/teamsubordinates.png";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaLock,
  FaQuestionCircle,
  FaKey,
  FaHome,
  FaUser,
  FaBell,
  FaCog,
  FaRegFileAlt,
  FaRegCopy,
} from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import Footer from "../components/Footer";

function PromotionPage() {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setverificationCode] = useState("");
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  // const dispatch = useDispatch();

  // const { data, isLoading, isError } = useSelector((state) => state.promotion);

  // useEffect(() => {
  //   dispatch(fetchPromotionData());
  // }, [dispatch]);

  const invitationCode = "185853395581";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(invitationCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

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
    <div className="relative">
      <Promotionheader className="fixed top-0 left-0  z-50" />
      <div
        className=" min-h-screen w-[412px] flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <img
          src={promotionbg}
          alt="Foreground"
          className="absolute z-10 top-0 w-full  object-cover "
        />
        <div className="text-left z-20 w-full max-w-md px-8 mt-6">
          <h1 className="text-[#8f5206] text-2xl text-center">0</h1>
          <button
            type="submit"
            className="w-56 ml-20 text-center mt-2 text-sm bg-custom-light-gray text-[#d9ac4f] py-2 rounded-full hover:bg-custom-blue focus:ring-2 focus:ring-gray-300"
          >
            Yesterday's total Commission
          </button>
          <p className="text-[#8f5206] text-xs text-center mt-2 ">
            Upgrade the level to increase commission income
          </p>
        </div>

        <div className="h-[60%] bg-[#242424] px-4  w-full max-w-md h-full mt-2 flex flex-col">
          <table className="table-auto mb-4 z-30 rounded-lg w-full bg-custom-light-gray">
            <thead>
              <tr>
                <th className="bg-[#3a3947] rounded-tl-lg text-sm font-normal text-white p-2">
                  <div className="flex items-center">
                    <img
                      src={directsubordinate}
                      alt="File Icon"
                      className="mr-2 w-6 h-6"
                    />
                    Direct Subordinates
                  </div>
                </th>
                <th className="bg-[#3a3947] rounded-tr-lg text-sm font-normal text-white p-2">
                  <div className="flex items-center">
                    <img
                      src={teamsubordinate}
                      alt="File Icon"
                      className="mr-2 w-6 h-6"
                    />
                    Team Subordinates
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center text-white px-4 pt-2 text-sm">0</td>
                <td className="text-center text-white px-4 text-sm pt-2">0</td>
              </tr>
              <tr>
                <td className="text-center text-white px-4 text-xs ">
                  Number of Registers
                </td>
                <td className="text-center text-white px-4 text-xs ">
                  Number of Registers
                </td>
              </tr>
              <tr>
                <td className="text-center text-green-500 px-4 text-sm ">0</td>
                <td className="text-center text-green-500 px-4 text-sm ">0</td>
              </tr>
              <tr>
                <td className="text-center text-white px-4 text-xs ">
                  Deposit Number
                </td>
                <td className="text-center text-white  px-4 text-xs ">
                  Deposit Number
                </td>
              </tr>
              <tr>
                <td className="text-center text-orange-500 px-4 text-sm ">0</td>
                <td className="text-center text-orange-500 px-4 text-sm ">0</td>
              </tr>
              <tr>
                <td className="text-center text-white px-4 text-xs ">
                  Deposit Amount
                </td>
                <td className="text-center text-white px-4 text-xs ">
                  Deposit Amount
                </td>
              </tr>
              <tr>
                <td className="text-center text-white px-4 text-sm ">0</td>
                <td className="text-center text-white px-4 text-sm ">0</td>
              </tr>
              <tr>
                <td className="text-center text-white pb-2 text-xs ">
                  Number of People Making First Deposit
                </td>
                <td className="text-center text-white pb-2 text-xs ">
                  Number of People Making First Deposit
                </td>
              </tr>
            </tbody>
          </table>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-0">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#fae59f] to-[#c4933f] p-4 rounded-full text-[#8f5206] font-bold py-2 rounded-full hover:bg-custom-blue focus:ring-2 focus:ring-gray-300"
            >
              INVITATION LINK
            </button>
          </form>

          <div className="bg-custom-light-gray p-4 rounded-lg   mt-4">
            <div className="flex justify-between items-center">
              <div
                className="flex text-white items-center cursor-pointer"
                onClick={handleCopy}
              >
                <img src={CopyLink} alt="File Icon" className="mr-2 w-6 h-6" />
                <p>Copy invitation code</p>
              </div>
              {/* Invitation code on the right side */}
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <span>{invitationCode}</span>
                <button
                  className="flex items-center text-gray-500"
                  onClick={handleCopy}
                >
                  <MdOutlineContentCopy className="mr-0" />{" "}
                  {/* Clipboard icon */}
                </button>
              </div>
            </div>
            {copied && <span className="text-green-500 text-sm">Copied!</span>}{" "}
            {/* Optional message when copied */}
          </div>

          <Link to="/subordinate">
            <div className="bg-custom-light-gray p-4 rounded-lg  mt-2">
              <div className="flex justify-between items-center">
                <div className="flex text-white items-center">
                  <img
                    src={Team_port}
                    alt="File Icon"
                    className="mr-2 w-6 h-6"
                  />
                  <p>Subordinate data</p>
                </div>
                <span className="text-gray-500 text-sm">
                  <img src={Right} alt="File Icon" className=" w-6 h-6" />
                </span>{" "}
              </div>
            </div>
          </Link>

          <Link to="/commissiondetailpage">
            <div className="bg-custom-light-gray p-4 rounded-lg mt-2">
              <div className="flex justify-between items-center">
                <div className="flex text-white items-center">
                  <img
                    src={Commission}
                    alt="File Icon"
                    className="mr-2 w-6 h-6"
                  />
                  <p>Commission detail</p>
                </div>
                <span className="text-gray-500 text-sm">
                  <img src={Right} alt="File Icon" className=" w-6 h-6" />
                </span>{" "}
              </div>
            </div>
          </Link>

          <Link to="/promotionrule">
            <div className="bg-custom-light-gray p-4 rounded-lg mt-2">
              <div className="flex justify-between items-center">
                <div className="flex text-white items-center">
                  <img src={Rule} alt="File Icon" className="mr-2 w-6 h-6" />
                  <p>Invitation rules</p>
                </div>
                <span className="text-gray-500 text-sm">
                  <img src={Right} alt="File Icon" className=" w-6 h-6" />
                </span>{" "}
              </div>
            </div>
          </Link>

          <Link to="/agentcustomer">
            <div className="bg-custom-light-gray p-4 rounded-lg  mt-2">
              <div className="flex justify-between items-center">
                <div className="flex  text-white items-center">
                  <img src={Server} alt="File Icon" className="mr-2 w-6 h-6" />
                  <p>Agent line customer service</p>
                </div>
                <span className="text-gray-500 text-sm">
                  <img src={Right} alt="File Icon" className=" w-6 h-6" />
                </span>{" "}
              </div>
            </div>
          </Link>

          <Link to="/rebateratio">
            <div className="bg-custom-light-gray p-4 rounded-lg  mb-2 mt-2">
              <div className="flex justify-between items-center">
                <div className="flex text-white items-center">
                  <img
                    src={RebateRatio}
                    alt="File Icon"
                    className="mr-2 w-6 h-6"
                  />

                  <p>Rebate ratio</p>
                </div>
                <span className="text-gray-500 text-sm">
                  <img src={Right} alt="File Icon" className=" w-6 h-6" />
                </span>{" "}
              </div>
            </div>
          </Link>

          <div className="bg-custom-light-gray p-2 rounded-lg mt-2 mb-20">
            <div className="flex">
              <img src={Money} alt="File Icon" className="mr-2 w-6 h-6" />
              <h2 className="font-bold mb-2 text-white">Promotion data</h2>
            </div>
            <div className="grid grid-cols-2  mb-6">
              <div className="flex flex-col  items-center">
                <div className="text-white">
                  <span className="font-semibold text-sm">0.62</span>
                </div>
                <div className="text-white">
                  <span className="font-semibold text-xs"></span> This week
                </div>
              </div>

              <div className="flex flex-col  border-l-2  items-center">
                <div className="text-white">
                  <span className="font-semibold text-sm">0</span>
                </div>
                <div className="text-white">
                  <span className="font-semibold text-xs"></span> Total
                  Commission
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <div className="flex flex-col  items-center">
                <div className="text-white">
                  <span className="font-semibold text-sm">0</span>
                </div>
                <div className="text-white">
                  <span className="font-semibold text-xs"></span> direct
                  subordinate
                </div>
              </div>

              <div className="flex flex-col  border-l-2  items-center">
                <div className="text-white">
                  <span className="font-semibold text-sm">0</span>
                </div>
                <div className="text-white text-center">
                  <span className="font-semibold text-xs "></span> Total number
                  of subordinates in the team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PromotionPage;
