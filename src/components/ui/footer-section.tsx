"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)
  }, [])

  React.useEffect(() => {
    if (mounted) {
      if (isDarkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [isDarkMode, mounted])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold mb-4">
              <span className="text-primary block mb-1">Stay</span>
              <span>Connected</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground tracking-tight mb-6">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-4">Quick Links</h3>
            <nav className="space-y-3 text-base text-muted-foreground">
              <a 
                href="#home" 
                onClick={(e) => handleScroll(e, "#home")}
                className="block transition-colors hover:text-primary"
              >
                Home
              </a>
              <a 
                href="#updates" 
                onClick={(e) => handleScroll(e, "#updates")}
                className="block transition-colors hover:text-primary"
              >
                Updates
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleScroll(e, "#services")}
                className="block transition-colors hover:text-primary"
              >
                Services
              </a>
              <a 
                href="#video-showcase" 
                onClick={(e) => handleScroll(e, "#video-showcase")}
                className="block transition-colors hover:text-primary"
              >
                Video
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => handleScroll(e, "#testimonials")}
                className="block transition-colors hover:text-primary"
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, "#contact")}
                className="block transition-colors hover:text-primary"
              >
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-4">Contact Us</h3>
            <address className="space-y-3 text-base not-italic">
              <p className="flex items-center space-x-2">
                <span className="text-muted-foreground">Email:</span>
                <span>wealthmotley@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-muted-foreground">Phone:</span>
                <span>+234 8083 999 666</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-muted-foreground">Socials:</span>
                <span>@wealthmotley</span>
              </p>
            </address>
          </div>
          <div className="relative">
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-4">Follow Us</h3>
            <div className="mb-6 flex flex-wrap gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
                      onClick={() => window.open('https://www.facebook.com/profile.php?id=100072319784330', '_blank')}
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
                      onClick={() => window.open('https://x.com/wealthmotley?lang=en-GB', '_blank')}
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
                      onClick={() => window.open('https://www.instagram.com/wealthmotley', '_blank')}
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
                      onClick={() => window.open('https://www.linkedin.com/in/sholzsolafunmilaelle/', '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {mounted && (
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
                <Moon className="h-4 w-4" />
                <Label htmlFor="dark-mode" className="sr-only">
                  Toggle dark mode
                </Label>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:pt-8 text-center sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 WealthMotley. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a 
              href="#" 
              className="transition-colors hover:text-primary"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="transition-colors hover:text-primary"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="transition-colors hover:text-primary"
              onClick={(e) => e.preventDefault()}
            >
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo } 