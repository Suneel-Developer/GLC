import React from "react";

const sections = [
  {
    title: "1. Overview",
    content: [
      "Black Sofa is committed to preventing money laundering, fraud and financial crime.",
      "We take a practical, risk-based approach to ensure our services are not used for unlawful purposes, while keeping things straightforward for our clients.",
    ],
  },
  {
    title: "2. What This Means",
    content: [
      "Money laundering is the process of disguising the origins of illegally obtained funds to make them appear legitimate.",
      "As a payroll and payments related service provider, we recognise the importance of identifying and managing this risk.",
    ],
  },
  {
    title: "3. Our Approach",
    content: [
      "We apply proportionate controls designed to:",
    ],
    list: [
      "Identify who we are working with",
      "Understand the nature of the relationship",
      "Monitor for unusual or suspicious activity",
    ],
    footer:
      "Our approach is guided by UK regulations and industry best practice.",
  },
  {
    title: "4. Record Keeping",
    content: [
      "All CDD records are retained for at least 5 years after the end of the business relationship.",
    ],
  },
  {
    title: "5. Training",
    content: [
      "All relevant staff receive regular AML training appropriate to their role.",
    ],
  },
];

const Aml = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden="true">
        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-70 top-16 right-[5%] lg:right-[10%]">
          <img src="/assets/TreehouseT.webp" alt="TreehouseT" className="w-full drop-shadow-lg" />
        </div>

        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-60 top-[35%] left-[3%] lg:left-[8%]">
          <img src="/assets/MoneyTreeT.webp" alt="MoneyTreeT" className="w-full drop-shadow-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-garamond-medium">
          Anti-Money Laundering Policy
        </h1>

        <p className="mt-6 text-[#3A3A3A]/70 leading-relaxed">
          Black Sofa takes a practical, risk-based approach to preventing financial crime — keeping things simple, transparent and secure.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-border/60" />
          <span className="text-sm text-[#3A3A3A]/50">
            Effective date: 20 March 2026
          </span>
          <div className="h-px w-16 bg-border/60" />
        </div>

        {/* Sections */}
        <div className="mt-14 space-y-10 text-left">
          {sections.map((sec) => (
            <section key={sec.title}>
              <h2 className="text-2xl font-garamond-medium">
                {sec.title}
              </h2>

              {sec.content.map((text, i) => (
                <p
                  key={i}
                  className="mt-3 text-[#3A3A3A]/80 leading-relaxed"
                >
                  {text}
                </p>
              ))}

              {sec.list && (
                <ul className="mt-3 space-y-2 text-[#3A3A3A]/80">
                  {sec.list.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {sec.footer && (
                <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
                  {sec.footer}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aml;