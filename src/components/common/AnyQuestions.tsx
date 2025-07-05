import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AnyQuestions = () => {
  return (
    <div className="lg: px-10">
      <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
        Got a question? Our coaches are here to help!
      </h2>
      <div className="container mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-12">
        {/* Coach image container */}
        <div className="relative z-10 text-center col-span-12 md:col-span-6 xl:col-span-4 h-full">
          <Image
            src="/images/any-questions/user.png"
            alt="Coach Carole"
            className="w-full h-[350px] object-cover"
            width={192}
            height={192}
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1 p-8  xl:p-10 col-span-12 md:col-span-6 xl:col-span-8">
          <div className="space-y-6">
            {/* Main text */}
            <div className="space-y-3 pt-3">
              <p className="text-gray-800 text-lg font-medium">
                Need advice on your project?
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Carole and all our business coaches will be happy to answer your
                questions 😊
              </p>
            </div>

            {/* Schedule */}
            <div className="space-y-2">
              <h3 className="text-gray-800 text-lg font-semibold">
                Schedules:
              </h3>
              <p className="text-gray-700 text-base">
                Monday to Friday from 9:30 a.m. to 6:00 p.m.
              </p>
            </div>

            {/* Phone button */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-3 bg-[#ef6c77] hover:bg-[#e95360] text-white px-6 py-3 rounded-full font-medium text-base transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer">
                <Phone size={20} />
                <Link href="tel:0183846725">01 83 84 67 25</Link>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnyQuestions;
