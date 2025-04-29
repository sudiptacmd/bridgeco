"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  className?: string
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.8 }}
      className={`text-center ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      <motion.div
        className="divider divider-center"
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.8 }}
      ></motion.div>
    </motion.div>
  )
}
