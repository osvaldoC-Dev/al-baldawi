import { Reveal } from "./Reveal";
import { locations } from "@/lib/site-data";

export function Locations() {
  return (
    <section id="locations" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Locations</p>
          <h2 className="text-ink mt-6 text-[2.6rem] leading-[0.95] tracking-[-0.02em] sm:text-6xl">
            Two rooms,
            <span className="text-olive italic"> one table.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px sm:gap-16 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 120}>
              <article className="border-ink/12 flex h-full flex-col border-t pt-8">
                <h3 className="text-ink text-4xl sm:text-5xl">{loc.name}</h3>
                <p className="eyebrow text-muted-foreground mt-3">
                  {loc.neighborhood}
                </p>

                <address className="text-ink-soft mt-8 space-y-1 text-lg not-italic">
                  <span className="block">{loc.addressLine}</span>
                  <span className="block">{loc.cityLine}</span>
                </address>

                <ul className="text-ink-soft mt-8 space-y-1.5 text-sm">
                  {loc.hours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <a
                  href={loc.phoneHref}
                  className="text-ink hover:text-clay mt-6 inline-block text-lg transition-colors"
                >
                  {loc.phone}
                </a>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={loc.orderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-ink text-cream hover:bg-sumac px-6 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors"
                  >
                    Order
                  </a>
                  <a
                    href={loc.reserveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-ink/30 text-ink hover:bg-sand border px-6 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors"
                  >
                    Reserve
                  </a>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink-soft hover:text-clay px-1 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase underline underline-offset-4 transition-colors"
                  >
                    Directions
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
