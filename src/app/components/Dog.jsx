'use client'
import { OrbitControls, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const Dog = () => {
  const model = useGLTF("/models/dog.drc.glb");

  // console.log(model);
  useThree(({ camera, scene, gl }) => {
    console.log(camera.position);
    camera.position.z = 0.755;
  });

  const {actions} =  useAnimations(model.animations, model.scene)

  useEffect(()=>{
actions["Take 001"].play()
  },[actions])

  const texture = useTexture({
    colorMap: "/matcap/mat-4.png",
    normalMap: "/dog_normals.jpg",
  });

  texture.colorMap.flipY = false;
  texture.normalMap.flipY = false;

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = new THREE.MeshStandardMaterial({
        normalMap: texture.normalMap,
        map: texture.colorMap,
        roughness: 0.3,
        metalness: 0.6,
      });
    }
  });

  return (
    <>
      <primitive
        object={model.scene}
        position={[0.3, -0.5, 0]}
        rotation={[0, 1, 0]}
      ></primitive>
      <directionalLight
        position={[0, 0, 5]}
        color={0xffffff}
        intensity={10}
      ></directionalLight>
      <OrbitControls></OrbitControls>
    </>
  );
};

export default Dog;
