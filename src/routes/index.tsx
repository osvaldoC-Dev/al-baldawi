import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Experience } from "@/components/site/Experience";
import { Signature } from "@/components/site/Signature";
import { Bread } from "@/components/site/Bread";
import { Story } from "@/components/site/Story";
import { Atmosphere } from "@/components/site/Atmosphere";
import { Catering } from "@/components/site/Catering";
import { PressSection } from "@/components/site/PressSection";
import { Locations } from "@/components/site/Locations";
import { FinalCta } from "@/components/site/FinalCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileOrderBar } from "@/components/site/MobileOrderBar";

const title = "Al Badawi — Palestinian Cooking in New York City";
const description =
  "Palestinian home cooking in Brooklyn Heights and on the Upper East Side: bread from the oven, mezze, msakhan and mansaf. Order online, reserve a table or book catering.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      name: "Al Badawi",
      servesCuisine: ["Palestinian", "Levantine", "Middle Eastern"],
      url: "/",
      telephone: "+1-718-689-5888",
      address: {
        "@type": "PostalAddress",
        streetAddress: "151 Atlantic Ave",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        postalCode: "11201",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
          opens: "11:00",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "11:00",
          closes: "23:00",
        },
      ],
      hasMenu: "https://albadawiatlantic.hrpos.heartland.us/menu",
      sameAs: ["https://www.instagram.com/albadawi.nyc/"],
    },
    {
      "@type": "Restaurant",
      name: "Al Badawi — Upper East Side",
      servesCuisine: ["Palestinian", "Levantine", "Middle Eastern"],
      url: "/",
      telephone: "+1-917-388-2868",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1725 2nd Ave",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10128",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
          opens: "10:30",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "10:30",
          closes: "23:00",
        },
      ],
      hasMenu: "https://albadawiues.hrpos.heartland.us/menu",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <Experience />
        <Signature />
        <Bread />
        <Story />
        <Atmosphere />
        <Catering />
        <PressSection />
        <Locations />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileOrderBar />
    </div>
  );
}
