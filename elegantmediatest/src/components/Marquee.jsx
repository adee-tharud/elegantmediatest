import React, { useMemo } from "react";
import { Star } from "lucide-react";

const Marquee = ({
  items = ["EVER", "GREEN", "NATURE", "VEGETATE", "FRESH"],
  repeat = 4,
  speedClass = "animate-marquee",
}) => {
  // Normalize + make stable keys
  const normalized = useMemo(
    () => items.map((t) => String(t).trim()).filter(Boolean),
    [items]
  );

  return (
    <div className="w-full bg-[#D1DAD1] overflow-hidden py-4 border-y border-primary/5">
      <div className={`flex whitespace-nowrap ${speedClass}`}>
        {Array.from({ length: repeat }).map((_, trackIndex) => (
          <div
            key={trackIndex}
            className="flex items-center gap-12 mx-6"
            aria-hidden={trackIndex !== 0}
          >
            {normalized.map((item, i) => (
              <span
                key={`${trackIndex}-${item}-${i}`}
                className="inline-flex items-center gap-12"
              >
                <span className="text-lg font-bold tracking-widest text-primary uppercase">
                  {item}
                </span>
                <Star size={15} fill="currentColor" className="text-primary" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
