// "use client"

// import { Canvas } from "@react-three/fiber"

// function Box() {
//   return (
//     <mesh>
//       <boxGeometry />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   )
// }

// export default function Scene() {
//   return (
//     <Canvas camera={{ position: [10, 10, 5] }}>
//       <ambientLight intensity={1} />

//       <directionalLight
//         position={[2, 2, 2]}
//         intensity={2}
//       />

//       <Box />
//     </Canvas>
//   )
// }

'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'


const Cube =({position, size ,color})=>{

    const ref = useRef();


    useFrame((state, delta)=>{
        ref.current.rotation.x +=delta 
        ref.current.rotation.y +=delta 
        // console.log(delta);
        
    })

    return(
        <mesh position={position} ref={ref}>
            <boxGeometry args={size}></boxGeometry>
            <meshStandardMaterial color={color}></meshStandardMaterial>
        </mesh>
    )
}

const Scene = () => {
  return (
    <Canvas>
        {/* <ambientLight intensity={0.5} /> */}
        {/* <pointLight position={[1,0,1]} /> */}
        <directionalLight position={[0,0,2]}></directionalLight>

        <Cube position={[0,0,0]} size={[2,2,2]} color={'red'}></Cube>



        {/* <mesh position={[4,0,0]}>
            <boxGeometry ></boxGeometry>
            <meshStandardMaterial color={'red'}></meshStandardMaterial>    
        </mesh>
        <mesh position={[-1,0,0]}>
            <boxGeometry ></boxGeometry>
            <meshStandardMaterial color={'red'}></meshStandardMaterial>    
        </mesh>
        <mesh position={[0,-1,0]}>
            <boxGeometry></boxGeometry>
            <meshStandardMaterial color={'red'}></meshStandardMaterial>    
        </mesh>

        <mesh>
            <sphereGeometry></sphereGeometry>
            <meshStandardMaterial color={'red'}></meshStandardMaterial>  
        </mesh>
        <mesh>
            <sphereGeometry></sphereGeometry>
             <meshStandardMaterial color={'red'}></meshStandardMaterial>  
        </mesh>
        <mesh>
            <planeGeometry ></planeGeometry>
             <meshStandardMaterial color={'red'}></meshStandardMaterial>  
        </mesh>
        <mesh>
            <cylinderGeometry></cylinderGeometry>
             <meshStandardMaterial color={'red'}></meshStandardMaterial>  
        </mesh> */}
    </Canvas>
  )
}

export default Scene
