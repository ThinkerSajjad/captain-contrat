
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../layout/PageContainer";

// Sample lawyer image - replace with actual image
import lawyerImage from "../../../public/images/home/Tiphaine - Avocat_1x.webp";

export function MakeAnAppointment() {

  return (
    <section className="lg:py-12 py-8 bg-white">
      <PageContainer>
        <div className="text-center lg:mb-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-tertiary lg:mb-6 mb-4">
            We are at your disposal to answer your last questions.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto lg:mb-8 mb-6 bg-white rounded-lg lg:p-8 p-6 shadow-sm flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden lg:mb-6 mb-4">
            <Image 
              src={lawyerImage} 
              alt="Lawyer profile" 
              className="w-full h-full object-cover"
              width={128}
              height={128}
            />
          </div>
          
          <Link 
            href="/contact"
            className="bg-secondary font-semibold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Make an appointment
          </Link>
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">
            We will be delighted to support you as best we can in your project.
          </p>
        </div>
      </PageContainer>
    </section>
  );
} 