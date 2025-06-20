'use client';

import Link from "next/link";
import PageContainer from "../layout/PageContainer";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white lg:p-8 p-4 rounded-lg shadow-sm flex flex-col h-full">
      <h3 className="text-xl lg:text-3xl font-bold text-tertiary mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="text-right">
        <Link 
          href={link} 
          className="text-red-500 font-semibold inline-flex items-center group"
        >
          To start up <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}

export function OffersForEnterprenuers() {
  const services = [
    {
      title: "Transfer of head office",
      description: "Change the address of your head office: we will complete the formalities and you will receive your amended Kbis",
      link: "/modifier-son-entreprise/transfert-siege-social"
    },
    {
      title: "Change of leadership",
      description: "Appoint, revoke or change a manager: we complete the formalities and you will receive your amended Kbis",
      link: "/modifier-son-entreprise/changement-d-objet-social"
    },
    {
      title: "Capital increase",
      description: "Our partner lawyers support you throughout the procedure",
      link: "/modifier-son-entreprise/augmentation-de-capital"
    },
    {
      title: "Transfer of shares",
      description: "Our partner lawyers draw up your deed and we take care of the transfer formalities",
      link: "/modifier-son-entreprise/transfert-de-parts"
    },
    {
      title: "Amendment of statutes",
      description: "We amend your articles of association and complete the necessary formalities. You will receive your amended Kbis!",
      link: "/modifier-son-entreprise/transformation-de-la-societe"
    },
    {
      title: "Approval of accounts",
      description: "Approve your accounts and have them filed with the registry within 6 months of the end of your financial year",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    }
  ];

  return (
    <section className="lg:py-16 py-10 bg-white">
      <PageContainer>
        <div className="text-center lg:mb-12 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-tertiary">
          Offers for all entrepreneurs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
} 