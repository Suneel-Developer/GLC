import Link from "next/link";

export default function PayrollCTASection() {
  return (
    <section className="relative w-full pb-35">
      <div className="mx-auto max-w-240 px-6">
        <div
          className="relative overflow-hidden rounded-[36px] px-8 py-14 text-center md:px-14 md:py-20"
          style={{
            background: "rgba(255,255,255,0.62)",
          }}
        >
          <div className="relative mx-auto max-w-190">
            <h2 className="text-3xl font-medium leading-[1.08] md:text-4xl lg:text-5xl font-garamond-medium">
              See your payroll this clearly
            </h2>

            <p className="mx-auto mt-6 max-w-120 text-[15px] leading-[1.85] text-[#3a3a3a]/55">
              Book a demo and explore your data in real time.
            </p>

            {/* Chart Card */}
            <div
              className="mx-auto mt-10 max-w-180 rounded-[28px] bg-white/70 p-5 md:p-6"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.65)",
              }}
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className="text-[15px] text-[#2b2b2b]">
                    Payroll Breakdown{" "}
                    <span className="text-[#3a3a3a]/50">
                      (Month-over-Month)
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-[#3a3a3a]/40">
                    Current Payroll
                  </p>
                </div>

                <div className="text-[22px] font-semibold tracking-[-0.02em] text-[#9A8BFF]">
                  £48,732
                </div>
              </div>

              <div className="overflow-x-auto">
                <img
                  src="/assets/payroll-breakdown-chart.png"
                  alt="payroll-breakdown-chart"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Legend */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[12px] text-[#3a3a3a66]">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-[3px] bg-[#7B9FE8]" />
                  Pay
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-[3px] bg-[#C8B5FF]" />
                  NIC
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-[3px] bg-[#F0D88A]" />
                  Tax
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-[3px] bg-[#E8A0A0]" />
                  Margin
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="btn-primary btn-glow inline-block px-8! py-3.5! text-[15px]!"
              >
                Talk to the team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
