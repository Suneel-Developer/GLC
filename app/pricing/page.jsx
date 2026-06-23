import Link from "next/link";

const Pricing = () => {
  return (
    <main className="relative">
      <section className="pt-30 pb-7">
        <div className="mx-auto max-w-160 px-6 text-center">
          <h1 className="text-3xl font-medium md:text-[44px] lg:text-[52px] leading-[1.08] font-garamond-medium">
            Simple, transparent pricing
          </h1>

          <p className="mt-4 text-[15px] text-[#3a3a3a8c] max-w-100 mx-auto">
            No hidden fees. No surprises. Just payroll, handled properly.
          </p>

          <div className="mt-6">
            <span className="text-sm text-[#3a3a3a8c]">
              Pricing that scales with you
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-265 px-6">
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {/* Essential */}
            <div className="group relative flex flex-col rounded-2xl border border-white/30 bg-linear-to-b from-white/80 to-white/55 px-7 py-7.5 text-center shadow-[0_4px_28px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_14px_48px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(160deg,rgba(199,184,227,0.25)_0%,rgba(232,183,200,0.2)_50%,rgba(247,245,255,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <h3 className="font-garamond-medium relative z-10 text-[22px] font-medium text-[#2b2b2b]">
                Essential
              </h3>

              <p className="relative z-10 mt-2 min-h-9 text-[13px] leading-relaxed text-[#8896A6]">
                Everything you need to run payroll properly.
              </p>

              <div className="relative z-10 mb-3 mt-4">
                <span className="font-garamond-medium text-[46px] leading-none text-[#2b2b2b] md:text-[50px]">
                  From £6
                </span>
                <span className="mt-1 block text-[12px] text-[#3a3a3a66]">
                  per payslip
                </span>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-4">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.06em] text-[#2b2b2b]">
                  Essential for you:
                </p>

                <ul className="inline-block space-y-1.75 text-left">
                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Weekly or monthly payroll processing</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>RTI submissions to HMRC</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Payslips and reporting</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Basic compliance checks</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Email support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional */}
            <div className="group relative z-10 flex flex-col rounded-2xl border border-[#2b2b2bbf]/40 bg-linear-to-b from-white to-[#FCFBF8] px-7 py-7.5 text-center shadow-[0_8px_40px_rgba(0,0,0,0.09)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.14)] md:scale-[1.03]">
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(160deg,rgba(199,184,227,0.25)_0%,rgba(232,183,200,0.2)_50%,rgba(247,245,255,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-[#2b2b2bbf] px-3 py-0.75 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/85">
                Most Popular
              </span>

              <h3 className="font-garamond-medium relative z-10 text-[22px] font-medium text-[#2b2b2b]">
                Professional
              </h3>

              <p className="relative z-10 mt-2 min-h-9 text-[13px] leading-relaxed text-[#3a3a3a99]">
                More control. More visibility. Less time spent chasing.
              </p>

              <div className="relative z-10 mb-3 mt-4">
                <span className="font-garamond-medium text-[46px] leading-none text-[#2b2b2b] md:text-[50px]">
                  From £9
                </span>
                <span className="mt-1 block text-[12px] text-[#3a3a3a99]">
                  per payslip
                </span>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-4">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.06em] text-[#2b2b2b]">
                  Everything in Essential plus:
                </p>

                <ul className="inline-block space-y-1.75 text-left">
                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt- h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Real-time payroll dashboard</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Timesheet tracking & approvals</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Automated compliance checks</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Client & candidate portals</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise */}
            <div className="group relative flex flex-col rounded-2xl border border-white/30 bg-linear-to-b from-white/80 to-white/55 px-7 py-7.5 text-center shadow-[0_4px_28px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_14px_48px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(160deg,rgba(199,184,227,0.25)_0%,rgba(232,183,200,0.2)_50%,rgba(247,245,255,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <h3 className="font-garamond-medium relative z-10 text-[22px] font-medium text-[#2b2b2b]">
                Enterprise
              </h3>

              <p className="relative z-10 mt-2 min-h-9 text-[13px] leading-relaxed text-[#8896A6]">
                Fully managed payroll, tailored to your business.
              </p>

              <div className="relative z-10 mb-3 mt-4">
                <span className="font-garamond-medium text-[46px] leading-none text-[#2b2b2b] md:text-[50px]">
                  Custom
                </span>
                <span className="mt-1 block text-[12px] text-[#3a3a3a66]">
                  pricing
                </span>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-4">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.06em] text-[#2b2b2b]">
                  Everything in Professional plus:
                </p>

                <ul className="inline-block space-y-1.75 text-left">
                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Custom workflows & integrations</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Advanced reporting & analytics</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Full onboarding & setup support</span>
                  </li>

                  <li className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a3a99]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.75 h-3.5 w-3.5 shrink-0 text-[#2b2b2b4d]"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Ongoing optimisation & advisory</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-265 px-6">
          <h1 className="text-3xl font-medium md:text-4xl lg:text-[40px] leading-[1.15] font-garamond-medium text-center">
            Everything handled. Nothing missed.
          </h1>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="group relative flex flex-col items-center text-center rounded-2xl p-7 overflow-hidden transition-all duration-400 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_rgba(0,0,0,0.09)]"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.35) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(199,184,227,0.25) 0%, rgba(232,183,200,0.2) 50%, rgba(247,245,255,0.1) 100%)",
                }}
              ></div>

              <h3 className="relative z-10 text-[20px] font-medium font-garamond-medium">
                Fully compliant
              </h3>

              <div className="relative z-10 my-5 flex h-16 w-16 items-center justify-center">
                <img
                  src="/assets/compliant.webp"
                  alt="Fully compliant"
                  loading="lazy"
                  className="h-16 w-16 object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-95"
                />
              </div>

              <p class="relative z-10 text-[13px] text-[#3a3a3a] leading-relaxed">
                Built around HMRC requirements, so nothing slips through the
                cracks.
              </p>
            </div>

            <div
              className="group relative flex flex-col items-center text-center rounded-2xl p-7 overflow-hidden transition-all duration-400 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_rgba(0,0,0,0.09)]"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.35) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(199,184,227,0.25) 0%, rgba(232,183,200,0.2) 50%, rgba(247,245,255,0.1) 100%)",
                }}
              ></div>

              <h3 className="relative z-10 text-[20px] font-medium font-garamond-medium">
                Real-time visibility
              </h3>

              <div className="relative z-10 my-5 flex h-16 w-16 items-center justify-center">
                <img
                  src="/assets/visibility.webp"
                  alt="Real-time visibility"
                  loading="lazy"
                  className="h-16 w-16 object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-95"
                />
              </div>

              <p class="relative z-10 text-[13px] text-[#3a3a3a] leading-relaxed">
                See exactly what's happening across your payroll, costs and
                liabilities as it happens.
              </p>
            </div>

            <div
              className="group relative flex flex-col items-center text-center rounded-2xl p-7 overflow-hidden transition-all duration-400 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_rgba(0,0,0,0.09)]"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.35) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(199,184,227,0.25) 0%, rgba(232,183,200,0.2) 50%, rgba(247,245,255,0.1) 100%)",
                }}
              ></div>

              <h3 className="relative z-10 text-[20px] font-medium font-garamond-medium">
                Built for scale
              </h3>

              <div className="relative z-10 my-5 flex h-16 w-16 items-center justify-center">
                <img
                  src="/assets/scale.webp"
                  alt="Built for scale"
                  loading="lazy"
                  className="h-16 w-16 object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-95"
                />
              </div>

              <p class="relative z-10 text-[13px] text-[#3a3a3a] leading-relaxed">
                From weekly site payroll to large monthly teams, everything runs
                in one place.
              </p>
            </div>

            <div
              className="group relative flex flex-col items-center text-center rounded-2xl p-7 overflow-hidden transition-all duration-400 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_rgba(0,0,0,0.09)]"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.35) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(199,184,227,0.25) 0%, rgba(232,183,200,0.2) 50%, rgba(247,245,255,0.1) 100%)",
                }}
              ></div>

              <h3 className="relative z-10 text-[20px] font-medium font-garamond-medium">
                Support that understands payroll
              </h3>

              <div className="relative z-10 my-5 flex h-16 w-16 items-center justify-center">
                <img
                  src="/assets/support.webp"
                  alt="Support that understands payroll"
                  loading="lazy"
                  className="h-16 w-16 object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-95"
                />
              </div>

              <p class="relative z-10 text-[13px] text-[#3a3a3a] leading-relaxed">
                Real people who understand your setup and resolve issues
                quickly.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <span className="text-sm text-[#3a3a3a]/80 font-garamond-medium">
              Designed for UK businesses running complex or high-volume payroll
            </span>
          </div>
        </div>
      </section>

      <section className="pb-25">
        <div className="mx-auto max-w-140 px-6 text-center">
          <h2 className="font-garamond-medium text-2xl font-medium leading-[1.2] md:text-3xl lg:text-[36px]">
            Not sure which plan is right?
          </h2>

          <p className="mt-4 text-[15px] text-[#3a3a3a]/50">
            Get a clear, tailored quote based on your payroll setup.
          </p>

          <div className="mt-10">
            <Link
              href="/get-a-quote"
              className="btn-primary btn-glow inline-block px-8! py-3!"
            >
              Get a tailored quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
