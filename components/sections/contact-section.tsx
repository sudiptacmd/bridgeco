"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "@/components/ui/section-title"
import ContactForm from "@/components/contact-form"

export default function ContactSection() {
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

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle title="Curious? Let's Talk" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mt-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-xl max-w-2xl mx-auto">
              This is just the beginning.
              <br />
              We're onboarding early brands and influencers for our pilot project.
            </p>
            <p className="text-xl font-bold mt-8">Want in?</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
            whileInView={{
              scale: [0.9, 1.1, 1],
              transition: { duration: 1.5 },
            }}
          >
            <p className="text-2xl font-bold tracking-wide">PROMOTE. EARN. GROW.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-primary/5"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-primary/5"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </section>
  )
}
