import React from "react";
import { Workflow } from "lucide-react";

const processData = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.",
  },
  {
    number: "02",
    title: "Add Funds",
    description:
      "Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.",
  },
  {
    number: "03",
    title: "Select Service",
    description:
      "Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.",
  },
  {
    number: "04",
    title: "Place your order",
    description:
      "Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/80 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="relative inline-block text-sm font-medium uppercase tracking-wide text-orange-500">
            Working Process
            <span className="absolute -bottom-2 left-1/2 h-0.5 w-24 -translate-x-1/2 bg-orange-400" />
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Grow Your <span className="text-orange-500">Socials</span> in{" "}
            <span className="text-orange-500">4 Simple</span> Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            A simple and efficient process designed to deliver fast and reliable
            results. Just place your order, and our system will handle the rest
            to help grow your social media presence smoothly.
          </p>
        </div>

        {/* Process */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-orange-200 lg:block" />

          {/* Center Icon */}
          <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-orange-50 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg">
                <Workflow size={25} strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* 01 */}
            <div className="relative border-b border-orange-100 pb-10 pr-0 lg:border-b-0 lg:pr-16 lg:pb-24">
              <ProcessCard
                number={processData[0].number}
                title={processData[0].title}
                description={processData[0].description}
                decoration="left"
              />
            </div>

            {/* 02 */}
            <div className="relative border-b border-orange-100 pb-10 pt-10 lg:border-b-0 lg:pb-24 lg:pl-16 lg:pt-24">
              <ProcessCard
                number={processData[1].number}
                title={processData[1].title}
                description={processData[1].description}
              />
            </div>

            {/* 03 */}
            <div className="relative pt-10 lg:pr-16 lg:pt-0">
              <ProcessCard
                number={processData[2].number}
                title={processData[2].title}
                description={processData[2].description}
              />
            </div>

            {/* 04 */}
            <div className="relative pt-10 lg:pl-16 lg:pt-24">
              <ProcessCard
                number={processData[3].number}
                title={processData[3].title}
                description={processData[3].description}
                decoration="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessCard = ({ number, title, description, decoration }) => {
  return (
    <div
      className={`group relative min-h-[190px] rounded-2xl p-7 transition-all duration-300 ${
        decoration
          ? "bg-gradient-to-br from-white via-orange-50/40 to-white shadow-[0_10px_40px_rgba(249,115,22,0.06)]"
          : ""
      }`}
    >
      {/* Decorative Pattern */}
      {decoration === "left" && (
        <div className="absolute -left-1 top-0 h-16 w-8 opacity-70">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(#fb923c 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />
        </div>
      )}

      {decoration === "right" && (
        <div className="absolute -bottom-1 right-0 h-16 w-8 opacity-70">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(#fb923c 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />
        </div>
      )}

      <div className="relative">
        <span className="text-3xl font-bold text-orange-500 sm:text-4xl">
          {number}
        </span>

        <h3 className="mt-1 text-sm font-semibold text-orange-500 sm:text-base">
          {title}
        </h3>

        <p className="mt-4 max-w-md text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessSection;
