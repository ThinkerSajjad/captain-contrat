import { FileText, Calculator, FileQuestion, User, ShoppingCart } from "lucide-react";
import ChecklistItem from "./ChecklistItem";

export default function CreatorChecklist() {
  const checklistItems = [
    {
      icon: FileText,
      title: "I discover the essential information to know before creating",
      actionText: "Download guide",
      actionHref: "#",
      actionType: "download"
    },
    {
      icon: Calculator,
      title: "I check which legal form is best suited to my project",
      actionText: "Simulation",
      actionHref: "/simulateur/choix-de-la-forme-juridique",
      actionType: "simulation"
    },
    {
      icon: FileQuestion,
      title: "I discover the steps and costs associated with creating a business",
      actionText: "Read article",
      actionHref: "#",
      actionType: "article"
    },
    {
      icon: Calculator,
      title: "I check if I am eligible for ACRE",
      actionText: "Simulation",
      actionHref: "/simulateur/eligibilite-acre",
      actionType: "simulation"
    },
    {
      icon: FileText,
      title: "I discover what awaits me after my creation",
      actionText: "View file",
      actionHref: "#",
      actionType: "file"
    },
    {
      icon: User,
      title: "I validate my project with an entrepreneurial coach (free)",
      actionText: "Make appointment",
      actionHref: "#",
      actionType: "appointment"
    },
    {
      icon: ShoppingCart,
      title: "I am starting my steps to create my business",
      actionText: "Start up",
      actionHref: "#",
      actionType: "start"
    }
  ];

  return (
    <section className="pb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl lg:text-2xl font-semibold">Creator&apos;s Checklist: The Essentials for Success</h2>
        <div className="bg-gray-200 h-2 w-32 rounded-full">
          <div className="bg-gray-400 h-2 rounded-full" style={{ width: "0%" }}></div>
        </div>
      </div>
      
      <div className="space-y-4">
        {checklistItems.map((item, index) => (
          <ChecklistItem 
            key={index}
            icon={item.icon}
            title={item.title}
            actionText={item.actionText}
            actionHref={item.actionHref}
            actionType={item.actionType}
          />
        ))}
      </div>
    </section>
  );
} 