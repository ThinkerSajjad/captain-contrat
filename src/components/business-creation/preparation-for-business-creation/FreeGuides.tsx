import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import LegalGuide from "../../../../public/images/business/micro-business/crea-micro-389x485px.png";

const guidesData = [
  {
    category: "Create my company",
    title: "Practical guide for business creators",
    imageUrl: LegalGuide,
    href: "/ebook/guide-pratique-pour-les-createurs-d-entreprise",
  },
  {
    category: "Create my company",
    title: "Assistance for business creation and takeover",
    imageUrl: LegalGuide,
    href: "/ebook/guide-aide-creation-entreprise-et-acquisition",
  },
  {
    category: "Create my company",
    title: "Guide to executive compensation",
    imageUrl: LegalGuide,
    href: "/ebook/guide-remuneration-directeurs-administrateurs",
  },
];

export function FreeGuides() {
  return (
    <section className="lg:py-20 py-10 bg-lightPrimary">
      <PageContainer>
        <div className="text-center lg:mb-16 mb-8">
          <h2 className="lg:text-5xl text-3xl font-bold text-tertiary font-crimson">
            Essential content to make your business project a success
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6">
          {guidesData.map((guide, index) => (
            <Link href={guide.href} key={index} className="block group text-center">
              <div className="bg-white rounded-2xl p-2 shadow-sm hover:shadow-lg transition-shadow duration-300 inline-block">
                <div className="relative bg-lightPrimary rounded-lg px-3 pt-4 pb-3 overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute w-24 h-24 bg-[#e6f0ff] rounded-full -top-10 -left-10" />
                  <div className="absolute w-6 h-6 bg-blue-200 rounded-full top-2 right-16" />
                  <div className="absolute w-12 h-12 bg-blue-200 rounded-full -bottom-6 -right-2 transform rotate-45" />

                  <Image
                    src={guide.imageUrl}
                    alt={guide.title}
                    className="relative z-10 w-full h-auto transform group-hover:scale-105 transition-transform duration-300 lg:w-full min-w-[230px] lg:h-auto"
                  />
                </div>
              </div>

              <div className="mt-6 px-2">
                <p className="text-sm text-gray-500">{guide.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-800">{guide.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
} 