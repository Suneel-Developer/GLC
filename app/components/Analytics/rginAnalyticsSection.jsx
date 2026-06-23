const features = [
  "Instant visibility across charge, pay, and profit",
  "Placement-level financial detail in one place",
  "Clear margin tracking without spreadsheets",
];

const metrics = [
  {
    label: "Charge",
    value: "£535,289",
    color: "#4D86E8",
  },
  {
    label: "Cost",
    value: "£431,427",
    color: "#F08B2D",
  },
  {
    label: "Candidates",
    value: "116",
    color: "#9A63FF",
  },
  {
    label: "Companies",
    value: "17",
    color: "#E44A9B",
  },
];

export default function MarginAnalyticsSection() {
  return (
    <section className="relative w-full pb-20">
      <div className="mx-auto max-w-240 px-6">
        {/* Header */}
        <div className="mx-auto max-w-170 text-center">
          <h2 className="text-3xl font-medium leading-[1.15] md:text-4xl lg:text-[44px] font-garamond-medium">
            Understand margins instantly
          </h2>

          <p className="mx-auto mt-5 max-w-150 text-base font-light leading-snug text-[#2b2b2b]/70 md:text-lg font-garamond-medium">
            See exactly what you're earning across placements, with clear
            breakdowns of cost, charge, and margin.
          </p>

          <ul className="mx-auto mt-8 inline-flex flex-col items-start gap-4 text-[14px] leading-[1.8] text-[#3a3a3a8c]">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card */}
        <div className="mt-14">
          <div
            className="group relative rounded-[28px] border border-white/25 bg-white/55 p-5 backdrop-blur-[20px] md:p-6"
            style={{
              boxShadow: "0 16px 48px rgba(150,120,220,0.10)",
            }}
          >
            {/* Hover Overlay */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(160deg, rgba(199,184,227,0.15) 0%, rgba(232,183,200,0.12) 50%, rgba(247,245,255,0.06) 100%)",
              }}
            />

            <div className="relative">
              <div
                className="rounded-[28px] bg-white/80 p-5 md:p-6"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,.65)",
                }}
              >
                {/* Header */}
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl tracking-[-0.02em] text-[#2b2b2b]">
                      Recruit Margins
                    </h3>

                    <p className="mt-1 text-[13px] text-[#3a3a3a]/50">
                      Processed timesheets
                    </p>
                  </div>

                  <div
                    className="rounded-full border border-[#e5e2da33] bg-white/70 px-5 py-2 text-[13px] text-[#3a3a3a8c]"
                    style={{
                      boxShadow: "0 8px 18px rgba(150,120,220,0.05)",
                    }}
                  >
                    870 records
                  </div>
                </div>

                {/* Main Margin Card */}
                <div
                  className="scale-[1.03] rounded-3xl border-2 border-[#BDE6D3] px-8 py-8"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(233,250,240,0.96),rgba(218,245,229,0.88))",
                    boxShadow:
                      "0 20px 48px rgba(99,173,135,0.20), 0 8px 20px rgba(99,173,135,0.12)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[13px] text-[#89A294]">
                        Total Margin
                      </div>

                      <div className="mt-3 text-[36px] font-semibold tracking-[-0.04em] text-[#12945D]">
                        £103,861
                      </div>

                      <div className="mt-2 text-[14px] text-[#6D8E7C]">
                        19.4% margin rate
                      </div>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#CFEFDB]">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 15L10 11L13 14L18 9"
                          stroke="#12945D"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 9H18V13"
                          stroke="#12945D"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[20px] bg-[#FCFBFE] px-5 py-5"
                      style={{
                        boxShadow: "0 10px 22px rgba(150,120,220,0.05)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-[13px] text-[#3a3a3a66]">
                            {metric.label}
                          </div>

                          <div className="mt-3 text-[16px] font-semibold tracking-[-0.02em] text-[#2b2b2b]">
                            {metric.value}
                          </div>
                        </div>

                        <div
                          className="mt-1 h-3 w-3 rounded-full"
                          style={{
                            backgroundColor: metric.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-5">
                  <button
                    className="flex w-full items-center justify-center gap-4 rounded-[18px] cursor-pointer border border-[#e5e2da33] bg-white px-5 py-3.5 text-[14px] text-[#2b2b2b] transition-all duration-300"
                    style={{
                      boxShadow: "0 10px 24px rgba(150,120,220,0.08)",
                    }}
                  >
                    View Full Report →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
