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

export function DiscoverAllContract() {
  const [showAll, setShowAll] = useState(false);
  
  const services = [
    {
      title: "Commercial lease",
      description: "Drafting of your commercial lease by one of our partner lawyers",
      link: "/rediger-un-contrat/redaction-bail-commercial"
    },
    {
      title: "General Condition of Sale",
      description: "Inform your customers of the rules for selling your products and services by writing your T&Cs!",
      link: "/rediger-un-contrat/rediger-conditions-generales-de-vente"
    },
    {
      title: "Subcontracting contract",
      description: "Define the conditions for subletting your property in a contract drawn up by a lawyer",
      link: "/rediger-un-contrat/rediger-contrat-sous-traitance"
    },
    {
      title: "General Conditions of Use (GCU)",
      description: "Frame your service's terms of use with lawyer-drafted T&Cs",
      link: "/rediger-un-contrat/rediger-cgu"
    },
    {
      title: "Commercial contract",
      description: "Entrust the drafting of your commercial contract to a specialist lawyer",
      link: "/rediger-un-contrat/rediger-contrat-commercial"
    },
    {
      title: "E-commerce General Terms and Conditions",
      description: "Supervise and secure the commercial relationship with your online customers by having your e-commerce general terms and conditions drawn up",
      link: "/rediger-un-contrat/rediger-conditions-generales-de-vente"
    },
    {
      title: "Service provision contract",
      description: "Determine the scope of the mission to be carried out and the client's expectations in a contract drawn up by a lawyer",
      link: "/rediger-un-contrat/rediger-contrat-de-prestation-de-services"
    },
    {
      title: "General conditions of Rental",
      description: "Define the purchasing conditions you wish to impose (payment terms, delivery, etc.)",
      link: "/rediger-un-contrat/rediger-conditions-generales-location"
    },
    {
      title: "Professional lease",
      description: "Entrust us with the drafting of your professional lease and start your business with peace of mind",
      link: "/rediger-un-contrat/redaction-bail-commercial"
    },
    {
      title: "General rental conditions",
      description: "Define the rental conditions of a property (object, duration and price) with General Terms and Conditions drawn up by a lawyer",
      link: "/rediger-un-contrat/rediger-conditions-generales-location"
    },
    {
      title: "Freelance contract",
      description: "Frame your relationships with your subcontractors in a contract drawn up by a lawyer",
      link: "/rediger-un-contrat/rediger-contrat-freelance"
    },
    {
      title: "Permanent contract",
      description: "Have a permanent contract drawn up by a lawyer",
      link: "/rediger-un-contrat/rediger-contrat-travail-indetermine"
    },
    {
      title: "Essential support",
      description: "Formalize your business relationships with a lawyer",
      link: "/abonnement-juridique-essentiel"
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
              link={service.link || ""}
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