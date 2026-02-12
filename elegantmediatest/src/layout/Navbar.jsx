import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full px-12 py-4 flex justify-between items-center relative z-50">
      <button className="p-2 rounded-full border border-primary/20 hover:bg-white/50 ">
        <Menu size={20} />
      </button>

      <div className="text-2xl font-normal tracking-tighter hidden md:flex items-center gap-8">
        Biner
      </div>

      {/* Contact Button */}
      <button className="px-5 py-2 rounded-full border border-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
