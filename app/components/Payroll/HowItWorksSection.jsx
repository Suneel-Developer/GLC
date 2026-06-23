import Link from "next/link";

const steps = [
  {
    img: "/assets/Step1Capture.webp",
    alt: "Capture",
    title: "Step 1 — Capture",
    description:
      "Timesheets, rates, and approvals flow into the system in real time. No chasing. No manual entry.",
    imgClass:
      "translate-y-[-8%] scale-[1.15] drop-shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
  },
  {
    img: "/assets/Step2Process.webp",
    alt: "Process",
    title: "Step 2 — Process",
    description:
      "Calculations, deductions, and compliance checks are handled automatically. Every detail accounted for.",
    imgClass:
      "translate-y-[15%] scale-[1.8] drop-shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
  },
  {
    img: "/assets/Step3Deliver.webp",
    alt: "Deliver",
    title: "Step 3 — Deliver",
    description:
      "Payslips, reports, and HMRC submissions are generated and sent instantly. Everything lands where it should.",
    imgClass: "scale-[1.8] drop-shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-240 px-6 text-center">
        <p className="text-sm uppercase tracking-wide text-[#3a3a3a]">
          How it works
        </p>

        <h2 className="font-garamond-medium mt-3 text-3xl font-medium leading-[1.15] md:text-4xl lg:text-[44px]">
          A smoother way to run payroll
        </h2>

        <p className="mt-4 text-[15px] text-[#3a3a3a]">
          Here's fast, compliant payroll in 3 easy steps.
        </p>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center"
            >
              {/* FIXED RESPONSIVE CONTAINER */}
              <div className="flex h-[240px] w-full max-w-[260px] items-end justify-center md:h-[310px]">
                <img
                  src={step.img}
                  alt={step.alt}
                  loading="lazy"
                  className={`h-full w-full object-contain ${step.imgClass}`}
                />
              </div>

              <h3 className="font-garamond-medium mt-6 text-xl font-medium leading-[1.2] md:text-[24px] lg:text-[28px]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-[280px] text-[14px] leading-relaxed text-[#3a3a3a]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            href="/book-a-demo"
            className="btn-primary btn-glow inline-block"
          >
            Book a Demo
          </Link>
        </div>

        <div className="mt-8">
          <p className="font-garamond-medium text-base font-light text-[#3a3a3a]/40 md:text-lg">
            Payroll. Handled properly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
