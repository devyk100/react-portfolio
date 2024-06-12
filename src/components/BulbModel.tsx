import React, { useRef } from "react";
import * as THREE from "three";
import {
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { BloomEffect } from "postprocessing";
import { color, metalness } from "three/examples/jsm/nodes/Nodes.js";
import { Group, Vector3 } from "three";

export default function Model(props: any) {
  const {
    nodes,
    materials,
  }: {
    nodes: any;
    materials: any;
  } = useGLTF("/bulb_2.glb");
  const metalProps = useControls({
    metalness: {
      value: 0.4,
      min: 0,
      max: 10,
      step: 0.05,
    },
    color: "#d5d5d5",
  });
  const rootState = useThree();
  const materialProps = useControls({
    thickness: {
      value: 0.35,
      min: 0,
      max: 3,
      step: 0.05,
    },
    backsideThickness: {
      value: 0.2,
      min: 0,
      max: 3,
      step: 0.05,
    },
    chromaticAberration: {
      value: 0.17,
      min: 0,
      max: 3,
      step: 0.02,
    },
  });
  const groupRef = useRef<Group>();
  const outerGroupRef = useRef<Group>();
  useFrame((state, delta) => {
    // outerGroupRef.current?.lookAt(new THREE.Vector3(2, 0));
    groupRef?.current?.rotateY(Math.sin(state.clock.elapsedTime) * 0.02);
    groupRef?.current?.rotateZ(Math.sin(state.clock.elapsedTime) * 0.005);
    // groupRef?.current?.;
  });
  // options.add_argument("--disable-3d-apis")
  return (
    <>
      <group
        {...props}
        ref={outerGroupRef}
        scale={rootState.viewport.width}
        dispose={null}
        // ref={groupRef}
        // rotation={[0, 5, 0]}
        position={[0, 1.2, -2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          // material={materials.Material}
          position={[-0.045, 0.176, -0.223]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.3}
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
        scale={rootState.viewport.width * 2}
        dispose={null}
        ref={groupRef}
        // rotation={[0, 5, 0]}
        position={[0, 0, -2]}
      >
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Environment.geometry}
          material={nodes.Environment.material}
          position={[-0.152, -0.08, -0.119]}
          scale={[5.261, 4.031, 1]}
          /> */}

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bulb_bottom.geometry}
          // material={materials["Bulb Bottom"]}
          // position={[0.011, -0.232, 0.001]}
          // rotation={[0, Math.PI / 2, 0]}
          // scale={0.054}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bulb_Glass.geometry}
          // material={materials["Bulb main glass"]}
          // position={[0.012, 0.232, 0.001]}
          // rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          // scale={0.224}
        >
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
          // position={[0.012, -0.14, 0.001]}
          // rotation={[0, Math.PI / 2, 0]}
          // scale={0.181}
        >
          {/* <meshStandardMaterial
            {...metalProps}
            color={"gray"}
            metalness={1}
            roughness={0.2}
            transparent
            /> */}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bulb_Inner_glass.geometry}
          // material={materials["Bulb Inner glass"]}
          // position={[0.011, -0.006, 0.001]}
          // rotation={[0, Math.PI / 2, 0]}
          // scale={-0.035}
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
          // position={[0.012, -0.176, 0.001]}
          // rotation={[0, Math.PI / 2, 0]}
          // scale={0.036}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filament.geometry}
          // material={materials["Bulb Filame blue"]}
          // position={[0.021, 0.176, 0.001]}
          // rotation={[-Math.PI, -Math.PI / 2, 0]}
          // scale={0.003}
        >
          <meshStandardMaterial
            emissive={"blue"}
            emissiveIntensity={20}
            toneMapped={false}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Filament_supports.geometry}
          material={materials["Strand metal both"]}
          // position={[-0.021, 0.15, -0.001]}
          // rotation={[-2.583, 1.443, 1.507]}
          // scale={0.001}
        />
      </group>
    </>
  );
}

useGLTF.preload("/bulb_2.glb");
