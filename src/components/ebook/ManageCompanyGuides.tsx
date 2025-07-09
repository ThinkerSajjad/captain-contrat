import Link from "next/link";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";

// Import guide covers
import trademarkGuide from "../../../public/images/guide/create-company/Frame 20 (5).png";
import accountsGuide from "../../../public/images/guide/create-company/Frame 20 (6).png";
import gdprGuide from "../../../public/images/guide/create-company/Frame 20 (15).png";
import sharesGuide from "../../../public/images/guide/create-company/Frame 20 (20).png";
import closureGuide from "../../../public/images/guide/create-company/Frame 20 (16).png";
import transformationGuide from "../../../public/images/guide/create-company/Frame 20 (19).png";

const guides = [
  {
    id: "guide-juridique-depot-marque",
    title: "Master trademark filing from A to Z",
    category: "Manage my company",
    image: trademarkGuide,
    href: "/ebook/guide-juridique-depot-marque"
  },
  {
    id: "guide-approbation-comptes",
    title: "Approve and file your accounts with ease",
    category: "Manage my company",
    image: accountsGuide,
    href: "/ebook/guide-approbation-comptes"
  },
  {
    id: "guide-rgpd-entreprises",
    title: "So that the GDPR no longer holds any secrets for you",
    category: "Manage my company",
    image: gdprGuide,
    href: "/ebook/guide-rgpd-entreprises"
  },
  {
    id: "guide-cession-actions-parts-sociales",
    title: "Everything you need to know about the transfer of company shares",
    category: "Manage my company",
    image: sharesGuide,
    href: "/ebook/guide-cession-actions-parts-sociales"
  },
  {
    id: "guide-fermeture-societe",
    title: "Master the closure and deregistration of your business",
    category: "Manage my company",
    image: closureGuide,
    href: "/ebook/guide-fermeture-societe"
  },
  {
    id: "guide-transformation-societe",
    title: "Transform your sole proprietorship or micro-enterprise into a sole proprietorship",
    category: "Manage my company",
    image: transformationGuide,
    href: "/ebook/guide-transformation-societe"
  }
];

export function ManageCompanyGuides() {
  return (
    <section className="py-16">
      <PageContainer>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-tertiary">
          Manage my company
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Download our free guides to help you navigate the complexities of business management, 
          legal compliance, and company operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link 
              href={guide.href} 
              key={guide.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="h-[220px] relative mb-6 bg-[#F8E8FF] rounded-lg">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-purple-600 font-medium px-3 py-1 bg-purple-100 rounded-full">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-tertiary">{guide.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
} 