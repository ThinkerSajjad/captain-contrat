import { GuideBooks } from "@/components/ebook/GuideBooks";
import { ManageCompanyGuides } from "@/components/ebook/ManageCompanyGuides";
import { Hero } from "@/components/ebook/Hero";


export default async function ResourcesPage() {

  return (
    <main>
      <Hero />
      <GuideBooks />
      <ManageCompanyGuides />
    </main>
  );
} 