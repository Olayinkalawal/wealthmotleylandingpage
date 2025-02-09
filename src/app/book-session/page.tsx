"use client";

import { Button } from "@/components/ui/button";
import { BOOKING_DATA } from "@/data/booking";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.2;

export default function BookSessionPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-4 pt-16">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6">
        <section id="hero" className="py-6">
          <div className="space-y-8">
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center md:items-start">
              <div className="flex-col flex flex-1 space-y-4 text-center md:text-left w-full">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-[-0.09em] leading-none whitespace-nowrap sm:text-5xl xl:text-6xl/none bg-clip-text mx-auto md:mx-0 flex items-center justify-center"
                  yOffset={8}
                  text="Hi,I'm Shawls  👋"
                  animateByCharacter
                  characterDelay={0.02}
                />
                <BlurFadeText
                  className="max-w-[600px] text-lg md:text-xl text-muted-foreground mx-auto md:mx-0"
                  delay={BLUR_FADE_DELAY}
                  text={BOOKING_DATA.description}
                />
                <div className="flex items-center justify-center md:justify-start gap-4 pt-6">
                  <Link href={BOOKING_DATA.url} target="_blank" rel="noopener noreferrer">
                    <div className="relative">
                      <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-75 blur-lg transition-all group-hover:opacity-100 group-hover:blur-xl" />
                      <Button size="lg" className="relative gap-2 md:gap-4 w-full text-sm md:text-base h-11" variant="outline">
                        Book a One-on-One Session <PhoneCall className="w-4 h-4" />
                      </Button>
                    </div>
                  </Link>
                </div>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
                  <Avatar className="h-full w-full border-4 border-background shadow-2xl">
                    <AvatarImage
                      src="/avatar.jpeg"
                      alt="Shawls"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-4xl">SW</AvatarFallback>
                  </Avatar>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="intro" className="py-8">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold text-center md:text-left">About the Session</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="prose max-w-full text-pretty font-sans text-sm md:text-base text-muted-foreground text-center md:text-left">
                {BOOKING_DATA.sections.intro}
              </p>
            </BlurFade>
          </div>
        </section>

        <section id="topics" className="py-8">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold text-center md:text-left">What We&apos;ll Cover</h2>
            </BlurFade>
            {BOOKING_DATA.sections.topics.map((topic, id) => (
              <BlurFade
                key={topic.title}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <div className="border border-border rounded-lg p-4 md:p-6 space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-center md:text-left">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base text-center md:text-left">
                    {topic.content}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="outro" className="py-8">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="space-y-6 text-center">
                <p className="text-base md:text-lg text-muted-foreground">
                  {BOOKING_DATA.sections.outro}
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  {BOOKING_DATA.sections.cta}
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="booking" className="py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Book Now
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-5xl px-4">
                  Ready to Transform Your Financial Future?
                </h2>
                <div className="mx-auto flex max-w-[600px] items-center justify-center gap-4 pt-4">
                  <Link href={BOOKING_DATA.url} target="_blank" rel="noopener noreferrer">
                    <div className="relative">
                      <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-75 blur-lg transition-all group-hover:opacity-100 group-hover:blur-xl" />
                      <Button size="lg" className="relative gap-2 md:gap-4 w-full text-sm md:text-base h-11" variant="outline">
                        Book Your Session <PhoneCall className="w-4 h-4" />
                      </Button>
                    </div>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground font-medium pt-4 px-4">
                  {BOOKING_DATA.sections.disclaimer}
                </p>
              </div>
            </div>
          </BlurFade>
        </section>
      </div>
    </main>
  );
} 