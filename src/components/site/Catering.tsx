import { Reveal } from "./Reveal";
import cateringImage from "@/assets/catering.jpg";
import { CATERING_STORE, CONTACT_URL } from "@/lib/site-data";

export function Catering() {
  return (
    <section id="catering" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-clay">Catering</p>
              <h2 className="text-ink mt-6 text-[2.6rem] leading-[0.95] tracking-[-0.02em] sm:text-5xl lg:text-[3.8rem]">
                Bring Al Badawi
                <span className="text-olive block italic">to the table.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-ink-soft mt-8 max-w-md text-lg leading-relaxed">
                The kitchen caters events of every size. Order directly through
                the catering store, or send an inquiry and the team will get back
                to you.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CATERING_STORE}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-ink text-cream hover:bg-sumac px-8 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors"
                >
                  Explore catering
                </a>
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border-ink/30 text-ink hover:bg-sand border px-8 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors"
                >
                  Inquire
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-7">
            <img
              src={cateringImage}
              alt="A long table laid with trays of rice, roasted meats, salads and stacks of flatbread"
              width={1920}
              height={1088}
              loading="lazy"
              className="h-[62vw] w-full object-cover sm:h-[32rem] lg:h-[38rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
