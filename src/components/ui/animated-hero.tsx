"use client";

import { motion, LayoutGroup } from "framer-motion";
import { PhoneCall, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextRotate } from "./text-rotate";
import { GradientText } from "@/components/ui/gradient-text";

export function Hero() {
  const financialTerms = [
    { text: "Stocks", emoji: "      📈      " },
    { text: "Savings", emoji: "      💰      " },
    { text: "Crypto", emoji: "      💎      " },
    { text: "ETFs", emoji: "      💼      " },
    { text: "Future", preEmoji: "🔥    ", postEmoji: "    🔥" }
  ].map(({ text, emoji, preEmoji, postEmoji }) => (
    <div key={text} className="flex items-center gap-4">
      {preEmoji && <span className="text-5xl sm:text-6xl md:text-7xl">{preEmoji}</span>}
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {text}
      </GradientText>
      {text === "Stocks" ? (
        <span className="text-4xl sm:text-5xl md:text-6xl">{emoji}</span>
      ) : text === "Savings" ? (
        <span className="text-6xl sm:text-7xl md:text-8xl">{emoji}</span>
      ) : (
        <span className="text-5xl sm:text-6xl md:text-7xl">{emoji}</span>
      )}
      {postEmoji && <span className="text-5xl sm:text-6xl md:text-7xl">{postEmoji}</span>}
    </div>
  ));

  return (
    <div className="w-full min-h-screen flex items-center justify-center -mt-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex gap-3 md:gap-8 py-0.5 md:py-20 lg:py-32 items-center justify-center flex-col">
          <div>
            <Link href="https://selar.co/az24" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="gap-2 md:gap-4 text-xs sm:text-sm h-11">
                Download Budget Template <Download className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            </Link>
          </div>
          <div className="flex gap-2 md:gap-4 flex-col">
            <h1 className="tracking-tighter text-center font-regular">
              <span className="text-primary block mb-0.5 md:mb-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Master Your</span>
              <LayoutGroup>
                <motion.span layout className="flex justify-center">
                  <TextRotate
                    texts={financialTerms}
                    mainClassName="overflow-hidden h-28 sm:h-32 md:h-36 lg:h-40 font-semibold"
                    rotationInterval={2000}
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  />
                </motion.span>
              </LayoutGroup>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-lg md:max-w-2xl text-center px-2 md:px-0">
              Navigate the world of investments with confidence! From ETFs to Crypto, 
              Budgeting to kids&apos; financial education - WealthMotley is your friendly guide 
              through the exciting journey of building wealth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 px-2 sm:px-0">
            <Link href="/book-session" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-75 blur-lg transition-all group-hover:opacity-100 group-hover:blur-xl" />
                <Button size="lg" className="relative gap-2 md:gap-4 w-full sm:w-auto text-sm md:text-base h-11" variant="outline">
                  Book a One-on-One Session <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScNKcEojCtRT24T6peQY8DQ8pQ_YpFNt80uqtGYs8BnA8KsqQ/viewform" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 md:gap-4 w-full sm:w-auto text-sm md:text-base h-11">
                Get Free E-Book <Download className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 