"use client";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Contact = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    backgroundRef.current.appendChild(renderer.domElement);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const starVertices = [];

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: "#fafafa",
      size: 0.1,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);

      // Update star positions for racing effect
      const positions = stars.geometry.attributes.position.array;
      const speed = 0.1; // Adjust speed (larger = faster, smaller = slower)
      for (let i = 2; i < positions.length; i += 3) {
        positions[i] += speed; // Move stars toward camera
        if (positions[i] > 50) {
          positions[i] = -50; // Reset to far distance
          positions[i - 2] = (Math.random() - 0.5) * 100; // New x
          positions[i - 1] = (Math.random() - 0.5) * 100; // New y
        }
      }
      stars.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
      if (backgroundRef.current) {
        backgroundRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div
      ref={backgroundRef}
      className="relative w-screen h[-300px] lg:h-screen overflow-hidden"

    >
      <div
        id="contact"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center z-5 w-screen md:px-20 px-5"
      >
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 padding-x-lg">
          <h1 className="capitalize text-xl md:text-3xl lg:text-6xl text-white">
            HI, MY NAME IS <span className="text-[#D4AF38]">DANIEL ALAUKWU.</span>
          </h1>
          <h4 className="max-w-4xl text-sm md:text-xl text-center text-white font-2xl">
            I am an Assistant Director[A.D] with over 3+ years of professional experience
            collaborating with directors, cinematographers, and production crews
            to bring extraordinary stories to life on screen.
          </h4>
        </div>
      </div>
    </div>
    <About />
    <Skills />
    </>
  );
};

export default Contact;
