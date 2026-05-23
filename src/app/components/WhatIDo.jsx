"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import { RiArrowRightDownLine } from "react-icons/ri";

const roles = [
  {
    title: "AI DEVELOPER",
    subtitle: "Building intelligent systems & AI solutions",
    desc: `Developing AI agents, chatbots, and machine
learning models using Python, TensorFlow, and
PyTorch. Specializing in LLMs, NLP, deep learning,
and autonomous systems.`,
    orb: "#d8b4fe",
    tags: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "LLMs",
      "NLP",
      "Deep Learning",
    ],
  },

  {
    title: "FULL-STACK",
    subtitle: "Modern web development & scalable applications",
    desc: `Building responsive and performant web
applications with React, Next.js, Node.js and
modern databases.`,
    orb: "#ffffff",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
  },
];

const WhatIDo = () => {

  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const activateCard = (activeCard) => {
      cards.forEach((card) => {
        const body =
          card.querySelector(".card-body");
        const arrow =
          card.querySelector(".arrow");
        if (card === activeCard) {
          gsap.to(card, {
            height: 430,
            duration: 0.55,
            ease: "power4.out",
          });

          gsap.to(body, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.15,
          });

          gsap.to(arrow, {
            rotate: -180,
            duration: 0.4,
          });

        } else {
          gsap.to(card, {
            height: 150,
            duration: 0.55,
            ease: "power4.out",
          });

          gsap.to(body, {
            opacity: 0,
            y: 20,
            duration: 0.2,
          });

          gsap.to(arrow, {
            rotate: 0,
            duration: 0.4,
          });
        }
      });

    };

    // activateCard(cards[0]);

cards.forEach((card) => {

  card.addEventListener(
    "mouseenter",
    () => activateCard(card)
  );

  card.addEventListener(
    "mouseleave",
    () => {
      gsap.to(card, {
        height: 150,
        duration: 0.55,
        ease: "power4.out",
      });

      gsap.to(
        card.querySelector(".card-body"),
        {
          opacity: 0,
          y: 20,
          duration: 0.2,
        }
      );

      gsap.to(
        card.querySelector(".arrow"),
        {
          rotate: 0,
          duration: 0.4,
        }
      );
    }
  );

});

  }, []);

  return (
    <section className=" text-white flex items-center justify-between">
      {/* LEFT TEXT */}
      <div>
        <h1
        className="text-5xl font-extrabold"
        //   className=" text-2xl font-black leading-none tracking-[-10px] text-white/95 uppercase"
          >
          WHAT I DO
        </h1>
      </div>


      {/* RIGHT side */}
      <div className="w-[500px] relative z-10 flex flex-col border-2 border-dashed">

        {roles.map((role, i) => (
          <div
            key={i}
            ref={(el) =>
              (cardsRef.current[i] = el)
            }
            className="relative overflow-hidden"
            style={{
              height: "150px",
              borderBottom:'2px dotted white'
            }}
          >

            {/* corner borders */}
            <div className="absolute top-[14px] left-[14px] w-6 h-6 border-l-[5px] border-t-[5px] border-white"></div>

            <div className="absolute top-[14px] right-[14px] w-6 h-6 border-r-[5px] border-t-[5px] border-white"></div>

            <div className="absolute bottom-[14px] left-[14px] w-6 h-6 border-l-[5px] border-b-[5px] border-white"></div>

            <div className="absolute bottom-[14px] right-[14px] w-6 h-6 border-r-[5px] border-b-[5px] border-white"></div>

            {/* CONTENT */}
            <div className="relative z-10 px-[58px] py-[44px]">

              {/* title */}
              <h1>
                {role.title}
              </h1>

              {/* body */}
              <div
                className=" card-body opacity-0 translate-y-5 mt-7">
                <p
                  className="text-zinc-600 mb-0">
                  {role.subtitle}
                </p>

                <p
                  className=" text-[18px] leading-[1.55] max-w-[430px] mb-10 ">
                  {role.desc}
                </p>

                <p
                  className="text-zinc-600 mb-4">
                  Skillset & tools
                </p>

                <div className="flex flex-wrap gap-3 max-w-[420px]">

                  {role.tags.map((tag, idx) => (

                    <span
                      key={idx}
                      className=""
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* arrow */}
            <button
              className=" arrow absolute right-[28px] bottom-[28px] w-[42px] h-[42px] border border-white/70 flex items-center justify-center text-[22px] ">
                <i className="ri-arrow-up-long-fill"></i>
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default WhatIDo;