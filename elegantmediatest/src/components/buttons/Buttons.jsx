import { ArrowUpRight } from "lucide-react";

export const ArrowUpRightButton = () => {
  return (
    <div className="absolute top-0 right-0">
      <div className="bg-secondary w-24 h-24 flex items-center justify-center rounded-bl-[2.5rem]">
        <div className="bg-[#DEE8E5] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-sm">
          <ArrowUpRight size={22} className="text-gray-800" />
        </div>
      </div>
    </div>
  );
};
