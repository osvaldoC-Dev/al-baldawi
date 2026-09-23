import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-table.jpg";
import { MENU_URL, ORDER_BROOKLYN } from "@/lib/site-data";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setOffset(Math.min(window.scrollY, 700) * 0.18);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="top"
      className="bg-ink grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <img
        src={heroImage}
        alt="A table set with msakhan, hummus, olives and a terracotta water jug"
        width={1920}
        height={1200}
        fetchPriority="high"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.06)` }}
        className="absolute inset-0 size-full object-cover will-change-transform"
      />
      <div className="from-ink via-ink/55 absolute inset-0 bg-gradient-to-t to-transparent" />
      <div className="from-ink/85 absolute inset-0 bg-gradient-to-r via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24">
        <p
          className="eyebrow text-clay animate-in fade-in slide-in-from-bottom-3 duration-1000"
          style={{ animationDelay: "120ms", animationFillMode: "both" }}
        >
          Palestinian kitchen · Brooklyn Heights &amp; Upper East Side
        </p>

        <h1
          className="text-cream animate-in fade-in slide-in-from-bottom-4 mt-5 max-w-[16ch] text-[15vw] leading-[0.86] tracking-[-0.02em] duration-1000 sm:text-[9.5vw] lg:text-[8.2rem]"
          style={{ animationDelay: "220ms", animationFillMode: "both" }}
        >
          Levantine cooking,
          <span className="text-clay block italic">served with warmth.</span>
        </h1>

        <div
          className="animate-in fade-in slide-in-from-bottom-3 mt-8 flex flex-col gap-8 duration-1000 lg:flex-row lg:items-end lg:justify-between"
          style={{ animationDelay: "380ms", animationFillMode: "both" }}
        >
          <p className="text-cream/75 max-w-md text-base leading-relaxed sm:text-lg">
            Bread from the oven at the front of the house, mezze that keeps
            arriving, and platters built to be shared — Palestinian home cooking,
            in New York.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={MENU_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-cream text-ink hover:bg-sand px-8 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              Explore the Menu
            </a>
            <a
              href={ORDER_BROOKLYN}
              target="_blank"
              rel="noreferrer"
              className="border-cream/40 text-cream hover:bg-cream/10 border px-8 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
