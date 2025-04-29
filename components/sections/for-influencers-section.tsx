"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "@/components/ui/section-title"
import { Check } from "lucide-react"

export default function ForInfluencersSection() {
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

  const benefits = [
    "Promote Products You Believe In",
    "Earn Commission Per Sale",
    "Share Products That Matter To Your Followers",
  ]

  return (
    <section id="for-influencers" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle title="For Influencers" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center mt-16"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1 flex justify-center">
            <motion.div
              className="relative w-full max-w-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-lg transform -rotate-3"
                animate={{ rotate: [-3, 0, -3] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="relative bg-primary/10 p-8 rounded-lg transform rotate-1"
                animate={{ rotate: [1, -1, 1] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                <p className="text-xl text-center font-medium">
                  Not just another post.
                  <br />
                  <span className="text-2xl font-bold mt-2 block">Real earnings. Real impact.</span>
                </p>

                <motion.div
                  className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span>$</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-6 order-1 md:order-2 teal-border-right">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={rightItemVariants}
                className="flex items-start group"
                whileHover={{ x: -5 }}
              >
                <div className="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg md:text-xl font-medium">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-primary/5"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-primary/5"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </section>
  )
}
