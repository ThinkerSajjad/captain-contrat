import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

const lawLinks = [
  // New entries from the DOM with English labels
  {
    label: "Contract Law",
    href: "/avocat/droit-contrats",
  },
  {
    label: "Association Law",
    href: "/avocat/droit-associations",
  },
  {
    label: "Franchise Law",
    href: "/avocat/droit-franchise",
  },
  {
    label: "Digital Law",
    href: "/avocat/droit-internet-technologies",
  },
  {
    label: "Intellectual Property Law",
    href: "/avocat/droit-propriete-intellectuelle",
  },
  {
    label: "Labor Law",
    href: "/avocat/droit-travail",
  },
  {
    label: "Tax Law",
    href: "/avocat/droit-fiscal",
  },
  {
    label: "Commercial Law",
    href: "/avocat/droit-commercial",
  },
  {
    label: "Real Estate and Construction Law",
    href: "/avocat/droit-immobilier-construction",
  },
  {
    label: "Litigation",
    href: "/avocat/contentieux",
  },
  {
    label: "Competition Law",
    href: "/avocat/droit-concurrence",
  },
  {
    label: "Distressed Companies Law",
    href: "/avocat/entreprises-difficultes",
  },
  {
    label: "Corporate Law",
    href: "/avocat/droit-societes",
  },
];

export function LawCategories() {
  return (
    <section className="w-full py-12 bg-white">
      <PageContainer>
        <div className="xl:px-24 px-0 mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-tertiary font-crimson mb-10">
            All our support in business law
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8 w-full">
            {lawLinks.map((lawLink) => (
              <Link
                key={lawLink.label}
                href={lawLink.href}
                className="border border-tertiary rounded-full  w-full lg:w-fit text-center px-8 py-3 text-tertiary font-semibold text-base hover:bg-tertiary hover:text-white transition-colors whitespace-nowrap"
              >
                {lawLink.label}
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="text-tertiary text-lg font-medium hover:underline mt-2"
          >
            See the entire blog
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
