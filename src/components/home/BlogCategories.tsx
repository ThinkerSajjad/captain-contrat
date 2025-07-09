import Link from "next/link";
import PageContainer from "../layout/PageContainer";

const categories = [
  { label: "Prepare your creation", href: "/ressources" },
  { label: "Create your own business", href: "/ressources" },
  { label: "Business management", href: "/ressources" },
  { label: "Protection of creations", href: "/ressources" },
  { label: "To exercise a profession", href: "/ressources" },
  { label: "Company modification", href: "/ressources" },
  { label: "Disputes", href: "/ressources" },
  { label: "Commercial contracts & general T&C", href: "/ressources" },
  { label: "Recruiting and managing employees", href: "/ressources" },
  { label: "Closing", href: "/ressources" },
];

export function BlogCategories() {
  return (
    <section className="w-full py-12 bg-white">
      <PageContainer>
          <div className="xl:px-24 px-0 mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-tertiary font-crimson mb-10">
              Discover our blog
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8 w-full">
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="border border-tertiary rounded-full md:w-fit w-full text-center px-8 py-3 text-tertiary font-semibold text-base hover:bg-tertiary hover:text-white transition-colors whitespace-nowrap"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
            <Link href="/ressources" className="text-tertiary text-lg font-medium hover:underline mt-2">
              See the entire blog
            </Link>
          </div>
      </PageContainer>
    </section>
  );
} 