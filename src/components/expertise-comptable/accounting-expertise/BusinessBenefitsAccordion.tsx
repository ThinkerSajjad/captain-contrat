"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

import teamExperts from "../../../../public/images/modify-business/Équipe dispo.gif";
import onlineProcess from "../../../../public/images/modify-business/En ligne.gif";
import transparentPrices from "../../../../public/images/modify-business/Tarifs.gif";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div
      className={`border-l-4 ${
        isOpen ? "border-red-500" : "border-gray-200"
      } transition-all duration-300 cursor-pointer`}
      onClick={onClick}
    >
      <div className="py-6 pl-6 pr-4 flex justify-between items-center">
        <h3
          className={`text-xl lg:text-2xl font-semibold ${
            isOpen ? "text-red-500" : "text-tertiary"
          }`}
        >
          {title}
        </h3>
        <div className={`${isOpen ? "text-red-500" : "text-gray-400"}`}>
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
      title: "Experienced accountants",
      content:
        "Having become a subsidiary of implid in 2023, Captain Contrat draws on the 50 years of experience of the group's network of chartered accountants to offer you the best support.",
      image: teamExperts,
    },
    {
      title: "Intuitive and comprehensive management software",
      content:
        "By subscribing to one of our accounting plans, you have an account with Pennylane, the all-in-one financial management and accounting platform. .",
      image: onlineProcess,
    },
    {
      title: "Affordable prices and a controlled budget",
      content:
        "As our founders are entrepreneurs themselves, our packages have been designed to offer you the best support at an affordable price. You benefit from a price adapted to your situation. ",
      image: transparentPrices,
    },
    {
      title: "Compliance",
      content:
        "With Captain Contrat, you can move forward with complete security: your accounting and legal documents comply with the latest legal requirements. No risk of errors!",
      image: onlineProcess,
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-tertiary">
            You&apos;re in good hands. So is your project.
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
                  index === openIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
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
      </PageContainer>
    </section>
  );
}
