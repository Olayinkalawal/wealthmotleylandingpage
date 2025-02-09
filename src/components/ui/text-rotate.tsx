"use client"

import { useEffect, useState } from "react"
import { motion, type Transition, AnimatePresence } from "framer-motion"

interface TextRotateProps {
  texts: (string | React.ReactNode)[]
  mainClassName?: string
  rotationInterval?: number
  transition?: Transition
}

export function TextRotate({
  texts,
  mainClassName,
  rotationInterval = 3000,
  transition,
}: TextRotateProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [texts.length, rotationInterval])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTextIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={transition || {
          duration: 0.5,
          ease: "easeInOut"
        }}
        className={mainClassName}
      >
        {texts[currentTextIndex]}
      </motion.div>
    </AnimatePresence>
  )
}
