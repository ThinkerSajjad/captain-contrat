import Image from "next/image";
import Link from "next/link";
import PageContainer from "../layout/PageContainer";

import firstStage from "../../../public/images/home/business-stages/Lancer votre entreprise_1x.webp";
import secondStage from "../../../public/images/home/business-stages/Développer votre activité_1x.webp";
import thirdStage from "../../../public/images/home/business-stages/Gérer votre entreprise_1x.webp";


const stages = [
  {
    title: (
      <>
        To <span className="text-accent font-bold">start</span> your business
      </>
    ),
    description:
      "Bring your project to life, and together we'll bring it to life. Let us handle all your administrative paperwork so you can start your business with peace of mind. And that's just the beginning!",
    tags: [
      { label: "SAS", href: "/services/sas" },
      { label: "SASU", href: "#" },
      { label: "SARL", href: "#" },
      { label: "EURL", href: "#" },
      { label: "Micro-enterprise", href: "#" },
      { label: "SCI", href: "#" },
    ],
    image: firstStage,
    imageAlt: "Start your business",
    reverse: false,
  },
  {
    title: (
      <>
        To <span className="text-accent font-bold">develop</span> your business
      </>
    ),
    description:
      "Whether you're a freelancer, manager, or startupper, we help you secure your business relationships, manage your employees, and adapt your statutes to support the smooth growth of your business.",
    tags: [
      { label: "General Conditions of Sale (GCS)", href: "#" },
      { label: "Service provision contract", href: "#" },
      { label: "CDI", href: "#" },
      { label: "Commercial lease", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    image: secondStage,
    imageAlt: "Develop your business",
    reverse: true,
  },
  {
    title: (
      <>
        To <span className="text-accent font-bold">manage</span> your business
      </>
    ),
    description:
      "Relieve yourself of all your administrative and legal obligations as a manager by entrusting them to our specialized legal experts and attorneys.",
    tags: [
      { label: "Approval of accounts", href: "#" },
      { label: "Transfer of registered office", href: "#" },
      { label: "Closing", href: "#" },
      { label: "Find a lawyer", href: "#" },
      { label: "Statutory amendments", href: "#" },
      { label: "Accounting management", href: "#" },
    ],
    image: thirdStage,
    imageAlt: "Manage your business",
    reverse: false,
  },
];

export function BusinessStages() {
  return (
    <section className="w-full lg:py-16 py-10 bg-lightPrimary">
      <PageContainer>
          <div className="mx-auto px-4 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-tertiary font-crimson lg:mb-16 mb-10">
              By your side, at every stage of your business
            </h2>
            <div className="flex flex-col gap-16 lg:gap-20 w-full">
              {stages.map((stage, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${idx === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16`}
                >
                  
                  <div className="md:w-2/3 w-full flex flex-col items-start md:items-start">
                    <h3 className="text-2xl md:text-3xl font-bold text-tertiary mb-2 font-crimson">
                      {stage.title}
                    </h3>
                    <p className="text-gray-800 mb-4 text-base md:text-lg">
                      {stage.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2 w-full">
                      {stage.tags.map((tag) => (
                        <Link
                          key={tag.label}
                          href={tag.href}
                          className="border border-tertiary rounded-full px-4 py-3 text-tertiary bg-transparent text-base font-semibold hover:shadow-lg transition-colors cursor-pointer block w-full text-center md:inline md:w-auto"
                        >
                          {tag.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className={`md:w-1/3 w-full flex ${idx % 2 === 1 ? "md:justify-start" : "md:justify-end"} justify-center`}>
                    <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-md">
                      <Image
                        src={stage.image}
                        alt={stage.imageAlt}
                        className="object-cover w-full h-72"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </PageContainer>
    </section>
  );
} 