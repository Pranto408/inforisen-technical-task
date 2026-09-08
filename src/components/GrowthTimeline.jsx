import React from "react";

const stepsData = [
  {
    timeline: "Weeks 1-2",
    whatYouDo: "Use SMM services to build initial followers and engagement",
    whyItWorks: "Creates baseline credibility and improves first impression",
    costOrTime: "৳2,000–5,000",
  },
  {
    timeline: "Weeks 3-4",
    whatYouDo: "Start posting consistent, high-quality content",
    whyItWorks: "Larger follower base increases organic engagement",
    costOrTime: "Mostly content effort",
  },
  {
    timeline: "Months 2-3",
    whatYouDo: "Continue content + light support if needed",
    whyItWorks: "Faster reach, better algorithm response",
    costOrTime: "Reduced SMM usage",
  },
  {
    timeline: "Months 3-6",
    whatYouDo: "Focus mainly on organic growth",
    whyItWorks: "Strong engagement pushes content naturally",
    costOrTime: "Minimal or no SMM needed",
  },
];

const GrowthTimeline = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 select-none">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center justify-center gap-2">
          <span className="h-[2px] w-6 bg-orange-500 rounded-full"></span>
          <span className="text-orange-500 font-semibold text-xs sm:text-sm tracking-wide uppercase">
            Growth
          </span>
          <span className="h-[2px] w-6 bg-orange-500 rounded-full"></span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Growing on Social Media in{" "}
          <span className="text-orange-500">Bangladesh</span>
        </h2>

        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          The smartest way to grow is by combining SMM support with real
          content. You use SMM at the beginning for momentum, then let organic
          growth take over.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stepsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 border border-orange-200/80 shadow-md shadow-orange-500/5 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
          >
            {/* Timeline Header Badge */}
            <div className="w-full py-2.5 px-4 bg-gradient-to-r from-orange-500 to-amber-700 rounded-xl text-center shadow-sm">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
                {card.timeline}
              </span>
            </div>

            {/* Timeline Vertical Path Container */}
            <div className="relative w-full mt-5 space-y-4">
              {/* Vertical Dotted Line Connection */}
              <div className="absolute left-[29px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-orange-300 pointer-events-none z-0" />

              {/* Step 01: What You Do */}
              <div className="relative z-10 bg-slate-50/80 rounded-xl p-4 border border-slate-100 flex flex-col justify-between min-h-[110px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center text-[10px] font-bold text-orange-500 border border-orange-400 bg-white rounded-md w-5 h-5 shrink-0">
                    01
                  </span>
                  <h4 className="text-orange-500 font-bold text-xs sm:text-sm">
                    What You Do
                  </h4>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed pl-7">
                  {card.whatYouDo}
                </p>
              </div>

              {/* Step 02: Why It Works */}
              <div className="relative z-10 bg-slate-50/80 rounded-xl p-4 border border-slate-100 flex flex-col justify-between min-h-[110px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center text-[10px] font-bold text-orange-500 border border-orange-400 bg-white rounded-md w-5 h-5 shrink-0">
                    02
                  </span>
                  <h4 className="text-orange-500 font-bold text-xs sm:text-sm">
                    Why It Works
                  </h4>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed pl-7">
                  {card.whyItWorks}
                </p>
              </div>

              {/* Step 03: Estimated Cost / Time */}
              <div className="relative z-10 bg-slate-50/80 rounded-xl p-4 border border-slate-100 flex flex-col justify-between min-h-[110px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center text-[10px] font-bold text-orange-500 border border-orange-400 bg-white rounded-md w-5 h-5 shrink-0">
                    03
                  </span>
                  <h4 className="text-orange-500 font-bold text-xs sm:text-sm">
                    Estimated Cost/ Time
                  </h4>
                </div>
                <p className="text-slate-600 text-xs font-medium leading-relaxed pl-7">
                  {card.costOrTime}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowthTimeline;
