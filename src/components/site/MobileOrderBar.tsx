import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MENU_URL, ORDER_BROOKLYN } from "@/lib/site-data";

export function MobileOrderBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "bg-ink/95 border-cream/12 fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t backdrop-blur-md transition-transform duration-500 sm:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <a
        href={MENU_URL}
        target="_blank"
        rel="noreferrer"
        className="text-cream py-4 text-center text-[0.72rem] font-semibold tracking-[0.18em] uppercase"
      >
        Menu
      </a>
      <a
        href={ORDER_BROOKLYN}
        target="_blank"
        rel="noreferrer"
        className="bg-clay text-cream py-4 text-center text-[0.72rem] font-semibold tracking-[0.18em] uppercase"
      >
        Order Online
      </a>
    </div>
  );
}
