import React from 'react';
import Link from '@docusaurus/Link';

interface AboutSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

const About: React.FC<AboutSectionProps> = ({
  title,
  description,
  imageUrl,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
          {ctaText && ctaLink && (
            <Link href={ctaLink} className="inline-block mt-4 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300">
                {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;