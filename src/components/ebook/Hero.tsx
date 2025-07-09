import Image from "next/image";

import Mockup from "../../../public/images/guide/Image header ebook.png";
import PageContainer from "@/components/layout/PageContainer";

export function Hero() {
  return (
    <section className="relative py-12 bg-primary">
      <PageContainer>
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          <div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 max-w-3xl">
              <span className="text-secondary-dark">
              Captain Contrat 
              </span>
              <span className="text-tertiary">guides </span>
            </h1>
            <p className="text-gray-800 mb-4 lg:text-lg text-base">
              Obtain a reliable document quickly and easily. Our experts are on
              hand to help you complete it.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                Guides on business creation and management
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                Written and updated by our team of lawyers
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                Free download
                </p>
              </div>
            </div>

            
          </div>

          {/* Image */}
          <div className="relative lg:w-fit w-full flex justify-center">
            <Image
              src={Mockup}
              alt="SAS creation on mobile"
              className="lg:w-auto w-[90%] md:w-[60%] h-auto max-h-[80%]"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
