import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// const Model = () => {
//   const { scene } = useGLTF("/models/real-time_b/scene.gltf");
//   //C:\Users\HP\OneDrive\Desktop\Final Portfolio\my-portfolio\public\modals\real-time_bones_demo_phoenix_bird
//   const ref = React.useRef();

//   // Make the model follow the cursor
//   useFrame(({ mouse }) => {
//     if (ref.current) {
//       ref.current.rotation.y = THREE.MathUtils.lerp(
//         ref.current.rotation.y,
//         -mouse.x * Math.PI,
//         0.1
//       );
//       ref.current.rotation.x = THREE.MathUtils.lerp(
//         ref.current.rotation.x,
//         mouse.y * Math.PI,
//         0.1
//       );
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={0.5} />;
// };

const Model = () => {
  const { scene } = useGLTF("/modals/real-time_bones_demo_phoenix_bird/scene.gltf");
  const ref = React.useRef();

  // Make the model follow the cursor
  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        -mouse.x * Math.PI,
        0.1
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        mouse.y * Math.PI,
        0.1
      );
    }
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
};


const ThreeDModel = () => (
  <div className="w-full h-[400px]">
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<div>Loading 3D Model...</div>}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  </div>
);

export default ThreeDModel;
