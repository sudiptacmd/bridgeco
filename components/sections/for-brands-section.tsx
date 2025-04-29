"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "@/components/ui/section-title"
import { Check } from "lucide-react"

export default function ForBrandsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const rightItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const benefits = ["Zero Upfront Cost", "Track Every Sale", "Only Pay When You Earn"]

  return (
    <section id="for-brands" ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle title="For Brands" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center mt-16"
        >
          <motion.div variants={containerVariants} className="space-y-6 teal-border-left">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start group" whileHover={{ x: 5 }}>
                <div className="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg md:text-xl font-medium">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={rightItemVariants} className="flex justify-center">
            <motion.div
              className="relative w-full max-w-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3"
                animate={{ rotate: [3, 0, 3] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="relative bg-primary/10 p-8 rounded-lg transform -rotate-1"
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                <p className="text-xl text-center font-medium">
                  Your brand, seen by the right audience
                  <br />
                  <span className="text-2xl font-bold mt-2 block">with real purchase intent</span>
                </p>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 0],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span>%</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-primary/5"
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute bottom-1/4 right-0 w-48 h-48 rounded-full bg-primary/5"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </section>
  )
}
