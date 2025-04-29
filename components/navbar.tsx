"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position
      const sections = ["home", "what-we-do", "for-influencers", "for-brands", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image src="/images/logo.png" alt="The Bridge Co. Logo" width={40} height={40} className="mr-2" />
              </motion.div>
              <motion.span
                className={`font-bold text-xl ${isScrolled ? "text-black" : "text-black"}`}
                whileHover={{ scale: 1.05 }}
              >
                The Bridge Co.
              </motion.span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="#what-we-do" isScrolled={isScrolled} isActive={activeSection === "what-we-do"}>
                What We Do
              </NavLink>
              <NavLink href="#for-influencers" isScrolled={isScrolled} isActive={activeSection === "for-influencers"}>
                For Influencers
              </NavLink>
              <NavLink href="#for-brands" isScrolled={isScrolled} isActive={activeSection === "for-brands"}>
                For Brands
              </NavLink>
              <NavLink href="#contact" isScrolled={isScrolled} isButton isActive={activeSection === "contact"}>
                Contact Us
              </NavLink>
            </nav>

            <motion.button
              className="md:hidden text-black"
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex justify-end p-4">
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <motion.nav
              className="flex flex-col items-center justify-center h-full space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <MobileNavLink href="#what-we-do" onClick={() => setIsMobileMenuOpen(false)}>
                What We Do
              </MobileNavLink>
              <MobileNavLink href="#for-influencers" onClick={() => setIsMobileMenuOpen(false)}>
                For Influencers
              </MobileNavLink>
              <MobileNavLink href="#for-brands" onClick={() => setIsMobileMenuOpen(false)}>
                For Brands
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)} isButton>
                Contact Us
              </MobileNavLink>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({
  href,
  children,
  isScrolled,
  isButton,
  isActive,
}: {
  href: string
  children: React.ReactNode
  isScrolled: boolean
  isButton?: boolean
  isActive?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        ${
          isButton
            ? `bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-all ${
                isActive ? "ring-2 ring-primary/30 ring-offset-2" : ""
              }`
            : `${isScrolled ? "text-black" : "text-black"} hover:text-primary transition-all ${
                isActive ? "text-primary font-semibold" : "font-medium"
              }`
        }
      `}
    >
      <motion.span whileHover={{ scale: isButton ? 1.05 : 1.1 }} whileTap={{ scale: 0.95 }} className="inline-block">
        {children}
      </motion.span>
      {!isButton && isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="h-0.5 bg-primary mt-0.5"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
  isButton,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
  isButton?: boolean
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`
          text-2xl font-medium
          ${
            isButton
              ? "bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
              : "text-black hover:text-primary transition-colors"
          }
        `}
      >
        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="inline-block">
          {children}
        </motion.span>
      </Link>
    </motion.div>
  )
}
