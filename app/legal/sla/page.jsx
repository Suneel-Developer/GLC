import React from "react";

const sections = [
  {
    title: "1. Service Availability",
    content: [
      "Ashford Hale aims to maintain 99.9% platform uptime, excluding scheduled maintenance.",
    ],
  },
  {
    title: "2. Payroll Processing",
    content: [
      "Payroll processed within agreed timelines, typically 3 business days of receiving complete data.",
    ],
  },
  {
    title: "3. Support Response Times",
    list: [
      { label: "Foundation", text: "Email — 48 hour response" },
      { label: "Core", text: "Priority email — 24 hour response" },
      { label: "Pro", text: "Dedicated manager — 8 hour response" },
      { label: "Enterprise", text: "Dedicated team — 4 hour response" },
    ],
  },
  {
    title: "4. Escalation",
    content: [
      "Critical issues affecting payroll runs are escalated immediately regardless of tier.",
    ],
  },
];

const SLA = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        aria-hidden="true"
      >
        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-70 top-16 right-[5%] lg:right-[10%]">
          <img src="/assets/ClockT.webp" alt="ClockT" className="w-full drop-shadow-lg" />
        </div>

        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-60 bottom-[15%] left-[3%] lg:left-[8%]">
          <img src="/assets/DartboardT.webp" alt="DartboardT" className="w-full drop-shadow-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-garamond-medium">
          Service Level Agreement
        </h1>

        <p className="mt-6 text-[#3A3A3A]/70 leading-relaxed">
          Our commitment to reliability, responsiveness and consistent service delivery across every tier.
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

              {sec.content?.map((text, i) => (
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
                      <span>
                        <strong>{item.label}:</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SLA;