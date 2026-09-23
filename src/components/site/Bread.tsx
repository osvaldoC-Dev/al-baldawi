import { Reveal } from "./Reveal";
import breadOven from "@/assets/bread-oven.jpg";

export function Bread() {
  return (
    <section className="bg-sand relative overflow-hidden">
      <div className="mx-auto grid max-w-[1440px] items-stretch lg:grid-cols-2">
        <Reveal className="order-2 flex flex-col justify-center px-5 py-20 sm:px-8 lg:order-1 lg:py-32 lg:pr-20">
          <p className="eyebrow text-sumac">Craft</p>
          <h2 className="text-ink mt-6 text-[2.8rem] leading-[0.92] tracking-[-0.02em] sm:text-7xl lg:text-[6rem]">
            Bread
            <span className="block italic">is life.</span>
          </h2>
          <p className="text-ink-soft mt-8 max-w-md text-lg leading-relaxed">
            A domed oven sits at the front of the house. Bakers pinch hunks from
            a single mass of dough, knead each into a smooth softball, stretch it
            thin and bake it in front of the room. Stacks keep arriving all
            through dinner.
          </p>
          <p className="text-muted-foreground mt-6 max-w-md text-sm leading-relaxed">
            As described in The New Yorker, March 2022.
          </p>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <img
            src={breadOven}
            alt="A baker stretching dough beside a tiled domed bread oven, with stacks of fresh flatbread"
            width={1536}
            height={1920}
            loading="lazy"
            className="h-[90vw] w-full object-cover sm:h-[46rem] lg:h-full lg:min-h-[44rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
