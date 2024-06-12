import { useRef, useState } from "react";
import * as THREE from "three";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function interpolateColor(elapsedTime: number): string {
  const colors = [
    [0, 191, 255], // cyan
    [255, 0, 0], // red
    [0, 0, 255], // blue
    [0, 255, 0], // green
    [148, 0, 211], // violet
  ];

  const transitionDuration = 8;
  const totalSteps = colors.length - 1;
  const currentStep = (elapsedTime / transitionDuration) % totalSteps;
  const currentIndex = Math.floor(currentStep);
  const nextIndex = (currentIndex + 1) % colors.length;
  const ratio = currentStep - currentIndex;

  const currentColor = colors[currentIndex];
  const nextColor = colors[nextIndex];

  const r = Math.round(
    currentColor[0] + (nextColor[0] - currentColor[0]) * ratio
  );
  const g = Math.round(
    currentColor[1] + (nextColor[1] - currentColor[1]) * ratio
  );
  const b = Math.round(
    currentColor[2] + (nextColor[2] - currentColor[2]) * ratio
  );

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export default function Model(props: any) {
  const {
    nodes,
    materials,
  }: {
    nodes: any;
    materials: any;
  } = useGLTF("/bulb_2.glb");
  const rootState = useThree();
  const groupRef = useRef<THREE.Group>();
  const outerGroupRef = useRef<THREE.Group>();
  const [filamentMaterialColor, setFilamentMaterialColor] =
    useState<string>("blue");
  useFrame((state) => {
    setFilamentMaterialColor(interpolateColor(state.clock.elapsedTime));
    groupRef?.current?.rotateY(Math.sin(state.clock.elapsedTime) * 0.018);
    groupRef?.current?.rotateZ(Math.sin(state.clock.elapsedTime) * 0.0018);
  });
  return (
    <>
      <group {...props} scale={rootState.viewport.width / 4}>
        <group
          {...props}
          ref={outerGroupRef}
          scale={1.8}
          dispose={null}
          position={[0, 0.4, -2.4]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text.geometry}
            position={[-0.045, 0.176, -0.223]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.28}
          >
            <meshStandardMaterial
              emissive={"#B1AEA1"}
              color={"#B1AEA1"}
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>

        <group
          {...props}
          scale={7}
          dispose={null}
          ref={groupRef}
          position={[0, -1, -2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bulb_bottom.geometry}
          ></mesh>
          <mesh castShadow receiveShadow geometry={nodes.Bulb_Glass.geometry}>
            <MeshTransmissionMaterial
              thickness={0.08}
              roughness={0.0}
              backsideThickness={0.72}
              chromaticAberration={0.07}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bulb_Holder.geometry}
            material={materials["Bulb Holder Metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bulb_Inner_glass.geometry}
          >
            <MeshTransmissionMaterial
              chromaticAberration={0}
              thickness={0.8}
              backsideThickness={1}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bulb_Strands.geometry}
            material={materials["Strand metal both outside"]}
          />
          <mesh castShadow receiveShadow geometry={nodes.Filament.geometry}>
            <meshStandardMaterial
              emissive={filamentMaterialColor}
              emissiveIntensity={20}
              toneMapped={false}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Filament_supports.geometry}
            material={materials["Strand metal both"]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/bulb_2.glb");
