import React from "react";
import Hero from "./Hero";
import About from "./About";
import FeaturedProjects from "./FeaturedProjects";
import PopularCourses from "./PopularCourses";
import Link from "@docusaurus/Link";

const Homepage: React.FC = () => {
  return (
    <div>
      <Hero
        capsuleText="100% Open-source & Free"
        capsuleLink="#"
        title="Your AI Learning Companion"
        subtitle="Learn AI through hands-on projects, interactive learning paths, and community-driven content."
        primaryCtaText="Get Started"
        primaryCtaLink="/docs/"
        secondaryCtaText="GitHub"
        secondaryCtaLink="https://github.com/ai-buddies/ai-buddies.github.io"
        credits={
          <>
            Designed & Developed with ❤️ by{" "}
            <Link
              to="https://github.com/ajay-dhangar"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ajay Dhangar
            </Link>
          </>
        }
      />
      <About
        title="About AIBuddies"
        description="AIBuddies is a community-driven platform aimed at making AI learning accessible and engaging. Our resources are tailored to all levels, from beginners to advanced learners, helping you build practical skills in AI development."
        imageUrl="/img/logo.jpg"
        ctaText="Learn More"
        ctaLink="#" // /about/
      />
      <FeaturedProjects />
      <PopularCourses />
    </div>
  );
}

export default Homepage;