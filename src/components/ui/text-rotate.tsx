"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TextRotateProps {
  texts: (string | React.ReactNode)[]
  mainClassName?: string
  staggerDuration?: number
  staggerFrom?: "first" | "last"
  rotationInterval?: number
  transition?: any
}

export function TextRotate({
  texts,
  mainClassName,
  staggerDuration = 0.03,
  staggerFrom = "last",
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
    <motion.div
      layout
      className={mainClassName}
      transition={transition}
    >
      <motion.div
        key={currentTextIndex}
        initial={{ y: staggerFrom === "first" ? -100 : 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: staggerFrom === "first" ? 100 : -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="flex items-center justify-center"
      >
        {texts[currentTextIndex]}
      </motion.div>
    </motion.div>
  )
} 