import Link from "next/link";

const Why = () => {
  return (
    <main className="relative">
      <section className="relative pt-16 md:pt-24 pb-20 overflow-hidden">
        <div
          className="relative w-full mx-auto max-w-300 px-6 overflow-hidden rounded-2xl"
          style={{ height: "clamp(300px, 55vw, 750px)" }}
        >
          <div className="absolute inset-0 will-change-transform rounded-2xl">
            <img
              alt="hero-img"
              className="w-full h-[120%] object-cover opacity-80 rounded-2xl"
              src="/assets/head-hero-highres.webp"
            />
          </div>

          <div
            className="absolute inset-0 z-20 flex items-center justify-center px-6"
            style={{ transform: "translateY(-11.7927px)" }}
          >
            <div
              className="glass rounded-2xl px-5 py-6 sm:px-8 sm:py-10 md:px-14 md:py-12 max-w-145 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.62)",
                opacity: 1,
                transform: "none",
              }}
            >
              <h1 className="text-2xl font-medium md:text-[36px] lg:text-[40px] leading-[1.12] text-[#3a3a3a] font-garamond-light">
                Why Black Sofa
              </h1>

              <p className="mt-1 text-base md:text-lg text-[#3a3a3a]/70 font-medium font-garamond-light">
                Payroll, handled properly
              </p>

              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-[13px] sm:text-sm text-[#3a3a3aa6] leading-relaxed">
                <p>
                  Payroll shouldn't be noisy, slow, or uncertain. <br /> It
                  should just work. Quietly, accurately, and on time.
                </p>

                <p>
                  Black Sofa removes the friction from payroll by combining
                  automation, real-time visibility, and built-in compliance into
                  one seamless system.
                </p>

                <p className="font-medium text-[#3a3a3a]/75">
                  No chasing. No guesswork. No unnecessary complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-240 px-6 relative">
          <div
            className="pointer-events-none absolute right-0 -top-5 hidden lg:block"
            aria-hidden="true"
          >
            <div
              className="w-42 xl:w-54 opacity-65"
              style={{ transform: "translateY(-4.93941px)" }}
            >
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full"
                src="/assets/FAQ1.webp"
              />
            </div>
          </div>
          <div className="mx-auto max-w-170 text-center relative z-10">
            <div>
              <h2 className="text-2xl font-medium md:text-[34px] lg:text-[38px] leading-[1.15] font-garamond-medium">
                A better way to run payroll
              </h2>

              <p className="mt-5 text-[15px] text-[#3a3a3a]/55 leading-[1.8]">
                Most payroll processes still rely on manual steps, workarounds,
                and constant oversight. Timesheets are chased. Errors are
                corrected. Reports are built after the fact. It works. But it's
                heavier than it should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-170 px-6">
          <div>
            <div
              className="glass rounded-2xl px-8 py-12 md:px-14 md:py-16 text-center"
              style={{ background: "rgba(255, 255, 255, 0.62)" }}
            >
              <h2 className="text-2xl font-medium md:text-4xl lg:text-[42px] leading-[1.15] font-garamond-medium">
                We built Black Sofa to remove that entirely
              </h2>

              <p className="mt-5 text-[15px] text-[#3a3a3a]/50 leading-relaxed">
                Not to improve payroll slightly.
                <br />
                To take it off your plate altogether.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-240 px-6 space-y-14">
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-medium md:text-[28px] lg:text-[32px] leading-[1.2] text-[#2B2B2B] font-garamond-medium">
                  Real-time visibility
                </h3>

                <p className="mt-4 text-[15px] text-[#3a3a3a]/55 leading-[1.8]">
                  You don't wait for reports to understand your payroll. Costs,
                  margins, liabilities and outputs are visible as they happen.
                </p>
              </div>

              <div
                className="w-40 lg:w-50 h-40 lg:h-50 shrink-0 opacity-65 flex items-center justify-center"
                style={{ transform: "translateY(-1.9667px)" }}
              >
                <img
                  src="/assets/CoinTaxmanT.webp"
                  alt="CoinTaxmanT"
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col items-center gap-10 lg:gap-16 lg:flex-row-reverse">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-medium md:text-[28px] lg:text-[32px] leading-[1.2] text-[#2B2B2B] font-garamond-medium">
                  Automation at the core
                </h3>
                <p className="mt-4 text-[15px] text-[#3a3a3a]/55 leading-[1.8]">
                  From timesheets to payslips to HMRC submissions, everything
                  flows automatically. No manual steps unless absolutely
                  necessary.
                </p>
              </div>
              <div
                className="w-40 lg:w-50 h-40 lg:h-50 shrink-0 opacity-65 flex items-center justify-center"
                style={{ transform: "translateY(-0.557734px)" }}
              >
                <img
                  src="/assets/ScalesT.webp"
                  alt="ScalesT"
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-medium md:text-[28px] lg:text-[32px] leading-[1.2] text-[#2B2B2B] font-garamond-medium">
                  Built-in compliance
                </h3>
                <p className="mt-4 text-[15px] text-[#3a3a3a]/55 leading-[1.8]">
                  HMRC alignment is not something you check at the end. It is
                  embedded into every step of the process.
                </p>
              </div>
              <div
                className="w-40 lg:w-50 h-40 lg:h-50 shrink-0 opacity-65 flex items-center justify-center"
                style={{ transform: "translateY(-4.25448px)" }}
              >
                <img
                  src="/assets/CuppaT.webp"
                  alt="CuppaT"
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col items-center gap-10 lg:gap-16 lg:flex-row-reverse">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-medium md:text-[38px] lg:text-[38px] leading-[1.2] text-[#2B2B2B] font-garamond-medium">
                  Designed for real payroll complexity
                </h3>
                <p className="mt-4 text-[15px] text-[#3a3a3a]/55 leading-[1.8]">
                  CIS, PAYE, contractors, multiple rates and structures. Handled
                  cleanly, without workarounds.
                </p>
              </div>
              <div
                className="w-40 lg:w-50 h-40 lg:h-50 shrink-0 opacity-65 flex items-center justify-center"
                style={{ transform: "translateY(-3.89999px)" }}
              >
                <img
                  src="/assets/TreehouseT.webp"
                  alt="TreehouseT"
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <p className="text-base md:text-lg text-[#3a3a3a]/40 font-light font-garamond-medium">
            Everything moves, without you moving it
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[960px] px-6 relative">
          <div
            style={{ transform: "translateY(-4.92884px)" }}
            className="pointer-events-none absolute right-4 top-[-10px] hidden lg:block"
          >
            <div className="w-[160px] xl:w-[200px] opacity-65">
              <img
                src="/assets/WateringCanT.webp"
                alt="WateringCanT"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mx-auto max-w-170 text-center relative z-10">
            <h3 className="text-xl font-medium md:text-[28px] lg:text-[32px] leading-[1.2] font-garamond-medium text-[#2B2B2B]">
              Control without complexity
            </h3>

            <p className="mt-4 text-[15px] leading-[1.8]">
              Clients and contractors manage their own data within structured,
              controlled environments. The system prevents incorrect inputs,
              rather than fixing them later.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[580px] px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="glass rounded-2xl bg-white/60 px-5 py-6 text-center transition-shadow duration-300 hover:shadow-lg">
              <span className="text-xl font-medium text-foreground md:text-[26px] lg:text-[30px] font-garamond-medium">
                Less admin
              </span>
            </div>

            <div className="glass rounded-2xl bg-white/60 px-5 py-6 text-center transition-shadow duration-300 hover:shadow-lg">
              <span className="text-xl font-medium text-foreground md:text-[26px] lg:text-[30px] font-garamond-medium">
                Fewer errors
              </span>
            </div>

            <div className="glass rounded-2xl bg-white/60 px-5 py-6 text-center transition-shadow duration-300 hover:shadow-lg">
              <span className="text-xl font-medium text-foreground md:text-[26px] lg:text-[30px] font-garamond-medium">
                Full visibility
              </span>
            </div>

            <div className="glass rounded-2xl bg-white/60 px-5 py-6 text-center transition-shadow duration-300 hover:shadow-lg">
              <span className="text-xl font-medium text-foreground md:text-[26px] lg:text-[30px] font-garamond-medium">
                Predictable payroll
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <h2 className="text-2xl font-medium leading-[1.2] text-[#2B2B2B] md:text-[36px] lg:text-[42px] font-garamond-medium">
            Payroll doesn't need managing.
          </h2>

          <p className="mt-4 text-xl font-medium leading-[1.2] md:text-[28px] lg:text-[32px] font-garamond-medium">
            It just needs to run.
          </p>

          <div className="mt-12">
            <Link
              href="/book-a-demo"
              className="btn-primary btn-glow inline-block"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Why;
