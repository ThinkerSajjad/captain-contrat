'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, use } from 'react';

// Define the proper type for params
interface OrderParams {
  id: string;
}

// In Next.js 15, params is passed as a Promise
export default function OrderDetailPage({ params }: { params: Promise<OrderParams> }) {
  const [appointmentSlot, setAppointmentSlot] = useState('');
  const [contactInfo, setContactInfo] = useState<Record<string, string>>({});
  // Unwrap params using React.use() as recommended by Next.js 15
  const unwrappedParams = use(params);
  const orderId = unwrappedParams.id;
  
  // Load data from localStorage only once on component mount
  useEffect(() => {
    // Try to get the appointment slot from localStorage
    try {
      const storedSlot = localStorage.getItem('appointmentSlot');
      if (storedSlot) {
        setAppointmentSlot(storedSlot);
      }
      
      const storedContactInfo = localStorage.getItem('contactInfo');
      if (storedContactInfo) {
        const parsedInfo = JSON.parse(storedContactInfo);
        setContactInfo(parsedInfo);
      }
    } catch (e) {
      console.error('Error loading data from localStorage:', e);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r border-gray-200 flex flex-col">
        <Link href="/" className="p-4 flex items-center gap-2 hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Accueil</span>
        </Link>
        
        <Link href="/projects" className="p-4 flex items-center gap-2 bg-blue-50 text-blue-600 border-l-4 border-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <span>Projets</span>
        </Link>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            Un pas de plus vers la création de votre <span className="text-red-500">SAS {contactInfo.firstName || 'Thinker'}</span>
          </h1>
          <div className="text-sm text-gray-500">
            Order ID: <span className="font-medium">{orderId}</span>
          </div>
        </div>
        
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Votre rendez-vous</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <Image 
                    src="/images/home/Tiphaine - Avocat_1x.webp" 
                    alt="Coach entrepreneurial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">Solène Pontes</p>
                  <p className="text-gray-600">Coach entrepreneurial</p>
                  <div className="mt-4">
                    <p className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      01 83 81 67 25
                    </p>
                    <p className="flex items-center gap-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      solene@captaincontrat.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:border-l md:pl-6 border-gray-300">
                <p className="font-medium">Rendez-vous sélectionné</p>
                <p className="text-lg font-semibold mt-1">
                  {appointmentSlot || 'Horaire non disponible'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Vos coordonnées</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Prénom</p>
                <p className="font-medium">{contactInfo.firstName || 'Non renseigné'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Nom</p>
                <p className="font-medium">{contactInfo.lastName || 'Non renseigné'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{contactInfo.email || 'Non renseigné'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <p className="font-medium">{contactInfo.phone || 'Non renseigné'}</p>
              </div>
              {contactInfo.company && (
                <div>
                  <p className="text-sm text-gray-500">Entreprise</p>
                  <p className="font-medium">{contactInfo.company}</p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-6">Ressources utiles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-40 bg-gray-100 rounded flex items-center justify-center">
                  <Image 
                    src="/images/business/sas/img+mock-up-desktop_sas.webp" 
                    alt="Guide de création d'entreprise"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <h3 className="font-medium text-center">Tout savoir sur la création d'entreprise 📚</h3>
              <div className="mt-4 flex justify-center">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Télécharger le guide
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-40 bg-gray-100 rounded flex items-center justify-center">
                  <Image 
                    src="/images/home/supporters/BNP.png" 
                    alt="Tarifs"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <h3 className="font-medium text-center">Découvrez les tarifs pour notre accompagnement 🚀</h3>
              <div className="mt-4 flex justify-center">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  Consulter les formules
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 