'use client';

import Link from "next/link";

const businessTypes = [
  { name: "SAS", href: "/creer-entreprise/sas" },
  { name: "SASU", href: "/creer-entreprise/sasu" },
  { name: "SARL", href: "/creer-entreprise/sarl" },
  { name: "EURL", href: "/creer-entreprise/eurl" },
  { name: "Microphone", href: "/creer-entreprise/micro-entreprise" },
  { name: "Sole Proprietorship", href: "/creer-entreprise/entreprise-individuelle" },
  { name: "SCI", href: "/creer-entreprise/sci" },
  { name: "Association", href: "/creer-entreprise/association" },
  { name: "SELARL", href: "/creer-entreprise/selarl" },
  { name: "SELAS", href: "/creer-entreprise/selas" },
];

export function BusinessCreationTags() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-tertiary mb-12">
          Discover all our business creation offers
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {businessTypes.map((type) => (
            <Link
              key={type.name}
              href={type.href}
              className="inline-flex items-center px-4 py-2.5 rounded-full border border-tertiary text-tertiary hover:bg-tertiary hover:text-white transition-colors"
            >
              {type.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <h3 className="font-semibold lg:text-xl text-lg text-gray-900">Still thinking?</h3>
            <p className="text-gray-600 lg:text-lg text-base">
              Take advantage of our free tools: simulators, PDF guides, articles, etc.
            </p>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#ef4444] text-white font-semibold hover:bg-[#dc2626] transition-colors"
          >
            Deepen my project
          </Link>
        </div>
      </div>
    </section>
  );
} 