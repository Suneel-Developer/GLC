const payrollData = [
  {
    month: "Jun 3 (Jun)",
    nic: "£1,082.46",
    tax: "£727.40",
    total: "£1,809.86",
  },
  {
    month: "Jul",
    nic: "£4,275.98",
    tax: "£2,507.20",
    total: "£6,783.18",
  },
  {
    month: "Aug",
    nic: "£5,152.10",
    tax: "£2,109.60",
    total: "£7,252.70",
  },
  {
    month: "Sep",
    nic: "£5,021.94",
    tax: "£1,897.00",
    total: "£6,918.94",
  },
  {
    month: "Oct",
    nic: "£5,766.77",
    tax: "£2,129.20",
    total: "£7,895.97",
  },
  {
    month: "Nov",
    nic: "£6,956.94",
    tax: "£2,540.60",
    total: "£9,156.54",
  },
  {
    month: "Dec",
    nic: "£562.61",
    tax: "£2,822.80",
    total: "£443.41",
  },
];

export default function ComplianceSection() {
  return (
    <section className="px-6 pb-[80px]">
      <div className="mx-auto grid max-w-[960px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Left Card */}
        <div>
          <div
            className="group relative rounded-[28px] border border-white/25 bg-white/55 p-5 backdrop-blur-[20px] transition-all duration-500 md:p-6"
            style={{
              boxShadow: "0 16px 48px rgba(150,120,220,0.10)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(160deg, rgba(199,184,227,0.15) 0%, rgba(232,183,200,0.12) 50%, rgba(247,245,255,0.06) 100%)",
              }}
            />

            <div className="relative">
              <div className="rounded-xl bg-white/60 p-8 text-center">
                <h4 className="mb-4 text-[20px] font-medium font-garamond-medium">
                  P32 — Employer Payment Summary
                </h4>

                <div className="space-y-3 text-[13px]">
                  {/* Header */}
                  <div className="grid grid-cols-4 gap-3 border-b border-[#e5e2da33] pb-3 text-[11px] uppercase tracking-[0.06em] text-[#3a3a3a66]">
                    <span>Month</span>
                    <span>NIC</span>
                    <span>Tax</span>
                    <span>Total Due</span>
                  </div>

                  {/* Rows */}
                  {payrollData.map((item) => (
                    <div
                      key={item.month}
                      className="grid grid-cols-4 gap-3 border-b border-[#e5e2da1a] px-1 pb-2 text-[#3a3a3a80]"
                    >
                      <span className="font-medium text-[#2b2b2b]">
                        {item.month}
                      </span>

                      <span>{item.nic}</span>

                      <span>{item.tax}</span>

                      <span className="font-medium text-[#2b2b2b]">
                        {item.total}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-[520px]">
          <h2 className="mb-6 text-2xl font-medium leading-[1.15] md:text-[36px] font-garamond-medium">
            Stay compliant without thinking about it
          </h2>

          <p className="mb-8 text-base font-light leading-snug text-[#3a3a3a]/70 md:text-lg font-garamond-medium">
            HMRC submissions, liabilities, and reporting handled automatically.
            Everything is calculated, tracked, and ready when you need it.
          </p>

          <ul className="space-y-4 text-sm text-[#3a3a3a8c]">
            <li className="flex items-start gap-3">
              <span className="mt-[2px] text-[#9B84FF]">✓</span>
              HMRC liabilities tracked in real time
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-[2px] text-[#9B84FF]">✓</span>
              Clear breakdown of tax, NIC, and totals
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-[2px] text-[#9B84FF]">✓</span>
              Always up to date and ready to submit
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
