"use client";

import { useEffect, useState } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

interface AnimatedBackgroundProps {
  scrollYProgress: MotionValue<number>;
}

export default function AnimatedBackground({
  scrollYProgress,
}: AnimatedBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Create parallax effect based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  // Enhanced vibrant color palette based on the website's teal theme
  const colors = [
    "#0DCCC1", // Primary teal
    "#0AB3A9", // Darker teal
    "#35E8DE", // Lighter teal
    "#6EEEE7", // Bright teal
    "#9FF4F0", // Pale teal
    "#00A39B", // Deep teal
    "#B3F7F4", // Soft teal
    "#00D6CA", // Vivid teal
    "#7FDFD9", // Medium teal
    "#C4F9F6", // Very light teal
  ];

  useEffect(() => {
    setIsMounted(true);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  if (!isMounted) return null;

  // Determine number of objects based on reduced motion preference
  const shapeCount = reducedMotion ? 15 : 30;
  const dotCount = reducedMotion ? 15 : 30;

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Background base with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary/10"></div>

      {/* Large animated background shapes - create depth */}
      <motion.div
        className="absolute -top-20 -left-20 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-primary/10"
        style={{
          y: backgroundY,
          scale: backgroundScale,
          rotate: backgroundRotate,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 right-0 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-primary/5"
        style={{ y: backgroundY }}
        animate={{
          x: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Middle layer - geometric shapes with enhanced vibrancy */}
      {Array.from({ length: shapeCount }).map((_, i) => {
        // Randomize properties for each shape with enhanced vibrancy
        const size = 20 + Math.random() * 100;
        const isCircle = Math.random() > 0.3;
        const isTriangle = !isCircle && Math.random() > 0.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = 0.15 + Math.random() * 0.35; // Slightly increased opacity range
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 10 + Math.random() * 25;
        const delay = Math.random() * 5;
        const zIndex = Math.floor(Math.random() * 3) - 1;

        // Create different animation patterns for variety
        const animationPattern = Math.floor(Math.random() * 4);
        let animationProps = {};

        switch (animationPattern) {
          case 0:
            animationProps = {
              y: [0, -40, 0],
              x: [0, Math.random() > 0.5 ? 30 : -30, 0],
              rotate: [0, Math.random() * 360, 0],
              scale: [1, Math.random() > 0.5 ? 1.3 : 0.7, 1],
            };
            break;
          case 1:
            animationProps = {
              y: [0, Math.random() > 0.5 ? 50 : -50, 0],
              x: [0, Math.random() > 0.5 ? -40 : 40, 0],
              rotate: [0, Math.random() > 0.5 ? 180 : -180, 0],
              scale: [1, 1.2, 1],
            };
            break;
          case 2:
            animationProps = {
              y: [0, Math.random() * 60 - 30, 0],
              x: [0, Math.random() * 60 - 30, 0],
              rotate: [0, Math.random() > 0.5 ? 90 : -90, 0],
              scale: [1, 0.8, 1],
            };
            break;
          default:
            animationProps = {
              y: [
                Math.random() * 20 - 10,
                Math.random() * 40 - 20,
                Math.random() * 20 - 10,
              ],
              x: [
                Math.random() * 20 - 10,
                Math.random() * 40 - 20,
                Math.random() * 20 - 10,
              ],
              rotate: [
                Math.random() * 20 - 10,
                Math.random() * 40 - 20,
                Math.random() * 20 - 10,
              ],
              scale: [1, Math.random() * 0.4 + 0.8, 1],
            };
        }

        return (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${
              isCircle ? "rounded-full" : isTriangle ? "triangle" : "rounded-md"
            }`}
            style={{
              width: size,
              height: isTriangle ? size * 0.866 : size, // Adjust height for triangles
              backgroundColor: isTriangle ? "transparent" : color,
              borderLeft: isTriangle
                ? `${size / 2}px solid transparent`
                : undefined,
              borderRight: isTriangle
                ? `${size / 2}px solid transparent`
                : undefined,
              borderBottom: isTriangle
                ? `${size * 0.866}px solid ${color}`
                : undefined,
              opacity: opacity,
              left: `${left}%`,
              top: `${top}%`,
              zIndex: zIndex,
              y: backgroundY,
            }}
            animate={animationProps}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Foreground layer - small floating dots for added depth and detail */}
      {Array.from({ length: dotCount }).map((_, i) => {
        const size = 2 + Math.random() * 8; // Slightly larger range for more variety
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = 0.2 + Math.random() * 0.5; // Increased opacity for more visibility
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 15 + Math.random() * 25;
        const zIndex = Math.floor(Math.random() * 2);

        // Create different movement patterns for dots
        const moveX = Math.random() > 0.5 ? 40 : -40;
        const moveY = Math.random() > 0.5 ? 60 : -60;

        return (
          <motion.div
            key={`dot-${i}`}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              opacity: opacity,
              left: `${left}%`,
              top: `${top}%`,
              zIndex: zIndex,
              y: backgroundY,
            }}
            animate={{
              y: [0, moveY, 0],
              x: [0, moveX, 0],
            }}
            transition={{
              duration: duration,
              delay: Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Subtle gradient overlay for better content visibility */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-transparent to-white/30"
        style={{ scale: backgroundScale }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
