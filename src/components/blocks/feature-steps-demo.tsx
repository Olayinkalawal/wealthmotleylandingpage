import React from "react";
import { FeatureSteps } from "@/components/blocks/feature-section"

const features = [
  {
    step: 'Step 1', 
    title: 'Book a one-on-one Session',
    content: 'Craving financial clarity? Schedule a virtual one-on-one session with Shawls from WealthMotley, your friendly guide through the world of finance and investment!', 
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2940&auto=format&fit=crop',
    link: 'https://selar.co/k7d4'
  },
  {
    step: 'Step 2',
    title: 'Wanna teach Kids about Money?',
    content: 'Discover WealthMotley\'s vibrant storybooks for kids! Fun tales that teach about savings, insurance, crypto, real estate, and more!',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2340&auto=format&fit=crop',
    link: 'https://heyzine.com/flip-book/025cd98b4a.html'
  },
  {
    step: 'Step 3',
    title: 'A Super Simple Budget Template',
    content: 'Grab the Wealthmotley super simple budget template to effortlessly understand and manage your daily spending! Its tailored specifically for beginners!',
    image: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=2835&auto=format&fit=crop',
    link: 'https://selar.co/az24'
  }
]

export function FeatureStepsDemo() {
  return (
    <div className="w-full">
      <FeatureSteps
        className="text-primary block mb-1 md:mb-2"
        features={features}
        title={
          <>
            <span className="text-primary block mb-1 md:mb-2">Your Path to</span>
            <span>Financial Freedom</span>
          </>
        }
        autoPlayInterval={4000}
      />
    </div>
  )
} 