'use client'
import IconComp from '@/app/components/IconComp';
import gsap from 'gsap';
import Link from 'next/link'
import React, { useRef } from 'react'

const page = () => {

    const links = [
        { href: '/',path:'ABOUT'},
        { href: '/',path:'PROJECT'},
        { href: '/',path:'CONNECT'},
        
    ]

    const navRef = useRef();

const handleEnter = (e) => {
  gsap.to(e.currentTarget.children[0], {
    yPercent: -50,
    duration: 0.3,
    ease: "expo.out",
  });
};

const handleLeave = (e) => {
  gsap.to(e.currentTarget.children[0], {
    yPercent: 0,
    duration: 0.3,
    ease: "expo.out",
  });
};


return (
    <>
    
   
    <div className='flex fixed w-full items-center justify-between px-10 py-5 bg-black/50 text-white/70 shadow-md navbar'>
    <Link href={'#'}>BHUSHAN</Link>
    <div>
        <p>bhushan752002@gmail.com</p>
    </div>
      <ul className="flex  items-center justify-between gap-10 ">
        {
            links.map((link, i)=>(
                <li key={i}>
                    <Link href={link.href} className='relative block h-[24px] overflow-hidden' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <div ref={navRef} className='will-change-transform'>
                        <div className='h-[24px] leading-[24px]'>{link.path}
                        </div>
                        <div className='h-[24px] leading-[24px]'>{link.path}
                        </div>
                    </div>
                    </Link>
                </li>
            ))
        }
      </ul>

    </div>


            <IconComp></IconComp>

     </>
  )
}

export default page
