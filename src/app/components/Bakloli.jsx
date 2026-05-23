"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Bakloli = () => {

  const circleRef = useRef();

  useEffect(() => {

    gsap.to(circleRef.current, {
      rotate: 360,
      duration: 10,
      ease: "none",
      repeat: -1,
    });

  }, []);

  const text =
    "WEB DESIGN • BRANDING • DEVELOPMENT • ";

  return (
    <div className="relative flex items-center justify-center h-screen text-white overflow-hidden">

      {/* Circle */}
      <div
        ref={circleRef}
        className="relative w-[500px] h-[400px]"
      >

        {text.split("").map((char, i) => {

          const rotation =
            (360 / text.length) * i;

          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 text-2xl font-semibold"

              style={{
                transform: `
                  rotate(${rotation}deg)
                  translateY(-200px)
                  rotate(${-rotation}deg)
                `,
              }}
            >
              {char}
            </span>
          );
        })}

      </div>

      {/* Center */}
      <h1 className="absolute text-2xl font-bold">
        18.478877,73.806464
      </h1>

    </div>
  );
};

export default Bakloli;