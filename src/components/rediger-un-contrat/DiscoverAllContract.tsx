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
      link: "/modifier-son-entreprise/transfert-siege-social"
    },
    {
      title: "General Terms and Conditions",
      description: "Inform your customers of the rules for selling your products and services by writing your T&Cs!",
      link: "/modifier-son-entreprise/changement-d-objet-social"
    },
    {
      title: "Subcontracting contract",
      description: "Define the conditions for subletting your property in a contract drawn up by a lawyer",
      link: "/modifier-son-entreprise/transfert-de-parts"
    },
    {
      title: "General Conditions of Use (GCU)",
      description: "Frame your service's terms of use with lawyer-drafted T&Cs",
      link: "/modifier-son-entreprise/transfert-de-parts"
    },
    {
      title: "Commercial contract",
      description: "Entrust the drafting of your commercial contract to a specialist lawyer",
      link: "/modifier-son-entreprise/transformation-de-la-societe"
    },
    {
      title: "Assignment of copyright",
      description: "Secure your transfer with a contract that sets out the scope of the transfer, its price and the obligations of each party.",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "E-commerce General Terms and Conditions",
      description: "Supervise and secure the commercial relationship with your online customers by having your e-commerce general terms and conditions drawn up",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Service provision contract",
      description: "Determine the scope of the mission to be carried out and the client's expectations in a contract drawn up by a lawyer",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "General conditions of purchase",
      description: "Define the purchasing conditions you wish to impose (payment terms, delivery, etc.)",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "License Agreement",
      description: "Grant a third party the right to use your trademark and set out the terms in a contract drawn up by a lawyer",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Distribution contract",
      description: "Have a distribution contract drawn up by a specialist lawyer",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Professional lease",
      description: "Entrust us with the drafting of your professional lease and start your business with peace of mind",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "General rental conditions",
      description: "Define the rental conditions of a property (object, duration and price) with General Terms and Conditions drawn up by a lawyer",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Legal notices",
      description: "Add the necessary legal notices to your website by generating them with Captain Contrat",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Software transfer",
      description: "Secure your transfer with a contract that sets out the scope of the transfer, its price and the obligations of each party.",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Sublease agreement",
      description: "Define the conditions for subletting your property in a contract drawn up by a lawyer",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "IT service contract",
      description: "Frame your relationship with your partner in a contract drawn up by a lawyer",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Competition rules",
      description: "Formalize the rules of your competition in a document before launching the game!",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Website design contract",
      description: "Are you creating your website? Have your complete and personalized design contract drawn up",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "SaaS Software Contract",
      description: "Grant a third party the right to use your software and set out the terms in a contract drawn up by a lawyer",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Contract for the sale of goods",
      description: "Frame the sale of your property by defining the rules and obligations in a contract",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Terms and Conditions in English",
      description: "Do you have an international clientele? English-language T&Cs are essential.",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Commercial agent contract",
      description: "Frame the mission of your commercial agent by specifying the scope and nature of his mission",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Freelance contract",
      description: "Frame your relationships with your subcontractors in a contract drawn up by a lawyer",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Business contribution contract",
      description: "Have a contract drawn up containing all the essential information such as remuneration, duration, etc.",
      link: "/modifier-son-entreprise/approbation-des-comptes"
    },
    {
      title: "Letter of intent",
      description: "Formalize your negotiations and frame the commercial relationship with a letter of intent",
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