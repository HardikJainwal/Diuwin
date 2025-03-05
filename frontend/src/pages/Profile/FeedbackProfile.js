import React from "react";
import FeedbackHistory from "../../components/FeedbackHeader";


const FeedbackProfile = () => {
  return (
    <div className="flex flex-col items-center w-[430px] bg-[#242424] text-white min-h-screen py-6">
      {/* Header */}
      <FeedbackHistory />

      {/* Feedback Box */}
      <div className="bg-[#333332] text-[#666462] p-4 w-[400px] h-80 rounded-lg shadow-md mt-8">
        <p className="text-sm">
          Welcome to feedback, please give feedback - please describe the problem in
          detail when providing feedback, preferably attach a screenshot of the
          problem you encountered, we will immediately process your feedback!
        </p>
      </div>

      {/* Footer Text */}
      <div className="mt-6 text-center text-sm text-gray-300">
        <p className="mb-1 cursor-pointer hover:underline">
          Send helpful feedback
        </p>
        <p className="cursor-pointer hover:underline">
          Chance to win Mystery Rewards
        </p>
      </div>
    </div>
  );
};

export default FeedbackProfile;
