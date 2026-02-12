import {
  greentrees,
  heroimg,
  profile01,
  profile02,
  profile03,
} from "../assets/photos";
import { ArrowUpRight } from "lucide-react";
import { ArrowUpRightButton } from "./buttons/Buttons";

const Hero = () => {
  return (
    <section className="relative px-12 pt-12 pb-20 overflow-hidden">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10">
          <p className="max-w-xs text-xs font-semibold uppercase tracking-wider mb-14 text-gray-500 leading-relaxed">
            We Are A Community Of Nature Lovers Joined In A Shared Mission To
            Share The Natural Beauty
          </p>

          <div className="flex gap-3 mb-20 text-xs md:text-sm">
            <span className="px-5 py-2 rounded-full border border-primary bg-primary text-white">
              Reforestation
            </span>
            <span className="px-5 py-2 rounded-full border border-gray-300 hover:border-primary transition-colors cursor-pointer">
              Vegetate
            </span>
            <span className="px-5 py-2 rounded-full border border-gray-300 hover:border-primary transition-colors cursor-pointer">
              Nature
            </span>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="flex -space-x-3">
              <img
                src={profile01}
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-secondary object-cover"
              />
              <img
                src={profile02}
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-secondary object-cover"
              />
            </div>
            <div>
              <p className="text-3xl font-bold">120k</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-500">
                Joined Our Team
              </p>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.9]">
            Adventures <br />
            Under{" "}
            <span className="inline-flex items-center justify-center w-20 h-12 align-middle bg-[#2F4F2F] rounded-full mx-2 overflow-hidden relative">
              <img
                src={greentrees}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </span>{" "}
            The <br />
            Open Skies
          </h1>
        </div>

        {/* Right Image  */}
        <div className="relative h-[600px] w-full">
          {/* Main Background Image */}
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
            <img
              src={heroimg}
              alt="hero"
              className="w-full h-full object-cover"
            />
            
            <ArrowUpRightButton/>

            <div className="absolute top-1/4 right-12 bg-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>{" "}
              Reforestation
            </div>

            <div className="absolute bottom-1/4 left-12 bg-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> Vegetate
            </div>
          </div>

          {/* small Card */}
          <div className="absolute -left-12 top-10 w-48 bg-secondary p-3 rounded-2xl shadow-xl hidden md:block border border-white/50">
            <div className="h-32 rounded-xl overflow-hidden mb-3">
              <img src={greentrees} className="w-full h-full object-cover" />
            </div>
            <p className="text-[10px] font-bold leading-tight mb-2">
              We'll Help You Plan Extraordinary Nature Adventures.
            </p>
            <div className="flex items-center gap-2">
              <img
                src={profile03}
                className="w-6 h-6 rounded-full object-cover"
              />
              <div>
                <p className="text-[8px] font-bold">Yanto B nature</p>
                <p className="text-[7px] text-gray-500">Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
