const badges = [
  {
    label: "HMRC RTI Compliant",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-check h-7 w-7"
        aria-hidden="true"
      >
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
        <path d="m9 15 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    label: "ICO Registered",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-lock h-7 w-7"
        aria-hidden="true"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    label: "Cyber Essentials",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-shield h-7 w-7"
        aria-hidden="true"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      </svg>
    ),
  },
  {
    label: "CIS & PAYE Compliant",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </svg>
    ),
  },
  {
    label: "UK Registered Company",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M10 12h4" />
        <path d="M10 8h4" />
        <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      </svg>
    ),
  },
  {
    label: "Secure Data Handling",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
  },
];

const BadgeItem = ({ icon, label }) => (
  <div className="flex shrink-0 flex-col items-center gap-2.5 text-[#3a3a3a]/70 hover:text-muted/90 transition-colors duration-500">
    {icon}
    <span className="text-xs font-medium text-[#3a3a3ab3] tracking-wide">
      {label}
    </span>
  </div>
);

const TrustBadges = () => {
  return (
    <section className="pb-20">
      {/* Heading */}
      <div className="mx-auto max-w-300 px-6 text-center">
        <p className="text-base md:text-lg text-[#3a3a3a99] font-light font-garamond">
          Aligned with UK payroll and HMRC reporting requirements
        </p>

        <h2 className="mt-4 text-2xl font-medium md:text-[32px] lg:text-[36px] leading-[1.15] font-garamond">
          Built for compliance. Designed for trust.
        </h2>
      </div>

      {/* Marquee */}
      <div className="mx-auto mt-10 max-w-300 px-6 overflow-hidden">
        <style>{`
          @keyframes trust-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .trust-marquee {
            animation: trust-scroll 18s linear 0s infinite normal none running;
          }
        `}</style>

        <div className="flex gap-16 overflow-hidden">
          <div className="trust-marquee flex items-center gap-16 shrink-0 whitespace-nowrap">
            {badges.map((badge, i) => (
              <BadgeItem key={i} {...badge} />
            ))}
          </div>

          <div
            className="trust-marquee flex items-center gap-16 shrink-0 whitespace-nowrap"
            aria-hidden="true"
          >
            {badges.map((badge, i) => (
              <BadgeItem key={`dup-${i}`} {...badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
