import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "Is buying followers legal in Bangladesh?",
    answer:
      "Yes, buying followers or likes is not illegal in Bangladesh. It's considered a marketing strategy to improve social proof. Just make sure you don't violate any platform rules, and your account stays safe.",
    isOpen: true, // Rendered statically as active
  },
  {
    id: 2,
    question: "What if service is not delivered?",
    answer: "",
    isOpen: false,
  },
  {
    id: 3,
    question: "How long does delivery take?",
    answer: "",
    isOpen: false,
  },
  {
    id: 4,
    question: "Is Drip feed safer?",
    answer: "",
    isOpen: false,
  },
  {
    id: 5,
    question: "Can I order daily?",
    answer: "",
    isOpen: false,
  },
  {
    id: 6,
    question: "Can agencies resell services?",
    answer: "",
    isOpen: false,
  },
  {
    id: 7,
    question: "Will engagement drop?",
    answer: "",
    isOpen: false,
  },
  {
    id: 8,
    question: "Which platform is best for business in BD?",
    answer: "",
    isOpen: false,
  },
];

const FAQSection = () => {
  // Split items to match exact 2-column screenshot layout
  const leftColFaqs = faqData.filter((_, index) => index % 2 === 0);
  const rightColFaqs = faqData.filter((_, index) => index % 2 !== 0);

  const renderFaqItem = (item) => (
    <div
      key={item.id}
      className={`rounded-2xl border transition-colors ${
        item.isOpen
          ? "bg-gradient-to-r from-orange-600 to-amber-700 text-white border-orange-600 shadow-md p-5"
          : "bg-slate-50/90 text-slate-800 border-orange-200/60 p-4"
      }`}
    >
      <div className="flex items-center justify-between font-medium text-xs sm:text-sm gap-3">
        <span>{item.question}</span>
        {item.isOpen ? (
          <ChevronUp className="w-4 h-4 shrink-0 text-white" />
        ) : (
          <ChevronDown className="w-4 h-4 shrink-0 text-slate-600" />
        )}
      </div>

      {item.isOpen && item.answer && (
        <p className="mt-3 text-xs leading-relaxed text-orange-50/90 border-t border-orange-500/30 pt-3">
          {item.answer}
        </p>
      )}
    </div>
  );

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 select-none">
      {/* Header Container */}
      <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
        {/* Top Tagline / Subtitle */}
        <div className="inline-flex items-center justify-center gap-2">
          <span className="h-[2px] w-6 bg-orange-500 rounded-full"></span>
          <span className="text-orange-500 font-semibold text-xs sm:text-sm tracking-wide uppercase">
            FAQ
          </span>
          <span className="h-[2px] w-6 bg-orange-500 rounded-full"></span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>

        {/* Description Paragraph */}
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          Find clear and simple explanations to the most common questions about
          our services, payments, orders, and account management.
        </p>
      </div>

      {/* Two-Column Static Grid */}
      <div className="max-w-5xl mx-auto mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="space-y-4">{leftColFaqs.map(renderFaqItem)}</div>
        <div className="space-y-4">{rightColFaqs.map(renderFaqItem)}</div>
      </div>
    </section>
  );
};

export default FAQSection;
