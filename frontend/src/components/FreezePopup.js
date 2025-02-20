import { useState, useEffect } from "react";

const FreezePopup = ({ children }) => {
  const [count, setCount] = useState(5);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (!showPopup) return;

    const countdown = setInterval(() => {
      setCount((prev) => (prev > 1 ? prev - 1 : 5));
    }, 1000);

    const restartPopup = setTimeout(() => {
      setShowPopup(false);
      setTimeout(() => setShowPopup(true), 8000); // Restart after 8s
    }, 10000); // Hide after 10s

    return () => {
      clearInterval(countdown);
      clearTimeout(restartPopup);
    };
  }, [showPopup]);

  return (
    <div className="relative mb-2">
      {/* Your target content */}
      {children}

      {/* Freeze popup only over this part */}
      {showPopup && (
        <div className="absolute inset-0 bg-black/50 rounded-lg w-[390px] h-[320px] flex items-center justify-center z-10">
          <div className="text-[#d9ac4f] text-9xl bg-[#4d4d4c] font-bold p-6 mr-8 rounded-lg">
            0 
          </div>
          <div className="text-[#d9ac4f] text-9xl bg-[#4d4d4c] font-bold p-6 rounded-lg">
            {count}
          </div>
        </div>
      )}
    </div>
  );
};

export default FreezePopup;
