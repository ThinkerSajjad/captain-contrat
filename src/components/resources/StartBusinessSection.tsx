'use client';

import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export function StartBusinessSection() {
  return (
    <section className=" py-16">
      <PageContainer>
        <div className="text-center p-6 rounded-xl mx-auto bg-red-50">
          <h2 className="text-3xl lg:text-4xl font-bold text-tertiary mb-6">
            Ready to start your business?
          </h2>
          <p className="text-tertiary opacity-90 text-lg mb-8">
            Get personalized assistance from our legal experts to create your company 
            with confidence and peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/creer-entreprise"
              className="bg-secondary-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Create my business
            </Link>
            <Link
              href="/meetings/rdv-captain-contrat"
              className="bg-transparent text-tertiary border-2 border-tertiary px-8 py-3 rounded-full font-semibold  transition-all"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 