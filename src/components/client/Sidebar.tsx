'use client';
import Link from "next/link";
import { Home, FileText, Calculator, BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: "Welcome", href: "/client" },
    { icon: FileText, label: "Projects", href: "/client/projects" },
    { icon: Calculator, label: "Accounting", href: "/client/accounting" },
    { icon: BookOpen, label: "Library", href: "/client/library" },
    { icon: Calculator, label: "Simulators", href: "/client/simulators" },
  ];

  return (
    <aside className="w-[210px] bg-white border-r border-gray-200 py-6 h-full overflow-y-auto shadow-lg">
      <nav className="flex flex-col h-full">
        <ul className="space-y-1 flex-1">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className={`h-6 w-6 mr-3 ${isActive ? "text-blue-600" : "text-gray-500"}`} />
                  <span className="font-semibold">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
} 