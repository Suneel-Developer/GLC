import React from "react";

const GetAQuote = () => {
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-medium md:text-5xl font-garamond-medium">
            Get a Tailored Quote
          </h1>

          <p className="mt-4 text-[#3A3A3A]/70">
            Tell us about your setup and we'll put together a clear, tailored quote.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-12 max-w-[540px]">
          <form className="glass rounded-2xl p-8 space-y-5 bg-white/60">
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Full name *
              </label>
              <input
                required
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                type="text"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Work email *
              </label>
              <input
                required
                placeholder="Enter your work email"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                type="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Company
              </label>
              <input
                placeholder="Your company name"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                type="text"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Phone number
              </label>
              <input
                placeholder="Optional"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                type="tel"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Number of employees
              </label>
              <select className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none">
                <option value="">Select range</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-100">51–100</option>
                <option value="101-500">101–500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Tell us about your payroll setup
              </label>
              <textarea
                rows="3"
                placeholder="e.g. number of workers, pay frequency, CIS/PAYE mix"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn-glow w-full rounded-full bg-[#2b2b2b] cursor-pointer px-6 py-3 text-sm font-medium text-white hover:bg-[#2b2b2b]/90 transition-colors"
            >
              Get my quote
            </button>

            <p className="text-xs text-center text-[#3A3A3A]/50">
              We'll respond within one working day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;