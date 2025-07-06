import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";

import firstStage from "../../../../public/images/home/business-stages/Lancer votre entreprise_1x.webp";
import secondStage from "../../../../public/images/home/business-stages/Développer votre activité_1x.webp";
import thirdStage from "../../../../public/images/home/business-stages/Gérer votre entreprise_1x.webp";

const stages = [
  {
    title: (
      <>
        <span className="text-accent font-bold">Contract law</span>
      </>
    ),
    description:
      "Contract law governs legal relationships between individuals or businesses when they enter into an agreement (sales contract, service contract, etc.). Contract law can affect both individuals and businesses, but the same rules do not apply in both cases. Drafting commercial contracts is essential for securing business relationships, and it is a contract law attorney who guarantees this protection, which is essential for the development of any commercial activity.",
    image: firstStage,
    imageAlt: "Start your business",
    reverse: false,
  },
  {
    title: (
      <>
        <span className="text-accent font-bold">Intellectual Property Law</span>
      </>
    ),
    description:
      "Intellectual property law aims to protect intellectual creations and regulate the use of works, innovations, or distinctive signs. It is divided into two broad categories: industrial property and copyright. Industrial property includes trademark law, which protects distinctive signs to differentiate products or services; patent law, which covers technical innovations; and design law, which protects the appearance of products. Copyright law applies to literary, artistic, and musical creations, granting the author patrimonial (economic) and moral (personal) rights.",

    image: secondStage,
    imageAlt: "Develop your business",
    reverse: true,
  },
  {
    title: (
      <>
        <span className="text-accent font-bold">Corporate law</span>
      </>
    ),
    description:
      "Corporate law is a branch of law that governs all legal aspects of a company's life, from its creation to its closure. It covers a wide range of areas, including the choice of legal form, financing, changes in management, asset protection, capital transactions, and difficulty management.",
    image: thirdStage,
    imageAlt: "Manage your business",
    reverse: false,
  },
  {
    title: (
      <>
        <span className="text-accent font-bold">CLabor law</span>
      </>
    ),
    description:
      "Employment law encompasses two main branches: labor law and social protection law. It covers both individual and collective labor relations. A lawyer specializing in employment law has extensive training in these areas and practical experience, allowing them to gain a comprehensive understanding of conflicts between employers and employees. However, the lawyer's role is not limited to disputes; they also intervene upstream to help companies comply with the law.",
    image: firstStage,
    imageAlt: "Manage your business",
    reverse: true,
  },
  {
    title: (
      <>
        <span className="text-accent font-bold">Disputes and litigation</span>
      </>
    ),
    description:
      "A litigation lawyer intervenes when disagreements arise between two parties (partners, a client, and a service provider, etc.). They represent their clients before the courts or mediation bodies and ensure that their rights are protected throughout the process. ",
    image: secondStage,
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
                className={`flex flex-col ${
                  idx === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-16`}
              >
                <div className="md:w-2/3 w-full flex flex-col items-start md:items-start">
                  <h3 className="text-2xl md:text-3xl font-bold text-tertiary mb-2 font-crimson">
                    {stage.title}
                  </h3>
                  <p className="text-gray-800 mb-4 text-base md:text-lg mt-5">
                    {stage.description}
                  </p>

                  <button className="bg-[#ef6c77] hover:bg-[#e95360] px-6 font-bold py-3 mt-4 duration-200 cursor-pointer rounded-full text-white">
                    Discover
                  </button>
                </div>

                <div
                  className={`md:w-1/3 w-full flex ${
                    idx % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  } justify-center`}
                >
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
