import Hero from "./Hero";
import About from "./About";

function HomepageFeatures(): JSX.Element {
  return (
    <div>
      <Hero
        capsuleText="100% Open-source & Free"
        capsuleLink="#"
        title="AIBuddies - Your AI Learning Companion"
        subtitle="Learn AI through hands-on projects, interactive learning paths, and community-driven content."
        primaryCtaText="Get Started"
        primaryCtaLink="#" // /docs/
        secondaryCtaText="GitHub"
        secondaryCtaLink="https://github.com/ai-buddies/ai-buddies.github.io"
        credits={
          <>
            Designed & Developed with ❤️ by{" "}
            <a
              href="https://github.com/ajay-dhangar"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#FFD700] transition duration-300"
            >
              Ajay Dhangar
            </a>
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
    </div>
  );
}

export default HomepageFeatures;