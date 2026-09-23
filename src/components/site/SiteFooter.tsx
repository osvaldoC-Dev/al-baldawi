import {
  CATERING_STORE,
  CONTACT_URL,
  FACEBOOK,
  INSTAGRAM,
  MENU_URL,
  ORDER_BROOKLYN,
  locations,
} from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/70 border-cream/12 border-t py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-cream text-2xl tracking-[0.28em] uppercase">
              Al&nbsp;Badawi
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Palestinian cooking in Brooklyn Heights and on the Upper East Side.
            </p>
          </div>

          {locations.map((loc) => (
            <div key={loc.name} className="lg:col-span-3">
              <p className="eyebrow text-cream">{loc.name}</p>
              <address className="mt-4 space-y-1 text-sm not-italic">
                <span className="block">{loc.addressLine}</span>
                <span className="block">{loc.cityLine}</span>
              </address>
              <ul className="mt-4 space-y-1 text-sm">
                {loc.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <a
                href={loc.phoneHref}
                className="hover:text-clay mt-4 inline-block text-sm transition-colors"
              >
                {loc.phone}
              </a>
            </div>
          ))}

          <nav aria-label="Footer" className="lg:col-span-2">
            <ul className="space-y-3 text-sm">
              {[
                { label: "Menu", href: MENU_URL },
                { label: "Order Online", href: ORDER_BROOKLYN },
                { label: "Catering", href: CATERING_STORE },
                { label: "Press", href: "#press" },
                { label: "Contact", href: CONTACT_URL },
                { label: "Instagram", href: INSTAGRAM },
                { label: "Facebook", href: FACEBOOK },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("#")
                      ? {}
                      : { target: "_blank", rel: "noreferrer" })}
                    className="hover:text-clay transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-cream/12 mt-14 flex flex-col gap-2 border-t pt-8 text-xs sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Al Badawi.</p>
          <p className="text-cream/45">
            Unofficial design concept. Information sourced from albadawinyc.com
            and published press.
          </p>
        </div>
      </div>
    </footer>
  );
}
