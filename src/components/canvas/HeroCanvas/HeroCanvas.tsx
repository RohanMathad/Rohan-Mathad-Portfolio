import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { HeroCanvasProps } from './HeroCanvas.types';
import { createNoise3D } from 'simplex-noise';

const Blob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const noise3D = useMemo(() => createNoise3D(), []);
  const originalPositions = useRef<Float32Array | null>(null);

  // 1. Swirling colors
  const colorA = useMemo(() => new THREE.Color("#010101"), []);
  const colorB = useMemo(() => new THREE.Color("#2a2a2a"), []);
  const colorC = useMemo(() => new THREE.Color("#606060"), []);

  const tempColor = useMemo(() => new THREE.Color(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const geometry = meshRef.current.geometry;

    if (!originalPositions.current) {
      originalPositions.current = new Float32Array(geometry.attributes.position.array);
      const colorArray = new Float32Array(geometry.attributes.position.count * 3);
      geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    }

    const positions = geometry.attributes.position;
    const colors = geometry.attributes.color;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < positions.count; i++) {
      vertex.fromArray(originalPositions.current, i * 3);

      // SMOOTHER NOISE: Reduced frequency multipliers for a calmer surface
      const shapeNoise = noise3D(
        vertex.x * 0.3 + time * 0.1,
        vertex.y * 0.3 + time * 0.1,
        vertex.z * 0.3 + time * 0.1
      );

      const colorNoise = noise3D(
        vertex.x * 0.8 - time * 0.1,
        vertex.y * 0.8 + time * 0.1,
        vertex.z * 0.8 - time * 0.1
      );

      // PROPER SCALING & SUBTLE BOUNCE: Base size is now 1.5, stretch is only 0.1
      vertex.normalize().multiplyScalar(1.5 + shapeNoise * 0.07);
      positions.setXYZ(i, vertex.x, vertex.y, vertex.z);

      const mixValue = (colorNoise + 1) / 2;

      if (mixValue < 0.5) {
        tempColor.lerpColors(colorA, colorB, mixValue * 2);
      } else {
        tempColor.lerpColors(colorB, colorC, (mixValue - 0.5) * 2);
      }

      colors.setXYZ(i, tempColor.r, tempColor.g, tempColor.b);
    }

    positions.needsUpdate = true;
    colors.needsUpdate = true;
    geometry.computeVertexNormals();

    // X-AXIS ROTATION: Primary rotation on X, very subtle wobble on Y
    meshRef.current.rotation.x = time * 0.08;
    meshRef.current.rotation.y = time * 0.02;
    meshRef.current.rotation.z = 0;
  });

  return (
    // DROPPED SEGMENTS TO 32x32: Cuts the CPU for-loop calculations by 75%
    <Sphere ref={meshRef} args={[1.5, 48, 48]} position={[1.25, -0.05, 1]}>
      <meshPhysicalMaterial
        vertexColors={true}
        metalness={0.2}
        roughness={0.1}
        transmission={0.9}
        ior={1.5}
        thickness={2}
        envMapIntensity={1.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
};

export const HeroCanvas: React.FC<HeroCanvasProps> = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1] pointer-events-none">
      {/* 
        ADDED dpr={[1, 1.5]} AND antialias: false 
        This stops modern phones from blowing up their GPUs trying to calculate glass refraction at 3x resolution.
      */}
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 2]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, -5, -2]} intensity={1} color="#ffffff" />
        <Blob />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};