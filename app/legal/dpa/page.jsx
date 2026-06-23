import React from "react";

const DPA = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Decorative images */}
      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden="true">
        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-70 top-[35%] left-[3%] lg:left-[8%]">
          <img
            src="/assets/FilingCabinetT.webp"
            alt="FilingCabinetT"
            className="w-full drop-shadow-lg"
          />
        </div>

        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-60 bottom-[15%] right-[3%] lg:right-[8%]">
          <img
            src="/assets/ScalesT.webp"
            alt="ScalesT"
            className="w-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
        <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl font-display">
          Data Processing Agreement
        </h1>

        <p className="mt-6 text-[#3A3A3A]/70 leading-relaxed">
          This agreement sets out how Ashford Hale processes personal data on behalf of our clients — ensuring security, compliance and transparency.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-border/60" />
          <span className="text-sm text-[#3A3A3A]/50">
            Effective date: 20 March 2026
          </span>
          <div className="h-px w-16 bg-border/60" />
        </div>

        <div className="mt-14 space-y-10 text-left">
          <section>
            <h2 className="text-2xl font-medium font-display">1. Scope</h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              This DPA applies where Ashford Hale processes personal data as a data processor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-display">2. Processing Activities</h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              We process payroll-related employee and tax data solely for service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-display">3. Security Measures</h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              We implement technical and organisational safeguards to protect data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-display">4. Sub-processors</h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Clients are informed of sub-processors and equivalent safeguards are enforced.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-display">5. Data Subject Rights</h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              We assist clients in fulfilling GDPR data subject requests.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DPA;