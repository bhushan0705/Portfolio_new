import React from "react";

const InfiniteRollHero = () => {

  const marqueeItems = [
    "AI ENGINEER",
    "•",
    "FULL-STACK DEVELOPER",
    "•",
    "PYTHON DEVELOPER",
    "•",
    "GRAPHIC DESIGNER",
    "•",
  ];

  return (
    <div className="absolute bottom-0 w-full overflow-hidden border-y border-white/10 py-2">
      <div className="flex w-max animate-marquee gap-10">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className=" text-white whitespace-nowrap"
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  );
};

export default InfiniteRollHero;