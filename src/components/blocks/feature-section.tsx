"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
  link?: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: React.ReactNode
  autoPlayInterval?: number
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
}: FeatureStepsProps) {
  // State for controlling the current feature and hydration
  const [currentFeature, setCurrentFeature] = useState<number | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  // Set initial state after hydration
  useEffect(() => {
    setIsHydrated(true)
    setCurrentFeature(0)
  }, [])

  // Handle auto-play only after hydration
  useEffect(() => {
    if (!isHydrated || currentFeature === null) return

    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev === null ? 0 : (prev + 1) % features.length))
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isHydrated, currentFeature, features.length, autoPlayInterval])

  // Static styles for consistent rendering
  const staticStyles = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 50,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -50,
    },
  }

  const FeatureContent = ({ feature, index }: { feature: Feature; index: number }) => {
    const content = (
      <>
        <motion.div
          className={cn(
            "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
            currentFeature === index
              ? "bg-primary border-primary text-primary-foreground scale-110"
              : "bg-muted border-muted-foreground"
          )}
        >
          {currentFeature !== null && index <= currentFeature ? (
            <span className="text-lg font-bold">✓</span>
          ) : (
            <span className="text-lg font-semibold">{index + 1}</span>
          )}
        </motion.div>

        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tighter">
            {feature.title || feature.step}
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
            {feature.content}
          </p>
        </div>
      </>
    );

    if (feature.link) {
      return (
        <Link 
          href={feature.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-6 md:gap-8 cursor-pointer hover:opacity-80 transition-opacity"
        >
          {content}
        </Link>
      );
    }

    return (
      <div className="flex items-center gap-6 md:gap-8">
        {content}
      </div>
    );
  };

  return (
    <div className={cn("py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6", className)}>
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter text-center font-regular mx-auto mb-12 sm:mb-16 md:mb-20">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-7xl mx-auto">
        <div className="order-2 md:order-1 space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: currentFeature === index ? 1 : 0.3 
              }}
              transition={{ duration: 0.5 }}
            >
              <FeatureContent feature={feature} index={index} />
            </motion.div>
          ))}
        </div>

        <div className="order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg">
          {isHydrated && currentFeature !== null && (
            <AnimatePresence mode="wait">
              <motion.div
                key={features[currentFeature].image}
                className="absolute inset-0 rounded-lg overflow-hidden"
                initial={staticStyles.initial}
                animate={staticStyles.animate}
                exit={staticStyles.exit}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                style={{
                  zIndex: features.length - currentFeature,
                }}
              >
                <Image
                  src={features[currentFeature].image}
                  alt={features[currentFeature].step}
                  className="w-full h-full object-cover"
                  width={1000}
                  height={500}
                  priority={currentFeature === 0}
                />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  )
} 