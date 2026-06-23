const PayrollHeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pt-24">
      <div className="relative mx-auto w-full max-w-300 overflow-hidden rounded-2xl px-6" style={{ height: "clamp(300px, 55vw, 750px)" }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/WhyBlackSofa.webp"
            alt="WhyBlackSofa"
            loading="lazy"
            className="h-[120%] w-full object-cover opacity-80"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="glass max-w-145 rounded-2xl bg-white/60 px-5 py-6 text-center sm:px-8 sm:py-10 md:px-14 md:py-12">
            <h1 className="font-garamond-medium text-2xl font-medium leading-[1.08] md:text-4xl lg:text-[42px]">
              Payroll that runs itself.
            </h1>

            <div className="mt-5 space-y-3 text-[14px] leading-relaxed text-[#3a3a3a]">
              <p>
                Automated calculations, real-time visibility, and fully
                compliant UK payroll, all in one place.
              </p>

              <p>
                From timesheets to payslips to HMRC submissions, everything runs
                quietly in the background, exactly as it should.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayrollHeroSection;
