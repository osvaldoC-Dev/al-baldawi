import { Reveal } from "./Reveal";
import mansaf from "@/assets/mansaf.jpg";
import { ORDER_BROOKLYN, locations } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section className="bg-ink grain relative isolate overflow-hidden">
      <img
        src={mansaf}
        alt="A mansaf platter of lamb, rice and flatbread set for sharing"
        width={1408}
        height={1760}
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover opacity-45"
      />
      <div className="from-ink via-ink/70 to-ink/85 absolute inset-0 -z-10 bg-gradient-to-t" />

      <div className="mx-auto flex min-h-[85svh] max-w-[1440px] flex-col justify-end px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="text-cream text-[15vw] leading-[0.85] tracking-[-0.03em] sm:text-[11vw] lg:text-[9rem]">
            Come to
            <span className="text-clay block italic">the table.</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href={ORDER_BROOKLYN}
              target="_blank"
              rel="noreferrer"
              className="bg-cream text-ink hover:bg-sand px-10 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              Order Online
            </a>
            <a
              href="#locations"
              className="border-cream/40 text-cream hover:bg-cream/10 border px-10 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              Visit Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-cream/55 mt-10 text-sm">
            {locations.map((l) => `${l.addressLine}, ${l.name}`).join("  ·  ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
