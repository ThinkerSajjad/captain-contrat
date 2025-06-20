'use client';

import { useEffect, useState, useRef } from 'react';
import PageContainer from '@/components/layout/PageContainer';

export function TrustMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [companiesCount, setCompaniesCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [entrepreneursCount, setEntrepreneursCount] = useState(0);
  
  const targetCompanies = 15636;
  const targetProjects = 32960;
  const targetEntrepreneurs = 2217;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // Animation duration in milliseconds
    const steps = 50; // Number of steps in the animation
    const interval = duration / steps;
    
    const companiesStep = targetCompanies / steps;
    const projectsStep = targetProjects / steps;
    const entrepreneursStep = targetEntrepreneurs / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      
      if (currentStep <= steps) {
        setCompaniesCount(Math.floor(companiesStep * currentStep));
        setProjectsCount(Math.floor(projectsStep * currentStep));
        setEntrepreneursCount(Math.floor(entrepreneursStep * currentStep));
      } else {
        setCompaniesCount(targetCompanies);
        setProjectsCount(targetProjects);
        setEntrepreneursCount(targetEntrepreneurs);
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [isVisible]);
  
  return (
    <section ref={sectionRef} className="lg:py-16 py-10 bg-white">
      <PageContainer>
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-tertiary mb-10 lg:mb-16">
          They trusted Captain Contrat
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Companies */}
          <div className="flex flex-col items-center">
            <div className="lg:text-5xl text-4xl font-bold text-tertiary mb-4">
              {companiesCount.toLocaleString()}
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">companies</span> created thanks to our lawyers
            </div>
          </div>
          
          {/* Projects */}
          <div className="flex flex-col items-center">
            <div className="lg:text-5xl text-4xl font-bold text-tertiary mb-4">
              {projectsCount.toLocaleString()}
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">projects</span> carried out with Captain Contrat
            </div>
          </div>
          
          {/* Entrepreneurs */}
          <div className="flex flex-col items-center">
            <div className="lg:text-5xl text-4xl font-bold text-tertiary mb-4">
              {entrepreneursCount.toLocaleString()}
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">entrepreneurs</span> subscribed and supported<br />
              on a daily basis
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 lg:mt-16">
          {/* Avis Verifies */}
          <div className="flex items-center gap-4">
            <img 
              src="/images/hero/avis-verifies-logo.png" 
              alt="Avis Verifies" 
              className="h-6 lg:h-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v6.5l3.5-2a1 1 0 011.5.866V14.5a1 1 0 01-1.5.866L11 13.366V18a1 1 0 11-2 0V2a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-2 font-semibold">4.6</span>
              <span className="ml-1 text-gray-600">( 1693 reviews )</span>
            </div>
          </div>
          
          {/* Google */}
          <div className="flex items-center gap-4">
            <img 
              src="/images/hero/google-logo.svg" 
              alt="Google" 
              className="h-6 lg:h-8"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v6.5l3.5-2a1 1 0 011.5.866V14.5a1 1 0 01-1.5.866L11 13.366V18a1 1 0 11-2 0V2a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-2 font-semibold">4.3</span>
              <span className="ml-1 text-gray-600">( 1334 reviews )</span>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 