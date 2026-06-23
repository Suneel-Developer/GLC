import Link from "next/link";
import Scenes from "../components/Payroll/Scenes";
import PayrollHeroSection from "../components/Payroll/PayrollHeroSection";
import TrustBadgesSection from "../components/Payroll/TrustBadgesSection";
import HowItWorksSection from "../components/Payroll/HowItWorksSection";

const Payroll = () => {
  return (
    <main className="relative">
      <PayrollHeroSection />

      <TrustBadgesSection />

      <HowItWorksSection />

      <Scenes />

      <section className="relative overflow-hidden pb-20">
        <div className="relative mx-auto max-w-240 px-6 md:px-8">
          <div className="relative">
            <div className="mx-auto w-full max-w-170">
              {/* Section 1 */}
              <div className="border-b border-white/20 pb-10 md:pb-12">
                <h3 className="font-garamond-medium text-[34px] font-medium leading-[1.08] md:text-[44px]">
                  Clarity, at every stage
                </h3>

                <p className="font-garamond-medium mt-4 max-w-155 text-[17px] leading-[1.7] text-[#3a3a3a]/75 md:text-lg">
                  Track payroll in real time with clear, structured reporting.
                  From individual placements to full business performance,
                  everything is visible and easy to understand.
                </p>

                <ul className="mt-7 space-y-3">
                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Live P&amp;L visibility</span>
                  </li>

                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Payroll run tracking</span>
                  </li>

                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>HMRC liabilities overview</span>
                  </li>

                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Forecasting and planning tools</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="border-b border-white/20 pb-10 pt-10 md:pb-12 md:pt-12">
                <h3 className="font-garamond-medium text-[34px] font-medium leading-[1.08] md:text-[44px]">
                  Less manual work. More control.
                </h3>

                <p className="font-garamond-medium mt-4 max-w-155 text-[17px] leading-[1.7] text-[#2b2b2b]/75 md:text-lg">
                  Automation removes repetitive admin and reduces risk. What
                  used to take days now runs in the background, accurately and
                  consistently.
                </p>

                <ul className="mt-7 space-y-3">
                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Automatic calculations and deductions</span>
                  </li>

                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Scheduled payroll runs</span>
                  </li>

                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Integrated compliance checks</span>
                  </li>

                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Real-time updates across the system</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="pt-10 md:pt-12">
                <h3 className="font-garamond-medium text-[34px] font-medium leading-[1.08] md:text-[44px]">
                  Fits into how you already work
                </h3>

                <p className="font-garamond-medium mt-4 max-w-155 text-[17px] leading-[1.7] text-[#2b2b2b]/75 md:text-lg">
                  Payroll connects seamlessly with your existing processes. From
                  onboarding to HMRC submissions, it's all in sync.
                </p>

                <ul className="mt-7 space-y-3">
                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Works with your current workflow</span>
                  </li>

                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>No unnecessary process change</span>
                  </li>

                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Clear handoffs across teams</span>
                  </li>

                  <li className="font-garamond-medium flex items-start gap-3 text-base leading-[1.6] text-[#2b2b2bb3]">
                    <span className="mt-0.75 shrink-0">✓</span>
                    <span>Built to scale with demand</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Side Image */}
            <div className="pointer-events-none absolute -right-35 top-0 hidden lg:block">
              <div className="sticky top-25 w-70">
                <img
                  src="/assets/Man.webp"
                  alt="Surreal typewriter-headed figure"
                  loading="lazy"
                  className="h-auto w-full select-none object-contain drop-shadow-[0_28px_34px_rgba(58,46,76,0.16)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-170 px-6">
          <div className="glass rounded-2xl bg-white/60 px-8 py-12 text-center md:px-14 md:py-14">
            <h2 className="font-garamond-medium text-2xl font-medium leading-[1.15] md:text-[32px] lg:text-4xl">
              Built for accuracy. Trusted to deliver.
            </h2>

            <p className="mx-auto mt-4 max-w-120 text-[15px] leading-relaxed text-[#3a3a3a]">
              Every payroll run is backed by structured processes, automated
              checks, and full audit visibility.
            </p>

            <ul className="mt-6 space-y-2">
              <li className="text-sm text-[#3a3a3a80]">
                • Fully compliant UK payroll processing
              </li>

              <li className="text-sm text-[#3a3a3a80]">
                • Secure data handling
              </li>

              <li className="text-sm text-[#3a3a3a80]">
                • Transparent reporting
              </li>

              <li className="text-sm text-[#3a3a3a80]">
                • Consistent, repeatable workflows
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-40 pt-10">
        <div className="mx-auto max-w-170 px-6 text-center">
          <h2 className="font-garamond-medium text-2xl font-medium leading-[1.1] md:text-[40px] lg:text-5xl">
            Make payroll feel like it's no longer a problem
          </h2>

          <p className="mt-5 text-base text-[#3a3a3a]/55 md:text-lg">
            Everything handled. Nothing missed.
            <br />
            Just clean, reliable payroll running exactly as it should.
          </p>

          <div className="mt-12">
            <Link
              href="/contact"
              className="btn-primary btn-glow inline-block px-10! py-4! text-base!"
            >
              Speak to the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payroll;
