import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { press } from "@/lib/site-data";

export function PressSection() {
  return (
    <section id="press" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-sumac">As seen in</p>
        </Reveal>
        <ul className="border-ink/12 mt-8 border-t">
          {press.map((item, i) => (
            <li key={item.url}>
              <Reveal delay={i * 60}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border-ink/12 group flex flex-col gap-1 border-b py-6 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-display text-ink group-hover:text-clay text-2xl transition-colors sm:text-3xl">
                    {item.outlet}
                  </span>
                  <span className="text-ink-soft flex items-baseline gap-2 text-sm sm:max-w-md sm:text-right">
                    {item.headline}
                    <ArrowUpRight className="size-4 shrink-0 self-center opacity-50" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
