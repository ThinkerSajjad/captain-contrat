import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

const lawLinks = [
  // New entries from the DOM with English labels
  {
    label: "Contract Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Association Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Franchise Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Digital Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Intellectual Property Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Labor Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Tax Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Commercial Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Real Estate and Construction Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Litigation",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Competition Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Distressed Companies Law",
    href: "/meetings/rdv-captain-contrat",
  },
  {
    label: "Corporate Law",
    href: "/meetings/rdv-captain-contrat",
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
