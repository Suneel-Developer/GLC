"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What does Black Sofa actually do?",
    answer:
      "Black Sofa fully manages your payroll — from calculations and payslips to HMRC submissions and compliance. We take the entire process off your hands.",
  },
  {
    question: "Is Black Sofa fully HMRC compliant?",
    answer:
      "Yes. We operate in line with all UK payroll regulations and ensure every submission is accurate, on time and compliant.",
  },
  {
    question: "Do I still need to deal with HMRC?",
    answer:
      "No — we handle submissions, reporting and communication as part of our managed service.",
  },
  {
    question: "Is outsourcing payroll worth it?",
    answer:
      "For most growing businesses, absolutely. It reduces risk, saves time and ensures payroll is done properly without internal pressure.",
  },
  {
    question: "How do you receive our payroll data?",
    answer:
      "We work with your existing systems or provide simple upload methods — whichever is easiest for your team.",
  },
  {
    question: "What happens if something goes wrong?",
    answer:
      "We proactively check and validate everything before processing. In the rare event of an issue, we resolve it quickly and transparently.",
  },
  {
    question: "Do you support CIS and contractors?",
    answer:
      "Yes — we handle CIS, contractor payments and complex workforce structures.",
  },
  {
    question: "Can you scale with our business?",
    answer:
      "Absolutely. Whether you have 5 employees or 5,000, Black Sofa grows with you.",
  },
  {
    question: "How long does it take to get set up?",
    answer:
      "Most clients are up and running quickly. We handle onboarding and ensure a smooth transition.",
  },
  {
    question: "Will this work with our current payroll setup?",
    answer:
      "Yes. Black Sofa is designed to fit around recruitment and contractor payroll workflows, including CIS and PAYE.",
  },
];

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
  </svg>
);

function FAQItem({ question, answer, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center cursor-pointer justify-between gap-3 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className="relative text-sm text-foreground group-hover:text-foreground/80 transition-all duration-300"
          style={{ fontWeight: isOpen ? 700 : 500 }}
        >
          {question}
          <span
            className="absolute -bottom-0.5 left-0 h-px bg-foreground/40 transition-all duration-300"
            style={{ width: isOpen ? "100%" : "0" }}
          />
        </span>
        <span className="text-muted/40 shrink-0 transition-transform duration-300">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>

      {/* Animated answer panel */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div ref={contentRef} className="pb-5">
          <p className="text-sm text-[#3a3a3a] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="pb-[120px] relative overflow-hidden">
      {/* Decorative side images */}
      <div className="pointer-events-none absolute inset-0 z-4 hidden md:flex items-center justify-center">
        <div className="absolute left-0 top-[15%] lg:left-[8%] xl:left-[14%] w-[140px] md:w-[200px] xl:w-[240px] opacity-70">
          <img src="/assets/FAQ1.webp" alt="FAQ 1" className="w-full" />
        </div>
        <div className="absolute right-0 top-[68%] lg:right-[8%] xl:right-[14%] w-[140px] md:w-[200px] xl:w-[240px] opacity-70">
          <img src="/assets/FAQ2.webp" alt="FAQ 2" className="w-full" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-[44px] leading-[1.15] font-garamond">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-14 max-w-170 divide-y divide-white/20">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
