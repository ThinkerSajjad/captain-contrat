'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';

import teamExperts from "../../../../public/images/modify-business/Équipe dispo.gif";
import onlineProcess from "../../../../public/images/modify-business/En ligne.gif";
import transparentPrices from "../../../../public/images/modify-business/Tarifs.gif";
import Link from 'next/link';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div 
      className={`border-l-4 ${isOpen ? 'border-red-500' : 'border-gray-200'} transition-all duration-300 cursor-pointer`}
      onClick={onClick}
    >
      <div className="py-6 pl-6 pr-4 flex justify-between items-center">
        <h3 className={`text-xl lg:text-2xl font-semibold ${isOpen ? 'text-red-500' : 'text-tertiary'}`}>
          {title}
        </h3>
        <div className={`${isOpen ? 'text-red-500' : 'text-gray-400'}`}>
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>
      
      {isOpen && (
        <div className="pl-6 pr-4 pb-6">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
};

export function BusinessBenefitsAccordion() {
  const [openIndex, setOpenIndex] = useState(1); // Default to second item open
  
  const accordionItems = [
    {
      title: "Fair and transparent prices",
      content: "Our various support packages adapt to your needs and budget, for a service with no hidden costs.",
      image: teamExperts
    },
    {
      title: "An online process, 100% secure",
      content: "Online forms, remote exchanges with our lawyers and electronic signature: gain efficiency at every stage of your project.",
      image: onlineProcess
    },
    {
      title: "An attentive and available team",
      content: "By phone, message or video, our specialized lawyers respond to you at any time during your project, with unlimited access. ",
      image: transparentPrices
    },
    {
      title: "A network of trusted partners",
      content: "For comprehensive support, we have selected reliable partners: lawyers, accountants, online banking, etc.",
      image: teamExperts
    }
  ];

  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-16 bg-lightPrimary">
      <PageContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-tertiary">
          Your project is in good hands
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={index === openIndex}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          
          <div className="w-full lg:w-1/2 relative h-80 lg:h-96">
            {accordionItems.map((item, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === openIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  unoptimized
                  className="object-contain w-full h-full"
                  priority={index === openIndex}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/meetings/rdv-captain-contrat" className="bg-secondary-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all lg:mt-10 mt-5 ">
            Make an appointment
          </Link>
        </div>
      </PageContainer>
    </section>
  );
} 