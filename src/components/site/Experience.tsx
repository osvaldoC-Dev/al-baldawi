import { Reveal } from "./Reveal";
import detailOil from "@/assets/detail-oil.jpg";
import mezze from "@/assets/mezze.jpg";

export function Experience() {
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:pt-10">
            <Reveal>
              <p className="eyebrow text-clay">The Experience</p>
              <h2 className="text-ink mt-6 text-[2.75rem] leading-[0.95] tracking-[-0.02em] sm:text-6xl lg:text-[4.6rem]">
                Food meant
                <span className="text-olive block italic">to be shared.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-ink-soft mt-8 max-w-sm text-lg leading-relaxed">
                Every meal begins with warm bread, dense green olives, olive oil
                and za&rsquo;atar. Bread is the utensil here — you scoop, you tear,
                you pass the plate along.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <dl className="border-border mt-12 grid max-w-sm grid-cols-2 gap-y-8 border-t pt-8">
                <div>
                  <dt className="eyebrow text-muted-foreground">Cuisine</dt>
                  <dd className="text-ink mt-2 text-lg">Palestinian</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted-foreground">Locations</dt>
                  <dd className="text-ink mt-2 text-lg">Two in NYC</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted-foreground">Bread</dt>
                  <dd className="text-ink mt-2 text-lg">Baked in house</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted-foreground">Table style</dt>
                  <dd className="text-ink mt-2 text-lg">Family platters</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-5 gap-4 sm:gap-6">
              <Reveal className="col-span-3">
                <img
                  src={detailOil}
                  alt="Olive oil poured from a terracotta jug into a small clay dish beside warm bread"
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="h-[58vw] w-full object-cover sm:h-[38rem]"
                />
              </Reveal>
              <Reveal delay={160} className="col-span-2 flex flex-col justify-end">
                <img
                  src={mezze}
                  alt="A mezze platter of hummus, baba ghanoush, muhammarah, tabbouleh and labneh with pita"
                  width={1408}
                  height={1104}
                  loading="lazy"
                  className="h-[40vw] w-full object-cover sm:h-[26rem]"
                />
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  Water arrives in heavy clay jugs, with tumblers to match.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
