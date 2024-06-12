import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import BulbModel from "./BulbModel";
import {
  AdaptiveDpr,
  CameraControls,
  Environment,
  PerspectiveCamera,
  Plane,
  Text,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Material } from "three";

const BulbScene = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function widthSetter() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", widthSetter);
    return () => {
      window.removeEventListener("resize", widthSetter);
    };
  });
  return (
    <Canvas className="bg-black h-screen absolute max-w-min">
      <BulbModel />
      {/* <AdaptiveDpr pixelated /> */}
      <directionalLight intensity={0.8} position={[0, 1, 0]} color={"green"} />
      <directionalLight intensity={0.8} position={[0, -1, 2]} />
      <directionalLight intensity={0.8} position={[0, -1, -2]} />

      <Environment preset="dawn" environmentIntensity={0.15} />
      <CameraControls />
      {/* <ambientLight intensity={} /> */}
      {/* <EffectComposer>
        <Bloom />
      </EffectComposer> */}
      {/* <Text
        position={[0, 1, -4.2]}
        castShadow
        // strokeWidth={1}
        fontWeight={600}
        rotation={[0, 0, 0.1]}
        scale={width / 1000}
      >
        Hey there!
        <meshStandardMaterial
          emissive={"#B1AEA1"}
          color={"#B1AEA1"}
          metalness={1}
          roughness={0.1}
          colorWrite
          emissiveIntensity={0.5}
        />
      </Text> */}
      {/* <Plane position={[0, 0, -4.5]} scale={5}>
        <meshBasicMaterial color={"black"} colorWrite />
      </Plane>
      <Plane position={[0, 0, -5]} scale={10}>
        <meshBasicMaterial color={"black"} />
      </Plane> */}
      {/* <PerspectiveCamera makeDefault /> */}
    </Canvas>
  );
};

export default BulbScene;
