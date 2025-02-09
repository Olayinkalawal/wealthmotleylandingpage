import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "WealthMotley's stock market guidance has been invaluable. Their clear, concise approach made complex concepts easy to understand.",
    name: "Jariatu Danita",
    designation: "Fashion Influencer",
    src: "https://res.cloudinary.com/dheri3wii/image/upload/q_80,w_3560,f_auto,c_fill/image10_mi5j0u.jpg",
  },
  {
    quote:
      "The budget template transformed how I manage my finances. It's simple yet incredibly effective for daily expense tracking.",
    name: "Temitope Sosanya",
    designation: "Nurse Practitioner",
    src: "https://res.cloudinary.com/dheri3wii/image/upload/q_80,w_3560,f_auto,c_fill/Screenshot_2025-01-25_at_7.05.20_PM_eabjbx.jpg",
  },
  {
    quote:
      "The one-on-one sessions with Shawls were game-changing. His personalized approach helped me create a solid investment strategy.",
    name: "Ted Watson",
    designation: "Professional",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
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