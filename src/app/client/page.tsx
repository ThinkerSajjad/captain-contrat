import { Metadata } from "next";
import CurrentProject from "@/components/client/CurrentProject";
import CreatorChecklist from "@/components/client/CreatorChecklist";
import EntrepreneurialCoach from "@/components/client/EntrepreneurialCoach";

export const metadata: Metadata = {
  title: "Welcome | Captain Contrat",
  description: "Welcome to your Captain Contrat dashboard",
};

export default function ClientDashboard() {
  return (
    <div className="space-y-8">
      <div className="bg-tertiary rounded-b-xl p-6">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-white">Welcome Thinker 👋!</h1>
        <p className="text-white">We will guide you step by step to make your entrepreneurial project a reality.</p>
      </div>

      <CurrentProject />
      <CreatorChecklist />
      <EntrepreneurialCoach />
    </div>
  );
}
