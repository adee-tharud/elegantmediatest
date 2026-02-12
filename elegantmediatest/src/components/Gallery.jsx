import { ArrowUpRight } from "lucide-react";
import { map, onetree, river, telescope} from "../assets/photos";

const Gallery = () => {
  return (
    <section className="py-24 px-12 mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-medium leading-tight max-w-md">
          Feel Free To Explore Our Content And Join With Us
        </h2>
        <p className="text-[10px] text-gray-400 text-right max-w-xs ml-auto uppercase tracking-wider mt-4">
          Feel Free To Explore Our Content And Join The Journey Into Beautiful
          Nature. Let's Protect Our Earth Together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
        {/* Card 1 */}
        <div className="relative rounded-[2rem] overflow-hidden group">
          <img
            src={onetree}
            alt="Nature"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-6 left-6 right-6 flex gap-2 items-center">
            <span className="bg-white px-4 py-1 rounded-full text-[10px] font-bold uppercase">
              REBOISASI
            </span>
            <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* Card 2 - Text Based */}
        <div className="relative rounded-[2rem] overflow-hidden bg-[#F5F5F0] p-6 md:flex flex-col justify-center hidden">
          <h4 className="font-bold text-sm uppercase tracking-wider mb-2">
            DANILLA <br /> PRATAMA
          </h4>
          <p className="text-xs text-gray-500 mb-8">Lorem Ipsum Dolor</p>

          <div className="relative h-72 w-full rounded-xl overflow-hidden mt-auto">
            <img
              src={map}
              alt="Person"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0">
              <div className="bg-secondary w-24 h-24 flex items-center justify-center rounded-bl-[2.5rem]">
                <div className="border-1 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-sm">
                  <ArrowUpRight size={22} className="text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-[2rem] overflow-hidden group ">
          <img
            src={river}
            alt="Nature"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-6 left-6 right-6 flex gap-2 items-center">
            <span className="bg-white px-4 py-1 rounded-full text-[10px] font-bold uppercase">
              BEATNUT
            </span>
            <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative rounded-[2rem] overflow-hidden p-6 md:flex flex-col justify-between hidden">
      

          <div className="relative z-10">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-2">
              ERIK <br /> SUKARDI
            </h4>
            <p className="text-xs text-gray-500">Lorem Ipsum Dolor</p>
          </div>

          <div className="relative z-10 mt-auto h-72 rounded-xl overflow-hidden">
            <img
              src={telescope}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0">
              <div className="bg-secondary w-24 h-24 flex items-center justify-center rounded-bl-[2.5rem]">
                <div className="border-1 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-sm">
                  <ArrowUpRight size={22} className="text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
