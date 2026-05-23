"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import InfiniteRollHero from "./InfiniteRollHero";
import TextType from "@/components/TextType";

gsap.registerPlugin(TextPlugin);

const Hero = () => {

  const textRef = useRef();

  // useEffect(() => {

  //   const tl = gsap.timeline({
  //     repeat: -1,
  //   });

  //   tl.to(textRef.current, {
  //     duration: 1,
  //     text: "Mern Stack Developer",
  //     ease: "none",
  //   })
  //     .to({}, { duration: 1 })

  //     .to(textRef.current, {
  //       duration: 1,
  //       text: "AI Developer",
  //       ease: "none",
  //     })
  //     .to({}, { duration: 1 })

  //     .to(textRef.current, {
  //       duration: 1,
  //       text: "Full Stack Developer",
  //       ease: "none",
  //     })
  //     .to({}, { duration: 1 });

  // }, []);

  return (
    <div className="overflow-hidden">
      <div className="min-h-screen flex items-center justify-center text-white">
      <div className="space-y-2">
        <p className="text-xl">
          Hello! I'm
        </p>
        <h1 className="text-5xl font-bold">
          BHUSHAN DANDAVATE
        </h1>
      </div>


      <div className="mt-8 space-y-4 flex flex-col items-end justify-end w-full pl-10">
        {/* Typewriter */}

<TextType
  className="text-3xl font-bold"
  text={[
    "MERN Stack Developer",
    "Frontend Developer",
    "Software Developer"
  ]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  deletingSpeed={50}
  variableSpeed={{
    min: 60,
    max: 120,
  }}
  cursorBlinkDuration={0.5}
/>
        <p className="max-w-xl text-zinc-300 leading-relaxed w-[300px]">
          MERN & Full-Stack Developer.
          I build portfolios, and e-commerce websites.
        </p>
      </div>
    </div>
     {/* <InfiniteRollHero></InfiniteRollHero> */}
    </div>
  
  );
};

export default Hero;