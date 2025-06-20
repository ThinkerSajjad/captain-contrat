'use client';

import Image from "next/image";
import PageContainer from "../layout/PageContainer";

// Import partner logos
import captainContratLogo from "../../../public/images/partners/logo-captain.png";
import qontoLogo from "../../../public/images/partners/Qonto-Logo_Black.png";
import kandbazLogo from "../../../public/images/partners/logo-kandbaz.png";
import keobizLogo from "../../../public/images/partners/Keobiz 1.png";
import payfitLogo from "../../../public/images/partners/Logo Payfit 2.png";

const partners = [
  {
    name: "Captain Contrat",
    logo: captainContratLogo,
    description: "Create my company",
  },
  {
    name: "Qonto",
    logo: qontoLogo,
    description: "Open my pro account",
  },
  {
    name: "Kandbaz",
    logo: kandbazLogo,
    description: "Domicile my company",
  },
  {
    name: "Keobiz",
    logo: keobizLogo,
    description: "Manage my accounting",
  },
  {
    name: "PayFit",
    logo: payfitLogo,
    description: "Manage my employees",
  }
];

export function TrustOurPartners() {
  return (
    <section className="py-10 bg-white">
      <PageContainer>
        <div className="">
            <div className="text-center lg:mb-10 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-tertiary">
                Trust our partners to simplify your life
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 p-6 rounded-lg shadow-lg">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-40 md:w-48 group"
                >
                  <div className="h-16 flex items-center justify-center lg:mb-4 mb-3">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-20 w-auto object-contain transition-transform group-hover:scale-105"
            
                    />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">{partner.description}</p>
                </div>
              ))}
            </div>
        </div>
      </PageContainer>
    </section>
  );
} 