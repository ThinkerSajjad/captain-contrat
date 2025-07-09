import Link from "next/link";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

// Import guide covers
import businessCreatorGuide from "../../../public/images/guide/create-company/Frame 20 (20).png";
import businessAssistanceGuide from "../../../public/images/guide/create-company/Frame 20 (15).png";
import commercialContractsGuide from "../../../public/images/guide/create-company/Frame 20 (16).png";
import sciGuide from "../../../public/images/guide/create-company/Frame 20 (5).png";
import sasGuide from "../../../public/images/guide/create-company/Frame 20 (6).png";
import sasuGuide from "../../../public/images/guide/create-company/Frame 20 (19).png";

const guides = [
  {
    id: "guide-pratique-pour-les-createurs-d-entreprise",
    title: "Practical guide for business creators",
    description: "A comprehensive guide covering all aspects of business creation, from choosing the right legal structure to registering your company.",
    image: businessCreatorGuide,
    downloadCount: "15,000+"
  },
  {
    id: "guide-aide-creation-entreprise-et-acquisition",
    title: "Guide to assistance for business creation and acquisition",
    description: "Learn about the various forms of assistance available for entrepreneurs starting or acquiring a business.",
    image: businessAssistanceGuide,
    downloadCount: "9,500+"
  },
  {
    id: "guide-legal-contrats-commerciaux",
    title: "Legal Guide to Commercial Contracts",
    description: "Everything you need to know about drafting, negotiating and managing commercial contracts for your business.",
    image: commercialContractsGuide,
    downloadCount: "12,000+"
  },
  {
    id: "guide-juridique-pour-creer-sci",
    title: "Legal guide to creating an SCI",
    description: "A detailed guide on setting up a real estate investment company (SCI) in France, covering legal requirements and tax implications.",
    image: sciGuide,
    downloadCount: "7,800+"
  },
  {
    id: "guide-juridique-pour-creer-sas",
    title: "Legal guide to creating an SAS",
    description: "Everything you need to know about creating a simplified joint-stock company (SAS) in France.",
    image: sasGuide,
    downloadCount: "9,000+"
  },
  {
    id: "guide-juridique-pour-creer-sasu",
    title: "Legal guide to creating a SASU",
    description: "A comprehensive guide to setting up a simplified single-shareholder company (SASU) in France.",
    image: sasuGuide,
    downloadCount: "11,000+"
  }
];

export default function EbooksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <PageContainer>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-[#1E293B]">Free </span>
              <span className="text-[#F87171]">Legal Guides</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Download our free legal guides to help you navigate the complexities of business creation, 
              management, and legal compliance. Written by experts for entrepreneurs.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link 
                href={`/ebook/${guide.id}`} 
                key={guide.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="h-[200px] relative mb-6">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.downloadCount} downloads</span>
                    <span className="text-[#F87171] font-medium">Get for free →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Why Choose Our Guides */}
      <section className="bg-gray-50 py-16">
        <PageContainer>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Why choose our guides?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Expert Authors</h3>
              <p className="text-gray-600">
                All our guides are written by legal professionals with extensive experience in their fields.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Up-to-Date Information</h3>
              <p className="text-gray-600">
                Our content is regularly updated to reflect the latest legal changes and regulations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Practical Advice</h3>
              <p className="text-gray-600">
                Beyond theory, our guides provide actionable steps and practical examples you can apply immediately.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <StartBusinessSection />
    </div>
  );
} 