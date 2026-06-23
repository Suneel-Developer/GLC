import React from "react";

const Brands = () => {
  const brands = [
    { name: "Adidas", file: "Adidas-Logo.webp" },
    { name: "akqa", file: "akqa.svg" },
    { name: "Amazon", file: "AmazonRing.webp" },
    { name: "AT&T", file: "ATT_logo_2016.webp" },
    { name: "Barret", file: "barret.webp" },
    { name: "BT", file: "BT_logo_2019.webp" },
    { name: "DAZN", file: "DAZN_Logo_Master.webp" },
    { name: "DENTON", file: "DENTONLinkedIn.webp" },
    { name: "Harry Potter", file: "Harry_Potter_wordmark.webp" },
    { name: "Heatherwick Studio", file: "HeatherwickStudioOpenCity.webp" },
    { name: "IBM iX", file: "IBM-iX-Logo.webp" },
    { name: "JIOFIN", file: "JIOFIN.webp" },
    { name: "John Lewis", file: "johnlewis.webp" },
    { name: "Kier Construction", file: "KierConstructionLinkedIn.webp" },
    { name: "McLaren", file: "McLarenLogoandsymbolmeaning.webp" },
    { name: "Peloton", file: "Peloton_company-Logo.webp" },
    {
      name: "Apple",
      file: "png-clipart-apple-logo-brand-apple-company-trademark-thumbnail.webp",
    },
    { name: "Z", file: "z.webp" },
    {
      name: "Zaha Hadid",
      file: "ZahaHadidArchitectsIngeniousPerformance.webp",
    },
  ];

  return (
    <section className="pb-[80px] z-10">
      <p className="text-center text-sm tracking-wide text-muted/45">
        Working with the world's most ambitious businesses
      </p>

      <div className="mx-auto mt-10 max-w-[1200px] px-6 overflow-hidden">
        <style>{`
          @keyframes trust-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .marquee-wrapper {
            animation: 25s linear 0s infinite normal none running trust-scroll;
          }
          
        `}</style>

        <div className="flex overflow-hidden">
          <div className="marquee-wrapper flex items-center gap-14 md:gap-20 shrink-0">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center justify-center"
              >
                <img
                  src={`/assets/brands/${brand.file}`}
                  alt={brand.name}
                  className="w-auto object-contain grayscale opacity-60 mix-blend-multiply transition-opacity duration-500 h-10 md:h-12"
                />
              </div>
            ))}
          </div>

          <div
            className="marquee-wrapper flex items-center gap-14 md:gap-20 shrink-0"
            aria-hidden="true"
          >
            {brands.map((brand, index) => (
              <div
                key={`${index}-duplicate`}
                className="flex shrink-0 items-center justify-center"
              >
                <img
                  src={`/assets/brands/${brand.file}`}
                  alt={brand.name}
                  className="w-auto object-contain grayscale opacity-60 mix-blend-multiply transition-opacity duration-500 h-10 md:h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
