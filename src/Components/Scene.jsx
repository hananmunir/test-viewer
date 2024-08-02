import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model as ModelOne } from "./3d/ModelOne";
import { Model as ModelTwo } from "./3d/ModelTwo";
import { Model as ModelThree } from "./3d/ModelThree";
import "@google/model-viewer";

function Scene({ model, useAR }) {
  const modelViewerRef = useRef();

  const activateAr = async () => {
    if (modelViewerRef.current) {
      console.log("Activating AR...");
      try {
        modelViewerRef.current.setAttribute("activate-ar", "");
        await modelViewerRef.current.activateAR();
        console.log("AR activated.");
      } catch (error) {
        console.error("Error activating AR:", error);
      }
    }
  };

  useEffect(() => {
    if (useAR) {
      import("@google/model-viewer/dist/model-viewer")
        .then(() => {
          console.log("Model Viewer loaded successfully.");
          activateAr();
        })
        .catch((error) => console.error("Error loading model viewer:", error));
    }
  }, [useAR]);

  let modelUrl;

  switch (model) {
    case 1:
      modelUrl = "/models/custom_glb/1.glb";
      break;
    case 2:
      modelUrl = "/models/custom_glb/2.glb";
      break;
    case 3:
      modelUrl = "/models/custom_glb/3.glb";
      break;
    default:
      modelUrl = "";
  }

  return (
    <div className="w-full h-full">
      {useAR ? (
        <model-viewer
          ref={modelViewerRef}
          src={modelUrl}
          ar
          ar-modes="scene-viewer webxr quick-look"
          environment-image="neutral"
          shadow-intensity="1"
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "100%" }}
          onLoad={() => console.log("Model loaded:", modelUrl)}
          onError={(error) => console.error("Model load error:", error)}
        >
          <button
            slot="ar-button"
            className="absolute top-20 text-black right-4 z-10"
          >
            Activate AR
          </button>
        </model-viewer>
      ) : (
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Environment files={"/textures/photo_studio_01_1k.hdr"} />
            {model === 1 && <ModelOne />}
            {model === 2 && <ModelTwo />}
            {model === 3 && <ModelThree />}
          </Suspense>
          <OrbitControls />
        </Canvas>
      )}
    </div>
  );
}

export default Scene;
