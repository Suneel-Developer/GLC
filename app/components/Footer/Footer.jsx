import Link from "next/link";

const links = [
  { label: "Why Ashford Hale", href: "/why" },
  { label: "Payroll", href: "/payroll" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy & Cookies Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Client Service Agreement", href: "/legal/client-services" },
  { label: "Complaints Policy", href: "/legal/complaints" },
  { label: "Anti-Money Laundering Policy", href: "/legal/aml" },
  { label: "Service Level Agreement", href: "/legal/sla" },
  { label: "Whistle Blower Policy", href: "/legal/whistleblowing" },
  { label: "Data Processing Agreement", href: "/legal/dpa" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
];

const NavLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="group relative text-sm text-[#3a3a3a99] transition-all duration-300 hover:text-foreground hover:font-semibold inline-block"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground/30 transition-all duration-300 group-hover:w-full" />
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="mt-auto relative">
      <div className="mx-auto max-w-240 px-6 py-16">
        {/* 3 column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center">
          {/* Links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2b2b2b] mb-4">
              Links
            </div>

            <ul className="space-y-2.5">
              {links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2b2b2b] mb-4">
              Legal
            </div>
            <ul className="space-y-2.5">
              {legal.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2b2b2b] mb-4">
              Contact
            </div>
            <Link
              href="mailto:info@blacksofa.co.uk"
              className="group relative text-sm text-[#3a3a3a99] transition-all duration-300 hover:text-foreground hover:font-semibold inline-block"
            >
              info@ashfordhale.co.uk
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground/30 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-12 text-center relative">
          <p className="text-[13px] text-[#3a3a3a99] font-garamond-light">
            Built on proven payroll infrastructure used for high-volume UK
            payroll
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/30 text-center relative">
          <p className="text-xs text-[#3a3a3a]">
            © {new Date().getFullYear()} Ashford Hale London Limited. All rights
            reserved.
          </p>
          <p className="mt-2 text-[11px] text-[#3a3a3a]">
            Built on Jigsol technology
          </p>
        </div>
      </div>
    </footer>
  );
}
