"use client";

import { cn } from "@/lib/utils";
import {
  IconChartBar,
  IconPigMoney,
  IconCurrencyDollar,
  IconCoin,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "US Stocks",
      description:
        "Dive into the exciting world of US stocks with WealthMotley as your concise and informative guide!",
      icon: <IconChartBar className="w-8 h-8" />,
    },
    {
      title: "Empower Your Finances",
      description:
        "Navigate the world of investments with confidence, guided by WealthMotley's reliable coaching!",
      icon: <IconCurrencyDollar className="w-8 h-8" />,
    },
    {
      title: "Master Your Savings",
      description:
        "Elevate your savings strategy with WealthMotley's insightful and interactive coaching sessions!",
      icon: <IconPigMoney className="w-8 h-8" />,
    },
    {
      title: "Unlock Success in Crypto",
      description:
        "Unravel the mysteries of crypto with WealthMotley's comprehensive and engaging training!",
      icon: <IconCoin className="w-8 h-8" />,
    },
  ];
  return (
    <div className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter text-center font-regular mx-auto mb-12 sm:mb-16 md:mb-20">
        <span className="text-primary block mb-1 md:mb-2">Our Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10 max-w-7xl mx-auto">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 sm:p-8 relative group/feature rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors duration-200",
        "border border-neutral-200 dark:border-neutral-800"
      )}
    >
      <div className="mb-4 relative z-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter mb-3 relative z-10">
        <div className="absolute -left-6 sm:-left-8 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-1 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-base sm:text-lg tracking-tight text-neutral-600 dark:text-neutral-300 relative z-10">
        {description}
      </p>
    </div>
  );
}; 