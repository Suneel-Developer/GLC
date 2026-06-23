import React from "react";

const ClientServices = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background elements */}
      <div
        className="pointer-events-none absolute inset-0 z-5"
        aria-hidden="true"
      >
        <div className="absolute w-30 md:w-45 xl:w-55 opacity-70 top-16 left-[5%] lg:left-[10%]">
          <img
            src="/assets/MirrorT.webp"
            alt="MirrorT"
            loading="lazy"
            className="w-full drop-shadow-lg"
          />
        </div>

        <div className="absolute w-30 md:w-45 xl:w-55 opacity-60 bottom-[15%] right-[3%] lg:right-[8%]">
          <img
            src="/assets/LobsterPhoneT.webp"
            alt="LobsterPhoneT"
            loading="lazy"
            className="w-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
        <div>
          <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl font-garamond-medium">
            Client Services Agreement
          </h1>

          <p className="mt-6 text-[#3A3A3A]/70 leading-relaxed">
            The terms under which Black Sofa provides payroll processing,
            compliance management, and reporting services.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-border/60" />
          <span className="text-sm text-[#3A3A3A]/50">
            Effective date: 20 March 2026
          </span>
          <div className="h-px w-16 bg-border/60" />
        </div>

        <div className="mt-14 space-y-10 text-left">
          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              1. Scope of Services
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              This agreement sets out the terms under which Black Sofa provides
              payroll processing, compliance management, and reporting services
              to the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              2. Service Delivery
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Services will be delivered in accordance with the agreed schedule
              and service tier. Changes to scope require written agreement from
              both parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              3. Fees and Payment
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Fees are as agreed in the client proposal. Invoices are issued
              monthly and payable within 14 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              4. Client Responsibilities
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              The client shall provide accurate data by agreed deadlines and
              designate a primary point of contact for payroll matters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium font-garamond-medium">
              5. Liability
            </h2>
            <p className="mt-3 text-[#3A3A3A]/80 leading-relaxed">
              Black Sofa's liability is limited to re-performing the affected
              services or refunding the relevant fees, at our discretion.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ClientServices;
