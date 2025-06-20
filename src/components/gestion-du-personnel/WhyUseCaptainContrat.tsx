'use client';

import PageContainer from "../layout/PageContainer";
import { CaptainContratBenifit } from "../common/CaptainContratBenifit";

export function WhyUseCaptainContrat() {
  return (
    <section className="lg:py-16 py-10 bg-white">
      <PageContainer>
          <div className="mx-auto">
            <div className="text-center lg:mb-12 mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tertiary lg:mb-4 mb-3">
              Why choose Captain Contrat?
              </h2>
              <p className="lg:text-xl text-lg text-gray-600">
              30,000 entrepreneurs already trust us every day
              </p>
            </div>
            <CaptainContratBenifit />
          </div>
      </PageContainer>
    </section>
  );
} 