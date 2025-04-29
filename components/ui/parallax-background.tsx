"use client";

import { useEffect, useState } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

interface ParallaxBackgroundProps {
  scrollYProgress: MotionValue<number>;
}

export default function ParallaxBackground({
  scrollYProgress,
}: ParallaxBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Move all useTransform hooks to the top level
  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [1, 0.6, 0.3, 0]
  );
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.4, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.7, 1], [0.5, 0.3, 0]);

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Floating shapes layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated circles */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary/5"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ y: backgroundY1, opacity: opacity1 }}
        />

        <motion.div
          className="absolute top-[30%] right-[10%] w-96 h-96 rounded-full bg-primary/10"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ y: backgroundY2, opacity: opacity2 }}
        />

        <motion.div
          className="absolute bottom-[20%] left-[15%] w-80 h-80 rounded-full bg-primary/5"
          animate={{
            y: [0, 25, 0],
            x: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ y: backgroundY3, opacity: opacity3 }}
        />

        {/* Bridge icon background */}
        {/* <motion.div
          className="absolute inset-0 bg-bridge opacity-[0.03]"
          style={{
            backgroundImage: "url('/images/logo.png')",
            backgroundSize: "50%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            y: backgroundY2,
          }}
        /> */}
      </div>

      {/* Grid pattern overlay */}
      <motion.div
        className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0DCCC1 1px, transparent 1px), linear-gradient(to bottom, #0DCCC1 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          y: gridY,
        }}
      />
    </>
  );
}
