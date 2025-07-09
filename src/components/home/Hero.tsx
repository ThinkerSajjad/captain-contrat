"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { useState, useEffect, useMemo } from "react"
import { useTranslation } from "react-i18next"

import avisVerifiesLogo from "../../../public/images/hero/avis-verifies-logo.png"
import googleLogo from "../../../public/images/hero/google-logo.svg"
import PageContainer from "../layout/PageContainer"

export function Hero() {
  const { t } = useTranslation();
  const words = useMemo(() => [
    t('hero.title.develop'),
    t('hero.title.protect'),
    t('hero.title.launch'),
    t('hero.title.manage')
  ], [t]);
  const [currentWord, setCurrentWord] = useState(words[0])
  const [animationClass, setAnimationClass] = useState("")
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("animate-slide-out")
      
      setTimeout(() => {
        const currentIndex = words.indexOf(currentWord)
        const nextIndex = (currentIndex + 1) % words.length
        setCurrentWord(words[nextIndex])
        setAnimationClass("animate-slide-in")
      }, 300)
      
      setTimeout(() => {
        setAnimationClass("")
      }, 600)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [currentWord, words])

  return (
    <section className="relative lg:py-20 py-10 text-center">
      <style jsx>{`
        @keyframes slideOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(200px);
            opacity: 0;
          }
        }
        
        @keyframes slideIn {
          0% {
            transform: translateX(-200px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-out {
          animation: slideOut 300ms forwards;
        }
        
        .animate-slide-in {
          animation: slideIn 300ms forwards;
        }
      `}</style>
      
      <div className="absolute inset-0 bg-[#fbeada] w-full h-full" />
      <PageContainer>
        <div className="relative lg:space-y-6 space-y-4 mx-auto">
          <h1 className="lg:text-6xl text-5xl font-bold leading-tight font-crimson">
            <div className="lg:mb-2 mb-0 text-secondary">
              <span className={animationClass}>{currentWord}</span>
            </div>
            <span className="text-tertiary relative lg:text-6xl text-4xl">
              {t('hero.title.yourBusiness')} <span className="relative">{t('hero.title.effortlessly')} <div className="absolute -bottom-2 right-0 transform lg:w-64 w-40 lg:h-1.5 h-1 rounded-full bg-secondary"></div></span>
            </span>
          </h1>
          <p className="text-xl text-gray-800 max-w-5xl mx-auto lg:mt-6 mt-3 font-lato">
            {t('hero.subtitle')}
          </p>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-3 xl:px-6 lg:px-0 px-0 lg:mt-16 mt-8 mx-auto items-stretch">
          {/* Card 1 */}
          <Link href="/creer-entreprise" className="block w-full h-full">
            <div className="bg-white md:py-4 py-3 px-3 rounded-lg shadow-sm flex lg:flex-col flex-row h-full cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 flex justify-start items-center lg:mb-4 mb-0 mr-4 lg:mr-0">
                <Image
                  src="/images/hero/create-image.png"
                  alt="Create business"
                  width={64}
                  height={64}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="lg:text-2xl text-xl font-semibold text-black mb-3 font-lato text-left">{t('hero.cards.createBusiness.title')}</h3>
                <p className="text-base text-gray-600 lg:mb-4 mb-2 font-lato text-left">{t('hero.cards.createBusiness.description')}</p>
                <div className="flex-grow" />
                <div className="flex justify-end items-end w-full">
                  <div className="text-[#f27c7c]">
                    <ArrowRight className="w-7 h-7" />
                    <span className="sr-only">Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link href="/expertise-comptable" className="block w-full h-full">
            <div className="bg-white md:py-4 py-3 px-3 rounded-lg shadow-sm flex lg:flex-col flex-row h-full cursor-pointer hover:shadow-md transition-shadow">
              <div className=" flex-shrink-0 flex justify-start items-center lg:mb-4 mb-0 mr-4 lg:mr-0">
                <Image
                  src="/images/hero/entrust-icon.png"
                  alt="Entrust accounting"
                  width={64}
                  height={64}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="lg:text-2xl text-xl font-semibold text-black mb-3 font-lato text-left">{t('hero.cards.entrustAccounting.title')}</h3>
                <p className="text-base text-gray-600 lg:mb-4 mb-2 font-lato text-left">{t('hero.cards.entrustAccounting.description')}</p>
                <div className="flex-grow" />
                <div className="flex justify-end items-end w-full">
                  <div className="text-[#f27c7c]">
                    <ArrowRight className="w-7 h-7" />
                    <span className="sr-only">Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link href="/modifier-son-entreprise" className="block w-full h-full">
            <div className="bg-white md:py-4 py-3 px-3 rounded-lg shadow-sm flex lg:flex-col flex-row h-full cursor-pointer hover:shadow-md transition-shadow">
              <div className=" flex-shrink-0 flex justify-start items-center lg:mb-4 mb-0 mr-4 lg:mr-0">
                <Image
                  src="/images/hero/modify-status-icon.png"
                  alt="Modify status"
                  width={64}
                  height={64}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="lg:text-2xl text-xl font-semibold text-black mb-3 font-lato text-left">{t('hero.cards.modifyStatus.title')}</h3>
                <p className="text-base text-gray-600 lg:mb-4 mb-2 font-lato text-left">{t('hero.cards.modifyStatus.description')}</p>
                <div className="flex-grow" />
                <div className="flex justify-end items-end w-full">
                  <div className="text-[#f27c7c]">
                    <ArrowRight className="w-7 h-7" />
                    <span className="sr-only">Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* Card 4 */}
          <Link href="/rediger-un-contrat" className="block w-full h-full">
            <div className="bg-white md:py-4 py-3 px-3 rounded-lg shadow-sm flex lg:flex-col flex-row h-full cursor-pointer hover:shadow-md transition-shadow">
              <div className=" flex-shrink-0 flex justify-start items-center lg:mb-4 mb-0 mr-4 lg:mr-0">
                <Image
                  src="/images/hero/drafting-contract.png"
                  alt="Drafting contracts"
                  width={64}
                  height={64}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="lg:text-2xl text-xl font-semibold text-black mb-3 font-lato text-left">{t('hero.cards.draftingContracts.title')}</h3>
                <p className="text-base text-gray-600 lg:mb-4 mb-2 font-lato text-left">{t('hero.cards.draftingContracts.description')}</p>
                <div className="flex-grow" />
                <div className="flex justify-end items-end w-full">
                  <div className="text-[#f27c7c]">
                    <ArrowRight className="w-7 h-7" />
                    <span className="sr-only">Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* Card 5 */}
          <Link href="/avocat/droit-affaires" className="block w-full h-full">
            <div className="bg-white md:py-4 py-3 px-3 rounded-lg shadow-sm flex lg:flex-col flex-row h-full cursor-pointer hover:shadow-md transition-shadow">
              <div className=" flex-shrink-0 flex justify-start items-center lg:mb-4 mb-0 mr-4 lg:mr-0">
                <Image
                  src="/images/hero/consult-lawer-icon.png"
                  alt="Consult lawyer"
                  width={64}
                  height={64}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="lg:text-2xl text-xl font-semibold text-black mb-3 font-lato text-left">{t('hero.cards.consultLawyer.title')}</h3>
                <p className="text-base text-gray-600 lg:mb-4 mb-2 font-lato text-left">{t('hero.cards.consultLawyer.description')}</p>
                <div className="flex-grow" />
                <div className="flex justify-end items-end w-full">
                  <div className="text-[#f27c7c]">
                    <ArrowRight className="w-7 h-7" />
                    <span className="sr-only">Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* Reviews section */}
        <div className="relative flex md:flex-row flex-col justify-center items-center lg:gap-16 gap-6 lg:mt-16 mt-12">
          <div className="flex items-center gap-3">
            <div className="">
              <Image src={avisVerifiesLogo} alt="Verified" className="w-20" />
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-gray-700 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 text-sm font-lato">
              <strong>{t('hero.reviews.verified.rating')}</strong> (<span className="underline">{t('hero.reviews.verified.reviews')}</span>)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="">
              <Image src={googleLogo} alt="Google" className="w-20" />
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 text-gray-700 fill-current" />
              ))}
              <Star className="w-4 h-4 text-gray-700 fill-current opacity-50" />
            </div>
            <span className="text-gray-700 text-sm font-lato">
              <strong>{t('hero.reviews.google.rating')}</strong> (<span className="underline">{t('hero.reviews.google.reviews')}</span>)
            </span>
          </div>
        </div>
      </PageContainer>
    </section>
  )
} 