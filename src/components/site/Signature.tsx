import { Reveal } from "./Reveal";
import { dishes, MENU_URL } from "@/lib/site-data";
import heroTable from "@/assets/hero-table.jpg";
import mansaf from "@/assets/mansaf.jpg";
import lambChops from "@/assets/lamb-chops.jpg";
import flatbread from "@/assets/flatbread.jpg";

export function Signature() {
  const [msakhan, mansafDish, mezzeDish, fattat, sajj, ouzi] = dishes;

  return (
    <section id="menu" className="bg-ink text-cream py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-clay">Signature dishes</p>
          <h2 className="mt-6 text-[2.6rem] leading-[0.95] tracking-[-0.02em] sm:text-6xl lg:text-[5rem]">
            From the Levant
            <span className="block italic">to New York</span>
          </h2>
        </Reveal>

        {/* Lead dish — full bleed */}
        <Reveal className="mt-16 sm:mt-24">
          <figure className="grain relative">
            <img
              src={heroTable}
              alt="Msakhan: flatbread layered with sumac onions, roast chicken, almonds and pine nuts"
              width={1920}
              height={1200}
              loading="lazy"
              className="h-[62vw] w-full object-cover sm:h-[36rem] lg:h-[42rem]"
            />
            <figcaption className="from-ink/95 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-6 sm:p-12">
              <h3 className="text-4xl sm:text-6xl">{msakhan.name}</h3>
              <p className="text-cream/75 mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
                {msakhan.description}
              </p>
            </figcaption>
          </figure>
        </Reveal>

        {/* Two-up, offset */}
        <div className="mt-6 grid gap-6 sm:mt-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <img
              src={mansaf}
              alt="Mansaf: lamb shank over basmati rice on a wide flatbread with yogurt sauce"
              width={1408}
              height={1760}
              loading="lazy"
              className="h-[80vw] w-full object-cover sm:h-[42rem] lg:h-[46rem]"
            />
            <h3 className="mt-6 text-3xl sm:text-4xl">{mansafDish.name}</h3>
            <p className="text-cream/70 mt-3 max-w-lg leading-relaxed">
              {mansafDish.description}
            </p>
          </Reveal>

          <div className="flex flex-col gap-10 lg:col-span-5 lg:pt-16">
            <Reveal delay={120}>
              <img
                src={flatbread}
                alt="A thin sajj flatbread topped with cheese and crushed pistachio, torn by hand"
                width={1408}
                height={1760}
                loading="lazy"
                className="h-[70vw] w-full object-cover sm:h-[30rem]"
              />
              <h3 className="mt-6 text-3xl">{sajj.name}</h3>
              <p className="text-cream/70 mt-3 leading-relaxed">{sajj.description}</p>
            </Reveal>

            <Reveal delay={180}>
              <img
                src={lambChops}
                alt="Grilled lamb chops served with hummus and baba ghanoush"
                width={1408}
                height={1056}
                loading="lazy"
                className="h-[54vw] w-full object-cover sm:h-[22rem]"
              />
              <h3 className="mt-6 text-3xl">{ouzi.name}</h3>
              <p className="text-cream/70 mt-3 leading-relaxed">{ouzi.description}</p>
            </Reveal>
          </div>
        </div>

        {/* Typographic pair */}
        <div className="border-cream/15 mt-20 grid gap-10 border-t pt-12 sm:grid-cols-2 sm:gap-16">
          {[mezzeDish, fattat].map((dish, i) => (
            <Reveal key={dish.name} delay={i * 120}>
              <h3 className="text-3xl sm:text-4xl">{dish.name}</h3>
              <p className="text-cream/70 mt-4 max-w-md leading-relaxed">
                {dish.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <a
            href={MENU_URL}
            target="_blank"
            rel="noreferrer"
            className="border-cream/40 hover:bg-cream hover:text-ink inline-block border px-10 py-4 text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors"
          >
            Explore full menu
          </a>
          <p className="text-cream/45 mt-6 max-w-xl text-xs leading-relaxed">
            Dish descriptions are drawn from published reviews in The New Yorker,
            Grub Street and The Infatuation. Current items and prices live on the
            restaurant&rsquo;s ordering menu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
