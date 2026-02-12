import { ArrowUpRight, Globe, Play } from "lucide-react";
import { profile01, profile02, profile03, river } from "../assets/photos";
import { stories } from "../constants/stories";
import { ArrowUpRightButton } from "./buttons/Buttons";

const Stories = () => {
  return (
    <section className="py-5 md:py-20 px-12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="flex flex-col col-span-1 gap-10">
          {/* Header Profile */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={profile01}
                  alt="Danang Karbu"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900">
                  Danang Karbu
                </h4>
                <p className="text-sm text-gray-500">Dewan Ambalan</p>
              </div>
            </div>

            <div className="flex -space-x-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src={profile02}
                alt="user"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src={profile03}
                alt="user"
              />
            </div>
          </div>

          {/* Dark Card */}
          <div className="bg-[#1A1A1A] text-white p-10 rounded-[2.5rem] relative min-h-[300px] flex flex-col justify-between overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] text-gray-400">
                They Will Share <br />
                Inspiring{" "}
                <span className="text-white font-semibold">
                  Stories And
                </span>{" "}
                <br />
                <span className="text-white font-semibold">Spectacular</span>
              </h2>
            </div>

            <div className="flex justify-between items-end relative z-10 mt-12">
              <Globe
                className="text-white opacity-80"
                strokeWidth={1.5}
                size={32}
              />
              <p className="text-[10px] uppercase tracking-widest text-gray-400 max-w-[150px] text-right leading-relaxed">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

          {/* Stories List */}
          <div className="flex flex-col gap-6 mt-2">
            {stories.map(({ id, image, title, date, subtitle }) => (
              <div
                key={id}
                className="flex items-center justify-between group cursor-pointer"
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-amber-700 transition-colors uppercase tracking-wide">
                      {title}
                    </h4>
                    <p className="text-xs text-gray-400">{date}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600 hidden md:block">
                    {subtitle}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-gray-400 group-hover:text-gray-900 transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Large Image */}
        <div className="relative col-span-2 h-[600px] lg:h-[700px] rounded-[2.5rem] overflow-hidden group">
          <img
            src={river}
            alt="hero"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all border border-white/40">
              <Play className="text-white fill-white ml-1" size={24} />
            </div>
          </div>

          {/* Top Right Arrow Button */}
          <ArrowUpRightButton/>
        </div>
      </div>
    </section>
  );
};

export default Stories;
