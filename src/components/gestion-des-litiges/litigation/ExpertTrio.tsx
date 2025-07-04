import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

const experts = [
  {
    name: "Mr. Dubreux",
    role: "Commercial law and corporate law",
    title: "Commercial law and corporate law",
    description:
      "Our team includes lawyers specializing in all areas of business law (commerce, contracts, labor, intellectual property, etc.).",
    img: "/images/home/Tiphaine - Avocat_1x.webp",
    button: { label: "Consult a lawyer", href: "#" },
  },
  {
    name: "Bilal S.",
    role: "Labor law",
    title: "Labor law",
    description:
      "Our lawyers, specialized in business law, manage the administrative procedures for you (creation, modification of statutes, closure, etc.).",
    img: "/images/home/Bilal - Juriste_1x.webp",
    button: { label: "See all the procedures", href: "#" },
  },
  {
    name: "Ines L.",
    role: "Commercial law and corporate law",
    title: "Commercial law and corporate law",
    description:
      "Members of the Order of Lawyers, they advise you and help you manage your company (tax optimization, management of obligations, etc.).",
    img: "/images/home/Ines.png",
    button: { label: "Entrust my accounting", href: "#" },
  },
];

export function ExpertTrio() {
  return (
    <PageContainer>
        <section className="w-full flex justify-center items-center lg:py-16 py-10 bg-transparent">
          <div className="w-full rounded-2xl bg-tertiary px-4 xl:px-16 lg:px-8 py-10 lg:py-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary font-crimson text-center mb-12">
            Meet our team of lawyers
            </h2>
            <div className="w-full flex lg:gap-8 gap-6 overflow-x-auto md:overflow-x-auto lg:overflow-x-visible lg:grid lg:grid-cols-3 scrollbar-hide">
              {experts.map((expert, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 min-w-[320px] max-w-xs flex flex-col items-center bg-[#f8ecdf] rounded-2xl px-6 py-8 shadow-md lg:min-w-0 lg:max-w-none"
                >
                  <div className="w-full flex flex-col items-center lg:mb-6 mb-4">
                    <div className="relative xl:w-80 xl:h-80 w-60 h-60 rounded-xl overflow-hidden lg:mb-4 mb-2">
                      <Image
                        src={expert.img}
                        alt={expert.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white text-center py-2 px-2 text-sm">
                        <div className="font-semibold">{expert.name}</div>
                        <div className="text-xs">{expert.role}</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center flex-1">
                    <div className="text-xl font-crimson font-semibold text-[#1d3d5d] mb-2 text-center">{expert.title}</div>
                    <div className="text-gray-700 text-base lg:mb-6 mb-4 text-center">{expert.description}</div>
                    <Link
                      href="/meetings/rdv-captain-contrat"
                      className="mt-auto inline-flex items-center justify-center border border-[#1d3d5d] rounded-full px-6 py-2 text-[#1d3d5d] font-semibold hover:bg-[#1d3d5d] hover:text-white transition-colors text-base"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </PageContainer>
  );
} 