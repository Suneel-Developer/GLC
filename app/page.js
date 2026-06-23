import Link from "next/link";
import Brands from "./components/Home/Brands";
import Hero from "./components/Home/Hero";
import HowItWorks from "./components/Home/Howitworks";
import TrustBadges from "./components/Home/TrustBadges";
import FAQ from "./components/Home/FAQ";

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      <Brands />

      <section className="pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <p className="text-base md:text-[17px] text-[#3a3a3a99] font-light font-garamond">
              Run payroll in minutes, not days
            </p>
            <p className="text-base md:text-[17px] text-[#3a3a3a99] font-light font-garamond">
              Real-time visibility across every worker
            </p>

            <p className="text-base md:text-[17px] text-[#3a3a3a99] font-light font-garamond">
              HMRC submissions handled automatically
            </p>

            <p className="text-base md:text-[17px] text-[#3a3a3a99] font-light font-garamond">
              Built for UK recruitment and contractor payroll
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 relative overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <div
              className="mx-auto max-w-[960px] rounded-2xl p-6 sm:p-10 md:p-14"
              style={{
                background: "rgba(255,255,255,0.62)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-medium md:text-4xl lg:text-[44px] leading-[1.15] font-garamond-light">
                    Clarity. Control. Compliance.
                  </h2>

                  <div className="mt-6 space-y-4 text-sm text-muted/75 leading-relaxed">
                    <p>
                      Everything you need to run payroll properly, without the
                      usual friction.
                    </p>
                    <p>
                      See exactly what's happening across your payroll in real
                      time. Understand your costs, margins and liabilities
                      before you run payroll.
                    </p>
                    <p>
                      Stay compliant without chasing paperwork or
                      second-guessing numbers.
                    </p>
                    <p className="font-medium text-foreground">
                      This is payroll, rebuilt to actually work.
                    </p>
                  </div>

                  <p className="mt-6 text-[13px] text-muted/40">
                    Built specifically for UK recruitment agencies and
                    contractor payroll
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="/assets/download.gif"
                    alt="Conductor animation"
                    className="w-[260px] md:w-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 overflow-hidden">
        <div className="mx-auto max-w-175 px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-[44px] leading-[1.15] font-garamond-medium">
              Still managing payroll the{" "}
              <span className="whitespace-nowrap">hard way?</span>
            </h2>
          </div>

          <div>
            <div
              className="rounded-2xl border border-[#ffffff59] overflow-hidden"
              style={{ background: "rgba(255, 255, 255, 0.35)" }}
            >
              <div className="grid grid-cols-2">
                <div className="px-3 sm:px-6 py-4 sm:py-6 text-center">
                  <h3 className="text-lg font-medium md:text-xl text-[#2b2b2b]/55 font-garamond-medium">
                    Payroll
                    <br />
                    without Black Sofa
                  </h3>
                </div>

                <div
                  className="px-6 py-6 text-center rounded-t-xl"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <h3 className="text-lg font-medium md:text-xl text-[#2b2b2b]/55 font-garamond-medium">
                    Payroll
                    <br />
                    with Black Sofa
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-[#e5e2da40]">
                <div className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                  <span className="text-sm text-[#3a3a3a66]">
                    Slow &amp; manual
                  </span>
                </div>

                <div
                  className="px-6 py-4 text-center"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <span className="text-sm font-medium text-[#2b2b2b]">
                    Fast &amp; automated
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-[#e5e2da40]">
                <div className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                  <span className="text-sm text-[#3a3a3a66]">Error-prone</span>
                </div>

                <div
                  className="px-6 py-4 text-center"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <span className="text-sm font-medium text-[#2b2b2b]">
                    Accurate, every time
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-[#e5e2da40]">
                <div className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                  <span className="text-sm text-[#3a3a3a66]">
                    Disconnected systems
                  </span>
                </div>

                <div
                  className="px-6 py-4 text-center"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <span className="text-sm font-medium text-[#2b2b2b]">
                    Fully integrated
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-[#e5e2da40]">
                <div className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                  <span className="text-sm text-[#3a3a3a66]">
                    Constant questions
                  </span>
                </div>
                <div
                  className="px-6 py-4 text-center"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <span className="text-sm font-medium text-[#2b2b2b]">
                    Total clarity
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-[#e5e2da40]">
                <div className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                  <span className="text-sm text-[#3a3a3a66]">Firefighting</span>
                </div>
                <div
                  className="px-6 py-4 text-center"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <span className="text-sm font-medium text-[#2b2b2b]">
                    In control
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-[#e5e2da40]">
                <div className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                  <span className="text-sm text-[#3a3a3a66]">At risk</span>
                </div>
                <div
                  className="px-6 py-4 text-center"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <span className="text-sm font-medium text-[#2b2b2b]">
                    Compliant &amp; protected
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-[#e5e2da40]">
                <div></div>
                <div
                  className="px-6 py-6 text-center"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <a
                    className="btn-primary btn-glow inline-block"
                    href="/book-a-demo"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <TrustBadges />

      <section className="pb-20 relative overflow-hidden">
        <div className="mx-auto max-w-180 px-6">
          <div>
            <div
              className="glass rounded-2xl p-10 md:p-14 text-center"
              style={{ background: "rgba(255,255,255,0.62)" }}
            >
              <h2 className="text-2xl font-medium md:text-[32px] lg:text-4xl leading-[1.15] font-garamond-light">
                Stop chasing timesheets.
                <br />
                Stop fixing errors.
                <br />
                Stop second-guessing numbers.
              </h2>

              <div className="mx-auto mt-6 max-w-130 space-y-3 text-sm leading-relaxed text-[#3a3a3a]/65">
                <p>
                  Black Sofa removes the manual work, the back and forth, and
                  the uncertainty from payroll.
                </p>

                <p className="font-medium">
                  So you can focus on running your business, not managing
                  payroll problems.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/book-a-demo"
                  className="btn-primary btn-glow inline-block"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="pb-20 relative overflow-hidden">
        <div className="mx-auto max-w-225 px-6">
          <div>
            <div
              className="relative overflow-hidden glass rounded-2xl px-8 py-14 md:px-14 md:py-16 text-center"
              style={{ background: "rgba(255,255,255,0.62)" }}
            >
              <div
                className="pointer-events-none absolute inset-0 z-0"
                aria-hidden="true"
              >
                <div className="absolute -top-10 -left-20 w-87.5 opacity-20">
                  <img
                    alt="cloud image"
                    loading="lazy"
                    width="350"
                    height="230"
                    decoding="async"
                    data-nimg="1"
                    className="w-full"
                    src="/assets/cloud-3.webp"
                  />
                </div>

                <div className="absolute -bottom-8 -right-16 w-87.5 opacity-15">
                  <img
                    alt="cloud image"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="w-full"
                    src="/assets/cloud-4.webp"
                  />
                </div>
              </div>
              <div className="relative z-10 w-full">
                <h2 className="text-2xl md:text-[32px] lg:text-4xl leading-[1.15] text-[#2b2b2b] font-garamond-light">
                  See exactly how your payroll would run with Black Sofa
                </h2>

                <div className="mt-6">
                  <Link
                    className="btn-primary btn-glow inline-block"
                    href="/book-a-demo"
                  >
                    Book a Demo
                  </Link>

                  <p className="mt-3 text-[13px] text-[#3a3a3a]/40">
                    Get started with Black Sofa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
