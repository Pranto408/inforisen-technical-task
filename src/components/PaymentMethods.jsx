import React from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
} from "react-icons/fa";
import { SiSepa } from "react-icons/si";
import { Box } from "lucide-react";

const PaymentMethods = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 px-4 overflow-hidden select-none">
      {/* Header Container */}
      <div className="max-w-5xl mx-auto text-center space-y-3 sm:space-y-4">
        {/* Subtitle Line */}
        <div className="inline-flex items-center justify-center gap-2">
          <span className="h-[2px] w-6 bg-orange-500 rounded-full"></span>
          <span className="text-orange-500 font-semibold text-xs sm:text-sm tracking-wide uppercase">
            Payment Methods
          </span>
          <span className="h-[2px] w-6 bg-orange-500 rounded-full"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Multiple Payment <span className="text-orange-500">Methods</span>
        </h2>

        {/* Description Paragraph */}
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          We accept Visa, Mastercard, American Express, Bkash, Nagad, Rocket,
          and more, so you are never stuck at checkout. Deposits are instant,
          and you can start with as little as $1, which means there is no reason
          to wait before placing your first order.
        </p>
      </div>

      {/* Main Visual Section */}
      <div className="relative mx-auto mt-8 sm:mt-12 flex flex-col items-center justify-center">
        {/* World Map Background (Centered) */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
            filter:
              "invert(52%) sepia(85%) saturate(450%) hue-rotate(345deg) brightness(98%) contrast(92%)",
          }}
        />

        {/* Semi-Circle Arc Area */}
        <div className="relative w-full aspect-[2/1] max-w-[650px] flex items-end justify-center overflow-hidden">
          {/* Outer Ring */}
          <div className="absolute top-[10%] w-[90%] aspect-square rounded-full border border-orange-200/80 bg-gradient-to-b from-orange-100/50 via-orange-50/20 to-transparent flex items-center justify-center">
            {/* Middle Ring */}
            <div className="w-[80%] aspect-square rounded-full border border-orange-200/70 flex items-center justify-center">
              {/* Inner Ring */}
              <div className="w-[75%] aspect-square rounded-full border border-orange-200/60" />
            </div>
          </div>

          {/* Payment Icons Container (Positioned Precisely on the Arc) */}
          <div className="absolute inset-0 w-full h-full">
            {/* Paypal (Left 1 - Bottom) */}
            <div className="absolute left-[8%] sm:left-[10%] top-[70%] -translate-y-1/2 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-md border border-slate-100 hover:scale-110 transition-transform cursor-pointer">
              <FaCcPaypal className="text-blue-700 text-lg sm:text-2xl" />
            </div>

            {/* Google Pay (Left 2 - Mid) */}
            <div className="absolute left-[20%] sm:left-[22%] top-[45%] -translate-y-1/2 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-md border border-slate-100 hover:scale-110 transition-transform cursor-pointer">
              <div className="flex items-center text-[10px] sm:text-xs font-semibold text-slate-700">
                <span className="text-blue-500">G</span>Pay
              </div>
            </div>

            {/* SEPA (Left 3 - Top) */}
            <div className="absolute left-[34%] sm:left-[35%] top-[25%] -translate-y-1/2 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-md border border-slate-100 hover:scale-110 transition-transform cursor-pointer">
              <SiSepa className="text-blue-900 text-lg sm:text-2xl" />
            </div>

            {/* VISA (Center Apex) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[8%] flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg border border-slate-100 hover:scale-110 transition-transform cursor-pointer z-10">
              <FaCcVisa className="text-blue-800 text-xl sm:text-3xl" />
            </div>

            {/* Mastercard (Right 3 - Top) */}
            <div className="absolute right-[34%] sm:right-[35%] top-[25%] -translate-y-1/2 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-md border border-slate-100 hover:scale-110 transition-transform cursor-pointer">
              <FaCcMastercard className="text-red-500 text-lg sm:text-2xl" />
            </div>

            {/* Box Icon (Right 2 - Mid) */}
            <div className="absolute right-[20%] sm:right-[22%] top-[45%] -translate-y-1/2 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-md border border-slate-100 hover:scale-110 transition-transform cursor-pointer">
              <Box className="text-slate-800 w-4 h-4 sm:w-6 sm:h-6" />
            </div>

            {/* Apple Pay (Right 1 - Bottom) */}
            <div className="absolute right-[8%] sm:right-[10%] top-[70%] -translate-y-1/2 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-md border border-slate-100 hover:scale-110 transition-transform cursor-pointer">
              <FaApplePay className="text-black text-xl sm:text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Watermark Text */}
      <div className="w-full text-center mt-2 sm:mt-4">
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-orange-500/10 tracking-wider uppercase pointer-events-none select-none">
          MULTIPLE PAYMENTS
        </h1>
      </div>
    </section>
  );
};

export default PaymentMethods;
