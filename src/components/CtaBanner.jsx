import React from "react";

const CtaBanner = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 select-none">
      {/* Banner Container */}
      <div className="relative max-w-380 mx-auto bg-orange-50/70 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-visible border border-orange-100/60 shadow-sm flex flex-col md:flex-row items-center justify-between min-h-[380px]">
        {/* World Map Overlay Graphic */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
            filter:
              "invert(52%) sepia(85%) saturate(450%) hue-rotate(345deg) brightness(98%) contrast(92%)",
          }}
        />

        {/* Content Column (Left Side) */}
        <div className="relative z-10 max-w-lg space-y-5 text-center md:text-left">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ready to Grow Your Social Media{" "}
            <span className="text-orange-500">in Bangladesh?</span>
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Join over 68,000 users who are already using SMM to grow faster on
            Facebook, Instagram, YouTube, TikTok, and more. Getting started is
            free and takes less than 60 seconds.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            {/* Outline Button */}
            <button className="px-6 py-2.5 rounded-xl border border-orange-400 text-orange-500 font-semibold text-xs sm:text-sm hover:bg-orange-100/50 transition-colors cursor-pointer">
              See All Services
            </button>

            {/* Solid Button */}
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-800 text-white font-semibold text-xs sm:text-sm shadow-md hover:opacity-95 transition-opacity cursor-pointer">
              Create Free Account
            </button>
          </div>
        </div>

        {/* Image Placeholder (Right Side - Overflowing Bottom & Top) */}
        <div className="relative md:absolute md:right-8 md:-bottom-0 z-20 mt-8 md:mt-0 flex justify-center items-end">
          <img
            src="/images/girl-img.png"
            alt="Growing Social Media"
            className="w-auto h-[320px] sm:h-[400px] lg:h-[460px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
