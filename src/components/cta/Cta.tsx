import React from "react";

export function Cta() {
  return (
    <div className="w-full md:w-[313px] text-center space-y-2.5">
      <button className="bg-primary w-full font-urbanist font-bold text-xl px-4 py-2  rounded-[10px] shadow-secondary shadow-[2px_2px_10px_rgba(0,0,0,1)]">
        Get Started
      </button>
      <p className="text-xs">1-minute quiz for personalized Insights</p>
    </div>
  );
}
