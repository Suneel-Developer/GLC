const Contact = () => {
  return (
    <main className="relative">
      <section className="-mt-18 overflow-hidden bg-transparent">
        {/* Desktop Image */}
        <div
          className="relative hidden w-full sm:block"
          style={{
            maskImage: "linear-gradient(black 65%, transparent 100%)",
          }}
        >
          <img
            alt="Two people walking across a giant calculator towards a glowing doorway in the clouds"
            className="h-auto w-full"
            src="/assets/contact-bg.webp"
          />

          <div className="absolute inset-0 z-20 flex items-start justify-center px-6 pt-[12%]">
            <div className="mx-auto w-full max-w-267.5">
              <div className="rounded-3xl border border-white/15 bg-white/20 p-6 shadow-[0_20px_60px_rgba(65,42,74,0.08)] md:p-7">
                <h1 className="font-garamond-medium text-center text-3xl font-medium leading-[1.08] text-foreground md:text-[38px]">
                  Let's talk.
                </h1>

                <p className="font-garamond-medium mx-auto mt-3 text-center text-sm font-light leading-relaxed text-[#3a3a3a]/65">
                  Whether you're exploring payroll, switching providers, or just
                  have a question — w're here.
                </p>

                <form className="mt-5 space-y-3">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      required
                      placeholder="Name"
                      type="text"
                      className="h-12 sm:h-14 w-full rounded-2xl border border-[#E8DFEA] bg-white/90 px-4 sm:px-5 text-sm sm:text-[15px] text-[#2b2b2b] outline-none transition-all placeholder:text-soft/50 focus:border-purple-500 focus:bg-white"
                    />

                    <input
                      placeholder="Company"
                      type="text"
                      className="h-12 sm:h-14 w-full rounded-2xl border border-[#E8DFEA] bg-white/90 px-4 sm:px-5 text-sm sm:text-[15px] text-[#2b2b2b] outline-none transition-all placeholder:text-soft/50 focus:border-purple-500 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      required
                      placeholder="Email"
                      type="email"
                      className="h-12 sm:h-14 w-full rounded-2xl border border-[#E8DFEA] bg-white/90 px-4 sm:px-5 text-sm sm:text-[15px] text-[#2b2b2b] outline-none transition-all placeholder:text-soft/50 focus:border-purple-500 focus:bg-white"
                    />

                    <input
                      placeholder="Phone (optional)"
                      type="tel"
                      className="h-12 sm:h-14 w-full rounded-2xl border border-[#E8DFEA] bg-white/90 px-4 sm:px-5 text-sm sm:text-sm text-[#2b2b2b] outline-none transition-all placeholder:text-soft/50 focus:border-purple-500 focus:bg-white"
                    />
                  </div>

                  <textarea
                    required
                    placeholder="Message"
                    rows={3}
                    className="min-h-25 w-full resize-none rounded-2xl border border-[#E8DFEA] bg-white/90 px-5 py-4 text-[15px] text-[#2b2b2b] outline-none transition-all placeholder:text-soft/50 focus:border-purple-500 focus:bg-white"
                  />

                  <button
                    type="submit"
                    className="btn-glow mt-1 flex h-14.5 w-full items-center justify-center rounded-full bg-[#2b2b2b] text-[17px] font-medium tracking-[-0.02em] text-white transition-all duration-300 hover:scale-[1.01] disabled:opacity-60"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="px-4 pb-8 pt-24 sm:hidden">
          <div className="rounded-2xl border border-white/15 bg-white/30 p-5 shadow-[0_20px_60px_rgba(65,42,74,0.08)]">
            <h1 className="font-garamond-medium text-center text-2xl font-medium text-[#2b2b2b]">
              Let’s talk.
            </h1>

            <p className="font-garamond-medium mx-auto mt-2 text-center text-[13px] font-light leading-relaxed text-[#3a3a3a]/65">
              Whether you’re exploring payroll, switching providers, or just
              have a question — we’re here.
            </p>

            <form className="mt-4 space-y-3">
              <input
                required
                placeholder="Name"
                type="text"
                className="h-12 w-full rounded-2xl border border-[#E8DFEA] bg-white/90 px-4 text-sm text-[#2b2b2b] outline-none placeholder:text-soft/50 focus:border-purple focus:bg-white"
              />

              <input
                placeholder="Company"
                type="text"
                className="h-12 w-full rounded-2xl border border-[#E8DFEA] bg-white/90 px-4 text-sm text-[#2b2b2b] outline-none placeholder:text-soft/50 focus:border-purple focus:bg-white"
              />

              <input
                required
                placeholder="Email"
                type="email"
                className="h-12 w-full rounded-2xl border border-[#E8DFEA] bg-white/90 px-4 text-sm text-[#2b2b2b] outline-none placeholder:text-soft/50 focus:border-purple focus:bg-white"
              />

              <input
                placeholder="Phone (optional)"
                type="tel"
                className="h-12 w-full rounded-2xl border border-[#E8DFEA] bg-white/90 px-4 text-sm text-[#2b2b2b] outline-none placeholder:text-soft/50 focus:border-purple focus:bg-white"
              />

              <textarea
                required
                placeholder="Message"
                rows={3}
                className="min-h-20 w-full resize-none rounded-2xl border border-[#E8DFEA] bg-white/90 px-4 py-3 text-[14px] text-[#2b2b2b] outline-none placeholder:text-soft/50 focus:border-purple focus:bg-white"
              />

              <button
                type="submit"
                className="btn-glow mt-1 flex h-12 w-full items-center justify-center rounded-full bg-[#2b2b2b] text-[15px] font-medium text-white transition-all duration-300 disabled:opacity-60"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="z-10 pt-16 pb-20">
        <div class="text-center">
          <p class="text-3xl font-medium text-[#2b2b2b] md:text-4xl lg:text-5xl font-garamond-light">
            Payroll, handled properly.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
