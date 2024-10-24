import React from 'react';
import Link from '@docusaurus/Link';
import { buttonVariants } from '@site/src/components/ui/button';
import { cn } from '@site/src/lib/utils';

interface HeroProps {
  capsuleText: string;
  capsuleLink: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  credits?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  capsuleText,
  capsuleLink,
  title,
  subtitle,
  credits,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  return (
    <section className="relative py-16 md:py-32 lg:py-48s hero-bg text-white dark:text-gray-200">
      <div className="container mx-auto max-w-[64rem] text-center space-y-6">
        <Link
          href={capsuleLink}
          className="inline-block bg-gray-800 bg-opacity-60 text-white rounded-full px-4 py-1.5 text-sm font-medium hover:bg-opacity-80 transition duration-300"
          target="_blank"
        >
          {capsuleText}
        </Link>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-wide animate-fade-in">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-xl md:text-2xl leading-relaxed text-gray-100 animate-fade-in delay-150">
          {subtitle}
        </p>
        <div className="flex gap-4 flex-wrap justify-center animate-fade-in delay-300">
          <Link
            href={primaryCtaLink}
            className={cn(buttonVariants({ size: "lg" }), "bg-white text-gray-800 hover:bg-gray-100")}
          >
            {primaryCtaText}
          </Link>
          <Link
            href={secondaryCtaLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white text-white hover:bg-white hover:text-gray-800")}
          >
            {secondaryCtaText}
          </Link>
        </div>
        {credits && (
          <p className="mt-4 text-gray-800">
            {credits}
          </p>
        )}
      </div>
    </section>
  );
};


export default Hero;