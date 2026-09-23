import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as Menu, r as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CkJBRaqx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var ORDER_BROOKLYN = "https://albadawiatlantic.hrpos.heartland.us/";
var ORDER_UES = "https://albadawiues.hrpos.heartland.us/menu";
var MENU_URL = "https://albadawiatlantic.hrpos.heartland.us/menu";
var CATERING_STORE = "https://www.albadawinyc.com/catering-store-v2";
var CONTACT_URL = "https://www.albadawinyc.com/contact/";
var INSTAGRAM = "https://www.instagram.com/albadawi.nyc/?hl=en";
var FACEBOOK = "https://m.facebook.com/albadawi.nyc/?ref=page_internal";
var navItems = [
	{
		label: "Menu",
		href: MENU_URL,
		external: true
	},
	{
		label: "Our Story",
		href: "#story"
	},
	{
		label: "Locations",
		href: "#locations"
	},
	{
		label: "Catering",
		href: "#catering"
	},
	{
		label: "Press",
		href: "#press"
	},
	{
		label: "Contact",
		href: CONTACT_URL,
		external: true
	}
];
var dishes = [
	{
		name: "Msakhan",
		description: "A round flatbread layered with sumac-tart onions, topped with half a chicken, parsley, slivered almonds and pine nuts — the dish the Palestinian table is built around.",
		source: "The New Yorker"
	},
	{
		name: "Mansaf",
		description: "A lamb shank simmered in a tangy fermented-yogurt sauce, set over basmati rice and an expanse of shrak bread, served with a bowl of extra sauce on the side.",
		source: "The New Yorker"
	},
	{
		name: "Mezze Filistini",
		description: "House-made hummus, baba ghanoush, muhammarah, tabbouleh, salata tahina and labneh, brought to the table together.",
		source: "The New Yorker"
	},
	{
		name: "Fattat Jaj",
		description: "Shredded chicken folded with slivered almonds and minted yogurt over rice, with toasted bread underneath.",
		source: "Grub Street"
	},
	{
		name: "Sajj Flatbreads",
		description: "Wafer-thin wheels of bread from the domed oven, finished with toppings from crushed pistachio to shawarma to cheese.",
		source: "Grub Street"
	},
	{
		name: "Ouzi Lamb",
		description: "Lamb served over a pile of rice with almonds, peas and herbs — one of the house's larger, shareable platters.",
		source: "The Infatuation"
	}
];
var press = [
	{
		outlet: "The New Yorker",
		headline: "At al Badawi, Bread Is Life",
		url: "https://www.newyorker.com/magazine/2022/03/28/at-al-badawi-bread-is-life"
	},
	{
		outlet: "Eater NY",
		headline: "The 38 Best Restaurants in New York City",
		url: "https://ny.eater.com/maps/best-new-york-restaurants-38-map"
	},
	{
		outlet: "Grub Street",
		headline: "Beautiful Food and Bountiful Portions at Al Badawi",
		url: "https://www.grubstreet.com/article/al-badawi-nyc-restaurant-review.html"
	},
	{
		outlet: "The Infatuation",
		headline: "Albadawi — Brooklyn Heights, New York",
		url: "https://www.theinfatuation.com/new-york/reviews/albadawi"
	},
	{
		outlet: "Brooklyn Magazine",
		headline: "Albadawi is a new hotspot in Brooklyn Heights",
		url: "https://www.bkmag.com/2021/11/15/albadawi-is-a-new-hotspot-in-brooklyn-heights-from-the-owner-of-ayat/"
	}
];
var locations = [{
	name: "Brooklyn Heights",
	neighborhood: "Atlantic Avenue",
	addressLine: "151 Atlantic Ave",
	cityLine: "Brooklyn, NY 11201",
	phone: "(718) 689 5888",
	phoneHref: "tel:+17186895888",
	hours: [
		"Monday – Thursday  11 AM – 10 PM",
		"Friday – Saturday  11 AM – 11 PM",
		"Sunday  11 AM – 10 PM"
	],
	mapUrl: "https://maps.google.com/?cid=2336118820879574869",
	orderUrl: ORDER_BROOKLYN,
	reserveUrl: "https://resy.com/cities/ny/al-badawi"
}, {
	name: "Upper East Side",
	neighborhood: "Second Avenue",
	addressLine: "1725 2nd Ave",
	cityLine: "New York, NY 10128",
	phone: "(917) 388 2868",
	phoneHref: "tel:+19173882868",
	hours: [
		"Monday – Thursday  10:30 AM – 10 PM",
		"Friday – Saturday  10:30 AM – 11 PM",
		"Sunday  10:30 AM – 10 PM"
	],
	mapUrl: "https://maps.google.com/?cid=9099137768595603373",
	orderUrl: ORDER_UES,
	reserveUrl: "https://resy.com/cities/ny/albadawi-upper-east-side"
}];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-500", scrolled ? "bg-ink/92 backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:h-20 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "font-display text-cream text-lg tracking-[0.3em] uppercase sm:text-xl",
					children: "Al\xA0Badawi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-9 lg:flex",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						...item.external ? {
							target: "_blank",
							rel: "noreferrer"
						} : {},
						className: "text-cream/80 hover:text-cream text-[0.8rem] font-medium tracking-[0.14em] uppercase transition-colors",
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: ORDER_BROOKLYN,
						target: "_blank",
						rel: "noreferrer",
						className: "bg-clay text-cream hover:bg-sumac hidden px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors sm:inline-block",
						children: "Order Online"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(true),
						"aria-label": "Open menu",
						className: "text-cream lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-6",
							strokeWidth: 1.4
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("bg-ink fixed inset-0 z-50 flex flex-col transition-opacity duration-300 lg:hidden", open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"),
			"aria-hidden": !open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 items-center justify-between px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-cream text-lg tracking-[0.3em] uppercase",
					children: "Al\xA0Badawi"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					"aria-label": "Close menu",
					className: "text-cream",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-6",
						strokeWidth: 1.4
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "flex flex-1 flex-col justify-center gap-1 px-6 pb-24",
				children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					...item.external ? {
						target: "_blank",
						rel: "noreferrer"
					} : {},
					className: "text-cream border-cream/12 font-display border-b py-4 text-3xl",
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: MENU_URL,
					target: "_blank",
					rel: "noreferrer",
					onClick: () => setOpen(false),
					className: "bg-clay text-cream mt-8 py-4 text-center text-[0.78rem] font-semibold tracking-[0.2em] uppercase",
					children: "Order Online"
				})]
			})]
		})]
	});
}
var hero_table_default = "/assets/hero-table-BWQDyehV.jpg";
function Hero() {
	const [offset, setOffset] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let frame = 0;
		const onScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				setOffset(Math.min(window.scrollY, 700) * .18);
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "bg-ink grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_table_default,
				alt: "A table set with msakhan, hummus, olives and a terracotta water jug",
				width: 1920,
				height: 1200,
				fetchPriority: "high",
				style: { transform: `translate3d(0, ${offset}px, 0) scale(1.06)` },
				className: "absolute inset-0 size-full object-cover will-change-transform"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-ink via-ink/55 absolute inset-0 bg-gradient-to-t to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-ink/85 absolute inset-0 bg-gradient-to-r via-transparent to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay animate-in fade-in slide-in-from-bottom-3 duration-1000",
						style: {
							animationDelay: "120ms",
							animationFillMode: "both"
						},
						children: "Palestinian kitchen · Brooklyn Heights & Upper East Side"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-cream animate-in fade-in slide-in-from-bottom-4 mt-5 max-w-[16ch] text-[15vw] leading-[0.86] tracking-[-0.02em] duration-1000 sm:text-[9.5vw] lg:text-[8.2rem]",
						style: {
							animationDelay: "220ms",
							animationFillMode: "both"
						},
						children: ["Levantine cooking,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-clay block italic",
							children: "served with warmth."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-in fade-in slide-in-from-bottom-3 mt-8 flex flex-col gap-8 duration-1000 lg:flex-row lg:items-end lg:justify-between",
						style: {
							animationDelay: "380ms",
							animationFillMode: "both"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-cream/75 max-w-md text-base leading-relaxed sm:text-lg",
							children: "Bread from the oven at the front of the house, mezze that keeps arriving, and platters built to be shared — Palestinian home cooking, in New York."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: MENU_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "bg-cream text-ink hover:bg-sand px-8 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors",
								children: "Explore the Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: ORDER_BROOKLYN,
								target: "_blank",
								rel: "noreferrer",
								className: "border-cream/40 text-cream hover:bg-cream/10 border px-8 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors",
								children: "Order Online"
							})]
						})]
					})
				]
			})
		]
	});
}
/**
* Lightweight scroll reveal built on IntersectionObserver.
* Returns immediately-visible state when the user prefers reduced motion.
*/
function useReveal(threshold = .18) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, [threshold]);
	return {
		ref,
		visible
	};
}
function Reveal({ children, className, delay = 0, as }) {
	const Tag = as ?? "div";
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: delay ? { transitionDelay: `${delay}ms` } : void 0,
		className: cn("reveal-base", visible && "reveal-in", className),
		children
	});
}
var detail_oil_default = "/assets/detail-oil-k2EF0iSW.jpg";
var mezze_default = "/assets/mezze-vDza_BIE.jpg";
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-24 sm:py-32 lg:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-12 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 lg:pt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-clay",
							children: "The Experience"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-ink mt-6 text-[2.75rem] leading-[0.95] tracking-[-0.02em] sm:text-6xl lg:text-[4.6rem]",
							children: ["Food meant", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-olive block italic",
								children: "to be shared."
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink-soft mt-8 max-w-sm text-lg leading-relaxed",
								children: "Every meal begins with warm bread, dense green olives, olive oil and za’atar. Bread is the utensil here — you scoop, you tear, you pass the plate along."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "border-border mt-12 grid max-w-sm grid-cols-2 gap-y-8 border-t pt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "eyebrow text-muted-foreground",
										children: "Cuisine"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-ink mt-2 text-lg",
										children: "Palestinian"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "eyebrow text-muted-foreground",
										children: "Locations"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-ink mt-2 text-lg",
										children: "Two in NYC"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "eyebrow text-muted-foreground",
										children: "Bread"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-ink mt-2 text-lg",
										children: "Baked in house"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "eyebrow text-muted-foreground",
										children: "Table style"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-ink mt-2 text-lg",
										children: "Family platters"
									})] })
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-5 gap-4 sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "col-span-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: detail_oil_default,
								alt: "Olive oil poured from a terracotta jug into a small clay dish beside warm bread",
								width: 1200,
								height: 1504,
								loading: "lazy",
								className: "h-[58vw] w-full object-cover sm:h-[38rem]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 160,
							className: "col-span-2 flex flex-col justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: mezze_default,
								alt: "A mezze platter of hummus, baba ghanoush, muhammarah, tabbouleh and labneh with pita",
								width: 1408,
								height: 1104,
								loading: "lazy",
								className: "h-[40vw] w-full object-cover sm:h-[26rem]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-4 text-sm leading-relaxed",
								children: "Water arrives in heavy clay jugs, with tumblers to match."
							})]
						})]
					})
				})]
			})
		})
	});
}
var mansaf_default = "/assets/mansaf-DPgWhO7K.jpg";
var lamb_chops_default = "/assets/lamb-chops-BzeZLxlF.jpg";
var flatbread_default = "/assets/flatbread-DZ_QCJB9.jpg";
function Signature() {
	const [msakhan, mansafDish, mezzeDish, fattat, sajj, ouzi] = dishes;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menu",
		className: "bg-ink text-cream py-24 sm:py-32 lg:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay",
						children: "Signature dishes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 text-[2.6rem] leading-[0.95] tracking-[-0.02em] sm:text-6xl lg:text-[5rem]",
						children: ["From the Levant", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block italic",
							children: "to New York"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-16 sm:mt-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "grain relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_table_default,
							alt: "Msakhan: flatbread layered with sumac onions, roast chicken, almonds and pine nuts",
							width: 1920,
							height: 1200,
							loading: "lazy",
							className: "h-[62vw] w-full object-cover sm:h-[36rem] lg:h-[42rem]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "from-ink/95 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-6 sm:p-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-4xl sm:text-6xl",
								children: msakhan.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/75 mt-4 max-w-xl text-base leading-relaxed sm:text-lg",
								children: msakhan.description
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 sm:mt-10 lg:grid-cols-12 lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: mansaf_default,
								alt: "Mansaf: lamb shank over basmati rice on a wide flatbread with yogurt sauce",
								width: 1408,
								height: 1760,
								loading: "lazy",
								className: "h-[80vw] w-full object-cover sm:h-[42rem] lg:h-[46rem]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-3xl sm:text-4xl",
								children: mansafDish.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/70 mt-3 max-w-lg leading-relaxed",
								children: mansafDish.description
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-10 lg:col-span-5 lg:pt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 120,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: flatbread_default,
									alt: "A thin sajj flatbread topped with cheese and crushed pistachio, torn by hand",
									width: 1408,
									height: 1760,
									loading: "lazy",
									className: "h-[70vw] w-full object-cover sm:h-[30rem]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-3xl",
									children: sajj.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-cream/70 mt-3 leading-relaxed",
									children: sajj.description
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 180,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: lamb_chops_default,
									alt: "Grilled lamb chops served with hummus and baba ghanoush",
									width: 1408,
									height: 1056,
									loading: "lazy",
									className: "h-[54vw] w-full object-cover sm:h-[22rem]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-3xl",
									children: ouzi.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-cream/70 mt-3 leading-relaxed",
									children: ouzi.description
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-cream/15 mt-20 grid gap-10 border-t pt-12 sm:grid-cols-2 sm:gap-16",
					children: [mezzeDish, fattat].map((dish, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 120,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-3xl sm:text-4xl",
							children: dish.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-cream/70 mt-4 max-w-md leading-relaxed",
							children: dish.description
						})]
					}, dish.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: MENU_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "border-cream/40 hover:bg-cream hover:text-ink inline-block border px-10 py-4 text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors",
						children: "Explore full menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/45 mt-6 max-w-xl text-xs leading-relaxed",
						children: "Dish descriptions are drawn from published reviews in The New Yorker, Grub Street and The Infatuation. Current items and prices live on the restaurant’s ordering menu."
					})]
				})
			]
		})
	});
}
var bread_oven_default = "/assets/bread-oven-k_JL5Z65.jpg";
function Bread() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-sand relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] items-stretch lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "order-2 flex flex-col justify-center px-5 py-20 sm:px-8 lg:order-1 lg:py-32 lg:pr-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-sumac",
						children: "Craft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-ink mt-6 text-[2.8rem] leading-[0.92] tracking-[-0.02em] sm:text-7xl lg:text-[6rem]",
						children: ["Bread", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block italic",
							children: "is life."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink-soft mt-8 max-w-md text-lg leading-relaxed",
						children: "A domed oven sits at the front of the house. Bakers pinch hunks from a single mass of dough, knead each into a smooth softball, stretch it thin and bake it in front of the room. Stacks keep arriving all through dinner."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-6 max-w-md text-sm leading-relaxed",
						children: "As described in The New Yorker, March 2022."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				className: "order-1 lg:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: bread_oven_default,
					alt: "A baker stretching dough beside a tiled domed bread oven, with stacks of fresh flatbread",
					width: 1536,
					height: 1920,
					loading: "lazy",
					className: "h-[90vw] w-full object-cover sm:h-[46rem] lg:h-full lg:min-h-[44rem]"
				})
			})]
		})
	});
}
var interior_default = "/assets/interior-Cw1m2oqD.jpg";
function Story() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "story",
		className: "bg-background py-24 sm:py-32 lg:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: interior_default,
						alt: "The dining room: live-edge wooden tables, clay vessels and a wall of ferns",
						width: 1920,
						height: 1280,
						loading: "lazy",
						className: "h-[66vw] w-full object-cover sm:h-[34rem] lg:h-[40rem]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 lg:pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-clay",
							children: "Our Story"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-ink mt-6 text-[2.5rem] leading-[0.98] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem]",
							children: ["A taste of the Levant", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-olive block italic",
								children: "in New York."
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-ink-soft mt-8 space-y-5 text-lg leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Al Badawi opened on Atlantic Avenue in Brooklyn Heights — a Palestinian restaurant from Abdul Elenani and Ayat Masoud, the couple behind Ayat in Bay Ridge, together with Akram Nassir of the Yemen Café across the street." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The kitchen looks to the home cooking of the West Bank and Jordan: pilafs, stews and slow-cooked lamb rather than the usual mezze-platter shorthand. Much of the meat comes from the owners’ farm in New Jersey." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The room is named for the world’s oldest olive tree, painted on the wall entwined with the Dome of the Rock." })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground border-border mt-10 border-t pt-6 text-sm leading-relaxed",
								children: "Sources: The New Yorker (2022), Grub Street (2021)."
							})
						})
					]
				})]
			})
		})
	});
}
var table_share_default = "/assets/table-share-Bqg_oAC2.jpg";
function Atmosphere() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-ink text-cream py-24 sm:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1440px] px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "max-w-[14ch] text-[2.4rem] leading-[0.98] tracking-[-0.02em] sm:text-5xl lg:text-[3.4rem]",
						children: ["The room, on a", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-clay italic",
							children: " full night."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/65 max-w-sm leading-relaxed",
						children: "A large, airy dining room. Tables cut from tree logs, clay cups still warm from the kiln, and a living wall of ferns."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: table_share_default,
					alt: "Guests reaching across a long candlelit table covered with shared dishes and bread",
					width: 1920,
					height: 1088,
					loading: "lazy",
					className: "h-[70vw] w-full object-cover sm:h-[38rem] lg:h-[44rem]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-6 grid max-w-[1440px] gap-6 px-5 sm:grid-cols-2 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: interior_default,
					alt: "Pendant lights over wooden tables set with clay vessels",
					width: 1920,
					height: 1280,
					loading: "lazy",
					className: "h-[52vw] w-full object-cover sm:h-[24rem]"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: flatbread_default,
						alt: "A shared flatbread being torn at the table",
						width: 1408,
						height: 1760,
						loading: "lazy",
						className: "h-[52vw] w-full object-cover sm:h-[24rem]"
					})
				})]
			})
		]
	});
}
var catering_default = "/assets/catering-C-WT3ogD.jpg";
function Catering() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "catering",
		className: "bg-background py-24 sm:py-32 lg:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-clay",
							children: "Catering"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-ink mt-6 text-[2.6rem] leading-[0.95] tracking-[-0.02em] sm:text-5xl lg:text-[3.8rem]",
							children: ["Bring Al Badawi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-olive block italic",
								children: "to the table."
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink-soft mt-8 max-w-md text-lg leading-relaxed",
								children: "The kitchen caters events of every size. Order directly through the catering store, or send an inquiry and the team will get back to you."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CATERING_STORE,
									target: "_blank",
									rel: "noreferrer",
									className: "bg-ink text-cream hover:bg-sumac px-8 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors",
									children: "Explore catering"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONTACT_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "border-ink/30 text-ink hover:bg-sand border px-8 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors",
									children: "Inquire"
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: catering_default,
						alt: "A long table laid with trays of rice, roasted meats, salads and stacks of flatbread",
						width: 1920,
						height: 1088,
						loading: "lazy",
						className: "h-[62vw] w-full object-cover sm:h-[32rem] lg:h-[38rem]"
					})
				})]
			})
		})
	});
}
function PressSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "press",
		className: "bg-sand py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-sumac",
				children: "As seen in"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "border-ink/12 mt-8 border-t",
				children: press.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.url,
						target: "_blank",
						rel: "noreferrer",
						className: "border-ink/12 group flex flex-col gap-1 border-b py-6 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-ink group-hover:text-clay text-2xl transition-colors sm:text-3xl",
							children: item.outlet
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-ink-soft flex items-baseline gap-2 text-sm sm:max-w-md sm:text-right",
							children: [item.headline, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 shrink-0 self-center opacity-50" })]
						})]
					})
				}) }, item.url))
			})]
		})
	});
}
function Locations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "locations",
		className: "bg-background py-24 sm:py-32 lg:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-clay",
					children: "Locations"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-ink mt-6 text-[2.6rem] leading-[0.95] tracking-[-0.02em] sm:text-6xl",
					children: ["Two rooms,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-olive italic",
						children: " one table."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-px sm:gap-16 lg:grid-cols-2",
				children: locations.map((loc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-ink/12 flex h-full flex-col border-t pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-ink text-4xl sm:text-5xl",
								children: loc.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-muted-foreground mt-3",
								children: loc.neighborhood
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
								className: "text-ink-soft mt-8 space-y-1 text-lg not-italic",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: loc.addressLine
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: loc.cityLine
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "text-ink-soft mt-8 space-y-1.5 text-sm",
								children: loc.hours.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: loc.phoneHref,
								className: "text-ink hover:text-clay mt-6 inline-block text-lg transition-colors",
								children: loc.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: loc.orderUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "bg-ink text-cream hover:bg-sumac px-6 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors",
										children: "Order"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: loc.reserveUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "border-ink/30 text-ink hover:bg-sand border px-6 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors",
										children: "Reserve"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: loc.mapUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "text-ink-soft hover:text-clay px-1 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase underline underline-offset-4 transition-colors",
										children: "Directions"
									})
								]
							})
						]
					})
				}, loc.name))
			})]
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-ink grain relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mansaf_default,
				alt: "A mansaf platter of lamb, rice and flatbread set for sharing",
				width: 1408,
				height: 1760,
				loading: "lazy",
				className: "absolute inset-0 -z-10 size-full object-cover opacity-45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-ink via-ink/70 to-ink/85 absolute inset-0 -z-10 bg-gradient-to-t" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex min-h-[85svh] max-w-[1440px] flex-col justify-end px-5 py-24 sm:px-8 sm:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-cream text-[15vw] leading-[0.85] tracking-[-0.03em] sm:text-[11vw] lg:text-[9rem]",
						children: ["Come to", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-clay block italic",
							children: "the table."
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: ORDER_BROOKLYN,
								target: "_blank",
								rel: "noreferrer",
								className: "bg-cream text-ink hover:bg-sand px-10 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors",
								children: "Order Online"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#locations",
								className: "border-cream/40 text-cream hover:bg-cream/10 border px-10 py-4 text-center text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-colors",
								children: "Visit Us"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-cream/55 mt-10 text-sm",
							children: locations.map((l) => `${l.addressLine}, ${l.name}`).join("  ·  ")
						})
					})
				]
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-cream/70 border-cream/12 border-t py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-cream text-2xl tracking-[0.28em] uppercase",
							children: "Al\xA0Badawi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm leading-relaxed",
							children: "Palestinian cooking in Brooklyn Heights and on the Upper East Side."
						})]
					}),
					locations.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-cream",
								children: loc.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
								className: "mt-4 space-y-1 text-sm not-italic",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: loc.addressLine
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: loc.cityLine
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1 text-sm",
								children: loc.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: h }, h))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: loc.phoneHref,
								className: "hover:text-clay mt-4 inline-block text-sm transition-colors",
								children: loc.phone
							})
						]
					}, loc.name)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Footer",
						className: "lg:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 text-sm",
							children: [
								{
									label: "Menu",
									href: MENU_URL
								},
								{
									label: "Order Online",
									href: ORDER_BROOKLYN
								},
								{
									label: "Catering",
									href: CATERING_STORE
								},
								{
									label: "Press",
									href: "#press"
								},
								{
									label: "Contact",
									href: CONTACT_URL
								},
								{
									label: "Instagram",
									href: INSTAGRAM
								},
								{
									label: "Facebook",
									href: FACEBOOK
								}
							].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								...link.href.startsWith("#") ? {} : {
									target: "_blank",
									rel: "noreferrer"
								},
								className: "hover:text-clay transition-colors",
								children: link.label
							}) }, link.label))
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-cream/12 mt-14 flex flex-col gap-2 border-t pt-8 text-xs sm:flex-row sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Al Badawi."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-cream/45",
					children: "Unofficial design concept. Information sourced from albadawinyc.com and published press."
				})]
			})]
		})
	});
}
function MobileOrderBar() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > window.innerHeight * .9);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("bg-ink/95 border-cream/12 fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t backdrop-blur-md transition-transform duration-500 sm:hidden", show ? "translate-y-0" : "translate-y-full"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: MENU_URL,
			target: "_blank",
			rel: "noreferrer",
			className: "text-cream py-4 text-center text-[0.72rem] font-semibold tracking-[0.18em] uppercase",
			children: "Menu"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: ORDER_BROOKLYN,
			target: "_blank",
			rel: "noreferrer",
			className: "bg-clay text-cream py-4 text-center text-[0.72rem] font-semibold tracking-[0.18em] uppercase",
			children: "Order Online"
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bread, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Catering, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locations, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileOrderBar, {})
		]
	});
}
//#endregion
export { Index as component };
