import { TooltipProvider } from "@/components/ui/tooltip";
import { BOOKING_DATA } from "@/data/booking";
import type { Metadata } from "next";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL(BOOKING_DATA.url),
  title: {
    default: BOOKING_DATA.metadata.title,
    template: `%s | ${BOOKING_DATA.name}`,
  },
  description: BOOKING_DATA.metadata.description,
  openGraph: {
    title: BOOKING_DATA.metadata.title,
    description: BOOKING_DATA.metadata.description,
    url: BOOKING_DATA.url,
    siteName: BOOKING_DATA.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: BOOKING_DATA.metadata.title,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function BookingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <TooltipProvider delayDuration={0}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
          <nav className="h-16 flex items-center justify-between gap-4 max-w-[2000px] mx-auto overflow-hidden">
            <Link href="/" className="flex-shrink-0 h-full flex items-center ml-0" prefetch>
              <Image 
                src="/logo.svg" 
                width={256} 
                height={64} 
                className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto dark:invert-0 invert hover:opacity-75 transition-opacity"
                alt="logo" 
                priority
              />
            </Link>
            <div className="flex items-center gap-2 flex-shrink-0 pr-4">
              <ModeToggle />
            </div>
          </nav>
        </header>
        {children}
      </TooltipProvider>
    </div>
  );
} 