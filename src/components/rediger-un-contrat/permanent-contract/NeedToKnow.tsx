import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import NeedToKnowImage from "../../../../public/images/business/eurl/Créateur entreprise.png";

export function NeedToKnow() {
  return (
    <section className="py-10 md:py-16 lg:px-10 px-0">
      <PageContainer>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 lg:mb-12 mb-8">
          The CDI: a secure contract for your employees
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mx-auto">
          <div className="">
            <Image
              src={NeedToKnowImage}
              alt="Entrepreneur creating an EURL"
              className="rounded-lg w-auto object-contain h-auto min-w-sm"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                What is a permanent contract?
              </h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
                CDI stands for Permanent Contract . It is a contract without a
                time limit , but it is obviously not a permanent commitment,
                since either party can terminate it under certain conditions. In
                France, the CDI is the normal and general form of employment
                contract between an employer and an employee. The CDI can be
                full-time or part-time.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                Why write a permanent contract?
              </h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
                A permanent contract is drawn up when a company wishes to
                integrate a new member into its team for an indefinite period.
                Drawing up a written contract is not mandatory (except for
                intermittent permanent contracts). However, drafting the
                contract and having it signed by both parties is widely
                recommended for the obvious protection of both the employee and
                the employer .
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
