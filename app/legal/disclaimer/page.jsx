import React from "react";

const Disclaimer = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden="true">
        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-70 top-16 left-[5%] lg:left-[10%]">
          <img
            src="/assets/FAQ1.webp"
            alt="Hot air Ballon"
            className="w-full drop-shadow-lg"
          />
        </div>

        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-60 top-[35%] right-[3%] lg:right-[8%]">
          <img
            src="/assets/FAQ2.webp"
            alt="Cup tea"
            className="w-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
        <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl font-display">
          Disclaimer
        </h1>

        <p className="mt-6 text-[#3A3A3A]/70 leading-relaxed">
          Important information about the use of this website and the content provided by Ashford Hale.
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
            <h2 className="text-2xl font-medium font-display">1. General</h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Information on this website is for general informational purposes. Ashford Hale makes no warranties about completeness or accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-display">2. Not Financial or Legal Advice</h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Content does not constitute financial, legal, or tax advice. Always consult a qualified professional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-display">3. Third-Party Links</h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Our website may contain external links. Ashford Hale is not responsible for third-party content.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;