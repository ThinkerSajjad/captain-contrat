import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";

import avisVerifiesLogo from "../../../../public/images/hero/avis-verifies-logo.png";
import Mockup from "../../../../public/images/modify-business/transfer-office/img+mock-up-hors_crea_3-desktop.png";
import PageContainer from "@/components/layout/PageContainer";

export function Hero() {
  return (
    <section className="relative py-12 bg-primary">
      <PageContainer>

        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600 mb-10">
          <Link href="/gestion-du-personnel" className="text-sm hover:underline">
            Manage my employees
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-sm">Mutual termination</span>
        </div>
            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-tertiary">Make a  </span>
              <span className="text-secondary-dark">mutual termination agreement </span>
              <span className="text-tertiary"> online</span>
            </h1>
            <p className="text-gray-700 mb-8 lg:text-lg text-base">A fixed-price service provided by a specialist lawyer and facilitated by our 100% online platform.</p>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold">Benefit from a platform </span> and personalized support
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold">Your file is validated </span> and sent in less than 24 hours
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold">Take advantage of packages </span> tailored to your needs and without hidden costs
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/funnel/service_choices/1?source=%2Fgestion-du-personnel%2Fprocedure-rupture-conventionnelle" className="bg-secondary-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Proceed with a dismissal
              </Link>
              <Link href="/meetings/rdv-captain-contrat" className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all">
                Contact a coach
              </Link>
            </div>

            {/* Reviews */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <Image src={avisVerifiesLogo} alt="Avis Vérifiés" width={80} height={30} />
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 text-gray-700 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-gray-700 fill-current opacity-50" />
                </div>
                <span className="text-gray-700 text-sm">
                  <strong>4.6</strong> (<Link href="#reviews" className="underline">1693 reviews</Link>)
                </span>
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