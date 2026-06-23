const stats = [
  { label: "Avg Retention", value: "84%" },
  { label: "Avg Tenure", value: "4 wks" },
  { label: "Active / Total", value: "13 / 121" },
];

export default function RetentionAnalyticsSection() {
  return (
    <section className="relative w-full pb-20">
      <div className="mx-auto max-w-240 px-6">
        {/* Heading */}
        <div className="mx-auto max-w-170 text-center">
          <h2 className="text-3xl font-medium leading-[1.15] md:text-4xl lg:text-[44px] font-garamond-medium">
            See trends before they become problems
          </h2>

          <p className="mx-auto mt-5 max-w-150 text-base font-light leading-snug text-[#2b2b2b]/70 md:text-lg font-garamond-medium">
            Understand how your payroll evolves over time, from workforce
            changes to retention and cost trends.
          </p>
        </div>

        {/* Chart Card */}
        <div className="mt-14">
          <div
            className="group relative rounded-[28px] border border-white/25 bg-white/55 p-5 backdrop-blur-[20px] md:p-6"
            style={{
              boxShadow: "0 16px 48px rgba(150,120,220,0.10)",
            }}
          >
            {/* Hover Gradient */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(160deg, rgba(199,184,227,0.15) 0%, rgba(232,183,200,0.12) 50%, rgba(247,245,255,0.06) 100%)",
              }}
            />

            <div className="relative">
              <div
                className="rounded-[28px] bg-white/70 p-5 md:p-6"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,.65)",
                }}
              >
                {/* Stat Cards */}
                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[22px] bg-white/80 px-5 py-5"
                      style={{
                        boxShadow: "0 10px 22px rgba(150,120,220,0.07)",
                      }}
                    >
                      <div className="text-[12px] text-[#3a3a3a66]">
                        {stat.label}
                      </div>

                      <div className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[#2b2b2b]">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Container */}
                <div
                  className="overflow-hidden rounded-3xl bg-[#FCFBFE] px-4 py-5 md:px-5 md:py-6"
                  style={{
                    boxShadow: "0 12px 28px rgba(150,120,220,0.05)",
                  }}
                >
                  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="text-[15px] text-[#2b2b2b]">
                      Worker Retention (Month-over-Month)
                    </div>

                    <div className="text-xs leading-normal text-[#3a3a3a66] md:max-w-60 md:text-right">
                      Average length of time each worker has been on placement,
                      based on live placements.
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="overflow-x-auto">
                    <img
                      src="/assets/RetentionAnalytics-chart.png"
                      alt="RetentionAnalytics-chart"
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
