import React from 'react';
import Link from '@docusaurus/Link';
import { buttonVariants } from '@site/src/ui/button';
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
    <section className="relative py-8 md:py-16 lg:py-32 noise-bg">
      <div className="container mx-auto max-w-[64rem] text-center space-y-6">
        <Link
          href={capsuleLink}
          className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-[#48df84] rounded-full animate-fade-in bg-opacity-60 hover:bg-opacity-80 transition duration-300 text-gray-800 dark:text-gray-100"
          target="_blank"
        >
          {capsuleText}
        </Link>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl leading-tight tracking-wide animate-fade-in">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-xl md:text-2xl leading-relaxed animate-fade-in delay-150">
          {subtitle}
        </p>
        <div className="flex gap-4 flex-wrap justify-center animate-fade-in delay-300">
          <Link
            href={primaryCtaLink}
            className={cn(buttonVariants({ size: "lg" }), "bg-gray-300 text-gray-800 hover:bg-gray-800 hover:text-white")}
          >
            {primaryCtaText}
          </Link>
          <Link
            href={secondaryCtaLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-gray-300 text-gray-800 hover:bg-gray-800 hover:text-white")}
          >
            {secondaryCtaText}
          </Link>
        </div>
        {credits && (
          <p className="mt-4 animate-fade-in delay-450">
            {credits}
          </p>
        )}
      </div>
    </section>
  );
};


export default Hero;