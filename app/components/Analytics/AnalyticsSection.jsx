import React from "react";

const AnalyticsSection = () => {
  return (
    <section className="relative w-full pb-20">
      <div className="mx-auto max-w-240 px-6 pt-10 md:pt-16">
        {/* Heading */}
        <div className="mx-auto max-w-170 text-center">
          <h1 className="text-[42px] font-medium leading-[0.95] tracking-[-0.02em] md:text-[64px] font-garamond-medium">
            See everything. <br />
            Instantly.
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#2b2b2b]/70 leading-snug font-light font-garamond-light">
            Real-time visibility across payroll, margins, and workforce
            performance. No spreadsheets. No delays. Just clarity.
          </p>

          <p className="mt-4 text-base md:text-lg text-[#2b2b2b]/50 leading-snug font-light font-garamond-light">
            From timesheets to HMRC liabilities, everything updates live.
          </p>
        </div>

        {/* Card */}
        <div className="mt-14">
          <div
            className="group relative rounded-[28px] p-5 shadow-[0_16px_48px_rgba(150,120,220,0.1)] backdrop-blur-[20px] transition-all duration-500 hover:shadow-[0_24px_64px_rgba(150,120,220,0.18)] md:p-6"
            style={{
              background: "rgba(255, 255, 255, 0.55)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(160deg, rgba(199, 184, 227, 0.15) 0%, rgba(232, 183, 200, 0.12) 50%, rgba(247, 245, 255, 0.06) 100%)",
              }}
            />

            <div className="relative flex h-full flex-col">
              <h2 className="mb-6 text-[28px] font-medium leading-none tracking-[-0.02em] font-garamond-medium">
                Analytics
              </h2>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ["Current Headcount", "124"],
                  ["Annual Cost", "£417k"],
                  ["Avg Monthly Cost", "£42k"],
                  ["New Starters", "126"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-3xl bg-white/82 px-5 py-5 shadow-[0_10px_30px_rgba(150,120,220,0.08)] flex flex-col justify-between hover:shadow-[0_16px_40px_rgba(150,120,220,0.16)] transition-shadow"
                  >
                    <div className="text-center text-[13px] font-medium text-[#3a3a3a]/55 flex items-center justify-center min-h-8 font-garamond-medium">
                      {label}
                    </div>

                    <div className="mt-3 text-center text-[26px] font-semibold text-[#2b2b2b]">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <div className="rounded-[28px] bg-white/72 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                  <div className="mb-5 flex justify-between">
                    <h3 className="text-[22px] font-medium text-[#2b2b2b] font-garamond-light">
                      Monthly Payroll Cost
                    </h3>

                    <div className="text-right">
                      <div className="text-[22px] font-semibold text-[#2b2b2b]">
                        £42,046{" "}
                        <span className="text-[16px] text-[#6EB17D]">+12%</span>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/assets/monthly-payroll-cost.png"
                    alt="monthly payroll"
                    className="w-full"
                  />

                  <div className="mt-5 border-t border-white/20 pt-5 text-[13px] text-[#3a3a3a]/45">
                    January — Added 15 workers
                  </div>
                </div>

                {/* SVG Chart */}
                <div className="rounded-[28px] bg-white/72 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                  <h3 className="mb-5 text-[22px] font-medium text-[#2b2b2b]">
                    Worker Retention
                  </h3>

                  <svg
                    viewBox="0 0 800 250"
                    className="w-full h-auto"
                    fill="none"
                  >
                    <line
                      x1="0"
                      y1="52"
                      x2="800"
                      y2="52"
                      stroke="rgba(92,76,120,0.12)"
                      strokeDasharray="4 6"
                    />

                    <path
                      d="M 54,188 L 124,172 L 194,160 L 264,148 L 334,126 L 404,108 L 474,88 L 544,76 L 614,84 L 684,66"
                      stroke="#E0A33A"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {[54, 124, 194, 264, 334, 404, 474, 544, 614, 684].map(
                      (x, i) => (
                        <circle
                          key={i}
                          cx={x}
                          cy={[188, 172, 160, 148, 126, 108, 88, 76, 84, 66][i]}
                          r={i === 7 ? 7 : 5}
                          fill="#E0A33A"
                        />
                      ),
                    )}

                    {[
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                      "Jan",
                      "Feb",
                      "Mar",
                    ].map((m, i) => (
                      <text
                        key={m}
                        x={34 + i * 70}
                        y={244}
                        fontSize="12"
                        fill="#8B819E"
                      >
                        {m}
                      </text>
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
