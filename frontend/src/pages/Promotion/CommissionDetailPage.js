import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import NotificationHeader from "../../components/NotificationHeader";
import SubordinateHeader from "../../components/SubordinateHeader";
import CommissionDetailHeader from "../../components/CommissionDetailHeader";

function CommissionDetailPage() {
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
    console.log("Verification code sent!");
  };

  const uid = "14480808";
  const handleCopy = () => {
    navigator.clipboard.writeText(uid);
    alert("UID copied!");
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
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <CommissionDetailHeader />
      <div className="px-4">
        <div className="w-[412px] text-gray-200  overflow-hidden mt-14 ">
          <details className="group">
            <summary className="flex items-center w-[380px] bg-[#333332] rounded-lg justify-between px-2 py-2 cursor-pointer ">
              <span className="text-[#a8a5a1]">2025-01-15</span>
              <MdExpandMore className="transition-transform group-open:rotate-180" />
            </summary>

            <div className="p-2 space-y-2 mt-6 px-2  w-[380px] rounded-lg bg-[#333332]">
              <div className="flex flex-col gap-1 ">
                <div className="text-[#a8a5a1] text-sm font-semibold">
                  Settlement successful
                </div>
                <div className="text-[#a8a5a1] text-sm font-semibold">
                  2025-01-16 02:06:11
                </div>
                <div className="text-[#a8a5a1] text-sm font-semibold">
                  The commission has been automatically credited to your balance
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-1 px-2  bg-[#4d4d4c] rounded">
                  <span className="text-[#a8a5a1] text-sm">
                    Number of bettors
                  </span>
                  <span className="text-[#f5f3f0] font-semibold">1 People</span>
                </div>

                <div className="flex justify-between py-1 px-2  bg-[#4d4d4c] rounded">
                  <span className="text-[#a8a5a1] text-sm">Bet amount</span>
                  <span className="text-[#f5f3f0] font-semibold">10</span>
                </div>

                <div className="flex justify-between py-1 px-2 bg-[#4d4d4c] rounded">
                  <span className="text-[#a8a5a1] text-sm">
                    Commission payout
                  </span>
                  <span className="text-[#dd9138] font-semibold">0.06</span>
                </div>

                <div className="flex justify-between  py-1 px-2 bg-[#4d4d4c] rounded">
                  <span className="text-[#a8a5a1] text-sm">Date</span>
                  <span className="text-[#f5f3f0] font-semibold">
                    2025-01-15 00:00:00
                  </span>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default CommissionDetailPage;
