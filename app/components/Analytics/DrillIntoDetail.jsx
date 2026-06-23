export default function DrillIntoDetail() {
  return (
    <section className="relative w-full pb-20">
      <div className="mx-auto max-w-240 px-6">
        <div className="mx-auto max-w-170 text-center">
          <h1 className="text-3xl font-medium md:text-4xl lg:text-[44px] leading-[1.15] font-garamond-light">
            Drill into the detail.
          </h1>

          <p className="mx-auto mt-5 max-w-150 text-base md:text-lg text-[#2b2b2b]/70 leading-snug font-light font-garamond-light">
            Get granular visibility into timesheets, placement margins, and
            approval flows. Understand your business better than anyone.
          </p>
        </div>

        <div className="mt-14">
          <div
            style={{
              background: "rgba(255, 255, 255, 0.55)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              transform: "none",
            }}
            className="group relative rounded-[28px] p-5 shadow-[0_16px_48px_rgba(150,120,220,0.1)] backdrop-blur-[20px] transition-all duration-500 hover:shadow-[0_24px_64px_rgba(150,120,220,0.18)] md:p-6"
          >
            <div
              style={{
                background:
                  "linear-gradient(160deg, rgba(199,184,227,0.15) 0%, rgba(232,183,200,0.12) 50%, rgba(247,245,255,0.06) 100%)",
              }}
              className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div className="relative flex h-full flex-col">
              <div className="relative grid gap-5 lg:grid-cols-3">
                {/* ================= TIMESHEETS ================= */}
                <div className="rounded-[28px] bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  <h3 className="mb-5 text-[26px] font-medium leading-none tracking-[-0.02em] font-garamond-medium">
                    Timesheets
                  </h3>

                  <div className="overflow-hidden rounded-3xl border border-[#e5e2da1a] bg-white/78 shadow-[0_14px_30px_rgba(150,120,220,0.08)]">
                    <div className="flex items-center gap-3 border-b border-[#e5e2da1a] px-5 py-4">
                      <img
                        src="/assets/eve-photo.webp"
                        alt="Eve Kermanes"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-[16px] font-medium text-[#2b2b2b] font-garamond-medium">
                          Eve Kermanes
                        </div>
                        <div className="mt-0.5 text-[12px] text-[#3a3a3a]/40">
                          Senior Designer
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-4 space-y-2">
                      {[
                        ["Mon", 8.0],
                        ["Tue", 8.0],
                        ["Wed", 7.5],
                        ["Thu", 8.0],
                        ["Fri", 8.0],
                        ["Sat", 0.0],
                        ["Sun", 0.0],
                      ].map(([day, hrs]) => (
                        <div
                          key={day}
                          className="grid grid-cols-[1fr_auto_auto] items-center gap-3 text-[13px] text-[#3a3a3a]/55"
                        >
                          <span>{day}</span>
                          <span className="tabular-nums text-[#2b2b2b]">
                            {Number(hrs).toFixed(1)}
                          </span>
                          <span className="text-[#B195FF]">✓</span>
                        </div>
                      ))}

                      <div className="mt-4 border-t border-[#e5e2da1a] pt-4 text-center">
                        <div className="text-[16px] font-semibold text-[#2b2b2b]">
                          £2,587
                        </div>
                        <div className="mt-1 text-[13px] text-[#3a3a3a]/40">
                          41.5 hours · +13.3%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= MARGINS ================= */}
                <div className="rounded-[28px] bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  <h3 className="mb-5 text-[26px] font-medium leading-none tracking-[-0.02em] font-garamond-medium">
                    Margins
                  </h3>

                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/78 shadow-[0_14px_30px_rgba(150,120,220,0.08)]">
                    <div className="px-5 pt-5">
                      <div className="text-[16px] font-medium text-[#2b2b2b] font-garamond-medium">
                        Freelancer Stages
                      </div>

                      <div className="mt-3 overflow-hidden rounded-[18px] border border-[#e5e2da1a] bg-[#FBFAFE]">
                        {[
                          ["Grace Weir", "Senior Developer", "£420", "+43%"],
                          ["Charlie Lane", "UX Designer", "£35", "+36%"],
                          ["Andrew Fyfe", "IT Consultant", "£75", "+26%"],
                        ].map(([name, role, price, pct]) => (
                          <div
                            key={name}
                            className="grid grid-cols-[1fr_auto_auto] gap-3 px-4 py-3 border-b border-[#e5e2da1a]"
                          >
                            <div>
                              <div className="text-[13px] font-medium text-[#2b2b2b]">
                                {name}
                              </div>
                              <div className="text-[11px] text-[#3a3a3a]/40">
                                {role}
                              </div>
                            </div>
                            <div className="self-center text-[13px] text-[#3a3a3a]/55">
                              {price}
                            </div>
                            <div className="self-center text-[13px] text-[#6EB17D]">
                              {pct}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* donut */}
                      <div className="py-5 flex flex-col items-center">
                        <div className="relative h-35 w-35">
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background:
                                "conic-gradient(rgb(177, 147, 255) 0deg, rgb(198, 181, 255) 122deg, rgb(230, 205, 251) 188deg, rgb(182, 198, 255) 238deg, rgb(219, 199, 255) 304deg, rgb(203, 188, 255) 360deg)",
                            }}
                          ></div>
                          <div className="absolute inset-5.5 rounded-full bg-white/92"></div>

                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <div className="text-[18px] font-semibold text-[#2b2b2b]">
                              32%
                            </div>
                            <div className="mt-0.5 text-[11px] text-[#3a3a3a]/40">
                              Average margin
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#e5e2da1a] px-1 pb-5 pt-4 text-center">
                        <span className="text-[13px] text-[#3a3a3a]/40">
                          Total revenue
                        </span>
                        <span className="mx-2 text-[#3a3a3a]/25">›</span>
                        <span className="text-[16px] font-semibold text-[#2b2b2b]">
                          £9,600
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= APPROVALS ================= */}
                <div className="rounded-[28px] bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  <h3 className="mb-5 text-[26px] font-medium leading-none tracking-[-0.02em] font-garamond-medium">
                    Approvals
                  </h3>

                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/78 shadow-[0_14px_30px_rgba(150,120,220,0.08)]">
                    <div className="px-5 pt-5">
                      <div className="text-[16px] font-medium text-[#2b2b2b] font-garamond-medium">
                        Ready to approve
                      </div>

                      <div className="mt-4 space-y-3">
                        {[
                          [
                            "Jemima Warren",
                            "Finance Manager",
                            "£3,072",
                            "+20 hrs",
                          ],
                          [
                            "Edward Davies",
                            "Data Engineer",
                            "£2,880",
                            "+24 hrs",
                          ],
                        ].map(([name, role, cost, hrs]) => (
                          <div
                            key={name}
                            className="px-4 py-4 rounded-[18px] border border-[#e5e2da1a] bg-[#FBFAFE]"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <div className="text-[13px] font-medium text-[#2b2b2b]">
                                  {name}
                                </div>
                                <div className="mt-0.5 text-[11px] text-[#3a3a3a]/40">
                                  {role}
                                </div>
                              </div>

                              <div className="text-[14px] font-medium text-[#2b2b2b]">
                                {cost}
                              </div>
                            </div>

                            <div className="mt-3 flex items-center justify-between text-[12px] text-[#3a3a3a]/40">
                              <span className="inline-flex items-center gap-2">
                                <span className="h-4 w-4 rounded-full bg-[#D8CCFF] text-[9px]" />
                                Weekly Total
                              </span>
                              <span>{hrs}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="mt-5 w-full rounded-[18px] bg-white px-5 py-3.5 text-[14px] text-[#3a3a3a]/60 shadow-[0_10px_24px_rgba(150,120,220,0.1)] transition duration-300 hover:shadow-[0_14px_40px_rgba(150,120,220,0.16)]">
                        Approve All
                      </button>

                      <div className="border-t border-[#e5e2da1a] mt-5 pb-5 pt-5 text-center">
                        <div className="text-[13px] text-[#3a3a3a]/40">
                          Total pending cost
                        </div>
                        <div className="mt-2 text-[16px] font-semibold text-[#2b2b2b]">
                          £5,952
                        </div>
                      </div>
                    </div>
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
