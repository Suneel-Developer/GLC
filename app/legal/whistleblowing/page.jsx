import React from "react";

const sections = [
  {
    title: "1. Purpose",
    content: [
      "Ashford Hale encourages a culture of openness and accountability. This policy provides a safe mechanism for reporting concerns about wrongdoing.",
    ],
  },
  {
    title: "2. Scope",
    content: [
      "This policy applies to all employees, contractors, and third parties working with Ashford Hale.",
    ],
  },
  {
    title: "3. What to Report",
    list: [
      "Criminal offences or fraud",
      "Failure to comply with legal obligations",
      "Miscarriages of justice",
      "Danger to health and safety",
      "Damage to the environment",
      "Deliberate concealment of any of the above",
    ],
  },
  {
    title: "4. How to Report",
    content: [
      "Reports can be made confidentially to whistleblowing@blacksofa.co.uk. All reports will be investigated thoroughly.",
    ],
  },
  {
    title: "5. Protection",
    content: [
      "Individuals who raise genuine concerns in good faith will not be penalised or subjected to any detriment.",
    ],
  },
];

const Whistleblowing = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        aria-hidden="true"
      >
        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-70 top-16 left-[5%] lg:left-[10%]">
          <img src="/assets/Whale.webp" alt="Whale" className="w-full drop-shadow-lg" />
        </div>

        <div className="absolute w-[120px] md:w-[180px] xl:w-[220px] opacity-60 top-[35%] right-[3%] lg:right-[8%]">
          <img
            src="/assets/WateringCanT.webp"
            alt="WateringCanT"
            className="w-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-garamond-medium">
          Whistle Blower Policy
        </h1>

        <p className="mt-6 text-[#3A3A3A]/70 leading-relaxed">
          Ashford Hale encourages a culture of openness and accountability — providing a safe mechanism for reporting concerns.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-border/60" />
          <span className="text-sm text-[#3A3A3A]/50">
            Effective date: 20 March 2026
          </span>
          <div className="h-px w-16 bg-border/60" />
        </div>

        {/* Sections */}
        <div className="mt-14 space-y-10 text-left">
          {sections.map((sec) => (
            <section key={sec.title}>
              <h2 className="text-2xl font-garamond-medium">
                {sec.title}
              </h2>

              {sec.content?.map((text, i) => (
                <p
                  key={i}
                  className="mt-3 text-[#3A3A3A]/80 leading-relaxed"
                >
                  {text}
                </p>
              ))}

              {sec.list && (
                <ul className="mt-3 space-y-2 text-[#3A3A3A]/80">
                  {sec.list.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whistleblowing;