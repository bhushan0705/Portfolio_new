'use client'
import { OrbitControls, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import ScrollTrigger from "gsap/ScrollTrigger";

const Dog = () => {
  const model = useGLTF("/models/dog.drc.glb");
  const modelRef = useRef();
gsap.registerPlugin(ScrollTrigger);
  // console.log(model);

  useThree(({ camera, scene, gl }) => {
    // console.log(camera.position);
    camera.position.z = 0.6555;
  });

  const {actions} =  useAnimations(model.animations, model.scene)


  useEffect(()=>{
actions["Take 001"].play()

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#section-2',
        start: 'top center',
        endTrigger: '#section-3',
        end: 'bottom center',
        scrub:true,
        // markers: true,
      }
    })
    tl.to(modelRef.current.position,{
      z:'-0.2',
      // y:'0.1',
      // opacity:0
    })
    .to(modelRef.current.position,{
      y:'1.2',
      duration:3,
      
    })
    // .to(modelRef.current.rotation,{
    //   y:'5'
    // })
  },[])

  const texture = useTexture({
    colorMap: "/matcap/mat-4.png",
    normalMap: "/dog_normals.jpg",
    branchMap:'/branches_diffuse.jpeg',
    branchColorMap:'/branches_normals.jpeg',
    eyeColorMap:'/matcap/mat-7.png'
  });

  texture.colorMap.flipY = false;
  texture.normalMap.flipY = false;

  model.scene.traverse((child) => {
    if (child.name.includes("DOGSTUDIO_RIGDOGSTUDIO")) {

  child.material = new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness: 1,
    emissiveIntensity: 1,
  })
}
    else if(child.name.includes("DOG")) {
      child.material = new THREE.MeshStandardMaterial({
        normalMap: texture.normalMap,
        map: texture.colorMap,
        roughness: 0.3,
        metalness: 0.6,
      });
    }
    else{
      child.material = new THREE.MeshStandardMaterial({
        map: texture.branchMap,
        normalMap: texture.branchColorMap,
        roughness: 0.3,
        metalness: 0.6,
      });
    } 
  });

// its imp dont delete
    useFrame((state) => {
    if (!modelRef.current) return;
    const x = state.mouse.x;
    const y = state.mouse.y;
    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y,
      1 + (x * 0.3),   // 👈 tweak 0.3 to control horizontal sensitivity
      0.05              // 👈 tweak lerp speed (lower = lazier follow)
    );
    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      y * 0.1,          // 👈 tweak 0.1 to control vertical sensitivity
      0.05
    );
  });

  return (
    <>
      <primitive
  ref={modelRef}
  object={model.scene}
  position={[0.2, -0.5, 0]}
  rotation={[0, 3.5, 0]}
/>
      <directionalLight
        position={[0, 0, 5]}
        color={0xffffff}
        intensity={10}
      ></directionalLight>
      {/* <OrbitControls></OrbitControls> */}
    </>
  );
};

export default Dog;
