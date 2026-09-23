import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, MENU_URL, ORDER_BROOKLYN } from "@/lib/site-data";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-ink/92 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="font-display text-cream text-lg tracking-[0.3em] uppercase sm:text-xl"
        >
          Al&nbsp;Badawi
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-cream/80 hover:text-cream text-[0.8rem] font-medium tracking-[0.14em] uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={ORDER_BROOKLYN}
            target="_blank"
            rel="noreferrer"
            className="bg-clay text-cream hover:bg-sumac hidden px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors sm:inline-block"
          >
            Order Online
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-cream lg:hidden"
          >
            <Menu className="size-6" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "bg-ink fixed inset-0 z-50 flex flex-col transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-display text-cream text-lg tracking-[0.3em] uppercase">
            Al&nbsp;Badawi
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-cream"
          >
            <X className="size-6" strokeWidth={1.4} />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col justify-center gap-1 px-6 pb-24"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-cream border-cream/12 font-display border-b py-4 text-3xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href={MENU_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="bg-clay text-cream mt-8 py-4 text-center text-[0.78rem] font-semibold tracking-[0.2em] uppercase"
          >
            Order Online
          </a>
        </nav>
      </div>
    </header>
  );
}
