import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model as ModelOne } from "./3d/ModelOne";
import { Model as ModelTwo } from "./3d/ModelTwo";
import { Model as ModelThree } from "./3d/ModelThree";

const store = createXRStore();

function ARButton() {
  return (
    <button
      onClick={() => store.enterAR()}
      className="absolute top-0 right-0 m-4 p-2 bg-gray-500 text-white rounded-lg z-50"
    >
      Enter AR
    </button>
  );
}

function Scene() {
  const [red, setRed] = useState(false);
  return (
    // <div className="w-full h-full">
    //   <ARButton />
    //   <Canvas>
    //     <XR store={store}>
    //       <ambientLight />
    //       <pointLight position={[10, 10, 10]} />
    //       <Suspense fallback={null}>
    //         <Environment files={"/textures/photo_studio_01_1k.hdr"} />
    //         {model === 1 && <ModelOne />}
    //         {model === 2 && <ModelTwo />}
    //         {model === 3 && <ModelThree />}
    //       </Suspense>
    //       <OrbitControls />
    //     </XR>
    //   </Canvas>
    // </div>
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <mesh
            pointerEventsType={{ deny: "grab" }}
            onClick={() => setRed(!red)}
            position={[0, 1, -1]}
          >
            <boxGeometry />
            <meshBasicMaterial color={red ? "red" : "blue"} />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}

export default Scene;
