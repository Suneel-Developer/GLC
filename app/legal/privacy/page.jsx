import React from "react";

const Privacy = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Decorative Background Elements */}
      <div
        className="pointer-events-none absolute inset-0 z-5"
        aria-hidden="true"
      >
        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-70 top-16 left-[5%] lg:left-[10%]">
          <img
            src="/assets/ScalesT.webp"
            alt="ScalesT"
            className="w-full drop-shadow-lg"
          />
        </div>

        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-60 bottom-[15%] right-[3%] lg:right-[8%]">
          <img
            src="/assets/FilingCabinetT.webp"
            alt="FilingCabinetT"
            className="w-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
        <div>
          <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl font-garamond-medium">
            Privacy & Cookies Policy
          </h1>

          <p className="mt-6 text-[#3A3A3A]/70 leading-relaxed">
            Black Sofa is committed to protecting your privacy. This policy
            explains how we collect, use, and protect your personal data —
            keeping things transparent and secure.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-border/60" />
          <span className="text-sm text-[#3A3A3A]/50">
            Effective date: 20 March 2026
          </span>
          <div className="h-px w-16 bg-border/60" />
        </div>

        {/* Policy Sections */}
        <div className="mt-14 space-y-10 text-left">
          {/* 1 */}
          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              1. Introduction
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Black Sofa London Limited (“Black Sofa”, “we”, “our”) is committed
              to protecting your privacy. This policy explains how we collect,
              use, and protect your personal data.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              2. Data Controller
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Black Sofa London Limited is the data controller. We are
              registered in England and Wales.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              3. Information We Collect
            </h2>
            <ul className="mt-3 space-y-2 text-[#3A3A3A]/80 leading-relaxed">
              <li>• Name, email, phone number, and company details</li>
              <li>• Payroll data processed on behalf of clients</li>
              <li>• Website usage analytics</li>
              <li>• Communication records when you contact us</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              4. How We Use Your Data
            </h2>
            <ul className="mt-3 space-y-2 text-[#3A3A3A]/80 leading-relaxed">
              <li>• Provide and improve payroll services</li>
              <li>• Respond to enquiries and demo requests</li>
              <li>• Meet legal and regulatory obligations</li>
              <li>• Send service-related updates</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              5. Data Retention
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              We retain personal data as long as necessary for its purpose and
              in line with HMRC guidelines.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-medium text-[#2b2b2b] font-garamond-medium">
              6. Your Rights
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Under UK GDPR, you may access, rectify, erase, restrict, or port
              your data. Contact privacy@blacksofa.co.uk.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              7. Contact
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              privacy@blacksofa.co.uk — Black Sofa London Limited, London, UK.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
