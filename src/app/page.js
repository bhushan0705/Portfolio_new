// // 'use client'
// // // import Image from "next/image";
// // import Scene from "./components/Scene";
// // // import Preloader from "./components/Preloader";


// // export default function Home() {
// //   return (
// //     <div >
// //       {/* <Preloader></Preloader> */}

// //          <h1>hello venom</h1>
// //            {/* <Scene /> */}

       
// //     </div>
// //   );
// // }


// import Loader from './components/Loader'

// export default function Home() {
//   return (
//     <main className="h-screen bg-neutral-900 text-white flex items-center justify-center">
//       <Loader />

//       <h1 className="text-5xl font-bold">
//         Your Website
//       </h1>
//     </main>
//   )
// }


'use client'
import React from 'react'
import Loader from './components/Loader'
import Scene from './components/Scene'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'

const page = () => {
  return (
    <div className='h-screen bg-neutral-900'>
      {/* <Loader></Loader> */}
      <h1 className='text-white'>hello venom</h1>
      <Canvas>
 <Dog></Dog>
      </Canvas>
     
      {/* <Scene></Scene> */}
    </div>
  )
}

export default page
