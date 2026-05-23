'use client'
import React, { useEffect, useRef } from 'react'
import Loader from './components/Loader'
import Scene from './components/Scene'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './pages/Navbar/page'
import Pattern from './pages/Pattern/page'
import Hero from './components/Hero'
import InfiniteRollHero from './components/InfiniteRollHero'
import Connect from './components/Connect'
import Bakloli from './components/Bakloli'
import WhatIDo from './components/WhatIDo'
import ClickSpark from '@/components/ClickSpark'
import CarrieExp from './components/CarrierExp'
import TechStack from './components/TechStack'
// import ClickSpark from './ClickSpark';

const page = () => {
  gsap.registerPlugin(ScrollTrigger)
  const pageRef = useRef();

const glbRef = useRef();

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-2',
      start: 'top center',
      endTrigger:'#section-2',
      end: 'top center',
      scrub: true,
      // markers: true,
    }
  })
  tl.to(glbRef.current, {
    // opacity: 0,
    // zIndex:-1,
    ease: 'none',
  })
  
}, [])
return (
  <>
  
 
{/* <ClickSpark
  sparkColor="#ff0000"
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
  zIndex={9999}
> */}

  <div>


{/* <Loader></Loader> */}
    {/* <div ref={glbRef} style={{height: "100vh",width: '100vw',position: 'fixed',top: 0,left: 0,zIndex: 1,
      backgroundImage: "url(/background-l.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}> */}
    <div
  ref={glbRef}
  style={{
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: "none",
  }}
>
      <Canvas>
        <Dog />
      </Canvas>
    </div>

    <div style={{ position: 'relative'}}>
      <section className='overflow-hidden' style={{
        backgroundImage: "url(/background-l.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"}}
      >
        <Navbar />
        <div className='px-30'>
        <Hero></Hero>
        </div>
        <InfiniteRollHero></InfiniteRollHero>
      </section>

      <section id='section-2' className='bg-green-300 px-30'>sec 2
        {/* <Bakloli></Bakloli> */}
        <WhatIDo></WhatIDo>
      </section>

      <section id='section-3' className='px-30 bg-amber-200'>sec 3
        {/* <Pattern></Pattern> */}
        <CarrieExp></CarrieExp>
      </section>
      <section id='section-4'>
        {/* <Connect></Connect> */}
      </section>
      <section id='section-4'>
        {/* <Connect></Connect> */}
        <TechStack></TechStack>
      </section>
      <section id='section-6'>
        <Connect></Connect>
      </section>
    </div>
  </div>
  {/* </ClickSpark> */}

   </>
)
}

export default page










//  https://reactbits.dev/animations/pixel-transition  add this one
// https://reactbits.dev/animations/logo-loop
// https://reactbits.dev/animations/click-spark