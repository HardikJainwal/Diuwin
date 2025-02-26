import React, { useState } from "react";
import { HiSpeakerphone } from "react-icons/hi";

import NotificationServiceHeader from "../../components/NotificationServiceHeader";

function NotificationsService() {

  return (
    <div className="bg-[#242424] w-[412px] min-h-screen flex flex-col">
      <NotificationServiceHeader />
      <div className="px-4">
        <div className="text-gray-300 mt-14 rounded-lg space-y-4">
          <details className="group cursor-pointer">
            <summary className="flex bg-[#333332] items-start gap-2 hover:bg-neutral-800 p-3 rounded-lg transition-all">
              <HiSpeakerphone className="text-amber-500 text-xl mt-1" />
              <div className="flex-1">
                <h3 className="font-medium">About Withdrawal - BDGGame Notify</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Please Fill In The Correct Bank Card Information. The Platform Will Process Withdrawals Within 1-24 Hours Or More. The Withdrawal Status Is "Completed" And The Transaction Has Been Approved By The Platform. The Bank Will Complete The Transfer Within 1-7 Working Days, But Delays May Occur, Especially During Holidays. But You Are Guaranteed To Receive Your Funds.
                </p>
                <div className="text-xs text-gray-500 mt-2">23 Feb 2025, 10:30 AM</div>
              </div>
            </summary>
          </details>

          <details className="group cursor-pointer">
            <summary className="flex bg-[#333332] items-start gap-2 hover:bg-neutral-800 p-3 rounded-lg transition-all">
              <HiSpeakerphone className="text-amber-500 text-xl mt-1" />
              <div className="flex-1">
                <h3 className="font-medium">About Recharge - BDGGame Notify</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Please Remember The Last Time You Payment Card Number To Continue. If Old Number Got Amount To Submit, Then You Need To Continue Recharging. And Please Be Sure To Go To BDGGame To Get A New Up Account Again! Please Make Sure To Follow The Above Steps So That Your Transactions Can Be Deposited Into Your Account Faster.
                </p>
                <div className="text-xs text-gray-500 mt-2">23 Feb 2025, 12:45 PM</div>
              </div>
            </summary>
          </details>

          <div className="text-center text-gray-400">No more</div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsService;
