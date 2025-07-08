import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import lawyerIcon from "../../../../public/images/common/business-support-icons/ca.svg";
import updateIcon from "../../../../public/images/common/business-support-icons/capital-deposit.png";
import downloadIcon from "../../../../public/images/common/business-support-icons/domiciliation.svg";
import readIcon from "../../../../public/images/common/business-support-icons/trademark-filling.svg";
import authorImage from "../../../../public/images/home/fixepng0.webp";

const features = [
  {
    icon: lawyerIcon,
    title: "Written by corporate law experts"
  },
  {
    icon: downloadIcon,
    title: "Updated with latest regulations"
  },
  {
    icon: updateIcon,
    title: "Downloaded by over 7,500 businesses"
  },
  {
    icon: readIcon,
    title: "Includes document templates"
  }
];

export function GuideFeatures() {
  return (
    <section className="lg:py-16 py-8">
      <PageContainer>
        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:mb-16 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                className="mb-4 max-h-[48px] object-contain"
              />
              <p className="text-gray-700 font-medium">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Author Section */}
        <div className="mt-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center lg:mb-12 mb-8">
            About the author
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 max-w-3xl mx-auto">
            <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
              <Image
                src={authorImage}
                alt="François Martin"
                fill
                className="max-h-[200px] object-contain"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">François Martin</h3>
              <p className="text-gray-500 mb-4">Corporate Transactions Specialist</p>
              <p className="text-gray-700">
                François Martin specializes in corporate transactions with over 15 years of 
                experience in mergers, acquisitions, and share transfers. He has advised on 
                hundreds of transactions for businesses of all sizes. His expertise covers 
                transaction structuring, tax optimization, and regulatory compliance for 
                various company types. He is a frequent speaker at business conferences and 
                contributes to leading publications on corporate law and transactions.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 