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

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    setActive(0);
  }, []);

  const handleNext = useCallback(() => {
    if (active === null) return;
    setActive((prev) => (prev !== null ? (prev + 1) % testimonials.length : 0));
  }, [testimonials.length, active]);

  const handlePrev = useCallback(() => {
    if (active === null) return;
    setActive((prev) => (prev !== null ? (prev - 1 + testimonials.length) % testimonials.length : testimonials.length - 1));
  }, [testimonials.length, active]);

  const isActive = useCallback((index: number) => {
    return index === active;
  }, [active]);

  useEffect(() => {
    if (autoplay && active !== null) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext, active]);

  // Static rotation values for consistent rendering
  const getRotation = useCallback((index: number) => {
    const rotations = [-5, -3, 0, 3, 5];
    return rotations[index % rotations.length];
  }, []);

  if (!isHydrated) {
    return null; // Prevent flash of unstyled content
  }

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 relative z-0", className)}>
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl max-w-xl md:max-w-2xl tracking-tighter text-center font-regular mx-auto mb-12 sm:mb-16 md:mb-20">
        <span className="text-primary block mb-1 md:mb-2">What Our Clients</span>
        <span>Are Saying</span>
      </h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        <div>
          <div className="relative h-64 sm:h-72 md:h-80 w-full">
            <AnimatePresence>
              {active !== null && testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotation(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotation(index),
                    zIndex: isActive(index) ? 10 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotation(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                  style={{
                    zIndex: isActive(index) ? 10 : testimonials.length + 2 - index,
                  }}
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
          {active !== null && (
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tighter text-foreground">
                {testimonials[active].name}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground mt-4 sm:mt-6 md:mt-8">
                {testimonials[active].quote}
              </motion.p>
            </motion.div>
          )}
          <div className="flex gap-4 pt-8 sm:pt-10 md:pt-12">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 