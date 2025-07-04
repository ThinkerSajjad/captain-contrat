import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import SasuLegalGuide from "../../../../public/images/business/sasu/crea-SASU.png";

export function FreeGuides() {
  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-tertiary lg:mb-12 mb-8">
          Deepen your knowledge with our free guides
        </h2>

        <div className="bg-blue-100 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/4 w-full flex justify-center">
            <div className="relative">
              <Image 
                src={SasuLegalGuide} 
                alt="Financial Difficulties Guide" 
                className="object-contain max-h-56"
              />
            </div>
          </div>

          <div className="md:w-3/4 w-full">
            <h3 className="text-2xl lg:text-3xl font-bold text-tertiary mb-4">
              Download our free guide to learn everything about dealing with financial difficulties
            </h3>
            <p className="text-gray-700 mb-6">
              Need to deal with financial difficulties? 
              Captain Contrat can help. It&apos;s simple, easy, and fast.
            </p>
            <Link 
              href="#download-guide" 
              className="inline-block bg-transparent border border-gray-600 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              Receive my guide
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 