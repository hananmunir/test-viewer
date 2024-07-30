import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/custom_glb/2.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.027, -2.324, -0.041]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012.geometry}
          material={materials["Paint.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_1.geometry}
          material={materials["Logo.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_2.geometry}
          material={materials["224_223_219_8.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_3.geometry}
          material={materials["Sp.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_4.geometry}
          material={materials["Black Plastic.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/custom_glb/2.glb");
