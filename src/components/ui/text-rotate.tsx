"use client"

import { useEffect, useState } from "react"
import { motion, type Transition } from "framer-motion"

interface TextRotateProps {
  texts: (string | React.ReactNode)[]
  mainClassName?: string
  staggerDuration?: number
  staggerFrom?: "first" | "last"
  rotationInterval?: number
  transition?: Transition
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
      key={currentTextIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={transition}
      className={mainClassName}
    >
      {texts[currentTextIndex]}
    </motion.div>
  )
}
