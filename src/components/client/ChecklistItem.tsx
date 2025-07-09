import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ChecklistItemProps {
  icon: LucideIcon;
  title: string;
  actionText: string;
  actionHref: string;
  actionType: string;
}

export default function ChecklistItem({ 
  icon: Icon, 
  title, 
  actionText, 
  actionHref, 
  actionType 
}: ChecklistItemProps) {
  // Get button style based on action type
  const getButtonStyle = () => {
    switch (actionType) {
      case "download":
        return "border-blue-600 text-blue-600 hover:bg-blue-50";
      case "simulation":
        return "border-blue-600 text-blue-600 hover:bg-blue-50";
      case "article":
        return "border-blue-600 text-blue-600 hover:bg-blue-50";
      case "file":
        return "border-blue-600 text-blue-600 hover:bg-blue-50";
      case "appointment":
        return "border-blue-600 text-blue-600 hover:bg-blue-50";
      case "start":
        return "bg-blue-600 text-white hover:bg-blue-700 border-blue-600";
      default:
        return "border-gray-300 text-gray-700 hover:bg-gray-50";
    }
  };

  return (
    <div className="flex items-center justify-between p-4 gap-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center">
        <div className="bg-gray-100 p-2 rounded-md mr-4">
          <Icon className="h-5 w-5 text-gray-500" />
        </div>
        <span className="text-sm">{title}</span>
      </div>
      <Link
        href={actionHref}
        className={`px-4 py-2 text-sm font-medium border rounded-md whitespace-nowrap ${getButtonStyle()}`}
      >
        {actionText}
      </Link>
    </div>
  );
} 