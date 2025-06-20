'use client';

import { useState } from "react";
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
  const [showAll, setShowAll] = useState(false);
  
  const services = [
    {
      title: "Dissolution - Radiation",
      description: "Entrust us with the closure of your company. Drafting of documents and management of formalities",
      link: "/modifier-son-entreprise/transfert-siege-social"
    },
    {
      title: "Formal notice for recovery",
      description: "Call on Captain Contrat to draft the formal notice and initiate payment of the amount owed to you.",
      link: "/modifier-son-entreprise/changement-d-objet-social"
    },
    {
      title: "Payment order",
      description: "Call a lawyer to recover your unpaid debts!",
      link: "/modifier-son-entreprise/augmentation-de-capital"
    },
    {
      title: "Injunction to do",
      description: "Call a lawyer to force your service provider to fulfill its obligation",
      link: "/modifier-son-entreprise/transfert-de-parts"
    },
    {
      title: "Summons for unfair competition",
      description: "Stop an act of unfair competition and obtain damages",
      link: "/modifier-son-entreprise/transformation-de-la-societe"
    },
    {
      title: "Assignment for counterfeiting",
      description: "Have you detected counterfeit products? Let us help you!",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Acknowledgment of debt",
      description: "Obtain an acknowledgement of debt and provide proof in case of future disputes",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Managing a company in difficulty",
      description: "We support you in the steps to save your business!",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Management of unpaid debts",
      description: "Call on experts to manage your unpaid bills",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    }
  ];

  const visibleServices = showAll ? services : services.slice(0, 6);
  const hasMoreServices = services.length > 6;

  return (
    <section className="lg:py-16 py-10 bg-white">
      <PageContainer>
        <div className="text-center lg:mb-12 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-tertiary">
          Offers for all entrepreneurs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-6">
          {visibleServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        
        {hasMoreServices && (
          <div className="lg:mt-8 mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors cursor-pointer"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </PageContainer>
    </section>
  );
}