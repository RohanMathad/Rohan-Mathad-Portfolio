import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import clsx from 'clsx';
import { HeroCanvasProps } from './HeroCanvas.types';
import { createNoise3D } from 'simplex-noise';

const Blob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const noise3D = useMemo(() => createNoise3D(), []);
  const originalPositions = useRef<Float32Array | null>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const geometry = meshRef.current.geometry;
    
    if (!originalPositions.current) {
      originalPositions.current = new Float32Array(geometry.attributes.position.array);
    }

    const positions = geometry.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < positions.count; i++) {
      vertex.fromArray(originalPositions.current, i * 3);
      
      const noise = noise3D(
        vertex.x * 0.4 + time * 0.15, 
        vertex.y * 0.4 + time * 0.2, 
        vertex.z * 0.4 + time * 0.15
      );
      
      vertex.normalize().multiplyScalar(2 + noise * 0.3);
      positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
    
    meshRef.current.rotation.y = time * 0.05;
    meshRef.current.rotation.z = time * 0.02;
  });

  return (
    <Sphere ref={meshRef} args={[25, 128, 128]} position={[2, -0.5, 0]}>
      <meshPhysicalMaterial
        color="#5b5b5b"
        metalness={0.4}
        roughness={0.15}
        transmission={0.9}
        ior={1.5}
        thickness={2}
        attenuationColor="#242424"
        attenuationDistance={5}
        envMapIntensity={1.2}
      />
    </Sphere>
  );
};

export const HeroCanvas: React.FC<HeroCanvasProps> = () => {
  return (
    <div className="w-full h-full">
      {/* gl={{ alpha: true }} ensures the canvas background is totally transparent */}
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} gl={{ alpha: true }}> 
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 2]} intensity={1.5} color="#0055ff" />
        <directionalLight position={[-5, -5, -2]} intensity={1} color="#3300ff" />
        <Blob />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};