'use client';

import Link from "next/link";
import PageContainer from "../layout/PageContainer";
import { useState } from "react";

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
      title: "CDI",
      description: "Our specialist labor law attorneys will advise you and draft your permanent employment contract with the essential information.",
      link: "/modifier-son-entreprise/transfert-siege-social"
    },
    {
      title: "Dismissal procedure",
      description: "Be sure to respect the dismissal procedure by calling on a partner lawyer",
      link: "/modifier-son-entreprise/changement-d-objet-social"
    },
    {
      title: "Internal regulations",
      description: "Specify the obligations that the employee and the employer are required to respect on the company premises",
      link: "/modifier-son-entreprise/augmentation-de-capital"
    },
    {
      title: "Fixed-term contract",
      description: "Our specialist labor law attorneys will advise you and draft your fixed-term contract with the essential information.",
      link: "/modifier-son-entreprise/transfert-de-parts"
    },
    {
      title: "Conventional termination",
      description: "Separate yourself from your employee calmly by respecting the deadlines and obtaining the necessary documents",
      link: "/modifier-son-entreprise/transformation-de-la-societe"
    },
    {
      title: "Trial period renewal letter",
      description: "Renew your employee's trial period by respecting the necessary formalities with the renewal letter",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Trial period renewal letter",
      description: "Renew your employee's trial period by respecting the necessary formalities with the renewal letter",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    
    
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