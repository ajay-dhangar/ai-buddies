import Hero from "./Hero";

export default function HomepageFeatures(): JSX.Element {
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
    </div>
  );
}
