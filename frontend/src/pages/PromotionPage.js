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
    <div className="relative w-full">
      <Promotionheader className="fixed top-0 left-0 w-full z-50" />
      <div
        className="min-h-screen flex flex-col items-center justify-center relative w-full"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={promotionbg}
          alt="Foreground"
          className="absolute z-10 top-0 w-full object-cover"
        />
        <div className="text-left z-20 w-full px-4 sm:px-8 max-w-md mx-auto mt-6">
          <h1 className="text-[#8f5206] text-2xl text-center">0</h1>
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="w-full sm:w-56 text-center mt-2 text-sm bg-custom-light-gray text-[#d9ac4f] py-2 rounded-full hover:bg-custom-blue focus:ring-2 focus:ring-gray-300"
            >
              Yesterday's total Commission
            </button>
          </div>
          <p className="text-[#8f5206] text-xs text-center mt-2">
            Upgrade the level to increase commission income
          </p>
        </div>

        <div className="bg-[#242424] px-4 w-full max-w-md mx-auto mt-2 flex flex-col">
          <table className="table-auto mb-4 z-30 rounded-lg w-full bg-custom-light-gray">
            <thead>
              <tr>
                <th className="bg-[#3a3947] rounded-tl-lg text-xs sm:text-sm font-normal text-white p-2">
                  <div className="flex items-center justify-center sm:justify-start">
                    <img
                      src={directsubordinate}
                      alt="File Icon"
                      className="mr-1 sm:mr-2 w-4 h-4 sm:w-6 sm:h-6"
                    />
                    <span className="hidden sm:inline">Direct Subordinates</span>
                    <span className="inline sm:hidden">Direct</span>
                  </div>
                </th>
                <th className="bg-[#3a3947] rounded-tr-lg text-xs sm:text-sm font-normal text-white p-2">
                  <div className="flex items-center justify-center sm:justify-start">
                    <img
                      src={teamsubordinate}
                      alt="File Icon"
                      className="mr-1 sm:mr-2 w-4 h-4 sm:w-6 sm:h-6"
                    />
                    <span className="hidden sm:inline">Team Subordinates</span>
                    <span className="inline sm:hidden">Team</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center text-white px-2 sm:px-4 pt-2 text-sm">0</td>
                <td className="text-center text-white px-2 sm:px-4 text-sm pt-2">0</td>
              </tr>
              <tr>
                <td className="text-center text-white px-2 sm:px-4 text-xs">
                  Number of Registers
                </td>
                <td className="text-center text-white px-2 sm:px-4 text-xs">
                  Number of Registers
                </td>
              </tr>
              <tr>
                <td className="text-center text-green-500 px-2 sm:px-4 text-sm">0</td>
                <td className="text-center text-green-500 px-2 sm:px-4 text-sm">0</td>
              </tr>
              <tr>
                <td className="text-center text-white px-2 sm:px-4 text-xs">
                  Deposit Number
                </td>
                <td className="text-center text-white px-2 sm:px-4 text-xs">
                  Deposit Number
                </td>
              </tr>
              <tr>
                <td className="text-center text-orange-500 px-2 sm:px-4 text-sm">0</td>
                <td className="text-center text-orange-500 px-2 sm:px-4 text-sm">0</td>
              </tr>
              <tr>
                <td className="text-center text-white px-2 sm:px-4 text-xs">
                  Deposit Amount
                </td>
                <td className="text-center text-white px-2 sm:px-4 text-xs">
                  Deposit Amount
                </td>
              </tr>
              <tr>
                <td className="text-center text-white px-2 sm:px-4 text-sm">0</td>
                <td className="text-center text-white px-2 sm:px-4 text-sm">0</td>
              </tr>
              <tr>
                <td className="text-center text-white pb-2 text-xs px-1 sm:px-4">
                  Number of People Making First Deposit
                </td>
                <td className="text-center text-white pb-2 text-xs px-1 sm:px-4">
                  Number of People Making First Deposit
                </td>
              </tr>
            </tbody>
          </table>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-0 w-full">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#fae59f] to-[#c4933f] p-2 sm:p-4 rounded-full text-[#8f5206] font-bold py-2 hover:bg-custom-blue focus:ring-2 focus:ring-gray-300"
            >
              INVITATION LINK
            </button>
          </form>

          <div className="bg-custom-light-gray p-3 sm:p-4 rounded-lg mt-4 w-full">
            <div className="flex justify-between items-center">
              <div
                className="flex text-white items-center cursor-pointer"
                onClick={handleCopy}
              >
                <img src={CopyLink} alt="File Icon" className="mr-1 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-xs sm:text-sm">Copy invitation code</p>
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-500 space-x-1 sm:space-x-2">
                <span className="text-xs sm:text-sm truncate max-w-16 sm:max-w-none">{invitationCode}</span>
                <button
                  className="flex items-center text-gray-500"
                  onClick={handleCopy}
                >
                  <MdOutlineContentCopy className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
            {copied && <span className="text-green-500 text-xs sm:text-sm">Copied!</span>}
          </div>

          <Link to="/subordinate" className="w-full">
            <div className="bg-custom-light-gray p-3 sm:p-4 rounded-lg mt-2">
              <div className="flex justify-between items-center">
                <div className="flex text-white items-center">
                  <img
                    src={Team_port}
                    alt="File Icon"
                    className="mr-1 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <p className="text-xs sm:text-sm">Subordinate data</p>
                </div>
                <span className="text-gray-500">
                  <img src={Right} alt="File Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
              </div>
            </div>
          </Link>

          <Link to="/commissiondetailpage" className="w-full">
            <div className="bg-custom-light-gray p-3 sm:p-4 rounded-lg mt-2">
              <div className="flex justify-between items-center">
                <div className="flex text-white items-center">
                  <img
                    src={Commission}
                    alt="File Icon"
                    className="mr-1 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <p className="text-xs sm:text-sm">Commission detail</p>
                </div>
                <span className="text-gray-500">
                  <img src={Right} alt="File Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
              </div>
            </div>
          </Link>

          <Link to="/promotionrule" className="w-full">
            <div className="bg-custom-light-gray p-3 sm:p-4 rounded-lg mt-2">
              <div className="flex justify-between items-center">
                <div className="flex text-white items-center">
                  <img src={Rule} alt="File Icon" className="mr-1 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                  <p className="text-xs sm:text-sm">Invitation rules</p>
                </div>
                <span className="text-gray-500">
                  <img src={Right} alt="File Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
              </div>
            </div>
          </Link>

          <Link to="/agentcustomer" className="w-full">
            <div className="bg-custom-light-gray p-3 sm:p-4 rounded-lg mt-2">
              <div className="flex justify-between items-center">
                <div className="flex text-white items-center">
                  <img src={Server} alt="File Icon" className="mr-1 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                  <p className="text-xs sm:text-sm">Agent line customer service</p>
                </div>
                <span className="text-gray-500">
                  <img src={Right} alt="File Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
              </div>
            </div>
          </Link>

          <Link to="/rebateratio" className="w-full">
            <div className="bg-custom-light-gray p-3 sm:p-4 rounded-lg mb-2 mt-2">
              <div className="flex justify-between items-center">
                <div className="flex text-white items-center">
                  <img
                    src={RebateRatio}
                    alt="File Icon"
                    className="mr-1 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <p className="text-xs sm:text-sm">Rebate ratio</p>
                </div>
                <span className="text-gray-500">
                  <img src={Right} alt="File Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
              </div>
            </div>
          </Link>

          <div className="bg-custom-light-gray p-3 sm:p-4 rounded-lg mt-2 mb-20 w-full">
            <div className="flex">
              <img src={Money} alt="File Icon" className="mr-1 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              <h2 className="font-bold mb-2 text-white text-sm sm:text-base">Promotion data</h2>
            </div>
            <div className="grid grid-cols-2 mb-6">
              <div className="flex flex-col items-center">
                <div className="text-white">
                  <span className="font-semibold text-xs sm:text-sm">0.62</span>
                </div>
                <div className="text-white text-center">
                  <span className="text-xs">This week</span>
                </div>
              </div>

              <div className="flex flex-col border-l-2 items-center">
                <div className="text-white">
                  <span className="font-semibold text-xs sm:text-sm">0</span>
                </div>
                <div className="text-white text-center">
                  <span className="text-xs">Total Commission</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <div className="flex flex-col items-center">
                <div className="text-white">
                  <span className="font-semibold text-xs sm:text-sm">0</span>
                </div>
                <div className="text-white text-center">
                  <span className="text-xs">direct subordinate</span>
                </div>
              </div>

              <div className="flex flex-col border-l-2 items-center">
                <div className="text-white">
                  <span className="font-semibold text-xs sm:text-sm">0</span>
                </div>
                <div className="text-white text-center">
                  <span className="text-xs">Total number of subordinates in the team</span>
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