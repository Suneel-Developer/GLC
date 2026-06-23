import React from "react";

const Terms = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Decorative images */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        aria-hidden="true"
      >
        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-70 top-16 right-[5%] lg:right-[10%]">
          <img
            src="/assets/GavelT.webp"
            alt="GavelT"
            loading="lazy"
            className="w-full drop-shadow-lg"
          />
        </div>

        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-60 bottom-[15%] left-[3%] lg:left-[8%]">
          <img
            src="/assets/DartboardT.webp"
            alt="DartboardT"
            loading="lazy"
            className="w-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
        <div>
          <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl font-garamond-medium">
            Terms of Service
          </h1>

          <p className="mt-6 text-[#3A3A3A]/70 leading-relaxed">
            By using Ashford Hale's website or services, you agree to these terms
            — designed to keep things fair, clear and straightforward.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-border/60" />
          <span className="text-sm text-[#3A3A3A]/50">
            Effective date: 20 March 2026
          </span>
          <div className="h-px w-16 bg-border/60" />
        </div>

        <div className="mt-14 space-y-10 text-left">
          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              1. Agreement
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              By using Ashford Hale's website or services, you agree to these
              Terms. If you do not agree, do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              2. Services
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Ashford Hale provides payroll outsourcing, compliance management,
              reporting, and related services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              3. Client Obligations
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Clients must provide accurate, complete, and timely payroll data.
              Ashford Hale is not liable for errors from inaccurate or late
              submissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              4. Confidentiality
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Both parties agree to maintain confidentiality of proprietary and
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              5. Limitation of Liability
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              To the maximum extent permitted by law, liability is limited to
              fees paid in the preceding 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              6. Termination
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Either party may terminate with 30 days' written notice. We assist
              with transition and data handover.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              7. Governing Law
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              These terms are governed by the laws of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Terms;
