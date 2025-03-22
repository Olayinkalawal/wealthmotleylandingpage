import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "WealthMotley's stock market guidance has been invaluable. Their clear, concise approach made complex concepts easy to understand.",
    name: "Jariatu Danita",
    designation: "Fashion Influencer",
    src: "/jariatu.jpg",
  },
  {
    quote:
      "The budget template transformed how I manage my finances. It's simple yet incredibly effective for daily expense tracking.",
    name: "Temmy",
    designation: "Nurse Practitioner",
    src: "/temmy.jpg",
  },
  {
    quote:
      "Shawls helped me put my finances in perspective and always instills financial wisdom. She is my go to for investment advice.",
    name: "Taaooma",
    designation: "Nigerian Comedian",
    src: "/taaooma.jpg",
  },
  {
    quote:
      "Their crypto training demystified digital assets for me. Now I feel confident making informed investment decisions.",
    name: "James Kim",
    designation: "Crypto Enthusiast",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
  },
  {
    quote:
      "The kids' financial education resources are fantastic. My children are learning valuable money lessons in a fun way.",
    name: "Xavier Thompson",
    designation: "Parent",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
];

export function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
} 