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

export function ReadyToStart() {
  const services = [
    {
      title: "Trademark filing",
      description: "Register your trademark with the INPI to protect it and use it with peace of mind.",
      link: "/proteger-sa-societe/trademark-filing"
    },
    {
      title: "Confidentiality Agreement",
      description: "Protecting the confidentiality of your information during negotiations with a client or partner",
      link: "/rediger-un-contrat/rediger-contrat-commercial"
    },
    {
      title: "Filing of designs and models",
      description: "Protect your creations against counterfeiting. Our partner lawyers register them with the INPI (French Intellectual Property Institute).",
      link: "/proteger-sa-societe"
    },
    {
      title: "Legal support for GDPR",
      description: "Benefit from the expertise of one of our partner lawyers to ensure your compliance with the GDPR",
      link: "/avocat/avocat-droit-des-affaires"
    },
    {
      title: "Prior art search",
      description: "When you want to register a trademark for use, it is essential to first verify that the trademark is available. You will need to conduct a prior art search, also known as an availability search.",
      link: "/proteger-sa-societe/prior-art-search"
    },
    {
      title: "GDPR Privacy Policy",
      description: "Have a privacy policy written for your company to comply with GDPR rules",
      link: "/proteger-sa-societe/rediger-politique-confidentialite"
    }
  ];

  return (
    <section className="lg:py-16 py-8 bg-white">
      <PageContainer>
        <div className="text-center lg:mb-12 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-tertiary">
            Are you ready?
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