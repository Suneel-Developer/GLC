import Image from "next/image";

const cards = [
  {
    title: "Track true costs",
    description:
      "Calculate the cost of every role with exact pay, fees and projections.",
    buttonText: "View Costs",
    image: "/assets/Coins-Section3copy-trimmed.webp",
  },
  {
    title: "View PO history",
    description:
      "Scan purchase order history and view key details in one dashboard.",
    buttonText: "View POs",
    image: "/assets/ClipBoard-Section3copy-trimmed.webp",
  },
  {
    title: "Laser focus on profits",
    description:
      "Instant breakdowns of revenue, profit, margins, and performance.",
    buttonText: "Analyze Profit",
    image: "/assets/Unknown-trimmed.webp",
  },
];

export default function ClaritySection() {
  return (
    <section className="relative w-full pb-20">
      <div className="mx-auto max-w-[960px] px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-3xl font-medium leading-[1.15] md:text-4xl lg:text-[44px] font-garamond-medium">
            Gain total clarity.
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-base font-light leading-snug text-[#3a3a3a]/70 md:text-lg font-garamond-medium">
            Analyze profitability, track expenses, and manage with precise
            insights.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative flex h-full flex-col items-center rounded-[28px] border border-white/25 bg-white/55 p-5 text-center backdrop-blur-[20px] transition-all duration-500 md:p-6"
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

                <div className="relative flex h-full flex-col">
                  {/* Image */}
                  <div className="flex h-[128px] w-full items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="h-[128px] w-auto object-contain"
                    />
                  </div>

                  <div className="h-8" />

                  {/* Title */}
                  <h3 className="text-[26px] font-medium leading-[1.02] tracking-[-0.02em] font-garamond-medium">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-[280px] flex-1 text-[14px] leading-[1.8] text-[#3a3a3a]">
                    {card.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto w-full pt-8">
                    <button
                      className="w-full rounded-[18px] cursor-pointer px-6 py-3.5 text-[14px] text-white transition-all duration-300 hover:scale-[1.03]"
                      style={{
                        background: "linear-gradient(135deg,#9B84FF,#E4B8FF)",
                        boxShadow: "0 12px 28px rgba(155,132,255,0.28)",
                      }}
                    >
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Heading */}
        <div className="mx-auto mt-20 max-w-[780px] text-center">
          <h3 className="text-2xl font-medium leading-[1.15] md:text-[36px] lg:text-[42px] font-garamond-medium">
            Turn your data into actions that drive your business forward.
          </h3>
        </div>
      </div>
    </section>
  );
}
