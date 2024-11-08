import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLock,
  FaQuestionCircle,
  FaKey,
} from "react-icons/fa";

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
    <div className="bg-custom-blue min-h-screen flex flex-col items-center justify-center">
      <div className="text-left mb-0 w-full max-w-md px-8 mt-20">
        <h1 className="text-2xl font-bold text-custom-pink mb-1">Activity</h1>
        <p className="text-custom-pink text-sm sm:text-base">
          Please Remember to follow the event page
          <br />
          We will launch user feedback activities from time to time
        </p>
      </div>

      <div className="bg-gray-100 p-8 shadow-md w-full max-w-md h-full mt-10 flex flex-col justify-center">
        <div className="grid grid-cols-3 items-center mb-6">
          <div className="text-center">
            <span>🎯</span>
            <div>Target</div>
          </div>
          <div className="text-center">
            <span>💡</span>
            <div>Idea</div>
          </div>
          <div className="text-center">
            <span>🔑</span>
            <div>Key</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-0">
          <div className="flex justify-between items-center mb-6">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="h-56 bg-white rounded-lg shadow-md flex flex-col">
                <div className="w-full h-3/4">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.sendspark.com%2Fhubfs%2FGoogle%2520Drive%2520Integration%2FDraft%2520Product%2520Demo%2520Video%2520Examples.jpeg&f=1&nofb=1&ipt=f2e403d14a052c8ac549e968d92fae68923c43a9a349d3e111064d19451a97fa&ipo=images"
                    alt="description"
                    className="w-full h-80% object-cover rounded-t-lg"
                  />
                </div>
                <div className="w-full h-1/4 flex flex-col items-left justify-center mb-8 p-2">
                  <h2 className="text-lg font-semibold mb-1">Gifts</h2>
                  <p className="text-gray-700 text-sm ">
                    Enter the redemption code to receive gift rewards
                  </p>
                </div>
              </div>

              <div className="h-56 bg-white rounded-lg shadow-md flex flex-col">
                <div className="w-full h-3/4">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.sendspark.com%2Fhubfs%2FGoogle%2520Drive%2520Integration%2FDraft%2520Product%2520Demo%2520Video%2520Examples.jpeg&f=1&nofb=1&ipt=f2e403d14a052c8ac549e968d92fae68923c43a9a349d3e111064d19451a97fa&ipo=images"
                    alt="description"
                    className="w-full h-80% object-cover rounded-t-lg"
                  />
                </div>
                <div className="w-full h-1/4 flex flex-col items-left justify-center mb-6 p-2">
                  <h2 className="text-lg font-semibold">Attendance Bonus</h2>
                  <p className="text-gray-700 text-sm ">
                    The more consecutive days you sign in, the higher the reward
                    will be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-md flex flex-col mb-6">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F381%2F988%2Foriginal%2Fvector-abstract-colorful-dotted-banner-background.jpg&f=1&nofb=1&ipt=c9776c679ec521aa7ffcaa132893266adfa6ca61b1f4bb6b178628e42f8f2a2e&ipo=images"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center mb-6 p-4">
            <h2 className="text-lg font-semibold">Attendance Bonus</h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-md flex flex-col mb-6">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F381%2F988%2Foriginal%2Fvector-abstract-colorful-dotted-banner-background.jpg&f=1&nofb=1&ipt=c9776c679ec521aa7ffcaa132893266adfa6ca61b1f4bb6b178628e42f8f2a2e&ipo=images"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center mb-6 p-4">
            <h2 className="text-lg font-semibold">Attendance Bonus</h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-md flex flex-col mb-6">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F381%2F988%2Foriginal%2Fvector-abstract-colorful-dotted-banner-background.jpg&f=1&nofb=1&ipt=c9776c679ec521aa7ffcaa132893266adfa6ca61b1f4bb6b178628e42f8f2a2e&ipo=images"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center mb-6 p-2 p-4">
            <h2 className="text-lg font-semibold">Attendance Bonus</h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-md flex flex-col mb-6">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F381%2F988%2Foriginal%2Fvector-abstract-colorful-dotted-banner-background.jpg&f=1&nofb=1&ipt=c9776c679ec521aa7ffcaa132893266adfa6ca61b1f4bb6b178628e42f8f2a2e&ipo=images"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center mb-6 p-4">
            <h2 className="text-lg font-semibold">Attendance Bonus</h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-md flex flex-col mb-6">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F381%2F988%2Foriginal%2Fvector-abstract-colorful-dotted-banner-background.jpg&f=1&nofb=1&ipt=c9776c679ec521aa7ffcaa132893266adfa6ca61b1f4bb6b178628e42f8f2a2e&ipo=images"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center mb-6 p-4">
            <h2 className="text-lg font-semibold">Attendance Bonus</h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-md flex flex-col mb-6">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F381%2F988%2Foriginal%2Fvector-abstract-colorful-dotted-banner-background.jpg&f=1&nofb=1&ipt=c9776c679ec521aa7ffcaa132893266adfa6ca61b1f4bb6b178628e42f8f2a2e&ipo=images"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center mb-6 p-4">
            <h2 className="text-lg font-semibold">Attendance Bonus</h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-md flex flex-col mb-6">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F381%2F988%2Foriginal%2Fvector-abstract-colorful-dotted-banner-background.jpg&f=1&nofb=1&ipt=c9776c679ec521aa7ffcaa132893266adfa6ca61b1f4bb6b178628e42f8f2a2e&ipo=images"
              alt="Descriptive Alt Text"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-full h-1/4 flex flex-col items-left justify-center mb-6 p-4">
            <h2 className="text-lg font-semibold">Attendance Bonus</h2>
            {/* <p className="text-gray-700 text-sm ">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
