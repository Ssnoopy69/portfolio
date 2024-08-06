import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  const { actions } = useAnimations(animations, scene);
  const animationActionRef = useRef(null);

  useEffect(() => {
    if (actions) {
      console.log("Available animations:", animations);
      console.log("Actions:", actions);

      // Initialize and play the 'Experiment' animation
      const experimentAction = actions["Experiment"];
      if (experimentAction) {
        experimentAction.play();
        experimentAction.setLoop(THREE.LoopRepeat); // Ensure the animation loops
        animationActionRef.current = experimentAction; // Save reference
      } else {
        console.error("Animation 'Experiment' not found.");
      }
    } else {
      console.error("No actions found.");
    }

    return () => {
      // Cleanup animation when component unmounts
      if (animationActionRef.current) {
        animationActionRef.current.stop();
      }
    };
  }, [actions]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 2 : 2}
        position={isMobile ? [0, -2, 0] : [0, -3, 0]}
        rotation={isMobile ? [0, 20, 0] : [0, 20, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
