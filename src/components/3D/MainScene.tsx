import { useEffect, useRef, useState } from "react";
// import CarModel from "./CarModel";
import * as THREE from "three";
import RoadModel from "./RoadModel";
import { Sparkles } from "@react-three/drei";
import CarModel from "./CarModel";
interface ModelParameters {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number | undefined;
}

function calculateModelParameters(width: number): ModelParameters {
  let position: [number, number, number] = [1, -0.42, 0.01];
  let rotation: [number, number, number] = [0.08, 0.02, 0.2];
  let scale: number | undefined;
  if (width > 2300) {
    position = [1.55, -0.4, 0.01];
    rotation = [0.1, -0.32, 0.2];
  } else if (width <= 2300 && width > 2068) {
    position = [1.5, -0.4, 0.01];
    rotation = [0.11, -0.32, 0.2];
  } else if (width <= 2068 && width > 1952) {
    position = [1.4, -0.4, 0.01];
    rotation = [0.11, -0.32, 0.2];
  } else if (width <= 1952 && width > 1880) {
    position = [1.3, -0.4, 0.01];
    rotation = [0.12, -0.3, 0.2];
  } else if (width <= 1880 && width > 1578) {
    position = [1.5, -0.4, 0.01];
    rotation = [0.15, -0.3, 0.2];
  } else if (width <= 1578 && width > 1309) {
    position = [1.2, -0.42, 0.01];
    rotation = [0.15, -0.2, 0.2];
  } else if (width <= 1309 && width > 1080) {
    position = [1, -0.42, 0.01];
    rotation = [0.15, -0.15, 0.2];
    scale = 0.8;
  } else if (width <= 1080 && width > 916) {
    position = [1, -0.42, 0.01];
    rotation = [0.08, 0.02, 0.2];
    scale = 0.8;
  } else if (width <= 916 && width > 870) {
    position = [1, -0.42, 0.01];
    rotation = [0.08, 0.02, 0.2];
    scale = 0.6;
  } else if (width <= 870 && width > 740) {
    position = [0.85, -0.42, 0.01];
    rotation = [0.05, 0.02, 0.2];
    scale = 0.5;
  } else if (width <= 740 && width > 676) {
    position = [0.78, -0.42, 0.01];
    rotation = [0.05, 0.07, 0.2];
    scale = 0.5;
  } else if (width <= 676 && width > 580) {
    position = [0.7, -0.42, 0.01];
    rotation = [0.15, 0.15, 0.2];
    scale = 0.45;
  } else if (width <= 580 && width > 520) {
    position = [0.65, -0.42, 0.01];
    rotation = [0.1, 0.17, 0.2];
    scale = 0.45;
  } else if (width <= 520 && width > 502) {
    position = [0.6, -0.4, 0.05];
    rotation = [0.05, 0.2, 0.2];
    scale = 0.4;
  } else if (width <= 502 && width > 460) {
    position = [0.5, -0.7, 0.05];
    rotation = [-0.06, 0.2, 0.2];
    scale = 0.5;
  } else if (width <= 460 && width > 402) {
    position = [0.2, -0.87, 0.05];
    rotation = [-0.15, 0.2, 0.2];
    scale = 0.5;
  } else if (width <= 402 && width > 310) {
    position = [0.1, -1.1, 0.05];
    rotation = [-0.15, 0.2, 0.2];
    scale = 0.5;
  } else if (width <= 310) {
    position = [0, -1.1, 0.05];
    rotation = [-0.15, 0.3, 0.2];
    scale = 0.5;
  }

  return { position, rotation, scale };
}

function MainScene() {
  const [modelParams, setModelParams] = useState<ModelParameters>(
    calculateModelParameters(window.innerWidth)
  );
  const sparklesGroup = useRef<THREE.Group>(null);
  useEffect(() => {
    function sparkleScrollMove() {
      sparklesGroup.current?.rotation.set(-window.scrollY * 0.00035, 0, 0);
      sparklesGroup.current?.position.set(0, window.scrollY * 0.005, 0);
    }
    function modelPositionSetter() {
      setModelParams(calculateModelParameters(window.innerWidth));
      console.log("works");
    }
    window.addEventListener("scroll", sparkleScrollMove);
    window.addEventListener("resize", modelPositionSetter);
    return () => {
      window.removeEventListener("resize", modelPositionSetter);
      window.removeEventListener("scroll", sparkleScrollMove);
    };
  }, []);
  return (
    <>
      <group
        position={modelParams.position}
        rotation={modelParams.rotation}
        scale={modelParams.scale}
      >
        <RoadModel />
        <CarModel />
      </group>
      <group ref={sparklesGroup}>
        <Sparkles
          count={400}
          color={100000000}
          size={10}
          opacity={0.25}
          castShadow
          scale={10}
          position={[0, 0, 0]}
          noise={202}
        />
        <Sparkles
          count={100}
          color={10000000}
          size={7}
          scale={10}
          position={[0, 0, 0]}
          noise={20}
        />
      </group>
    </>
  );
}

export default MainScene;
