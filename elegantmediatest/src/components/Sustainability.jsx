import { ArrowUpRight, ArrowLeft, ArrowRight, Leaf, Plus } from "lucide-react";
import { greentrees, river } from "../assets/photos";
import { sus } from "../constants/sus";
import { ArrowUpRightButton } from "./buttons/Buttons";

const Sustainability = () => {
  return (
    <section className="py-20 px-12  mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          {/* Large Image Card */}
          <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden group">
            <img
              src={greentrees}
              alt="Mountain Peak"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <button className="absolute bottom-8 left-8 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
              Learn More
            </button>

         
           <ArrowUpRightButton/>
          </div>

          {/* Info Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Cards */}
            {sus.map(({ id, firstone, secondone, image: Icon }) => (
              <div
                key={id}
                className="bg-white p-8 rounded-[2rem] flex flex-col justify-between min-h-[200px] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] mb-4">
                  <Icon size={16} />
                </div>

                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-4 leading-relaxed text-gray-800">
                    {firstone} <br /> {secondone}
                  </h4>

                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 cursor-pointer hover:text-green-700 transition-colors uppercase tracking-widest">
                    <span>Learn More</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between py-4 lg:pl-10 order-1 lg:order-2">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-[#DEE8E5] text-gray-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                New
              </span>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Get Tips On How To Live More Sustainably And Contribute To
                Nature Conservation.
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium leading-[1.15] text-gray-900 tracking-tight">
              Get Tips On How To Live More Sustainably And Contribute To{" "}
              <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Nature Conservation.</span>
                <span className="absolute inset-0 bg-[#D1DAD1] rounded-2xl -z-0 transform -rotate-1 scale-105 origin-center"></span>
              </span>
            </h2>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-end gap-6 mt-auto">
            {/* Small Image */}
            <div className="relative w-full md:w-56 h-40 rounded-[1.5rem] overflow-hidden shrink-0 group shadow-md order-2 lg:order-1">
              <img
                src={river}
                alt="Small nature"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button className="absolute bottom-4 left-4 bg-white text-[10px] font-bold px-4 py-2 rounded-full uppercase hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>

            {/* Text and Nav */}
            <div className="flex-1 w-full pl-0 md:pl-4 order-1 lg:order-2">
              <p className="text-sm font-semibold text-gray-500 mb-8 max-w-[200px] leading-relaxed uppercase">
                We will help you reduce your environmental footprint.
              </p>

              <div className="flex items-center justify-between gap-4">
                {/* Diagonal Arrow Button */}
                <div className="w-16 h-16 bg-[#DEE8E5] rounded-full lg:flex items-center justify-center text-gray-800 hover:bg-[#cfdbd8] transition-colors cursor-pointer shadow-sm hidden">
                  <ArrowUpRight size={28} strokeWidth={1.5} />
                </div>

                {/* Nav Buttons */}
                <div className="flex gap-3">
                  <button className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-sm">
                    <ArrowLeft size={20} />
                  </button>
                  <button className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-sm">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
