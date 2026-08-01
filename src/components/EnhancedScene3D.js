import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { 
  FloatingSphere, 
  FloatingBox, 
  FloatingTorus, 
  EnhancedParticles,
  Octahedron,
  Icosahedron 
} from './Enhanced3D';

const EnhancedScene3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.7} color="#00f0ff" />
        <pointLight position={[10, 10, 5]} intensity={0.7} color="#a855f7" />
        <pointLight position={[0, 0, 8]} intensity={0.5} color="#fbbf24" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} castShadow />
        
        {/* Main Floating Objects */}
        <FloatingSphere position={[-3, 2, -2]} color="#00f0ff" speed={0.8} scale={1.2} />
        <FloatingBox position={[3, -1, -1]} color="#a855f7" speed={0.6} scale={1} />
        <FloatingTorus position={[0, -2, -3]} color="#fbbf24" speed={0.7} scale={1} />
        
        {/* Additional Geometric Shapes */}
        <FloatingSphere position={[4, 2, -4]} color="#a855f7" speed={0.5} scale={0.8} />
        <FloatingBox position={[-4, -2, -2]} color="#00f0ff" speed={0.9} scale={0.9} />
        <Octahedron position={[-2, 1, -5]} color="#fbbf24" speed={0.7} scale={0.7} />
        <Icosahedron position={[2, 3, -3]} color="#00f0ff" speed={0.8} scale={0.8} />
        <FloatingTorus position={[-3, -1, -4]} color="#a855f7" speed={0.6} scale={0.8} />
        <Octahedron position={[1, -3, -2]} color="#00f0ff" speed={0.9} scale={0.6} />
        <Icosahedron position={[-1, 2, -6]} color="#fbbf24" speed={0.5} scale={0.9} />
        
        {/* Enhanced Particles */}
        <EnhancedParticles count={250} />
        
        {/* Stars */}
        <Stars 
          radius={100} 
          depth={50} 
          count={7000} 
          factor={5} 
          saturation={0} 
          fade 
          speed={1.2} 
        />
        
        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default EnhancedScene3D;
