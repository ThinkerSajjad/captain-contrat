import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting | Captain Contrat",
  description: "Manage your accounting with Captain Contrat",
};

export default function AccountingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Accounting</h1>
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h2 className="text-xl font-medium mb-4">Your accounting services</h2>
        <p className="text-gray-600 mb-6">
          Manage your accounting, tax declarations, and financial reports all in one place.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">Monthly accounting</h3>
            <p className="text-gray-600 text-sm">Your next report is scheduled for June 15, 2023</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">Tax declarations</h3>
            <p className="text-gray-600 text-sm">No pending declarations</p>
          </div>
        </div>
      </div>
    </div>
  );
} 