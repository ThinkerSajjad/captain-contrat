import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";

import avisVerifiesLogo from "../../../public/images/hero/avis-verifies-logo.png";
import Mockup from "../../../public/images/expertise-compatable/Group 12-2.png";
import PageContainer from "../layout/PageContainer";

export function Hero() {
  return (
    <section className="relative py-12 bg-primary">
      <PageContainer>
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-gray-600 mb-10">
              <Link
                href="/creer-entreprise"
                className="text-sm hover:underline"
              >
                Company creation
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-sm">Essential legal subscription</span>
            </div>
            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="text-tertiary">
                Grow your business, we handle{" "}
              </span>
              <span className="text-secondary-dark">your legal needs!</span>
            </h1>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold">A team</span> of qualified and
                  experienced
                  <span className="font-semibold ms-1">lawyers</span>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  Legal information in
                  <span className="font-semibold ms-1">
                    less than 24 hours
                  </span>{" "}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  More than
                  <span className="font-semibold ms-1">50 legal documents</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/meetings/rdv-captain-contrat"
                className="bg-secondary-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Contact an Advisor
              </Link>
            </div>

            {/* Reviews */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src={avisVerifiesLogo}
                  alt="Avis Vérifiés"
                  width={80}
                  height={30}
                />
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gray-700 fill-current"
                    />
                  ))}
                  <Star className="w-4 h-4 text-gray-700 fill-current opacity-50" />
                </div>
                <span className="text-gray-700 text-sm">
                  <strong>4.6</strong> (
                  <Link href="#reviews" className="underline">
                    1693 reviews
                  </Link>
                  )
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
