"use client";

import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

const IconComp = () => {

  const logos = [
    {
      icon: "ri-github-fill",
      link: "https://github.com/bhushan0705",
    },
    {
      icon: "ri-linkedin-box-fill",
      link: "#",
    },
    {
      icon: "ri-twitter-x-fill",
      link: "#",
    },
    {
      icon: "ri-instagram-line",
      link: "#",
    },
  ];

  useEffect(() => {

    gsap.fromTo(
      ".social-icon",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

  }, []);

  return (

    <div
      className="
        fixed
        left-5
        top-1/2
        -translate-y-1/2
        z-50
      "
    >

      <ul className="flex flex-col gap-6">

        {logos.map((logo, i) => (

          <li
            key={i}
            className="social-icon"
          >

            <Link
              href={logo.link}
              target="_blank"
              className="
                flex
                items-center
                justify-center
                text-white
                text-3xl
                hover:scale-125
                transition-all
                duration-300
              "
            >
              <i className={logo.icon}></i>
            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
};

export default IconComp;