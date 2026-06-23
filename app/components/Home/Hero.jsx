import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-center py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-300 px-6 text-center">
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-[54px] font-medium leading-[1.15] font-garamond-medium">
          Payroll, without the noise.
        </h1>

        <div className="mx-auto mt-5 max-w-130">
          <p className="text-base leading-relaxed text-[#3a3a3a]/75 md:text-lg font-light font-garamond-light">
            No spreadsheets. No delays. No surprises.
          </p>

          <p className="mt-3 text-base text-[#3a3a3a]/55 leading-relaxed md:text-lg font-light font-garamond-light">
            For businesses running complex or high-volume payroll across the UK.
          </p>

          <div className="mt-8">
            <Link
              className="btn-primary btn-glow inline-block"
              href="/book-a-demo"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{ height: "clamp(250px, 50vw, 700px)" }}
        className="relative w-full mt-14 mx-auto max-w-300 px-6 overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 will-change-transform">
          <img
            src="/assets/homehero.webp"
            alt="Black Sofa payroll"
            decoding="async"
            width="2400"
            height="1600"
            className="w-full h-[120%] object-cover"
          />
        </div>

        <div
          className="absolute inset-0 will-change-transform pointer-events-none"
        >
          <img
            src="/assets/LampostHeroT.webp"
            alt="LampostHeroT"
            loading="lazy"
            className="w-full h-[120%] object-cover drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div
          className="absolute inset-0 will-change-transform pointer-events-none"
          style={{ marginTop: "90px" }}
        >
          <img
            src="/assets/BusHeroT.webp"
            alt="BusHeroT"
            loading="lazy"
            className="w-full h-[120%] object-cover drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div className="absolute inset-0 will-change-transform pointer-events-none">
          <img
            src="/assets/ManDogHeroT.webp"
            alt="ManDogHeroT"
            loading="lazy"
            className="w-full h-[120%] object-cover drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div className="absolute inset-0 will-change-transform pointer-events-none">
          <img
            src="/assets/ManHeroT.webp"
            alt="ManHeroT"
            loading="lazy"
            className="w-full h-[120%] object-cover drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div
          className="absolute z-20 hidden lg:block"
          style={{ top: "10%", left: "3%", opacity: 1, transform: "none" }}
        >
          <div
            className="glass-subtle rounded-xl px-5 py-3 text-sm font-medium text-[#3a3a3a]/80 bg-[#ffffff4d]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.04) 0px 4px 20px",
              transform: "translateY(-0.162817px)",
            }}
          >
            ⏳ Payroll shouldn't take 3 days 😭
          </div>
        </div>

        <div
          className="absolute z-20 hidden lg:block"
          style={{ top: "32%", right: "2%", opacity: 1, transform: "none" }}
        >
          <div
            className="glass-subtle rounded-xl px-5 py-3 text-sm font-medium text-[#3a3a3a]/80 bg-[#ffffff4d]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.04) 0px 4px 20px",
              transform: "translateY(-0.162817px)",
            }}
          >
            🧾 Still chasing timesheets? ⏲
          </div>
        </div>

        <div
          className="absolute z-20 hidden lg:block"
          style={{ bottom: "30%", left: "5%", opacity: 1, transform: "none" }}
        >
          <div
            className="glass-subtle rounded-xl px-5 py-3 text-sm font-medium text-[#3a3a3a]/80 bg-[#ffffff4d]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.04) 0px 4px 20px",
              transform: "translateY(-0.162817px)",
            }}
          >
            🔁 Errors. Delays. Constant back and forth 🤯
          </div>
        </div>

        <div
          className="absolute z-20 hidden lg:block"
          style={{ top: "55%", right: "6%", opacity: 1, transform: "none" }}
        >
          <div
            className="glass-subtle rounded-xl px-5 py-3 text-sm font-medium text-[#3a3a3a]/80 bg-[#ffffff4d]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.04) 0px 4px 20px",
              transform: "translateY(-0.162817px)",
            }}
          >
            📊 Spreadsheets shouldn't be your system 📂
          </div>
        </div>

        <div
          className="absolute z-20 hidden lg:block"
          style={{ bottom: "12%", left: "12%", opacity: 1, transform: "none" }}
        >
          <div
            className="glass-subtle rounded-xl px-5 py-3 text-sm font-medium text-[#3a3a3a]/80 bg-[#ffffff4d]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.04) 0px 4px 20px",
              transform: "translateY(-0.162817px)",
            }}
          >
            🔍 Where did that number come from? 🤌
          </div>
        </div>

        <div
          className="absolute z-20 hidden lg:block"
          style={{ bottom: "8%", right: "10%", opacity: 1, transform: "none" }}
        >
          <div
            className="glass-subtle rounded-xl px-5 py-3 text-sm font-medium text-[#3a3a3a]/80 bg-[#ffffff4d]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.04) 0px 4px 20px",
              transform: "translateY(-0.162817px)",
            }}
          >
            ✔ Payroll should just… work 👍
          </div>
        </div>
      </div>
    </section>
  );
}
