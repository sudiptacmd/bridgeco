"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedBackground from "@/components/ui/animated-background"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background */}
      <AnimatedBackground scrollYProgress={scrollYProgress} />

      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-[1px] z-0"></div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants}>
            <Image src="/images/logo.png" alt="The Bridge Co. Logo" width={150} height={150} className="mb-6" />
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4">
            <AnimatedText text="The Bridge Co." />
          </motion.h1>

          <motion.div variants={itemVariants} className="divider divider-center mb-8"></motion.div>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl max-w-2xl">
            We are The Bridge Co. A sales growth agency powered by performance-based influencer marketing.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12">
            <motion.a
              href="#what-we-do"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all hover:scale-105 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
