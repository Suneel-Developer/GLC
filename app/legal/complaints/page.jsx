import React from "react";

const Complaints = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background elements */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        aria-hidden="true"
      >
        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-70 top-[35%] right-[3%] lg:right-[8%]">
          <img
            src="/assets/CuppaT.webp"
            alt="CuppaT"
            loading="lazy"
            className="w-full drop-shadow-lg"
          />
        </div>

        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-60 bottom-[15%] left-[3%] lg:left-[8%]">
          <img
            src="/assets/FlyingPigT.webp"
            alt="FlyingPigT"
            loading="lazy"
            className="w-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
        <div>
          <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl font-garamond-medium">
            Complaints Policy
          </h1>

          <p className="mt-6 text-[#3A3A3A]/70 leading-relaxed">
            Ashford Hale is committed to providing excellent service. If something
            goes wrong, we want to hear about it and put it right.
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
              1. Our Commitment
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Ashford Hale is committed to providing excellent service. If
              something goes wrong, we want to hear about it and put it right.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              2. How to Complain
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Email complaints@blacksofa.co.uk with your name, company, and a
              description of the issue. We aim to acknowledge complaints within
              2 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              3. Resolution
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              We will investigate and aim to resolve complaints within 10
              business days. If more time is needed, we will keep you informed
              of progress.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              4. Escalation
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              If you are not satisfied with our response, you may escalate to a
              senior manager. We will provide details of any relevant
              ombudsman or regulatory body if applicable.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Complaints;