const stats = [
  { label: "Total Hours", value: "39.5" },
  { label: "Total Charge", value: "£13,398" },
  { label: "Total Pay", value: "£11,650" },
  { label: "Total Margin", value: "£1,748", green: true },
  { label: "Showing", value: "38" },
];

const workers = [
  {
    name: "Bryony Donohue",
    company: "Art Fund · W/E 29 Mar",
    status: "Approved",
    pay: "£600.00",
    charge: "£690.00",
    margin: "£90.00",
  },
  {
    name: "Ethan Rawlins",
    company: "BT PLC · W/E 29 Mar",
    status: "Approved",
    pay: "£900.00",
    charge: "£1,035.00",
    margin: "£135.00",
  },
  {
    name: "Sam Bonney",
    company: "BT PLC · W/E 29 Mar",
    status: "Approved",
    pay: "£1,375.00",
    charge: "£1,581.25",
    margin: "£206.25",
  },
  {
    name: "Aimee Yucoco",
    company: "BT PLC · Missing entry",
    status: "Not Started",
    pay: "—",
    charge: "—",
    margin: "—",
  },
  {
    name: "David Telling",
    company: "T.J. Smith · Missing entry",
    status: "Not Started",
    pay: "—",
    charge: "—",
    margin: "—",
  },
];

const features = [
  "Approved, pending, and missing statuses",
  "Full visibility across workers",
  "Built-in validation and checks",
];

export default function TimesheetSection() {
  return (
    <section className="relative w-full pb-20">
      <div className="mx-auto max-w-240 px-6">
        {/* Header */}
        <div className="mx-auto max-w-170 text-center">
          <h2 className="text-3xl font-medium leading-[1.15] md:text-4xl lg:text-[44px] font-garamond-medium">
            Capture and approve everything in one place
          </h2>

          <p className="mx-auto mt-5 max-w-150 text-base font-light leading-snug text-[#3a3a3a]/70 md:text-lg font-garamond-medium">
            Timesheets, rates, and approvals all handled in one system. See
            what's complete, what's missing, and what needs attention instantly.
          </p>

          <ul className="mx-auto mt-8 inline-flex flex-col items-start gap-4 text-[14px] leading-[1.8] text-[#3a3a3a8c]">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.75 w-1.75 rounded-full bg-[#B59BFF]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Table Card */}
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
                className="overflow-hidden rounded-[28px] bg-white/80"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.65)",
                }}
              >
                {/* Stats */}
                <div className="grid gap-3 border-b border-[#e5e2da33] p-4 md:grid-cols-5">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[18px] bg-[#FCFBFE] px-4 py-3"
                      style={{
                        boxShadow: "0 10px 22px rgba(150,120,220,0.05)",
                      }}
                    >
                      <div className="text-[11px] text-[#3a3a3a66]">
                        {stat.label}
                      </div>

                      <div
                        className={`mt-2 text-[16px] font-semibold tracking-[-0.02em] ${
                          stat.green ? "text-[#29A56A]" : "text-[#2b2b2b]"
                        }`}
                      >
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <div className="min-w-190">
                    <div className="grid grid-cols-[1.2fr_1.15fr_0.9fr_0.9fr_0.9fr] gap-4 border-b border-[#e5e2da33] px-5 py-4 text-[11px] uppercase tracking-[0.08em] text-[#3a3a3a66]">
                      <div>Worker</div>
                      <div>Status</div>
                      <div>Pay</div>
                      <div>Charge</div>
                      <div>Margin</div>
                    </div>

                    {workers.map((worker) => (
                      <div
                        key={worker.name}
                        className="grid grid-cols-[1.2fr_1.15fr_0.9fr_0.9fr_0.9fr] gap-4 border-b border-[#e5e2da33] px-5 py-4 last:border-0"
                      >
                        <div>
                          <div className="text-[14px] font-medium text-[#2b2b2b]">
                            {worker.name}
                          </div>

                          <div className="mt-1 text-[12px] text-[#3a3a3a66]">
                            {worker.company}
                          </div>
                        </div>

                        <div className="flex items-center">
                          <span
                            className={`inline-flex rounded-full px-3 py-1.5 text-[12px] leading-none ${
                              worker.status === "Approved"
                                ? "bg-[#DCF2E5] text-[#238758]"
                                : "bg-[#F7E8D8] text-[#C1782B]"
                            }`}
                          >
                            {worker.status}
                          </span>
                        </div>

                        <div className="flex items-center text-[14px] text-[#3a3a3a99]">
                          {worker.pay}
                        </div>

                        <div className="flex items-center text-[14px] text-[#3a3a3a99]">
                          {worker.charge}
                        </div>

                        <div
                          className={`flex items-center text-[14px] font-medium ${
                            worker.status === "Approved"
                              ? "text-[#29A56A]"
                              : "text-[#3a3a3a99]"
                          }`}
                        >
                          {worker.margin}
                        </div>
                      </div>
                    ))}
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
