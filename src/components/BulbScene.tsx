import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import BulbModel from "./BulbModel";
import { AdaptiveDpr, CameraControls, Environment } from "@react-three/drei";

const BulbScene = () => {
  const [_, setWidth] = useState(window.innerWidth);
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
    <Canvas className="bg-black h-fit relative w-1/3 max-w-md">
      <BulbModel />
      <AdaptiveDpr pixelated />
      <directionalLight intensity={0.8} position={[0, 1, 0]} color={"green"} />
      <directionalLight intensity={0.8} position={[0, -1, 2]} />
      <directionalLight intensity={0.8} position={[0, -1, -2]} />

      <Environment preset="dawn" environmentIntensity={0.15} />
      <CameraControls />
    </Canvas>
  );
};

export default BulbScene;
