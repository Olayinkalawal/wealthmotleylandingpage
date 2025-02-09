"use client";

/* eslint-disable @next/next/no-img-element */
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#updates", label: "Updates" },
  { href: "#services", label: "Services" },
  { href: "#video-showcase", label: "Videos" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open

    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 64, // Account for navbar height (16 * 4 = 64px)
        behavior: "smooth",
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleSectionHighlight = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 96; // Add some offset

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
          const sectionBottom = sectionTop + section.clientHeight;
          
          const navItem = document.querySelector(`[href="${navLinks[index].href}"]`);
          if (navItem) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              navItem.classList.add("text-primary");
              navItem.classList.remove("text-muted-foreground");
            } else {
              navItem.classList.remove("text-primary");
              navItem.classList.add("text-muted-foreground");
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleSectionHighlight);
    return () => window.removeEventListener("scroll", handleSectionHighlight);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav>
        <div className="mx-auto max-w-screen-2xl pr-8 md:pr-12">
          <div className="flex h-16 items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden items-center justify-between w-full lg:flex">
              {/* Logo */}
              <div className="flex-1">
                <a href="#home" onClick={handleLogoClick}>
                  <img src="/logo.svg" className="w-64 dark:invert-0 invert" alt="logo" />
                </a>
              </div>
              
              {/* Navigation Links - Centered */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center space-x-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Mode Toggle */}
              <div className="flex-1 flex justify-end">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-between w-full lg:hidden">
              <div className="flex items-center gap-2">
                <a href="#home" onClick={handleLogoClick}>
                  <img src="/logo.svg" className="w-64 dark:invert-0 invert" alt="logo" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ModeToggle />
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Menu className="size-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>
                        <div className="flex items-center gap-2">
                          <a href="#home" onClick={handleLogoClick}>
                            <img
                              src="/logo.svg"
                              className="w-56 dark:invert-0 invert"
                              alt="logo"
                            />
                          </a>
                        </div>
                      </SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => handleScroll(e, link.href)}
                          className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 