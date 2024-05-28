"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Footer() {
  return (
    <footer className="text-quaternary border-gray-200 pb-0 mx-auto max-w-2xl py-12 pt-4 px-0 text-sm dark:border-gray-200 dark:text-white-600">
      <FooterGraphic />
      <p className="flex flex-col gap-4 py-1">
        © 2023 - {new Date().getFullYear()} Cauã Tavares. Todos os direitos
        reservados.
        <span>www.cauatn.dev v.2024.01</span>
        <span>
          Website construido com Next.js & TailwindCSS (
          <a
            href="https://github.com/cauatn/cauatn.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            view source
          </a>
          ).
        </span>
      </p>
    </footer>
  );
}

function PixelatedSphere() {
  const sphereRef = useRef();

  useFrame(({ clock }: { clock: any }) => {
    if (sphereRef.current) {
      (sphereRef.current as any).rotation.y = clock.getElapsedTime() * 1.2;
      (sphereRef.current as any).rotation.z = clock.getElapsedTime() * 0.7;
    }
  });

  return (
    <points ref={sphereRef as any}>
      <icosahedronGeometry args={[1, 4]} />
      <pointsMaterial color="gray" size={0.05} />
    </points>
  );
}

function Birds() {
  const groupRef = useRef();

  useFrame(({ clock }: { clock: any }) => {
    if (!groupRef.current) return;
    const elapsedTime = clock.getElapsedTime();
    (groupRef.current as any).children.forEach(
      (
        bird: { position: { x: number; y: number; z: number } },
        index: number
      ) => {
        const angle = (elapsedTime + index * 0.2) % (2 * Math.PI);
        const radius = 2.3 + Math.random() * 0.0001;
        bird.position.x =
          radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index);
        bird.position.y =
          radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index);
        bird.position.z = radius * Math.cos(elapsedTime * 0.5 + index);
      }
    );
  });

  const birds = [...Array(48)].map((_, i) => {
    const size = i % 2 === 0 ? 0.03 : 0.05;
    return (
      <mesh key={i} position={[1, 0, 0]}>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    );
  });

  return <group ref={groupRef as any}>{birds}</group>;
}

function FooterGraphic() {
  return (
    <Canvas camera={{ fov: 40, position: [0, 0, 5] }} gl={{ antialias: false }}>
      <PixelatedSphere />
      <Birds />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
