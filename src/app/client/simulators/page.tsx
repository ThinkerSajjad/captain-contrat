'use client';
import Link from 'next/link';
import businessTypes from '@/data/funnelQuestions';

export default function SimulatorsPage() {
  // Main simulators to display in the top section
  const mainSimulators = [
    {
      id: "vat_and_tax_regime",
      title: "Commercial lease",
      emoji: "📊",
      path: "/funnel/service_choices/1?source=%2Frediger-un-contrat%2Frediger-contrat-de-location-commerciale",
      buttonText: "Commercial lease"
    },
    {
      id: "eligibility_for_ACRE",
      title: "Eligibility for ACRE",
      emoji: "📋",
      path: "/funnel/service_choices/1?source=%2Fproteger-sa-societe%2Fdepot-de-marque-inpi-en-ligne",
      buttonText: "Test my eligibility"
    },
    {
      id: "manager_income_optimization",
      title: "Optimizing the manager's income",
      emoji: "💰",
      path: "/funnel/service_choices/1?source=%2Favocat%2Ffind-a-lawyer",
      buttonText: "Discover my options"
    },
    {
      id: "find_my_legal_form",
      title: "Choice of legal form",
      emoji: "⚖️",
      path: "/funnel/service_choices/1?source=%2Fcreer-entreprise%2Faide-au-choix-forme-juridique",
      buttonText: "Discover my legal form"
    }
  ];

  // Function to get the URL for a simulator
  const getSimulatorUrl = (id: string) => {
    const businessType = businessTypes.find(type => type.id === id);
    if (businessType) {
      return `/funnel/service_choices/1?source=${encodeURIComponent(businessType.path)}`;
    }
    
    // Fallback for the manager income optimization which might not be in the list
    if (id === "manager_income_optimization") {
      return "/simulateur/optimisation-du-revenu-du-manager";
    }
    
    return "#";
  };

  return (
    <div className="mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">The essential simulators</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainSimulators.map((simulator) => (
          <div 
            key={simulator.id} 
            className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center h-full"
          >
            <h2 className="text-xl font-semibold mb-6">{simulator.title}</h2>
            
            <div className="flex-grow flex items-center justify-center mb-6">
              <span className="text-7xl">{simulator.emoji}</span>
            </div>
            
            <Link 
              href={simulator.path || getSimulatorUrl(simulator.id)}
              className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-800 font-medium hover:bg-gray-50 transition-colors"
            >
              {simulator.buttonText}
            </Link>
          </div>
        ))}
      </div>
      
      {/* All other simulators */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">All Simulators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessTypes.map((type) => (
            <Link 
              key={type.id}
              href={`/funnel/service_choices/1?source=${encodeURIComponent(type.path)}`}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="font-medium">{type.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 