import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene, animations } = useGLTF("./planet/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      console.log("Actions: ", actions); // Log the actions object to check its structure
      const actionNames = Object.keys(actions);
      if (actionNames.length > 0) {
        actions[actionNames[0]].play(); // Play the first animation found
      } else {
        console.warn("No animations found in the model.");
      }
    } else {
      console.warn("Actions are undefined.");
    }
  }, [actions]);

  return (
    <primitive
      object={scene}
      scale={[3, 3, 3]}
      position-y={-2.5}
      rotation-y={24.5}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      // frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
