import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Environment } from "@react-three/drei";
import MainScene from "./MainScene";

function Scene() {
  return (
    <Canvas
      dpr={1}
      className="w-screen h-screen bg-black "
      camera={{
        fov: 50,
        position: [1.5, 0.3, 2.5],
      }}
    >
      <MainScene />
      <AdaptiveDpr pixelated />
      <Environment
        preset="dawn"
        // city in light mode
        // dawn in dark mode
        backgroundRotation={[0.5, 5, 0.5]}
        environmentIntensity={1.5}
        blur={2}
      ></Environment>
      {/* <CameraControls /> */}
    </Canvas>
  );
}

export default Scene;
