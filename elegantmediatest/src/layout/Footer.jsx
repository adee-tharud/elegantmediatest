import { Send, Instagram, Disc2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      {/* Top Section - Light Background */}
      <div className=" px-12 py-20 rounded-t-[2.5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-gray-900 tracking-tight">
                Join Us In Exploring <br />
                Nature's{" "}
                <span className="inline-block bg-[#D1DAD1] px-4 py-1 rounded-2xl mx-1">
                  Beauty And
                </span>{" "}
                <br />
                Honoring These
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
              <div className="flex justify-between gap-5">
                <div className="">
                  <h3 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-6">
                    Product
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 text-sm font-medium hover:text-gray-900 uppercase transition-colors"
                      >
                        Nature
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 text-sm font-medium hover:text-gray-900 uppercase transition-colors"
                      >
                        Greeen
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 text-sm font-medium hover:text-gray-900 uppercase transition-colors"
                      >
                        Fresh
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h3 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-6">
                    Company
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 text-sm font-medium hover:text-gray-900 uppercase tracking-widest transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 text-sm font-medium hover:text-gray-900 uppercase tracking-widest transition-colors"
                      >
                        Mission
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 text-sm font-medium hover:text-gray-900 uppercase tracking-widest transition-colors"
                      >
                        Carrier
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex-1 min-w-[200px]">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed mb-6 text-right md:text-left ml-auto md:ml-0 max-w-[250px] hidden md:block">
                  Your Ultimate Destination For All Things Fashion. Our Mission
                  Is To Empower You To Express You
                </p>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full bg-transparent border border-gray-300 rounded-full py-3 px-6 pr-24 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                  <button className="absolute right-1 top-1 bottom-1 bg-[#1A1A1A] text-white px-6 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark Background */}
      <div className="bg-[#1A1A1A] text-white px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
          <div className="flex gap-4">
          
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-gray-200 transition-colors"
            >
              <Disc2 size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#333] border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1A1A1A] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#333] border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1A1A1A] transition-colors"
            >
              <Send size={18} />
            </a>
          </div>

         
          <p className="text-xs font-bold uppercase tracking-widest text-[#666]">
            ©2023 Reserved
          </p>

        
          <div className="flex gap-4">
            <a
              href="#"
              className="px-6 py-2 rounded-full border border-[#333] text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-colors"
            >
              Terms & Condition
            </a>
            <a
              href="#"
              className="px-6 py-2 rounded-full border border-[#333] text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
