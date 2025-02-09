"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Pre-define static animation values
const staticAnimations = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 50,
    zIndex: 1
  },
  active: {
    opacity: 1,
    scale: 1,
    y: 0,
    zIndex: 10
  },
  inactive: (index: number) => ({
    opacity: 0.7,
    scale: 0.95,
    y: 0,
    zIndex: index
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -50,
    zIndex: 1
  }
};

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (autoplay && mounted) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext, mounted]);

  if (!mounted) return null;

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 relative z-0", className)}>
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl max-w-xl md:max-w-2xl tracking-tighter text-center font-regular mx-auto mb-12 sm:mb-16 md:mb-20">
        <span className="text-primary block mb-1 md:mb-2">What Our Clients</span>
        <span>Are Saying</span>
      </h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        <div>
          <div className="relative h-64 sm:h-72 md:h-80 w-full">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={staticAnimations.initial}
                  animate={index === active ? staticAnimations.active : staticAnimations.inactive(testimonials.length - index)}
                  exit={staticAnimations.exit}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-lg"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tighter text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground mt-4 sm:mt-6 md:mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-8 sm:pt-10 md:pt-12">
            <button
              onClick={handlePrev}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-secondary/80 transition-colors"
            >
              <IconArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-secondary/80 transition-colors"
            >
              <IconArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 