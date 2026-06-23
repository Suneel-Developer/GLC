import React from "react";

const BookDemo = () => {
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-300 px-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-medium md:text-5xl font-garamond-medium">
            Book a Demo
          </h1>

          <p className="mt-4 text-[#3A3A3A]/70">
            Schedule a live demo with our team.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-12 max-w-[540px]">
          <form className="glass rounded-2xl p-8 space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Full name *
              </label>
              <input
                required
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm text-[#2b2b2b] placeholder:text-[#3A3A3A]/40 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Work email *
              </label>
              <input
                required
                type="email"
                placeholder="Enter your work email"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm text-[#2b2b2b] placeholder:text-[#3A3A3A]/40 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Company
              </label>
              <input
                type="text"
                placeholder="Your company name"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm text-[#2b2b2b] placeholder:text-[#3A3A3A]/40 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Optional"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm text-[#2b2b2b] placeholder:text-[#3A3A3A]/40 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* Employees */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Number of employees
              </label>
              <select className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm text-[#2b2b2b] focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors">
                <option value="">Select range</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-100">51–100</option>
                <option value="101-500">101–500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Anything you'd like us to know"
                className="w-full rounded-lg border border-[#e5e2da] bg-white px-4 py-3 text-sm text-[#2b2b2b] placeholder:text-[#3A3A3A]/40 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-glow w-full rounded-full bg-[#2b2b2b] cursor-pointer px-6 py-3 text-sm font-medium text-white hover:bg-[#2b2b2b]/90 transition-colors"
            >
              Book Demo
            </button>

            {/* Note */}
            <p className="text-xs text-center text-[#3A3A3A]/50">
              We will reach out to confirm your booking.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
