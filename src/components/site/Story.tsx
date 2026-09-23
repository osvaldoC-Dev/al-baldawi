import { Reveal } from "./Reveal";
import interior from "@/assets/interior.jpg";

export function Story() {
  return (
    <section id="story" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <img
              src={interior}
              alt="The dining room: live-edge wooden tables, clay vessels and a wall of ferns"
              width={1920}
              height={1280}
              loading="lazy"
              className="h-[66vw] w-full object-cover sm:h-[34rem] lg:h-[40rem]"
            />
          </Reveal>

          <div className="lg:col-span-6 lg:pt-8">
            <Reveal>
              <p className="eyebrow text-clay">Our Story</p>
              <h2 className="text-ink mt-6 text-[2.5rem] leading-[0.98] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem]">
                A taste of the Levant
                <span className="text-olive block italic">in New York.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="text-ink-soft mt-8 space-y-5 text-lg leading-relaxed">
                <p>
                  Al Badawi opened on Atlantic Avenue in Brooklyn Heights — a
                  Palestinian restaurant from Abdul Elenani and Ayat Masoud, the
                  couple behind Ayat in Bay Ridge, together with Akram Nassir of
                  the Yemen Café across the street.
                </p>
                <p>
                  The kitchen looks to the home cooking of the West Bank and
                  Jordan: pilafs, stews and slow-cooked lamb rather than the usual
                  mezze-platter shorthand. Much of the meat comes from the owners&rsquo;
                  farm in New Jersey.
                </p>
                <p>
                  The room is named for the world&rsquo;s oldest olive tree, painted on
                  the wall entwined with the Dome of the Rock.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-muted-foreground border-border mt-10 border-t pt-6 text-sm leading-relaxed">
                Sources: The New Yorker (2022), Grub Street (2021).
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
