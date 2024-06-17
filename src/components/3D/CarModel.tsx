/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export default function CarModel(props: any) {
  const {
    nodes,
    materials,
  }: {
    nodes: any;
    materials: any;
  } = useGLTF("/Mitsubishi L200.glb");
  const ref1 = useRef<Group>(null);
  const tyre1 = useRef<Group>(null);
  const tyre2 = useRef<Group>(null);
  useFrame((state) => {
    // console.log(state.pointer.x);
    tyre1.current?.rotation.set(0, 0.3 * state.pointer.x, 0);
    tyre2.current?.rotation.set(0, 0.31 * state.pointer.x, 0);
    tyre1.current?.position.set(0, 0, -0.07 * state.pointer.x);
    tyre2.current?.position.set(0, 0, 0.09 * state.pointer.x);
  });

  return (
    <group ref={ref1} {...props} dispose={null} rotation={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1.geometry}
        material={materials.M_0136_Charcoal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_1.geometry}
        material={materials.M_0135_DarkGray}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_2.geometry}
        material={materials.Color_M08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_3.geometry}
        material={materials.Color_M00}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_4.geometry}
        material={materials.Color_L05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_5.geometry}
        material={materials.M_0137_Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_6.geometry}
        material={materials.M_0130_Gainsboro}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_7.geometry}
        material={materials.M_0132_LightGray}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_8.geometry}
        material={materials.Color_M06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_9.geometry}
        material={materials.M_0134_DimGray}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_10.geometry}
        material={materials.FrontColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_11.geometry}
        material={materials.Color_A05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_12.geometry}
        material={materials.M_0010_Snow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_13.geometry}
        material={materials.Color_M02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_Model_1_14.geometry}
        material={materials.Color_D05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh2_Model_1.geometry}
        material={materials.M_0132_LightGray}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh2_Model_1_1.geometry}
        material={materials.M_0136_Charcoal}
      />
      <group ref={tyre1} rotation={[0, -0.3, 0]} position={[0, 0, +0.07]}>
        {/* rotation={[0, 0.3, 0]} position={[0, 0, -0.07]} RIGHT */}
        {/* rotation={[0, -0.3, 0]} position={[0, 0, +0.07]} LEFT */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh3_Model_1.geometry}
          material={materials.Color_M08}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh3_Model_1_1.geometry}
          material={materials.Color_M06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh3_Model_1_2.geometry}
          material={materials.M_0137_Black}
        />
      </group>
      <group rotation={[0, -0.35, 0]} position={[0, 0, -0.11]} ref={tyre2}>
        {/* rotation={[0, 0.35, 0]} position={[0, 0, 0.11]} RIGHT */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh6_Model_1.geometry}
          material={materials.Color_M08}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh6_Model_1_1.geometry}
          material={materials.Color_M06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh6_Model_1_2.geometry}
          material={materials.M_0137_Black}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh4_Model_1.geometry}
        material={materials.M_0132_LightGray}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh4_Model_1_1.geometry}
        material={materials.M_0136_Charcoal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh5_Model_1.geometry}
        material={materials.Color_M08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh5_Model_1_1.geometry}
        material={materials.Color_M06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh5_Model_1_2.geometry}
        material={materials.M_0137_Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh7_Model_1.geometry}
        material={materials.Color_M06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh7_Model_1_1.geometry}
        material={materials.M_0137_Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh7_Model_1_2.geometry}
        material={materials.Color_M08}
      />
    </group>
  );
}

useGLTF.preload("/Mitsubishi L200.glb");
