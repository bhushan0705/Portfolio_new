'use client'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

const Loader = () => {
    const [progress, setProgress] = useState(0)
    const [showLoader, setShowLoader] = useState(true)
    const textRef = useRef();
    const barRef = useRef();
    const msgRef = useRef();
    const topRef = useRef();
    const bottomRef = useRef();

useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
        // current+=10
        current += Math.random() *15
        setProgress(current)
        
        if(current>=100){
            current=100
            clearInterval(interval)

            const tl = gsap.timeline();

            tl.to(([textRef.current, barRef.current]),{
                opacity:0,
                duration:1,
                ease:'power2.out'
            })
            .to(msgRef.current,{
                opacity:1,
                y:-40,
                duration:1,
                ease:'power2.out'
            })
            .to(msgRef.current,{
                opacity:0,
                y:-80,
                duration:1,
                delay:0.7
            })
            .to(topRef.current,{
                y:'-100%',
                duration:1.2,
                ease:'power4.inOut'
            })
            .to(bottomRef.current,{
                y:'100%',
                duration:1.2,
                ease:'power4.inOut',
                onComplete:()=>{
                    setShowLoader(false)
                }

            },
            
          '<'  // this is used for 'same time animation with previous '
        
        )

            // setTimeout(()=>{
            //     setShowLoader(false)
            // },1000)
        }
            setProgress(Math.round(current))


    }, 150);

}, [])
if(!showLoader) return null


  return (
    // <div className='fixed inset-0 bg-black z-50 flex items-center justify-center '>
    <div className='fixed inset-0 overflow-hidden z-99 '>

        {/* top pannel */}
        <div ref={topRef} className='absolute top-0 left-0 h-1/2 w-full bg-black'></div>

        {/* bottom pannel */}
        <div ref={bottomRef} className='absolute bottom-0 left-0 h-1/2 w-full bg-black'></div>


    <div className='absolute inset-0 flex flex-col items-center justify-center'>

    <div ref={msgRef} className='absolute text-white text-5xl opacity-0'>
        welcome.
    </div>


    <div ref={barRef} className='w-[300px] h-[2px] bg-neutral-800'>
        <div  className='h-full bg-white' style={{width:`${progress}%`}}>   
        </div>
    </div>


        <h1 ref={textRef} className='text-white text-2xl mt-6'>
        {progress}%
     </h1>

    </div>

    </div>
  )
}

export default Loader
