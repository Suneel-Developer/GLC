const badges = [
  {
    src: "/assets/HMRCShield.webp",
    alt: "HMRC Compliant",
    label: "HMRC Compliant",
  },
  {
    src: "/assets/RecruitmentTransparent.webp",
    alt: "Recruitment Ready",
    label: "Recruitment Ready",
  },
  {
    src: "/assets/PayrollShield.webp",
    alt: "Payroll Protection",
    label: "Payroll Protection",
  },
  {
    src: "/assets/ConstructionShield.webp",
    alt: "Construction & CIS",
    label: "Construction & CIS",
  },
  {
    src: "/assets/AutomatedShield.webp",
    alt: "Automated Processing",
    label: "Automated Processing",
  },
];

const TrustBadgesSection = () => {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-265 px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {badges.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-auto w-20 md:w-25 object-contain opacity-65"
              />
              <p className="mt-2 text-xs text-[#3a3a3a]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
