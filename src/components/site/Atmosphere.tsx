import { Reveal } from "./Reveal";
import tableShare from "@/assets/table-share.jpg";
import interior from "@/assets/interior.jpg";
import flatbread from "@/assets/flatbread.jpg";

export function Atmosphere() {
  return (
    <section className="bg-ink text-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-[14ch] text-[2.4rem] leading-[0.98] tracking-[-0.02em] sm:text-5xl lg:text-[3.4rem]">
            The room, on a
            <span className="text-clay italic"> full night.</span>
          </h2>
          <p className="text-cream/65 max-w-sm leading-relaxed">
            A large, airy dining room. Tables cut from tree logs, clay cups still
            warm from the kiln, and a living wall of ferns.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <img
          src={tableShare}
          alt="Guests reaching across a long candlelit table covered with shared dishes and bread"
          width={1920}
          height={1088}
          loading="lazy"
          className="h-[70vw] w-full object-cover sm:h-[38rem] lg:h-[44rem]"
        />
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-[1440px] gap-6 px-5 sm:grid-cols-2 sm:px-8">
        <Reveal>
          <img
            src={interior}
            alt="Pendant lights over wooden tables set with clay vessels"
            width={1920}
            height={1280}
            loading="lazy"
            className="h-[52vw] w-full object-cover sm:h-[24rem]"
          />
        </Reveal>
        <Reveal delay={140}>
          <img
            src={flatbread}
            alt="A shared flatbread being torn at the table"
            width={1408}
            height={1760}
            loading="lazy"
            className="h-[52vw] w-full object-cover sm:h-[24rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
