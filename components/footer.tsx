"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center mb-4">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                <Image src="/images/logo.png" alt="The Bridge Co. Logo" width={40} height={40} className="mr-2" />
              </motion.div>
              <span className="font-bold text-xl text-white">The Bridge Co.</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your Bridge to Growth — Where brands meet results, and influencers drive impact.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:info@thebridge.co" icon={<Mail size={20} />} />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#what-we-do">What We Do</FooterLink>
              </li>
              <li>
                <FooterLink href="#for-influencers">For Influencers</FooterLink>
              </li>
              <li>
                <FooterLink href="#for-brands">For Brands</FooterLink>
              </li>
              <li>
                <FooterLink href="#contact">Contact Us</FooterLink>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">DM us to join or ask anything!</p>
            <p className="text-gray-400">
              Email:{" "}
              <motion.a
                href="mailto:info@thebridge.co"
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                info@thebridge.co
              </motion.a>
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} The Bridge Co. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            {" • "}
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
      whileHover={{ scale: 1.2, backgroundColor: "#0DCCC1" }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.span whileHover={{ scale: 1.05 }}>
      <Link href={href} className="text-gray-400 hover:text-primary transition-colors">
        {children}
      </Link>
    </motion.span>
  )
}
