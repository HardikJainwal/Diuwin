import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import CommissionDetailHeader from "../../components/CommissionDetailHeader";

function CommissionDetailPage() {

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
