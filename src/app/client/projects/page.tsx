import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects | Captain Contrat",
  description: "Manage your projects with Captain Contrat",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <h2 className="text-xl font-medium mb-2">No active projects</h2>
        <p className="text-gray-600 mb-6">You don&apos;t have any active projects at the moment.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          Start a new project
        </button>
      </div>
    </div>
  );
} 