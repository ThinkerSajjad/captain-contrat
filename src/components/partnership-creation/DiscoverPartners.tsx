import Image from "next/image"
import PageContainer from "@/components/layout/PageContainer"
import { Check } from "lucide-react"
import Qonto from "../../../public/images/partners/Group 5 (1).png"
import Kandbaz from "../../../public/images/partners/LP-Partenaires_Kandbaz.png"
import PayFit from "../../../public/images/partners/LP partenaires - Payfit.png"
import Simplébo from "../../../public/images/partners/frame_1.webp"
import Olino from "../../../public/images/partners/Group 10-1.png"

// logos
import QontoLogo from "../../../public/images/partners/Qonto-Logo_Black.png"
import KandbazLogo from "../../../public/images/partners/logo-kandbaz.png"
import PayFitLogo from "../../../public/images/partners/Logo Payfit 2.png"
import SimpléboLogo from "../../../public/images/partners/logo-captain.png"
import OlinoLogo from "../../../public/images/partners/Keobiz 1.png"
import Link from "next/link"

const partnersData = [
  {
    id: 1,
    name: "Qonto",
    logo: QontoLogo,
    features: [
      "1 month free then from €9 excluding VAT / month",
      "100% online capital deposit",
      "Digital deposit certificate within 12 working hours",
      "Free and no-obligation connection",
    ],
    ctaText: "Be called back to be put in touch with Qonto",
    screenshot: Qonto,
  },
  {
    id: 2,
    name: "Kandbaz",
    logo: KandbazLogo,
    features: [
      "Domicile your business anywhere in France",
      "In just 3 minutes, 100% online",
      "Protect your privacy with their address",
      "Free and no-obligation connection",
      "1 month free for Captain Contrat customers",
    ],
    ctaText: "Be called back to be put in touch with Kandbaz",
    screenshot: Kandbaz,
  },
  {
    id: 3,
    name: "PayFit",
    logo: PayFitLogo,
    features: [
      "Manage your staff 100% online",
      "Your first pay and subsequent ones automated",
      "Self-management of leave and absences",
      "Complete and personalized support",
      "1 month free for Captain Contrat customers",
    ],
    ctaText: "Be called back to be put in touch with PayFit",
    screenshot: PayFit,
  },
  {
    id: 4,
    name: "Simplébo",
    logo: SimpléboLogo,
    features: [
      "Your professional website (including e-commerce sites)",
      "Creation and launch in less than a month",
      "Support before, during, and after going online",
      "10% discount by going through Captain Contrat",
    ],
    ctaText: "I want to know more",
    screenshot: Simplébo,
  },
  {
    id: 5,
    name: "Olino",
    logo: OlinoLogo,
    features: [
      "Insurance certificate in 2 minutes",
      "Dedicated insurance advisor",
      "100% digital subscription and management",
      "1 month free for any new subscription",
    ],
    ctaText: "I want to know more",
    screenshot: Olino,
  },
]

export function DiscoverPartners() {
  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tertiary mb-4">Discover our partners</h2>
          <p className="text-gray-600">Selected to simplify your life and support your business</p>
        </div>

        <div className="space-y-16">
          {partnersData.map((partner) => (
            <div key={partner.id} className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src={partner.screenshot}
                  alt={`${partner.name} interface`}
                  className="w-full h-auto rounded-lg max-w-[400px]"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <ul className="space-y-4">
                  {partner.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/meetings/rdv-captain-contrat" className="bg-red-400 text-white px-4 py-3 rounded-full font-semibold hover:bg-[#e66c6c] transition-colors">
                  {partner.ctaText}
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
} 