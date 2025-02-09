"use client";

import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import { FeatureStepsDemo } from "@/components/blocks/feature-steps-demo";
import { FeaturesSectionWithHoverEffectsDemo } from "@/components/blocks/features-section-with-hover-effects-demo";
import { AnimatedTestimonialsDemo } from "@/components/blocks/animated-testimonials-demo";
import { Footer } from "@/components/Footer";
import { Cta11 } from "@/components/ui/cta-section";
import VideoShowcaseSection from "@/components/blocks/video-showcase-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="updates" className="scroll-mt-16">
          <FeatureStepsDemo />
        </section>
        <section id="services" className="scroll-mt-16">
          <FeaturesSectionWithHoverEffectsDemo />
        </section>
        <section id="video-showcase" className="scroll-mt-16">
          <VideoShowcaseSection />
        </section>
        <section id="testimonials" className="scroll-mt-16">
          <AnimatedTestimonialsDemo />
        </section>
        <Cta11 
          heading="Ready to Transform Your Financial Future?"
          description="Join WealthMotley today and get access to expert financial guidance, personalized coaching, and valuable resources to help you achieve your financial goals."
          buttons={{
            primary: {
              text: "Get Free E-Book",
              url: "https://docs.google.com/forms/d/e/1FAIpQLScNKcEojCtRT24T6peQY8DQ8pQ_YpFNt80uqtGYs8BnA8KsqQ/viewform",
            },
            secondary: {
              text: "Book One-on-One Session",
              url: "https://selar.co/k7d4",
            },
          }}
        />
      </main>
      <section id="contact" className="scroll-mt-16 pt-12 sm:pt-16 md:pt-24 lg:pt-32">
        <Footer />
      </section>
    </>
  );
}
