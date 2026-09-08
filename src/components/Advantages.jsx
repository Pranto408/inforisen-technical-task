import React from "react";

const advantagesData = [
  {
    image: "/images/Adv1.png",
    title: "We Never Ask for Your Password",
    description:
      "You give us your username or profile link. That's it. We can't access your account. When you buy followers from us, we're accessing your public profile. The same profile millions of people can already see.",
    highlight: "Zero security risk.",
    highlightColor: "text-emerald-500 font-medium",
  },
  {
    image: "/images/Adv2.png",
    title: "We Use Real Users, Not Bots",
    description:
      "This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect these instantly. That's when bans happen. ➔",
    highlight: null,
  },
  {
    image: "/images/Adv3.png",
    title: "We Deliver Gradually",
    description:
      "Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time. 5,000 followers arrive over 2-4 days, not 2 hours. This makes growth look natural. Social media algorithms see steady growth, not sudden spikes.",
    highlight: null,
  },
  {
    image: "/images/Adv4.png",
    title: "Our Track Record",
    description:
      "321,879 completed orders. Not a single customer has reported an account ban caused by our services. That's not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect fake activity. We stay within those boundaries.",
    highlight: null,
  },
];

const Advantages = () => {
  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Background Decorative Wave Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-orange-100/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-orange-100/60 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
        {/* Badge / Subtitle */}
        <div className="inline-flex items-center justify-center gap-2">
          <span className="h-[2px] w-6 bg-orange-500 rounded-full"></span>
          <span className="text-orange-500 font-semibold text-xs sm:text-sm tracking-wide uppercase">
            Advantages
          </span>
          <span className="h-[2px] w-6 bg-orange-500 rounded-full"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Advantages of using{" "}
          <span className="text-orange-500">our panel services</span>
        </h2>

        {/* Description Text */}
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          Find clear and simple explanations to the most common questions about
          our services, payments, orders, and account management.
        </p>
      </div>

      {/* 2x2 Cards Grid Container */}
      <div className="relative z-10 max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Decorative Grid Center Line (Visible on Medium+ Screens) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-orange-100/80 -translate-y-1/2 pointer-events-none" />
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-orange-100/80 -translate-x-1/2 pointer-events-none" />

        {advantagesData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-orange-500/5 border border-slate-100/80 hover:shadow-2xl transition-all duration-300 flex flex-col justify-start space-y-4"
          >
            {/* Image Icon Container */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-start">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-slate-900 font-bold text-base sm:text-lg tracking-tight">
              {item.title}
            </h3>

            {/* Description & Highlight */}
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {item.description}{" "}
              {item.highlight && (
                <span className={`block mt-1 ${item.highlightColor}`}>
                  {item.highlight}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
