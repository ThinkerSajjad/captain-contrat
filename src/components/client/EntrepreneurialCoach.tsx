'use client';
import Image from "next/image";
import Link from "next/link";

export default function EntrepreneurialCoach() {
  return (
    <section className="border border-gray-200 rounded-lg bg-white p-6">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Mon coach entrepreneurial</h2>
      
      <div className="flex flex-col items-start gap-6">
        {/* Coach profile */}
        <div className="flex items-center gap-4 w-full">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
            <Image 
              src="/images/home/Ines.png" 
              alt="Solène Pontes" 
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold">Solène Pontes</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm mt-1">
              <span>01 83 81 67 25</span>
              <span className="hidden sm:inline text-gray-300 mx-3">|</span>
              <span>solene@captaincontrat.com</span>
            </div>
          </div>
        </div>
        
        {/* Divider for mobile */}
        <div className="w-full h-px bg-gray-200 my-4"></div>
        
        {/* Coach availability */}
        <div className="w-full">
          <div className="mb-4">
            <h4 className="font-medium mb-2">Besoin d&apos;échanger à nouveau ?</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Je suis là pour répondre à vos questions du quotidien et vous accompagner tout au long de votre projet.
              <br />Choisissez un créneau dans mon agenda.
            </p>
          </div>
          
          <Link 
            href="/meetings/rdv-captain-contrat" 
            className="inline-block bg-secondary-dark hover:bg-red-600 text-white px-6 py-3 rounded-full text-base font-semibold transition-colors"
          >
            Voir les disponibilités
          </Link>
        </div>
      </div>
    </section>
  );
} 