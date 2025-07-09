import Image from "next/image";
import Link from "next/link";
import bulb from "../../../public/icons/ideaConstruction-Bir0NcTI.png"

export default function CurrentProject() {
  return (
    <section>
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">My current project</h2>
      <div className="bg-primary border border-amber-100 rounded-lg p-6">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
          <div className="flex items-center">
            <div className="mr-4">
              <Image 
                src={bulb} 
                alt="Project icon" 
                className="max-h-[100px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold">Approval of accounts</h3>
              <p className="text-gray-600 ">Thinker, you are just a few clicks away from making your project a reality.</p>
            </div>
          </div>
          <Link 
            href="/client/projects/current" 
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-md text-base font-semibold"
          >
            Resume my project
          </Link>
        </div>
      </div>
    </section>
  );
} 