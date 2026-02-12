import { ArrowUpRight, Fingerprint } from "lucide-react";
import { onetree } from "../assets/photos";

const Features = () => {
  return (
    <section className="py-24 px-12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="bg-white p-4 rounded-[2rem] flex flex-col md:flex-row gap-6 shadow-sm">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 md:h-auto rounded-2xl overflow-hidden shrink-0">
            <img
              src={onetree}
              alt="trees"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <button className="bg-white text-primary px-6 py-2 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowUpRight size={14} className="text-primary" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between py-2 pr-2 w-full md:w-1/2">
            <div className="flex justify-between items-start">
              <div className="border border-gray-200 rounded-full px-4 py-1 flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  INSIGHT
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Fingerprint size={16} className="text-gray-400" />
              </div>
            </div>

            <div className="space-y-4 mt-8 md:mt-0">
              <span className="text-xs text-gray-400 font-medium block">
                02/24/24
              </span>
              <h3 className="text-xl font-bold leading-tight">
                We Believe That Protecting Nature Is A Shared Duty.
              </h3>
            </div>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="flex flex-col justify-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.15]">
            Get Information On The Best <br className="hidden md:block" />
            Natural Destinations, Epic <br className="hidden md:block" />
            <span className="inline-block relative">
              <span className="relative z-10"> Hiking Routes</span>
              <span className="absolute inset-0 bg-[#D1DAD1] rounded-2xl -z-0 transform -rotate-1 scale-105 origin-center"></span>
            </span>{" "}
            And Amazing <br className="hidden md:block" />
            Locations.
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-end md:items-center border-t border-transparent pt-4">
            <div className="bg-white rounded-full pl-6 pr-2 py-2 flex items-center justify-between w-full md:w-3/5 border border-gray-100 shadow-sm">
              <span className="text-xs font-bold uppercase text-gray-800">
                ABOUT
              </span>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Fingerprint size={16} className="text-gray-400" />
              </div>
            </div>

            <p className="hidden lg:block text-[10px] text-gray-400 text-right uppercase leading-relaxed">
              LEARN ABOUT THE LATEST <br />
              CONSERVATION EFFORTS, <br />
              AS WELL AS HOW YOU CAN <br />
              CONTRIBUTE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
