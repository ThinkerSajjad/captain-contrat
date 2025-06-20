'use client';

import PageContainer from '../layout/PageContainer';
import { PlatformBenifits } from '../common/PlatformBenifits';


export function OnlinePlatformBenefits() {
  return (
    <section className="lg:py-16 py-10 bg-lightPrimary">
      <PageContainer>
        <div className="text-center lg:mb-12 mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-tertiary">
          Manage your disputes online via your entrepreneur space
          </h2>
        </div>

        <PlatformBenifits />
      </PageContainer>
    </section>
  );
} 