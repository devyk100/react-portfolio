import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const {
    nodes,
    materials,
  }: {
    nodes: any;
    materials: any;
  } = useGLTF("/Road.glb");
  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, 1.5708, 0]}
      position={[0.5, -0.25, 0]}
    >
      <mesh
        scale={0.035}
        castShadow
        receiveShadow
        geometry={nodes.Road.geometry}
        material={materials.Mat}
      />
    </group>
  );
}

useGLTF.preload("/Road.glb");
