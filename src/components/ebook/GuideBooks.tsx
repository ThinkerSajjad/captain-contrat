import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

const guides = [
  {
    image: "/images/guide/create-company/Frame 20 (22).png",
    category: "Create my company",
    title: "Successfully create a company",
    href: "/ebook/guide-pratique-pour-les-createurs-d-entreprise"
  },
  {
    image: "/images/guide/create-company/Frame 20 (20).png",
    category: "Create my company",
    title: "Be aware of assistance for business creation and takeover",
    href: "/ebook/guide-aide-creation-entreprise-et-acquisition"
  },
  {
    image: "/images/guide/create-company/Frame 20 (16).png",
    category: "Create my company",
    title: "Anticipate and control the registration of your company",
    href: "/ebook/guide-creation-entreprise"
  },
  {
    image: "/images/guide/create-company/Frame 20 (15).png",
    category: "Create my company",
    title: "Launch your SCI",
    href: "/ebook/guide-juridique-pour-creer-sci"
  },
  {
    image: "/images/guide/create-company/Frame 20 (14).png",
    category: "Create my company",
    title: "Launch your SAS",
    href: "/ebook/guide-juridique-pour-creer-sas"
  },
  {
    image: "/images/guide/create-company/Frame 20 (19).png",
    category: "Create my company",
    title: "Launch your SASU",
    href: "/ebook/guide-juridique-pour-creer-sasu"
  },
  {
    image: "/images/guide/create-company/Frame 20 (6).png",
    category: "Create my company",
    title: "Launch your EURL",
    href: "/ebook/guide-juridique-pour-creer-eurl"
  },
  {
    image: "/images/guide/create-company/Frame 20 (5).png",
    category: "Create my company",
    title: "Start your micro-business",
    href: "/ebook/guide-juridique-pour-creer-micro-entreprise"
  }
];

export function GuideBooks() {
  return (
    <section className="py-16">
      <PageContainer>
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E293B] mb-12">
          Create my company
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <Link 
              key={index} 
              href={guide.href}
              className="group bg-[#F8FAFC] rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="relative h-[300px] mb-4 overflow-hidden rounded-lg bg-white">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <p className="text-[#F87171] text-sm font-medium">
                  {guide.category}
                </p>
                <h3 className="text-[#1E293B] font-semibold text-lg group-hover:text-[#F87171] transition-colors">
                  {guide.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
} 