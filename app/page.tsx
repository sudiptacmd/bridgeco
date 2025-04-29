"use client"

import { useRef } from "react"
import { useScroll } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import WhatWeDoSection from "@/components/sections/what-we-do-section"
import ForInfluencersSection from "@/components/sections/for-influencers-section"
import ForBrandsSection from "@/components/sections/for-brands-section"
import ContactSection from "@/components/sections/contact-section"
import ParallaxBackground from "@/components/ui/parallax-background"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <main ref={containerRef} className="relative">
      <ParallaxBackground scrollYProgress={scrollYProgress} />
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <ForInfluencersSection />
      <ForBrandsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
