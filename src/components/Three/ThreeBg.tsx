'use client'
// components/ThreeBackground.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    containerRef.current.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Crear partículas para simular estrellas
    const starGeometry = new THREE.BufferGeometry();
    const texture = new THREE.TextureLoader().load('/particle.png');  // Asegúrate de reemplazar '/path-to-your-texture/star-texture.png' con la ruta real a tu textura personalizada
    const starMaterial = new THREE.PointsMaterial({ 
      color: 0x9933cc,
      size: 2.0,  // Ajusta el tamaño de las partículas aquí
      map: texture,
      alphaTest: 0.1,
      transparent: true
    });

    const starVerticesArray = [];
    const starCount = 10000;

    for (let i = 0; i < starCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starVerticesArray.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVerticesArray, 3));

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    camera.position.z = 5;

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      starField.rotation.x += 0.0002;
      starField.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };

    animate();

    // Limpiar al desmontar
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ThreeBackground;

