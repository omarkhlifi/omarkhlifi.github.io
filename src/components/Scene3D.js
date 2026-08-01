import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { FloatingSphere, FloatingBox, FloatingTorus, Particles } from './3DElements';

const Scene3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00f0ff" />
        <pointLight position={[10, 10, 5]} intensity={0.5} color="#a855f7" />
        
        {/* Floating 3D Objects */}
        <FloatingSphere position={[-3, 2, -2]} color="#00f0ff" speed={0.8} />
        <FloatingBox position={[3, -1, -1]} color="#a855f7" speed={0.6} />
        <FloatingTorus position={[0, -2, -3]} color="#fbbf24" speed={0.7} />
        <FloatingSphere position={[4, 2, -4]} color="#a855f7" speed={0.5} />
        <FloatingBox position={[-4, -2, -2]} color="#00f0ff" speed={0.9} />
        
        {/* Particles */}
        <Particles count={150} />
        
        {/* Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;