import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import bookCover from "../../../../public/images/guide/create-company/Frame 20 (19).png";

export function GuideContent() {
  const guideContents = [
    "Understanding different business structures",
    "Benefits of transforming your business entity",
    "Step-by-step transformation process",
    "Legal and administrative requirements",
    "Tax implications and optimization strategies",
    "Accounting considerations during transition",
    "Post-transformation obligations and formalities"
  ];

  return (
    <section className="py-16">
      <PageContainer>
        <div className="flex flex-col lg:flex-row justify-center w-full items-center gap-16 lg:gap-24">
          {/* Left side - Guide Image */}
          <div className="relative">
            <div className="relative">
              <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-[#F8E8FF] rounded-full opacity-50" />
              <Image
                src={bookCover}
                alt="Business Transformation Guide"
                className="relative z-10 max-h-[400px] lg:max-h-[500px] object-contain"
              />
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#F8E8FF] rounded-full opacity-30" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              <span className="inline-block border-b-2 border-[#9333EA]">
                Included in the guide
              </span>
            </h2>

            <ol className="space-y-4 mb-8">
              {guideContents.map((content, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-[#9333EA] font-semibold">{index + 1}.</span>
                  <span className="text-gray-700">{content}</span>
                </li>
              ))}
            </ol>

            <Link
              href="#"
              className="inline-block bg-[#9333EA] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Get the guide for free
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 