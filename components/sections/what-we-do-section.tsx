"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "@/components/ui/section-title"
import { CheckCircle } from "lucide-react"

export default function WhatWeDoSection() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const listItems = [
    "Identify and connect relevant influencers with the brands",
    "Equip influencers with personalized discount codes to promote products",
    "Brands pay commission only when a sale is completed using those codes",
    "Manage influencer onboarding, communication, and performance tracking",
  ]

  return (
    <section id="what-we-do" ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle title="What We Do" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center mt-16"
        >
          <motion.div variants={containerVariants} className="space-y-8 teal-border-left">
            {listItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 group"
                whileHover={{ x: 5 }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-lg md:text-xl">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              className="relative w-full max-w-md aspect-square"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg"
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="absolute inset-0 bg-white rounded-lg border-2 border-primary shadow-xl p-8 flex items-center justify-center"
                animate={{ rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-center">Uber for "Influencer Marketing"</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/5 -z-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
      />
    </section>
  )
}
